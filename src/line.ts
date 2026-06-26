import { randomPen } from '@vvi/pen';
import { noColor } from './command';
import { dataStore } from './data-store';

/**
 * # 生成分割线
 */
export function line() {
  let str = '';
  for (let i = 0; i < dataStore.screenWith; i++) {
    str += noColor ? '=' : randomPen('=');
  }
  return str;
}
