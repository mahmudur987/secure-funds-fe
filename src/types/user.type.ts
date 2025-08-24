export interface CreateUserResponse {
  user: User;
  wallet: Wallet;
}
export interface ILogImResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  name: string;
  password: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  status: string;
  auths: Auth[];
  isDeleted: boolean;
  loginAttempts: number;
  loginWrongAttempts: number;
  lastLogin: any;
  _id: string;
  createdAt: string;
  updatedAt: string;
  wallet: Wallet;
}

export interface Auth {
  provider: string;
  providerId: string;
}

export interface Wallet {
  userId: string;
  balance: number;
  status: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
