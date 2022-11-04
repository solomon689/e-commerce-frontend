import { SubCategory } from './category';
import { ProductDetail } from './product-detail';
import { ProductRating } from './product-rating';
export class Product {
    public id?: string;
    public title!: string;
    public skuCode!: string;
    public stock!: number;
    public price!: number;
    public mpn?: number; // número de pieza del fabricante.
    public color?: string[];
    public urlImage?: string;
    public description?: string;
    public details!: ProductDetail[];
    public ratings?: ProductRating[];
    public categories!: SubCategory[];

    constructor(product: Product) {
        Object.assign(this, product);
    }
}