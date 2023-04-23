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

  isLoaded = false;
  topAlbums: Album[];
  

  async ngOnInit() {
    this.topAlbums = await lastValueFrom(this.merlin.getTopAlbums('ndeast'))
    this.isLoaded = true;
  }
}
