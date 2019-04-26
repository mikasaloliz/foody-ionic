import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { list } from '../../mlist';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  feed():Observable<list>{
    let url = "https://hoctiengviet.net/food_order/json/get_menu.php";
    return this.http.get<list>(url);
  }
}
