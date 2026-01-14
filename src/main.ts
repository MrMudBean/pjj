import { isNode } from 'a-js-tools';
import { _p } from 'a-node-tools';
import { bgBlackPen } from 'color-pen';
import { blackSpace } from './blackSpace';
import { colorText } from './colorText';
import { command, message, script } from './command';
import { dog } from './dog';
import { line } from './line';

/**
 *  空行
 */
const space = '\n'.repeat(3);
/**
 * 主程序入口
 */
export function main() {
  if (isNode() && process.env.npm_lifecycle_event === script) {
    _p(space); //最上面的空白
    _p(line()); // 最上面的彩色线
    _p(); // 一个空行
    blackSpace(); // 黑色背景
    blackSpace(); // 黑色背景
    _p(colorText(message)); // 彩色文本
    blackSpace(); // 黑色背景
    blackSpace(); // 黑色背景
    _p(); // 一个空行
    _p(line()); // 最下面的彩色线
    _p(space); //最下面的空白

    command.error();
  } else {
    const pen = bgBlackPen.brightRed;
    const hidePen = pen.hide;

    dog.error(isNode() && process.env.npm_lifecycle_event);

    const m = '     所以，看见这段文本，说明你哪里 ❌ 了     ';
    _p('====================================');
    _p('跳过了禁止发布，而且该命令可能不会显示在终端\n');
    _p(hidePen(m));
    _p(pen.blink.bold(m));
    _p(hidePen(m));
    _p('\n====================================');
  }
}
