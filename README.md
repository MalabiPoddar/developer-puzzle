# T-Mobile Coding Challenge

### Important! Read this First !

Do **not** submit a pull request to this repository.  You PR wil be rejected and your submission ignored.
To be safe **do not Fork** this repository, if you do you will be tempted to create a PR.

To _properly_ submit a coding challenge you must:

1. Create a blank (empty) repo in the public git service of your choice ( github, gitlab, bitbucket )
2. Clone this repo to your local workstation
3. Reset the remote origin to point to your newly created empty repo
4. Push the master branch up to your repo

5. make necessary changes
6. push changes to your origin
7. send address of your copy to t-mobile.

We will review your copy online before and during your interview.


# Stocks coding challenge

## How to run the application

There are two apps: `stocks` and `stocks-api`.

- `stocks` is the front-end. It uses Angular 7 and Material. You can run this using `yarn serve:stocks`
- `stocks-api` uses Hapi and has a very minimal implementation. You can start the API server with `yarn serve:stocks-api`

A proxy has been set up in `stocks` to proxy calls to `locahost:3333` which is the port that the Hapi server listens on.

> You need to register for a token here: https://iexcloud.io/cloud-login#/register/ Use this token in the `environment.ts` file for the `stocks` app.

> The charting library is the Google charts API: https://developers.google.com/chart/

## Problem statement

[Original problem statement](https://github.com/tmobile/developer-kata/blob/master/puzzles/web-api/stock-broker.md)

### Task 1

Please provide a short code review of the base `master` branch:

Please find the review comments below:
#### Task 1-A
1. What is done well?

- In stock component FormBuilder, FormGroup, Validators from @angular/forms have been used.
  These predefined features helps to address form validation of the application.
- For state management, ngrx has been used, which gives better performance.  
- Angular material library has been used; which provides multiple reusable and 
  accessible components.
- Common predefined functionality like google chart has been used, which is an open source library.

2. What would you change?

- We will use async pipe of ngrx to pass observable data from stock component to chart component or we have to unsubscribe subscription 
  in chart component to prevent memory leaks.
- As "Favorite time period" is a required field, we will show an error message to the user when it is not selected.
- Hard coded or mocked data can be moved to constant files.
- Need to fix the failed test cases.
- Need to specify appropriate access specifier for variable and methods.

3. Are there any code smells or problematic implementations?

- After adding the valid API key also chart is not getting displayed; as chart component html is having undefined data value.
  To fix this we can use async pipe of ngrx to pass observable data from stock component to chart component.
- There is no error message present when "Favorite time period" is not selected.As it is a required field proper error message 
  should be displayed to the user.

> Make a PR to fix at least one of the issues that you identify