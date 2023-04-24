import { Component } from '@angular/core';
import { MerlinService } from './services/merlin.service';
import { lastValueFrom } from 'rxjs';
import { Album } from './interfaces/album.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private merlin: MerlinService) {}
  title = 'merlin-frontend';
  currentUser: string = 'ndeast'

  isLoaded = false;
  topAlbums: Album[];
  
  usernames: string[] = ['ndeast', 'rj', 'MarioSk8core']
  

  async ngOnInit() {
    this.topAlbums = await lastValueFrom(this.merlin.getTopAlbums('ndeast'))
    this.isLoaded = true;
  }

  async getTopAlbumData(user: string) {
    this.isLoaded = false;
    this.topAlbums = await lastValueFrom(this.merlin.getTopAlbums(user))
    this.currentUser = user;
    this.isLoaded = true;
  }
}
