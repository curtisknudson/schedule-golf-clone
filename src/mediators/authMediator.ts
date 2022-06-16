// Node Modules
import { v4 } from 'uuid';

// Types
import { AuthMediatorInterface } from 'mediators/types/authMediatorInterface';
import { LoginCredentials } from 'pages/authentication/types/loginCredentials';
import { NewUser } from 'types/user';

// Adapter
import { AuthGrpcAdapter } from 'adapters/types/authGrpcAdapter';

export class AuthMediator implements AuthMediatorInterface {
  private adapter: AuthGrpcAdapter;

  constructor(adapter: AuthGrpcAdapter) {
    this.adapter = adapter;
  }

  async createNewUser(newUser: NewUser) {
    if (!newUser) {
      throw new Error('You must provide newUser credentials');
    }
    newUser.userId = v4();
    const req = await this.adapter.createNewUser(newUser);

    // TODO: Need Error Handling
    // What if the user authentication fails?
    return req;
  }

  async userLogin(userLoginCredentials: LoginCredentials) {
    if (!userLoginCredentials) {
      throw new Error('You must provide login credentials to login');
    }

    const req = await this.adapter.userLogin(userLoginCredentials);

    return req;
  }

  dispose() {
    return;
  }
}
