export type Security = {
  [AuthSchema: string]: [];
};

export const createSecurity = <T extends string>(security: {
  [AuthSchema in T]: [];
}): Security => security;
