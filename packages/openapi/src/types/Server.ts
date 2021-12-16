export interface Server {
  name: string;
  url: string;
}

export const createServer = (server: Server): Server => server;
