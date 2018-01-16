
import { PropsInterface } from './interfaces/PropsInterface';
/**
 * 具體連結
 * Clothing class 服裝
 */
export class Clothing implements PropsInterface {

  /**
   * 產品名稱
   */
  name: string;

  /**
   * constructor
   * @param {string} name 產品名稱
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * 建立產品
   */
  getResult() {
    console.log('產生一套服裝：' + this.name);
  }
}