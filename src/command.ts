import { Args } from 'a-command';
import { cn } from './cn';
import { commandBind } from './types';

/**  创建一个命令  */
const command = new Args<commandBind>('pjj');

command.bind([
  'message <-m> (添加自定义的命令消息)',
  'black <-b> (显示为黑色（默认）文本)',
  'script <-s> (触发的勾子，默认为 `prepublishOnly`)',
]);

command.run();

command.isEnd(true);

/**
 *  命令参数映射
 */
const argMap = command.args.$map;

/**
 *  命令参数值
 */
const message =
  argMap.message && argMap.message.value && argMap.message.value.length > 0
    ? argMap.message.value.join('\n')
    : cn
      ? '禁止在项目的根目录下执行 npm publish 命令'
      : 'It is forbidden to execute the npm publish command in the root directory of the project';

/// 没有颜色
const noColor = argMap.black !== undefined;

const script =
  argMap.script && argMap.script.value && argMap.script.value.length > 0
    ? argMap.script.value[0]
    : 'prepublishOnly';

export { command, message, noColor, script };
