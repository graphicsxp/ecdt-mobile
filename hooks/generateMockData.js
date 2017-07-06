/* eslint-disable no-console */

import fs from 'fs';
import chalk from 'chalk';
import { schema } from './mockDataSchema';
import jsf from 'json-schema-faker';

jsf.extend('faker', function(){
  var faker = require('faker');


   function pad(number, size) {
      var s = String(number);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
    }

  faker.locale = "fr"; // or any other language
  faker.custom = {

    requestIdentifier: function() {
      return  new Date().getFullYear() + pad(faker.random.number({min:0, max:999999}), 6);
    }
  };
  return faker;
});


jsf.resolve(schema).then(data => {
  let  json = JSON.stringify(data);

fs.writeFile('./src/api/db.json', json, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green('Mock data generated.'));
  }
});

});

