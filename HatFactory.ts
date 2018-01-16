
import { Hat } from './Hat';
/**
 * HatFactory class 帽子工廠
 */
export class HatFactory {

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
    return new Hat(name);
  }
}