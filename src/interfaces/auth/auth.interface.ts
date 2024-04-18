export interface JWTBackend {
  sub: string;
  iss: string;
  usuCod: number;
  usuCorEle: string;
  usuPerf: string;
  exp: number;
}
