import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginRequest, ILoginState } from './login.interface';
import { userLoginByEmailPassword } from './login.apis';

const initialState: ILoginState = {
  email: '',
  password: '',
  token: '',
  loading: 'idle'
};

const userLogin = createAsyncThunk(
  'user/loginWithEmailPassword',
  async (payload: ILoginRequest) => {
    const data = await userLoginByEmailPassword(payload);
    return data;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCredential: (state) => {

    },
    logout: (state) => {

    }
  }
});