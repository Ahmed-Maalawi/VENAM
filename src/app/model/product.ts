import { Brand } from "./brand";

export interface Product {

    id: number;
    name: string;
    price:number;
    discount: number;
    imgsUrl: string[];
    brand: Brand[];
    size: string[];
    description: string;
    shortDescription: string;

}
