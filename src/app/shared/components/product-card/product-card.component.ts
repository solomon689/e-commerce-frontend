import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product | null = null;
  public stars: number[] = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

  public addToFavorites(product: Product | null) {
    /*
      TODO: 
        - Crear funcionalidad que permita guardar el producto dentro de la base de datos.
        - Darle una animación o efecto al guardar.
    */
    console.log('Agregado a favoritos');
  }

}
