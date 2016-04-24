module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],


    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'test/karmaHelper.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

  });
};
