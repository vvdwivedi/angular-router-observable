# angular-router-observable
A repo for reproduction of issue with observable in angular router

Steps to reproduce:

1. Clone the repo.
2. Run npm install
3. Run ionic serve to start the app.
4. Click on `first` button from home page.
5. It takes you to the page where we are subscribing to queryParams and then using it to show some text in the page. 
6. Clicking on the buttons will switch the query params and it is expected to be updated on the page. 
7. It works fine the first time. Go back to either home page or third page using the buttons, and then come back again. 
8. Clicking on the button will still update query params, but the values are not coming in onservable. 
9. Keep console open for some helpful logs. 
