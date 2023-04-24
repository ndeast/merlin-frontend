import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root',
})
export class MerlinService {
  constructor(private http: HttpClient) {}

  merlinUrl: string = 'http://150.136.172.164:3000/';
  header = {
    headers: new HttpHeaders().set('Authorization', 'nik'),
  };

  getTopAlbums(user: string) {
    let url = this.merlinUrl + 'top-albums/' + user;
    return this.http.get<Album[]>(url, this.header);
  }
}
