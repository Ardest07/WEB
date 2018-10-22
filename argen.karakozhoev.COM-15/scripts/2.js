function swap_adjacent_digits(n) 
{
    if (n%2!=0)
      {
      return false;
      }

    let result = 0;
    let x = 1;
    while (n != 0) {
        const dg1 = n % 10;
        const dg2 = ((n - dg1) / 10) % 10;
        result += x * (10 * dg1 + dg2);
        n = Math.floor(n / 100);
        x *= 100;
    }
    return result;
}

console.log(swap_adjacent_digits(3456));
console.log(swap_adjacent_digits(768453));
console.log(swap_adjacent_digits(87352));
