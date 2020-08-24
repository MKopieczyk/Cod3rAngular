import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/Products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  confirmMessage(msg: string, msg1: string): void {
    this.snackBar.open(msg, 'Ok', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );

  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Erro: ' + e.message, true)
    return EMPTY
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      catchError(e => this.errorHandler(e))
    );
  }

readById(id:string): Observable<Product>{
  const url = `${this.baseUrl}/${id}`
return this.http.get<Product>(url).pipe(
  catchError(e => this.errorHandler(e))
);
}

update(product: Product): Observable<Product> {
  const url = `${this.baseUrl}/${product.id}`
  return this.http.put<Product>(url, product).pipe(
    catchError(e => this.errorHandler(e))
  );
}

delete(id:string): Observable<Product>{
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Product>(url).pipe(
    catchError(e => this.errorHandler(e))
  );
}




}
