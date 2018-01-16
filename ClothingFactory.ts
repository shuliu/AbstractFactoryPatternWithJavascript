
import { Clothing } from './Clothing';
/**
 * ClothingFactory class 服裝工廠
 */
export class ClothingFactory {

  /**
   * 產品名稱
   */
  name: string;

  /** constructor */
  constructor() {}

  /**
   * generator
   * @param {string} name 產品名稱
   */
  generator(name: string) {
    return new Clothing(name);
  }
}