1. The program prints

   ```js
   3
   ```

   `i` was declared with `var`, so it is function-scoped and accessible anywhere within the function. This means that `console.log(i)` is able to access and print its value. `i` is 3 after the for loop because `i` starts at 0 and increments by 1 every iteration until `i < prices.length` is no longer true, which occurs once `i` is equal to `prices.length`. When `discountPrices` is invoked, `prices` is an array of three items, so `prices.length` and `i` are both 3.

2. The program prints

   ```js
   150
   ```

   `discountedPrice` was declared with `var`, so it is function-scoped and accessible anywhere within the function. Every iteration of the `for` loop, it is assigned to `prices[i] * (1 - discount)`. The last time it is set is for the last iteration of the `for` loop, when `i` is `prices.length - 1`, so `prices[prices.length - 1]` is the last item of `prices`. When `discountPrices` is invoked, the last item of `prices` is 300, and `discount` is 0.5. `300 * (1 - 0.5)` is 150, so that is the value left in `discountedPrice` when the `for` loop finishes and line 13 prints the value of `discountedPrice`.

3. The program prints

   ```js
   150
   ```

   `finalPrice` was declared with `var`, so it is function-scoped and accessible anywhere within the function. Every iteration of the `for` loop, `finalPrice` is reassigned to `Math.round(discountPrice * 100) / 100`, which rounds `discountPrice` to the nearest hundredth. When line 14 prints `finalPrice`, `finalPrice` contains the value that was last assigned to it during the last iteration of the `for` loop. As found in #2, the last value of `discountPrice` is 150, which is the same when rounded to the nearest hundredth. Therefore, `finalPrice` is also 150 when line 14 runs.

4. The invocation of `discountPrices` returns `[50, 100, 150]`.

   `discountPrices` maps over every entry in `prices` and multiplies it by `1 - discount` then rounds it to the nearest hundredth, returning a new array. The argument `discount` is 0.5, so `1 - discount` is 0.5.

   - For the first item in `prices`, `100 * 0.5` is 50.
   - For the second item in `prices`, `200 * 0.5` is 100.
   - For the last item in `prices`, `300 * 0.5` is 150.

5. The program throws an error.

   ```
   ReferenceError: i is not defined
       at discountPrices (<anonymous>:12:15)
       at <anonymous>:19:1
   ```

   This is because `i` was declared with `let`, so it is block-scoped to the three expressions and the body of the `for` loop. Therefore, it is not accessible on line 12, which is outside the for loop.

6. The program throws an error.

   ```
   ReferenceError: discountPrice is not defined
       at discountPrices (<anonymous>:13:15)
       at <anonymous>:19:1
   ```

   This is because `discountPrice` was declared with `let`, so it is block-scoped to the three expressions and the body of the `for` loop. Therefore, it is not accessible on line 13, which is outside the for loop.
