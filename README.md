# backbase
Backbase

- Clone the project into your machine, select backbase folder and run 'npm i' to install dependencies and 'ng serve' to run the app,
- This small demo doesn't have tests, since i have a lot of work right now and i didn't have the time to implement unit tests but if you want to run the tests you will see that i didn't add the corresponding providers and all tests break,
- I decided to use Angular 11 with angular material
- The Project is structure in 4 components:
- - Backbase Form (built with form groups, is responsible to make the transaction, on press Submit the Backbase Confirmation Modal will appear)
- - Backbase Confimation Modal (responsible to send the correct subscriber to ajust the components with the new info)
- - Backbase header (only contains the company identity)
- - Backbase Transaction List (with a list of transaction can be sorted by, date, beneficiary or amount, free search that can search by amount, company name or type of transaction)
