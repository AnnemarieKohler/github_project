# GitHub Project


Idea: Finding GitHub users and displaying the user, their picture, number of followers and repos.

## Technologies
* HTML/CSS
* JavaScript
* Angular
* Testing: Karma (unit tests), Protractor(end-to-end tests)


### To run the project
* clone this repo
* run `npm install` and `bower install`


### For the feature test run:
```
cd app
http-server
```
in a separate window

`webdriver-manager start`

the http-server and webdriver-manager need to run in the background, so the protractor tests can be run.

in a separate window run

`protractor test/protractor.conf.js`

### For the unit test run:

`karma start test/karma.conf.js`
