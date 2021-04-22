import { Subscription } from "rxjs/Subscription";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  private _authState = new Subscription();

  public login(): Subscription {
    return this._authState;
  }

  get authState(): Subscription {
    return this.authState;
  }
}
