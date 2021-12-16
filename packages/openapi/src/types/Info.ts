export interface Info {
  title: string;
  version: string;
}

export const createInfo = (info: Info): Info => info;
