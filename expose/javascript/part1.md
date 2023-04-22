1.  ```
    values added:  20
    ```

2.  ```
    final result:  20
    ```

3.  ```
    values added:  20
    ```

4.  ```
    ReferenceError: result is not defined
        at sumValues (<anonymous>:13:33)
        at <anonymous>:16:1
    ```

    `result` is block-scoped because it was declared with `let`. This means that `result` is only defined inside the body of the `if` statement, so it cannot be accessed outside the `if` statement on line 13.

5.  ```
    TypeError: Assignment to constant variable.
        at sumValues (<anonymous>:7:12)
        at <anonymous>:16:1
    ```

    `result` was declared with `const`, so it cannot be reassigned.

6.  Even if line 9 did not throw an error, line 13 would. `result` is block-scoped because it was declared with `const`. This means that `result` is only defined inside the body of the `if` statement, so it cannot be accessed outside the `if` statement on line 13.
