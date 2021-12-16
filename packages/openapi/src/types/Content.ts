import { ContentType } from "./ContentType";
import { SchemaOrOneOfOrReference } from "./Schema";

export interface Content {
  content: {
    [key in ContentType]?: {
      schema: SchemaOrOneOfOrReference;
    };
  };
}

export const createContent = (
  contentType: ContentType,
  schema: SchemaOrOneOfOrReference,
): Content => ({
  content: {
    [contentType]: schema,
  },
});
