import { getRandomInt } from 'a-js-tools';
import { bgBlackPen, truncateStringWithChar } from 'color-pen';
import { dataStore } from './data-store';
import { dog } from './dog';

/**
 *
 * @description 生成随机颜色文本
 *
 * @param str 字符串
 *
 *
 */
export function colorText(str: string) {
  const { screenWith, safeWidth } = dataStore;
  dog('开始计算文本长度');
  /**  安全区空白  */
  const blankSpace = bgBlackPen(' '.repeat(safeWidth));
  dog('空白长度为', safeWidth);
  return `${blankSpace}${[...truncateStringWithChar(str, screenWith - safeWidth * 2)].reduce((previousValue, currentValue) => previousValue + bgBlackPen.number(getRandomInt(1, 225))(currentValue), '')}${blankSpace}`;
}
