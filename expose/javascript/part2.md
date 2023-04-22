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

7. The program prints

   ```js
   150
   ```

   `finalPrice` was declared with `let`, so it is block-scoped to the function body. Line 14 is in the function body, so it has access to `finalPrice`. `finalPrice` is 150 for the same reason as in #3.

8. The invocation of `discountPrices` returns `[50, 100, 150]` for the same reason as in #4.

9. The program throws an error.

   ```
   ReferenceError: i is not defined
       at discountPrices (<anonymous>:11:15)
       at <anonymous>:17:1
   ```

   `i` was still declared with `let` here, so the reasoning for the error is the same as in #5.

10. The program prints

    ```js
    3
    ```

    `length` was declared with `const`, so it is block-scoped to the function body, like #7, so line 12, which is also in the function body, has access to `length`. `length` is 3 because `discountPrices` was invoked with three items in `prices`.

11. The invocation of `discountPrices` returns `[50, 100, 150]` for the same reason as in #4.

12. ```js
    student.name // A
    student['Grad Year'] // B
    student.greeting() // C
    student['Favorite Teacher'].name // D
    student.courseLoad[0] // E
    ```

13. (A) is `'32'` because for the `+` operator, if one operand is a string, JavaScript concatenates the two values together. First, it casts both operands into a string. `'3'` is already a string. `2` gets casted to its string representation, `'2'`. Then, the concatenation of `'3'` and `'2'` is `'32'`.

    (B) is `1` because the `-` operator is strictly used for numerical operations. Because neither operand is a BigInt, JavaScript uses typical double-precision floating point subtraction on the two operands. Both operands are casted into a number. `'3'` gets parsed as `3`. `2` is already a number. `3` - `2` is `1`.

    (C) is `3` because one operand is a number, and `null` can cast into a number, `0`, so JavaScript proceeds with floating-point addition. `3` + `0` equals `3`.

    (D) is `'3null'` because one operand is a string, so JavaScript uses concatenation. `null` casted to a string is `'null'`, so `'3'` concatenated with `'null'` is `'3null'`.

    (E) is `4` because one operand is a number, and `true` can be cast into a number, `1`. `1` + `3` = `4`.

    (F) is `0` because both operands can be cast into a number: `false` becomes `0`, and `null` also becomes `0`. `0` + `0` = `0`.

    (G) is `'3undefined'` like (D) because `'3'` is a string, and `undefined` casts into `'undefined'`
