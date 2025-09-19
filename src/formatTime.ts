export const formatTime = (num: number) => {
    const clock = String(Math.floor(num/60)) + ":" + String(num%60).padStart(2, "0");

    return clock;
}