import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MerlinService {

  constructor(private http: HttpClient) { }

  merlinUrl: string = 'http://localhost:3000/album-chart'
  header = {
    headers: new HttpHeaders()
    .set('Authorization', "nik")
  }
  


  getAlbumChart() {
    console.log(this.header)
    return this.http.get<any>(this.merlinUrl, this.header);
  }
}
