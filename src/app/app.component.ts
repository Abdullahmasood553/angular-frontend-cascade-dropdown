import { Component } from '@angular/core';
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


  onSelect(event: any) {
    this.dataService.getProductSubCategory().subscribe((response:any) => { 
      this.subCat = response['product_sub_category'].filter((response: any) => response.product_id == event.target.value);
      console.log(this.subCat);
    });
  }
}
