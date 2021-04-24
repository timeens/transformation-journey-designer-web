import { NotifiyService } from "./services/notify.service";
import { Injectable } from "@angular/core";
import { WpAuth, WpAuthRef, WpAuthState } from "@ngx-wordpress/core";
import { BehaviorSubject } from "rxjs";

class AuthStateModel {
  isLoggedIn: boolean = false;
  firstname: string = null;
  lastname: string = null;
  username: string = null;
}

@Injectable()
export class AuthService {
  constructor(private notifySer: NotifiyService) {}

  // core login procedure
  private _authState: AuthStateModel = new AuthStateModel();
  private _authState$ = new BehaviorSubject(this._authState);

  public async login(username, password): Promise<AuthStateModel> {
    // todo
    const res = await this.wpLogin(username, password);
    if (!res.error) {
      this._authState.isLoggedIn = true;
      this._authState.username = username;
      this.emit();
    } else {
      this.notifySer.error(res.error.message);
    }
    // ---
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

  // wp
  @WpAuth()
  wpAuth: WpAuthRef;

  private async wpLogin(u, pw): Promise<WpAuthState> {
    const res = await this.wpAuth.signIn(u, pw).toPromise();

    return res;
  }
}
