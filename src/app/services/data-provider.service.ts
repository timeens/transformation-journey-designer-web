import { Observable } from "rxjs";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import {
  WpCollectionService,
  WpCollectionState,
  WpQuery,
} from "@ngx-wordpress/core";

@Injectable()
export class DataProviderService {
  constructor(private wpColSer: WpCollectionService) {}

  get(
    slug = "posts",
    q: WpQuery = new WpQuery()
  ): Observable<WpCollectionState<any>> {
    return this.wpColSer.get(
      `${environment.wpBaseUrl}${environment.wpRestUrl}${slug}`,
      q
    );
  }
}
