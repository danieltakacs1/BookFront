import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  
  url = "https://localhost:7154/api/Books"
  booksSubject = new Subject()

  constructor(private http:HttpClient) { }
  loadBooks(){
    this.http.get(this.url).subscribe(
      (res)=>this.booksSubject.next(res)
    )
  }
  getBooks(){
    return this.booksSubject
  }
  postBook(body:any){
    this.http.post(this.url,body).subscribe(
      ()=>this.loadBooks()
    )
  }
  putBook(body:any){
    this.http.put(this.url+body.id,body).subscribe(
      ()=>this.loadBooks()
    )
  }
  deleteBook(body:any){
    this.http.delete(this.url).subscribe(
      ()=>this.loadBooks()
    )
  }
}
