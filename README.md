# Smokeball JavaScript Coding Challenge

## Important Information
Read this document carefully and follow ALL instructions. 

## System Requirements
The coding challenge requires the following to be installed on your development machine;
* [nodejs](https://nodejs.org/en/download/) version 18.x or above.
* A [git](https://git-scm.com/downloads) client.

## Installation
1. Fork the `javascript-developer-test` repository to your personal github account.
2. Clone the `javascript-developer-test` repository from your personal github account onto your development machine.
3. Open a terminal and `cd` into the root directory of the `javascript-developer-test` repository.
4. Execute `npm install` in the terminal.

## Challenge Instructions
Your challenge is to implement the `getArnieQuotes()` function, which is exported from `./src/get-arnie-quotes.js`.

The unit tests in `./src/get-arnie-quotes.test.js` will provide pre-defined URLs to the function and test your function's implementation. To run the unit tests, execute `npm test` in the terminal.

The goal is to write an implementation of `getArnieQuotes()` that meets all requirements and passes all unit tests.

## Requirements
### Functional
* Use the provided `httpGet` function to get the quote for the URL
* For a successful request
  * return an object with a single key `"Arnie Quote"` and the HTTP response body's `message` property as the key's associated value.
* For an unsuccessful request
  * return an object with a single key `"FAILURE"` and the HTTP response body's `message` property as the key's associated value.
* Success is denoted by the HTTP response status code 200.
* Input validation for `get-arnie-quotes()` is not required.

### Non-Functional
* Only push changes to the `get-arnie-quotes.js` file.
* Do not create a pull request against our source repository.

### Please Note
* Other solutions to this puzzle are available on github and can be used to give you ideas, however, not all forked solutions are correct. 
* Direct plagiarism results in an immediate failure.

### Sample Data
```
An example results array:

[
  { 'Arnie Quote': 'Some cool quote' },
  { 'FAILURE': 'Your request has been terminated' },
]

An example HTTP response:

{
  status: 200,
  body: "{ 'message': 'Some cool arnie quote' }" // JSON string
}
```

## Submission
Once all unit tests pass, push your code upstream then send us the link to your github repo with your solution.