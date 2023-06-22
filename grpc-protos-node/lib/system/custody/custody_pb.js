// source: system/custody/custody.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.lab.system.custody.CloseFilters', null, global);
goog.exportSymbol('proto.lab.system.custody.Custodies', null, global);
goog.exportSymbol('proto.lab.system.custody.Custodies.Custody', null, global);
goog.exportSymbol('proto.lab.system.custody.CustodyAdd', null, global);
goog.exportSymbol('proto.lab.system.custody.CustodyFilter', null, global);
goog.exportSymbol('proto.lab.system.custody.Empty', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lab.system.custody.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lab.system.custody.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lab.system.custody.Empty.displayName = 'proto.lab.system.custody.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lab.system.custody.CustodyAdd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lab.system.custody.CustodyAdd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lab.system.custody.CustodyAdd.displayName = 'proto.lab.system.custody.CustodyAdd';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lab.system.custody.CloseFilters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lab.system.custody.CloseFilters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lab.system.custody.CloseFilters.displayName = 'proto.lab.system.custody.CloseFilters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lab.system.custody.CustodyFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lab.system.custody.CustodyFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lab.system.custody.CustodyFilter.displayName = 'proto.lab.system.custody.CustodyFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lab.system.custody.Custodies = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lab.system.custody.Custodies.repeatedFields_, null);
};
goog.inherits(proto.lab.system.custody.Custodies, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lab.system.custody.Custodies.displayName = 'proto.lab.system.custody.Custodies';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lab.system.custody.Custodies.Custody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lab.system.custody.Custodies.Custody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lab.system.custody.Custodies.Custody.displayName = 'proto.lab.system.custody.Custodies.Custody';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lab.system.custody.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.lab.system.custody.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lab.system.custody.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lab.system.custody.Empty}
 */
proto.lab.system.custody.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lab.system.custody.Empty;
  return proto.lab.system.custody.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lab.system.custody.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lab.system.custody.Empty}
 */
proto.lab.system.custody.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lab.system.custody.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lab.system.custody.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lab.system.custody.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lab.system.custody.CustodyAdd.prototype.toObject = function(opt_includeInstance) {
  return proto.lab.system.custody.CustodyAdd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lab.system.custody.CustodyAdd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.CustodyAdd.toObject = function(includeInstance, msg) {
  var f, obj = {
    period: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stock: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quantity: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lab.system.custody.CustodyAdd}
 */
proto.lab.system.custody.CustodyAdd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lab.system.custody.CustodyAdd;
  return proto.lab.system.custody.CustodyAdd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lab.system.custody.CustodyAdd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lab.system.custody.CustodyAdd}
 */
proto.lab.system.custody.CustodyAdd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriod(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStock(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lab.system.custody.CustodyAdd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lab.system.custody.CustodyAdd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lab.system.custody.CustodyAdd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.CustodyAdd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeriod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStock();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional string period = 1;
 * @return {string}
 */
proto.lab.system.custody.CustodyAdd.prototype.getPeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.CustodyAdd} returns this
 */
proto.lab.system.custody.CustodyAdd.prototype.setPeriod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stock = 2;
 * @return {string}
 */
proto.lab.system.custody.CustodyAdd.prototype.getStock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.CustodyAdd} returns this
 */
proto.lab.system.custody.CustodyAdd.prototype.setStock = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.lab.system.custody.CustodyAdd.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.CustodyAdd} returns this
 */
proto.lab.system.custody.CustodyAdd.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double quantity = 4;
 * @return {number}
 */
proto.lab.system.custody.CustodyAdd.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.lab.system.custody.CustodyAdd} returns this
 */
proto.lab.system.custody.CustodyAdd.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lab.system.custody.CloseFilters.prototype.toObject = function(opt_includeInstance) {
  return proto.lab.system.custody.CloseFilters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lab.system.custody.CloseFilters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.CloseFilters.toObject = function(includeInstance, msg) {
  var f, obj = {
    period: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lab.system.custody.CloseFilters}
 */
proto.lab.system.custody.CloseFilters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lab.system.custody.CloseFilters;
  return proto.lab.system.custody.CloseFilters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lab.system.custody.CloseFilters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lab.system.custody.CloseFilters}
 */
proto.lab.system.custody.CloseFilters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriod(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lab.system.custody.CloseFilters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lab.system.custody.CloseFilters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lab.system.custody.CloseFilters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.CloseFilters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeriod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string period = 1;
 * @return {string}
 */
proto.lab.system.custody.CloseFilters.prototype.getPeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.CloseFilters} returns this
 */
proto.lab.system.custody.CloseFilters.prototype.setPeriod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market = 2;
 * @return {string}
 */
proto.lab.system.custody.CloseFilters.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.CloseFilters} returns this
 */
proto.lab.system.custody.CloseFilters.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lab.system.custody.CustodyFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.lab.system.custody.CustodyFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lab.system.custody.CustodyFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.CustodyFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    period: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stock: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lab.system.custody.CustodyFilter}
 */
