# ecdt-mobile
Steps to compile and deploy:
* don't upgrade to npm@5, stay with the latest 4 version
* npm i -g cordova
* npm i -g ionic
* install [gradle](https://docs.gradle.org/current/userguide/installation.html) manually
* git clone the project
* ionic cordova platform add ios (or android) - it will install the platform and the plugins from the package.json
* ionic cordovavrun iOS or android --device - it will build and deploy to the platform of your choice

For iOS:
* Install xcode before trying to build the project
* Open the project with Xcode and choose a signing key

For Android:
* Install the android sdk version 25 before building

There are two ways of managing the cordova plugins:
* Using cordova cli(cordova platform add or cordova prepare). It will read the plugins from the package.json file and update the config.xml.
* Using ionic cli(ionic state restore). It will read the plugins from the package.json file.

With the new [ionic cli](https://ionicframework.com/docs/cli/):
* run ionic cordova run android to launch the app on your device

http://stackoverflow.com/questions/28783968/update-cordova-plugins-in-one-command 
