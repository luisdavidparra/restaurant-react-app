import { Product } from './Product';

export interface ShoppingCartItem extends Product {
    amount: number;
  }
  