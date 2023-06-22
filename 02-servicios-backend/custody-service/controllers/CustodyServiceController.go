package controllers

import (
	"context"
	"errors"
	"regexp"

	pb "github.com/malarcon-79/microservices-lab/grpc-protos-go/system/custody"
	"github.com/malarcon-79/microservices-lab/orm-go/dao"
	"github.com/malarcon-79/microservices-lab/orm-go/model"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// Controlador de servicio gRPC
type CustodyServiceController struct {
	logger *zap.SugaredLogger // Logger
	re     *regexp.Regexp     // Expresión regular para validar formato de períodos YYYY-MM
}

// Método a nivel de package, permite construir una instancia correcta del controlador de servicio gRPC
func NewCustodyServiceController() (CustodyServiceController, error) {
	_logger, _ := zap.NewProduction() // Generamos instancia de logger
	logger := _logger.Sugar()

	re, err := regexp.Compile(`^\d{4}\-(0?[1-9]|1[012])$`) // Expresión regular para validar períodos YYYY-MM
	if err != nil {
		return CustodyServiceController{}, err
	}

	instance := CustodyServiceController{
		logger: logger, // Asignamos el logger
		re:     re,     // Asignamos el RegExp precompilado
	}
	return instance, nil // Devolvemos la nueva instancia de este Struct y un puntero nulo para el error
}

func (c *CustodyServiceController) AddCustodyStock(ctx context.Context, msg *pb.CustodyAdd) (*pb.Empty, error) {
	//  Implementar este método
	orm := dao.DB.Model(&model.Custody{})

	//  Validar los campos del mensaje entrante
	if len(msg.Period) == 0 {
		return nil, errors.New("período nulo")
	}
	if !c.re.MatchString(msg.Period) {
		return nil, errors.New("Periodo con formato invalido")
	}
	if len(msg.Stock) == 0 {
		return nil, errors.New("campo 'stock' nulo o inválido")
	}
	if len(msg.ClientId) == 0 {
		return nil, errors.New("campo 'client_id' nulo o inválido")
	}
	//  Validar que el campo quantity sea mayor o igual a cero
	if msg.Quantity < 0 {
		return nil, errors.New("Debe ser mayor o igual a cero")
	}

	//  Crear un modelo de datos para almacenamiento
	list := &model.Custody{
		Period:   msg.Period,
		Stock:    msg.Stock,
		ClientId: msg.ClientId,
		Quantity: int32(msg.Quantity),
	}

	//  Almacenar el registro mediante una llamada al ORM empleado
	//  Ejecutamos el INSERT y evaluamos si hubo errores
	//  En caso de haber errores, devolver un error indicando la causa ("campo X nulo o inválido")
	if err := orm.Save(list).Error; err != nil {
		c.logger.Error("no se pudo guardar el registro", err)
		return nil, errors.New("error al guardar")
	}

	// Devolver mensaje vacío de tipo lab.system.custody.Empty
	return &pb.Empty{}, nil
}

func (c *CustodyServiceController) ClosePeriod(ctx context.Context, msg *pb.CloseFilters) (*pb.Empty, error) {
	return nil, errors.New("no implementado")
}

func (c *CustodyServiceController) GetCustody(ctx context.Context, msg *pb.CustodyFilter) (*pb.Custodies, error) {
	// Instanciamos el ORM para trabajar con la tabla "Custody"
	orm := dao.DB.Model(&model.Custody{})

	// Arreglo de punteros a registros de tabla "Custody"
	custodies := []*model.Custody{}
	// Creamos el filtro de búsqueda usando los campos del mismo modelo
	filter := &model.Custody{
		Period:   msg.Period,
		Stock:    msg.Stock,
		ClientId: msg.ClientId,
	}

	// Ejecutamos el SELECT y evaluamos si hubo errores
	if err := orm.Find(&custodies, filter).Error; err != nil {
		c.logger.Errorf("no se pudo buscar custodias con filtros %v", filter, err)
		return nil, status.Errorf(codes.Internal, "no se pudo realizar query")
	}

	// Este será el mensaje de salida
	result := &pb.Custodies{}

	// Iteramos el arreglo de registros del SELECT anterior.
	for _, item := range custodies {
		result.Items = append(result.Items, &pb.Custodies_Custody{
			Period:   item.Period,
			Stock:    item.Stock,
			ClientId: item.ClientId,
			Quantity: item.Quantity,
		})
	}

	// Retornamos la respuesta correcta
	return result, nil
}
