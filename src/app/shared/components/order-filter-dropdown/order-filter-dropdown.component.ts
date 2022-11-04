import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-filter-dropdown',
  templateUrl: './order-filter-dropdown.component.html',
  styleUrls: ['./order-filter-dropdown.component.scss']
})
export class OrderFilterDropdownComponent implements OnInit {
  @Input() public name: string = 'dropdown';
  public orderOptions: string[] = ['Mejor evaluados', 'Precio mayor a menor', 'Precio menor a mayor'];

  constructor() { }

  ngOnInit(): void {
  }

}
