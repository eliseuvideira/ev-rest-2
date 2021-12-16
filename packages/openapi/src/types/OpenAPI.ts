import { Info } from "./Info";
import { Method } from "./Method";
import { Server } from "./Server";
import { StatusCode } from "./StatusCode";
import { SchemaOrOneOfOrReference, SchemaOrReference } from "./Schema";
import { ContentType } from "./ContentType";
import { Security } from "./Security";
import { Content } from "./Content";

export interface Route {
  tags?: string[];
  security?: Security[];
  parameters?: {
    name: string;
    in: "path" | "query";
    required: boolean;
    schema: SchemaOrOneOfOrReference;
  }[];
  requestBody?: Content;
  responses?: {
    [status in StatusCode]?: {
      content: {
        [key in ContentType]?: {
          schema: SchemaOrOneOfOrReference;
        };
      };
    };
  };
}

export type Path = {
  [method in Method]?: Route;
};

export interface OpenAPI {
  openapi: "3.0.0";
  info: Info;
  servers: Server[];
  paths: {
    [path: string]: Path;
  };
  components: {
    securitySchemes: {
      [AuthSchema: string]:
        | {
            type: "http";
            scheme: "basic" | "bearer";
          }
        | {
            type: string;
            in: "header";
            name: string;
          };
    };
    schemas: {
      [Schema: string]: SchemaOrReference;
    };
  };
}
