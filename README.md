# ecdt-mobile
Steps to compile and deploy:
* npm i -g cordova
* npm i -g ionic
* git clone the project
* cordova platform add ios (or android) - it will install the platform and the plugins from the config.xml
* ionic run iOS or android --device - it will build and deploy to the platform of your choice

For iOS:
* Install xcode before trying to build the project
* Open the project with Xcode and choose a signing key

For Android:
* Install the android sdk version 25 before building

There are two ways of managing the cordova plugins:
* Using cordova cli(cordova platform add or cordova prepare). It will read the plugins from the config.xml file.
* Using ionic cli(ionic state restore). It will read the plugins from the package.json file.

http://stackoverflow.com/questions/28783968/update-cordova-plugins-in-one-command 
