export const divide = (x: number, y: number): number => {
    if (y == 0){
        console.error("Divide by 0")
    }
    return x / y;
}