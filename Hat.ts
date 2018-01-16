
import { PropsInterface } from './interfaces/PropsInterface';
/**
 * 具體連結
 * Hat class 帽子
 */
export class Hat implements PropsInterface {

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
   * @return {void}
   */
  getResult(): void {
    console.log('產生一頂帽子：' + this.name);
  }
}