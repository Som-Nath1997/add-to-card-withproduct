import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  // find(id:number , firstname :string ): Observable<Post> {
  //   return this.httpClient.get<Post>('https://crudcrud.com/api/1312c69eda66488b9bf0d045b14302b7/unicorns/' + id)
  // }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductDetail(id:any){
    return this.http.get<any>("https://fakestoreapi.com/products/" + id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
