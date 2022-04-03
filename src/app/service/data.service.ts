import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  items() {
    return [
      {
        id: 1,
        name: "Fruits"
      },
      {
        id: 2,
        name: 'Vegetables'
      },
      {
        id: 3,
        name: 'Snacks'
      }
    ]
  }


  subCat() {
    return [
      {
        id: 1,
        name: "Banana"
      },
      {
        id: 1,
        name: "Apple"
      },
      {
        id: 2,
        name: "Onion"
      },
      {
        id: 2,
        name: "Potato"
      },
      {
        id: 3,
        name: "Chips"
      },
      {
        id: 3,
        name: "Choclate"
      }
    ]
  }
}
