import { Component } from '@angular/core';
import { filter, map } from 'rxjs';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dropdown-app';
  products:any = [];
  subCat: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() { 
    this.dataService.getProducts().subscribe(response => {
      this.products = response;
    });
  
  }


  getProductSubCategory(event: any) {
    console.log(event.target.value);
    this.dataService.getProductSubCategory().pipe().subscribe(response => { 
 
    });
  }
}
