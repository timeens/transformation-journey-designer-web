import { WpAuthRef } from "@ngx-wordpress/core";
import { WpAuth } from "@ngx-wordpress/core";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  @WpAuth()
  auth: WpAuthRef;

  signIn(username: string, password: string) {
    return this.auth.signIn(username, password);
  }

  signOut() {
    this.auth.signOut().subscribe();
  }
}
