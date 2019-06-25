import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  i: any;
  j: any = 0;
  k: any = 0;
  checkboxObject = [
    { id: 1, valu: false, value: 'First' },
    { id: 2, valu: false, value: 'Second' },
    { id: 3, valu: false, value: 'Third' },
    { id: 4, valu: false, value: 'Fourth' }
  ]

  constructor() { }

  ngOnInit() {
  }
  state(index: number) {
    for (this.i = 0; this.i < this.checkboxObject.length; this.i++) {

      if (index + 1 === this.checkboxObject[this.i].id) {
        this.checkboxObject[this.i].valu = !this.checkboxObject[this.i].valu;
      }

    }
  }
  selectAll() {
    this.k = 0;
    for (this.i = 0; this.i <= this.checkboxObject.length - 1; this.i++) {
      if (this.checkboxObject[this.i].valu) {
        this.k++;
      }
      else {
        this.checkboxObject[this.i].valu = true;
        this.k = 0;
      }
    }
    if (this.k === this.checkboxObject.length) {
      alert('All Selected');
      this.k = 0;
    }
  }
  deSelectAll() {
    this.j = 0;
    for (this.i = 0; this.i < this.checkboxObject.length; this.i++) {
      if (!this.checkboxObject[this.i].valu) {
        this.j++;
      }
      else {
        this.checkboxObject[this.i].valu = false;
        this.j = 0;
      }
    }
    if (this.j === this.checkboxObject.length) {
      alert('All UnSelected');
      this.j = 0;
    }
  }
}
