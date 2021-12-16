import { XOR } from "./XOR";

export interface Reference {
  type?: never;
  $ref: string;
}

export interface OneOf {
  oneOf: Schema[];
}

export interface SchemaArray {
  type: "array";
  items: SchemaOrOneOfOrReference;
  uniqueItems?: boolean;
}

export interface SchemaBoolean {
  type: "boolean";
  example?: boolean;
  nullable?: boolean;
}

export interface SchemaInteger {
  type: "integer";
  example?: number;
  format?: "int32" | "int64";
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
  nullable?: boolean;
}

export interface SchemaNumber {
  type: "number";
  example?: number;
  format?: "float" | "double";
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
  nullable?: boolean;
}

export interface SchemaObject {
  type: "object";
  properties: {
    [key: string]: Schema;
  };
  required?: string[];
  additionalProperties?: boolean;
}

export interface SchemaString {
  type: "string";
  format?: "date" | "date-time" | "password" | "byte" | "binary";
  enum?: string[];
  example?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullable?: boolean;
}

export type Schema =
  | SchemaArray
  | SchemaBoolean
  | SchemaInteger
  | SchemaNumber
  | SchemaObject
  | SchemaString;

export type SchemaOrReference = XOR<Schema, Reference>;

export type SchemaOrOneOf = XOR<Schema, OneOf>;

export type SchemaOrOneOfOrReference = XOR<SchemaOrOneOf, Reference>;
