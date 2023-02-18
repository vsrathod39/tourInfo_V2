export interface ILoginState {
  email: string,
  password: string,
  token: string,
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export interface ILoginRequest {
  email: string,
  password: string,
}

export interface ILoginResponse {
  status: Boolean,
  token: string,
}