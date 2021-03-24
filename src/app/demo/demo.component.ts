import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Bazaldua Store';

  items = ['camiseta bape', 'camiseta pycho bunny', 'camiseta lv'];

  objeto = {};

  power = 10;

  ngOnInit() {
    
  }

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
