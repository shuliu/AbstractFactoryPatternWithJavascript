
import { HatFactory } from './HatFactory';
import { ClothingFactory } from './ClothingFactory';

/**
 * 抽象頁面
 */

let persons = [];
let hatFactory = new HatFactory();
let clothingFactory = new ClothingFactory();

persons.push(hatFactory.generator('寶可夢帽子 1 型'));
persons.push(hatFactory.generator('寶可夢帽子 2 型'));
persons.push(hatFactory.generator('寶可夢帽子 3 型'));
persons.push(hatFactory.generator('寶可夢帽子 4 型'));

persons.push(clothingFactory.generator('魔獸爭霸帽子 1 型'));
persons.push(clothingFactory.generator('魔獸爭霸帽子 2 型'));
persons.push(clothingFactory.generator('魔獸爭霸帽子 3 型'));
persons.push(clothingFactory.generator('魔獸爭霸帽子 4 型'));

/**
 * 輸出
 */
persons.forEach((v, i) => { return v.getResult(); })