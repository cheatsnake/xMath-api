[![Website](https://img.shields.io/website?down_color=green&down_message=xMath%20API&up_color=blue&up_message=xMath%20API&url=https%3A%2F%2Fx-math.herokuapp.com%2F)](https://x-math.herokuapp.com/)
![GitHub repo size](https://img.shields.io/github/repo-size/cheatsnake/xMath-api?color=9cf)
![GitHub](https://img.shields.io/github/license/cheatsnake/xMath-api?color=%235DAF83)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/cheatsnake/xMath-api/issues)

# :rocket: xMath-api
A free API for generating random mathematical expressions.

## :grey_question: How to use it?
The API provides you with the ability to get a random expression with mathematical operations such as addition, subtraction, multiplication or division. You get an object containing two numbers, an operation sign, and the result of an expression.

You can choose the operation you need or get a random operation.

#### :game_die: Random expression 
```sh
https://x-math.herokuapp.com/api/random
```

#### :heavy_plus_sign: Only addition
```sh
https://x-math.herokuapp.com/api/add
```

#### :heavy_minus_sign: Only subtraction
```sh
https://x-math.herokuapp.com/api/sub
```

#### :heavy_multiplication_x: Only multiplication
```sh
https://x-math.herokuapp.com/api/mul
```

#### :heavy_division_sign: Only division
```sh
https://x-math.herokuapp.com/api/div
```

## :wrench: Parameters
By default, the range of numbers from 1 to 99 is set for all expressions. But you can adjust the range (for any operation) yourself using the parameters.

#### Range of generated numbers
The max and min parameters change the possible range for each number in the expression.
```sh
?max=999&min=100
```

The maxFirst and minFirst parameters change the possible range only for the first number (the second number uses the default value).
```sh
?maxFirst=256&minFirst=128
```

The maxSecond and minSecond parameters change the possible range only for the second number (does not affect division, because there the second number is randomly selected from the list of divisors of the first number).
```sh
?maxSecond=256&minSecond=128
```

#### Negative result
To get expressions that result in negative numbers, you can change the range of values using the parameters described above by adding negative numbers there.

But this will not work for the subtraction operation, because by default there the first number is always greater than the second. To fix this, you can use the parameter negative in the value 1.
```sh
https://x-math.herokuapp.com/api/sub?negative=1
```

## :grey_exclamation: Examples

```sh
https://x-math.herokuapp.com/api/random?max=999&negative=1
```

```sh
https://x-math.herokuapp.com/api/mul?maxFirst=999&maxSecond=20
```

```sh
https://x-math.herokuapp.com/api/add?max=500&minFirst=100
```

## Available Scripts for Developers

In the project directory, you can:

- Run the server with Nodemon for development
```sh
npm run dev
```
> The page will reload if you make edits.\
> You will also see any lint errors in the console.\
> Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

- Launch tests
```sh
npm run test
```

- Create a production build
```sh
npm run build
```

- Runs the server of production build
```sh
npm start
```
> Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
