// Protos
import {
  CreateNewUserResponse,
  UserLoginResponse,
} from 'gen/proto/ts/schedule_golf/authentication/v1alpha1/authentication';

// Types
import { NewUser } from 'types/user';
import { LoginCredentials } from 'pages/authentication/types/loginCredentials';
import { RefreshResponse } from 'adapters/types/authGrpcAdapter';

export interface ForeUpAuthenticationRequestUI {
  email: string;
  password: string;
  scheduleGolfJwt: string;
}

export interface AuthMediatorInterface {
  createNewUser(
    newUser: NewUser,
  ): Promise<{ res: CreateNewUserResponse; expiration: string }>;
  userLogin(
    userLoginCredentials: LoginCredentials,
  ): Promise<{ res: UserLoginResponse; expiration: string }>;
  userRefreshToken(): Promise<RefreshResponse>;
  foreUpAuthentication(authRequest: ForeUpAuthenticationRequestUI): Promise<void>;
}
