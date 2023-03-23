import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Post, Root } from '../interfaces/table-data';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseUrl: string = 'https://dummyjson.com/posts';
  private conditions1: string = '?skip=5&limit=10';

  constructor(private http: HttpClient) { }


getInfo(){
 return this.http.get<Root>(this.baseUrl + this.conditions1).pipe(
    map((res: Root)=> {
    
    return res.posts;

    })
 )
}



}
