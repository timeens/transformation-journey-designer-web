import { AuthService } from "./auth.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { WordPressModule } from "@ngx-wordpress/core";
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    WordPressModule.forRoot({
      baseUrl: "http://localhost",
      restUrl: "/wp-json/wp/v2/",
      authUrl: "/wp-json/jwt-auth/v1/",
    }),
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
