import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class MerlinService {

  constructor(private http: HttpClient) { }

  merlinUrl: string = 'http://localhost:3000/'
  header = {
    headers: new HttpHeaders()
    .set('Authorization', "nik")
  }
  


  getTopAlbums(user: string) {
    let url = this.merlinUrl + 'top-albums/' + user;
    console.log(this.header)
    return this.http.get<Album[]>(url, this.header);
  }
}