proto.lab.system.custody.CustodyFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lab.system.custody.CustodyFilter;
  return proto.lab.system.custody.CustodyFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lab.system.custody.CustodyFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lab.system.custody.CustodyFilter}
 */
proto.lab.system.custody.CustodyFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriod(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStock(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lab.system.custody.CustodyFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lab.system.custody.CustodyFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lab.system.custody.CustodyFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.CustodyFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeriod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStock();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string period = 1;
 * @return {string}
 */
proto.lab.system.custody.CustodyFilter.prototype.getPeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.CustodyFilter} returns this
 */
proto.lab.system.custody.CustodyFilter.prototype.setPeriod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stock = 2;
 * @return {string}
 */
proto.lab.system.custody.CustodyFilter.prototype.getStock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.CustodyFilter} returns this
 */
proto.lab.system.custody.CustodyFilter.prototype.setStock = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.lab.system.custody.CustodyFilter.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.CustodyFilter} returns this
 */
proto.lab.system.custody.CustodyFilter.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lab.system.custody.Custodies.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lab.system.custody.Custodies.prototype.toObject = function(opt_includeInstance) {
  return proto.lab.system.custody.Custodies.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lab.system.custody.Custodies} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.Custodies.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.lab.system.custody.Custodies.Custody.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lab.system.custody.Custodies}
 */
proto.lab.system.custody.Custodies.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lab.system.custody.Custodies;
  return proto.lab.system.custody.Custodies.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lab.system.custody.Custodies} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lab.system.custody.Custodies}
 */
proto.lab.system.custody.Custodies.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lab.system.custody.Custodies.Custody;
      reader.readMessage(value,proto.lab.system.custody.Custodies.Custody.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lab.system.custody.Custodies.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lab.system.custody.Custodies.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lab.system.custody.Custodies} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.Custodies.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lab.system.custody.Custodies.Custody.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lab.system.custody.Custodies.Custody.prototype.toObject = function(opt_includeInstance) {
  return proto.lab.system.custody.Custodies.Custody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lab.system.custody.Custodies.Custody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.Custodies.Custody.toObject = function(includeInstance, msg) {
  var f, obj = {
    period: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stock: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    market: jspb.Message.getFieldWithDefault(msg, 4, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lab.system.custody.Custodies.Custody}
 */
proto.lab.system.custody.Custodies.Custody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lab.system.custody.Custodies.Custody;
  return proto.lab.system.custody.Custodies.Custody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lab.system.custody.Custodies.Custody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lab.system.custody.Custodies.Custody}
 */
proto.lab.system.custody.Custodies.Custody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriod(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStock(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lab.system.custody.Custodies.Custody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lab.system.custody.Custodies.Custody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lab.system.custody.Custodies.Custody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lab.system.custody.Custodies.Custody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeriod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStock();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string period = 1;
 * @return {string}
 */
proto.lab.system.custody.Custodies.Custody.prototype.getPeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.Custodies.Custody} returns this
 */
proto.lab.system.custody.Custodies.Custody.prototype.setPeriod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stock = 2;
 * @return {string}
 */
proto.lab.system.custody.Custodies.Custody.prototype.getStock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.Custodies.Custody} returns this
 */
proto.lab.system.custody.Custodies.Custody.prototype.setStock = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.lab.system.custody.Custodies.Custody.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.Custodies.Custody} returns this
 */
proto.lab.system.custody.Custodies.Custody.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string market = 4;
 * @return {string}
 */
proto.lab.system.custody.Custodies.Custody.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.lab.system.custody.Custodies.Custody} returns this
 */
proto.lab.system.custody.Custodies.Custody.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double price = 5;
 * @return {number}
 */
proto.lab.system.custody.Custodies.Custody.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.lab.system.custody.Custodies.Custody} returns this
 */
proto.lab.system.custody.Custodies.Custody.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int32 quantity = 6;
 * @return {number}
 */
proto.lab.system.custody.Custodies.Custody.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lab.system.custody.Custodies.Custody} returns this
 */
proto.lab.system.custody.Custodies.Custody.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Custody items = 1;
 * @return {!Array<!proto.lab.system.custody.Custodies.Custody>}
 */
proto.lab.system.custody.Custodies.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.lab.system.custody.Custodies.Custody>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lab.system.custody.Custodies.Custody, 1));
};


/**
 * @param {!Array<!proto.lab.system.custody.Custodies.Custody>} value
 * @return {!proto.lab.system.custody.Custodies} returns this
*/
proto.lab.system.custody.Custodies.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lab.system.custody.Custodies.Custody=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lab.system.custody.Custodies.Custody}
 */
proto.lab.system.custody.Custodies.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lab.system.custody.Custodies.Custody, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lab.system.custody.Custodies} returns this
 */
proto.lab.system.custody.Custodies.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


goog.object.extend(exports, proto.lab.system.custody);