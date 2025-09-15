export const calculateCols = (num: number) => {
  let c=Math.ceil(Math.sqrt(num));
  while(num%c !== 0) {
    c--;
  }
  return  Math.max(c, num/c) === c ? [c, num/c] : [num/c, c];
}