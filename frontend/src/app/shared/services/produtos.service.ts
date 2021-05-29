import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private updateProducts$ = new Subject<void>();

  constructor(
    private http: HttpClient,
  ) { }

  public onUpdateCategory(): Observable<void> {
    return this.updateProducts$;
  }

  addProduct(name, value, description, img_link, category): Observable<void> {
    return this.http.post<void>(API_URL + '/products', { name, value, img_link, description, category }).pipe(
      finalize(() => this.updateProducts$.next())
    );
  }

  getAllProducts(): Observable<any> {
    return this.http.get(API_URL + '/products');
  }


  editProduct(id, name, value, description, img_link, category): Observable<void> {
    return this.http.put<void>(API_URL + `/products/${id}`, { name, value, img_link, description, category }).pipe(
      finalize(() => this.updateProducts$.next())
    );
  }

  delProduct(id: string): Observable<void> {
    return this.http.delete<void>(API_URL + `/products/${id}`).pipe(
      finalize(() => this.updateProducts$.next())
    );
  }
}