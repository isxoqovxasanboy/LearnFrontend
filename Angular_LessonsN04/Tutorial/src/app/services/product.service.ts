import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {PaginationParams, Products} from "../../types";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {
  }

  // Getting products from the API
  getProducts = (
    url: string,
    params?:  PaginationParams
  ): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };
}
