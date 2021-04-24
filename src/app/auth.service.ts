import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

class AuthStateModel {
  isLoggedIn: boolean = false;
  firstname: string = null;
  lastname: string = null;
  username: string = null;
}

@Injectable()
export class AuthService {
  private _authState: AuthStateModel = new AuthStateModel();
  private _authState$ = new BehaviorSubject(this._authState);

  public async login(username, password): Promise<AuthStateModel> {
    // todo
    console.info(`Logging in user ${username}`);
    this._authState.isLoggedIn = true;
    this._authState.username = username;
    // ---
    this.emit();
    return this._authState;
  }

  public logout() {
    // todo
    console.info(`Logging out user ${this._authState.username}`);
    // ---
    this._authState = new AuthStateModel();
    this.emit();
  }

  get authState(): BehaviorSubject<AuthStateModel> {
    return this._authState$;
  }

  private emit() {
    this._authState$.next(this._authState);
  }
}
