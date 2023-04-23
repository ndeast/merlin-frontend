import { Component } from '@angular/core';
import { MerlinService } from './services/merlin.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private merlin: MerlinService) {}
  title = 'merlin-frontend';

  async ngOnInit() {
    console.log("test")
    let test = await lastValueFrom(this.merlin.getTopAlbums('ndeast'))
    console.log(test)
  }
}
