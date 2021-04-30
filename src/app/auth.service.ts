import { Injectable } from "@angular/core";
import { WpAuth, WpAuthRef, WpAuthState, WpUser } from "@ngx-wordpress/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  @WpAuth()
  private _wpAuth: WpAuthRef;

  get authState(): Observable<WpAuthState> {
    return this._wpAuth.state;
  }

  public getLoggedInUser(): Observable<WpUser> {
    return this._wpAuth.getLoggedInUser().map((s) => {
      return s.user;
    });
  }

  public async validateToken() {
    return this._wpAuth.validateToken().toPromise();
  }

  public login(username, password) {
    return this._wpAuth.signIn(username, password).toPromise();
  }

  public logout() {
    localStorage.clear();
    return this._wpAuth.signOut().toPromise();
  }
}
