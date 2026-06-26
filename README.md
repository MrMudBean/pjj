# ​​publish job jamming​

## [![version](<https://img.shields.io/npm/v/pjj.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/pjj) [![issues 提交](<https://img.shields.io/badge/issues-提交-rgb(255,0,63)?logo=github>)](https://github.com/MrMudBean/pjj/issues)

禁止在项目的根目录执行 npm publish，防止意外发布。该脚本命令仅允许在 `prepublishOnly` ` 钩子中执行。

因为我的项目都是打包到 `dist` 目录下，然后再 `cd dist` 在 dist 目录下执行 `npm publish`，所以需要禁止在根目录执行 `npm publish`。

因为偶尔会忘记在 `dist` 目录下执行 `npm publish`，所以需要该脚本命令。

_我构建后的 `package.json` 🀄️不包含 `scripts` 字段，所以仅考虑根目录禁止执行 `npm publish`_

## 安装

```bash
npm install --save-dev pjj
```

## 使用

### 常规使用

```json
{
  "scripts": {
    "prepublishOnly": "pjj"
  }
}
```

### 替换掉默认文本

```json
{
  "scripts": {
    "prepublishOnly": "pjj -m '请在 dist 目录下执行 npm publish'"
  }
}
```

### 替换掉默认文本并使用黑色（默认）文本颜色

```json
{
  "scripts": {
    "prepublishOnly": "pjj -m '请在 dist 目录下执行 npm publish' -b"
  }
}
```

需要注意

- 添加了 `-s` 命令用于替换默认 prepublishOnly，但是还不知道怎么用，慎用
- 在使用命令 `pjj` 时，需保证在项目中进行了安装
- 只要将该命令配置到 `"prepublishOnly": "pjj"` 时，总会在执行 `npm publish` 时阻止执行 `npm publish`
- 该命令仅适用于 `npm publish`
- 使用该命令请不要使用 `npx` 调用，除非配置 `-s npx` 命令

```json
{
  "scripts": {
    "prepublishOnly": "npx pjj -s npx"
  }
}
```

## 状态

此软件包是 `MrMudBean` 生态系统的一部分。
它使用严格的 TypeScript 编写，并通过 Rollup 构建进行验证。
虽然单元测试较少，但 API 稳定，并在生产环境中大量使用。
