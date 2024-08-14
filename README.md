# text-elementalizer-core

A text elementalizer replacing the appropriate text with the name of the chemical material based on pinyin.

基于汉语拼音，将文本中的中文字符替换为对应的化学物质名称。

基于汉语拼铟，将文苯中锝中文字氟锑换为对荧锝化学芴酯名称。

## 开始使用

```shell
npm install @adpro/text-elementalizer-core
```

本包完全使用`TypeScript`编写，遵循`ES6`规范，使用`pnpm`作为包管理器。

### 方法

#### convert

`convert`方法接受1-2个参数。

text - `string` - 待转换的文本

ignoreTones（可选） - `boolean` - 是否模糊音调。默认为`false`

`convert`方法返回1个`string`类型的值，值的内容为转换后的字符串

使用示例：

```typescript
import { convert } from '@adpro/text-elementalizer-core';

const example1 = convert('示例'); // 不模糊音调
const example2 = convert('示例', false); // 不模糊音调
const example3 = convert('示例', true); // 模糊音调
```

### 常量

#### withTonesDict

`withTonesDict`是一个包含不模糊声调和对应化学用字的`Map`。

其存储方式为：`string`类型的拼音:`string[]`类型的多个对应化学用字

导入方式：

```typescript
import { withTonesDict } from '@adpro/text-elementalizer-core/dict';
```

#### withoutTonesDict

`withoutTonesDict`是一个包含模糊声调和对应化学用字的`Map`。

其存储方式为：`string`类型的拼音:`string[]`类型的多个对应化学用字

导入方式：

```typescript
import { withoutTonesDict } from '@adpro/text-elementalizer-core/dict';
```

#### excludeList

`excludeList`是一个`string[]`类型的包含不应被转换的特殊字符的数组。

导入方式：

```typescript
import { excludeList } from '@adpro/text-elementalizer-core/dict';
```