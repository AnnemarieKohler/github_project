To run the project
* clone this repo
* run the following commands:

```
npm install

bower install```

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
