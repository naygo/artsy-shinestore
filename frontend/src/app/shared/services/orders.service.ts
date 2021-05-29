import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private updateOrders$ = new Subject<void>();

  constructor(
    private http: HttpClient,
  ) { }

  public onUpdateOrder(): Observable<void> {
    return this.updateOrders$;
  }

  addOrder(quantity, date, user_id, product_id): Observable<void> {
    return this.http.post<void>(API_URL + `/orders/${user_id}/${product_id}`, { quantity, date }).pipe(
      finalize(() => this.updateOrders$.next())
    );
  }

  getAllOrders(): Observable<any> {
    return this.http.get(API_URL + '/orders');
  }


  changeStatus(order_id, status_id): Observable<void> {
    return this.http.put<void>(API_URL + `/orders/${ order_id }/${ status_id }`, {}).pipe(
      finalize(()=> this.updateOrders$.next())
    );
  }

  // delCategory(id: string): Observable<void> {
  //   return this.http.delete<void>(API_URL + `/categories/${ id }`).pipe(
  //     finalize(()=> this.updateCategories$.next())
  //   );
  // }
}