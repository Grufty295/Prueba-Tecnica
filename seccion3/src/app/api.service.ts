import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment.development';

import { IPost } from './models/post.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private readonly _API_URL = environment.URL_ENDPOINT;
  // private readonly _API_KEY = environment.API_KEY;
  
  constructor(
    private _http: HttpClient
  ) { }
  
  getPosts(id = ''){
    return this._http.get<IPost[]>(
      `${this._API_URL}/posts/${id}`,
    )
    .pipe(
      map((res)=>{
        if(id && !Array.isArray(res)) return [res];
        
        return res
      })
    );
  }
  
  createPost({title, body}: { title: string, body: string }){
    return this._http.post(
      `${this._API_URL}/posts`,
      {
        title,
        body
      }
    )
  }
  
  
}