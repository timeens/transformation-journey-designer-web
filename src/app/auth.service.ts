import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AuthService {
  private _authState = new BehaviorSubject({});

  public login(): BehaviorSubject<any> {
    return this._authState;
  }

  get authState(): BehaviorSubject<any> {
    return this.authState;
  }
}
