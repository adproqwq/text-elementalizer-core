import { pinyin } from 'pinyin-pro';
import { withTonesDict, withoutTonesDict, excludeList } from './dict';

/**
 * @param text 待转换的字符串，接受一个`string`类型的值
 * @param ignoreTones 是否模糊音调，接受一个`boolean`类型的值，默认为`false`
 * @returns 转换后的字符串，`string`类型
 */
export const convert = (text: string, ignoreTones: boolean = false): string => {
  const charArray = [...text]; // 转换为字符数组

  const resultArray: string[] = [];

  if(ignoreTones){
    for(const char of charArray){
      if(excludeList.includes(char)) continue;

      if(withoutTonesDict.get(pinyin(char, { toneType: 'none' }))){
        const chemCharArray = withoutTonesDict.get(pinyin(char, { toneType: 'none' }))!;
        const chemChar = chemCharArray[Math.floor(Math.random() * chemCharArray.length)];
        resultArray.push(chemChar);
      }
      else resultArray.push(char);
    }
  }
  else{
    for(const char of charArray){
      if(excludeList.includes(char)) continue;

      if(withTonesDict.get(pinyin(char))){
        const chemCharArray = withTonesDict.get(pinyin(char))!;
        const chemChar = chemCharArray[Math.floor(Math.random() * chemCharArray.length)];
        resultArray.push(chemChar);
      }
      else resultArray.push(char);
    }
  }

  let result = '';
  // 使用forEach循环而非Array.toString，防止误伤英文逗号
  resultArray.forEach((char) => {
    result += char;
  });

  return result;
};