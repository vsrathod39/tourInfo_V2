import axios from "axios";
import { ILoginRequest, ILoginResponse } from "./login.interface";

export async function userLoginByEmailPassword (payload: ILoginRequest): Promise<ILoginResponse> {
  return await axios.post('http://localhost:4001/api/auth/login', payload);
}