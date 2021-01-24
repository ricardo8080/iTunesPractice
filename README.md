# itunestest

The project was develop with Vue.JS version 2.6.12

## Tutorial
```
Input the information necessary to search albums from your favorite authors, 
then click the search button, !checkout all of them!

Make sure to check Project setup to know the steps to run the application and
the next subtitle as there is some information about the code developed.
```
## Employed Tools
```
Vue.JS, Jquery, Mocha + Chai, Html, Css 
```
## Project setup
```
npm install

npm run serve

npm run build

npm run test:unit
```
## Important Variables and Methods to Notice
```
The value used to search albums is called "search_value", it is used to
ensure the input is not empty and used to create the query from the
iTunes Search API.

The value in ./src/store/index.js -> state called "search_list" is the object 
used to store the required elements from all the objects of the query made.

As well, the only getter method "getSearchItemsList" returns this list with 
the "searchlist" name to be used in the html sector, to create all cards 
which represent all albums found.

When the blue search button is clicked, the method "searchitems" will be 
triggered, deleting the previous list of albums and creating a new one 
from the new request of the user.

As there are not many errors to control, it is controlled by few if 
statement and booleans to ensure the quality of the app where it is required.
In ./tests/unit/search-list-spec.js are Unit Tests employed to ensure important methods and variables contains the values required for the QA of the app. 

Inside the mockStore employed by the unit tests it is added a search_test object
with some raw objects from the original query made to the iTunes Search API

```


