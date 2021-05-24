import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Category } from '../models/category.model';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private updateCategories$ = new Subject<void>();

  constructor(
    private http: HttpClient,
  ) { }

  public onUpdateCategory(): Observable<void> {
    return this.updateCategories$;
  }

  addCategory(category: Category): Observable<void> {
    return this.http.post<void>(API_URL + '/categories', { category }).pipe(
      finalize(() => this.updateCategories$.next())
    );
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }


  editCategory(id: string, category: string): Observable<void> {
    return this.http.put<void>(API_URL + `/categories/${ id }`, { category }).pipe(
      finalize(()=> this.updateCategories$.next())
    );
  }

  delCategory(id: string): Observable<void> {
    return this.http.delete<void>(API_URL + `/categories/${ id }`).pipe(
      finalize(()=> this.updateCategories$.next())
    );
  }
}
