import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Observable, Subject, catchError, delay, finalize, map, of, retry, tap, throwError } from 'rxjs';

import { IPost } from '../../models/post.model';

import { ApiService } from '../../api.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  
  postList$?: Observable<IPost[]>;
  loading$ = new Subject<boolean>();
  error$ = new Subject<string>();
  successMessage$ = new Subject<string>();
  
  constructor(
    private _apiService: ApiService
  ){
    this.fetchPost();
  }
  
  fetchPost(id?: string){
    this.postList$ = this._apiService.getPosts(id)
      .pipe(
        tap(()=> this.loading$.next(true)),
        delay(750),
        catchError((err)=> this._handleError(err)),
        finalize(()=> this.loading$.next(false))
      );
  }
  
  createPost(title: string, body: string){
    this._apiService.createPost({
      title,
      body
    })
    .pipe(
      tap(()=> this.loading$.next(true)),
      delay(750),
      catchError((err)=> this._handleError(err)),
      finalize(()=> this.loading$.next(false))
    )
    .subscribe((res)=>{
      console.warn(res);
      this.successMessage$.next('El post se ha creado con éxito!');
    })
  }
  
  private _handleError(error: HttpErrorResponse){    
    let errorMessage = 'Un error ha ocurrido';
    
    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    } else {
      console.warn(error.status, error.message)
      errorMessage = `Código de error: ${error.status}\n Mensaje: ${error.message}`;
    }

    this.error$?.next(errorMessage);
    return of();
  }
  
}
