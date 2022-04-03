import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dropdown-app';
  items:any = [];
  subCat: any = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.items = this.data.items();
    console.log(this.items);
  }


  onSelect(event: any) {
    // console.log(event.target.value);
    this.subCat = this.data.subCat().filter(e => e.id == event.target.value);
  }
}
