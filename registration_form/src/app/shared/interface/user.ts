export interface User {
  id: number;
  name: string;
  email: string;
  auth_token: string;
}
export interface ApiParam {
  data?: any;
  params?: any;
}
