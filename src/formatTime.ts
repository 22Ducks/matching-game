export const formatTime = (num: number) => {
    return [Math.floor(num/60), num%60];
}