import { strInTerminalLength } from '@vvi/pen';
import { message } from './command';

const screenWith = process.stdout.columns;

const messageLength = strInTerminalLength(message);

const safeWidth = screenWith - messageLength;
export const dataStore = {
  /**  终端的宽度（可显示字符数）  */
  screenWith,
  /**  message 渲染的长度  */
  messageLength,
  /**  message 长度是否安全  */
  renderSafe: safeWidth >= 0,
  /**  安全区长度  */
  safeWidth: safeWidth > 0 ? Math.floor(safeWidth / 2) : 0,
};
