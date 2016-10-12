
// https://www.npmjs.com/package/fs-extra

module.exports = {
  include: [
    {
      src: 'src/assets/',
      dest: 'www/assets/'
    },
    {
      src: 'src/index.html',
      dest: 'www/index.html'
    },
    {
      src: 'src/service-worker.js',
      dest: 'www/service-worker.js'
    },
    {
      src: 'node_modules/ionic-angular/polyfills/polyfills.js',
      dest: 'www/build/polyfills.js'
    },
    {
      src: 'node_modules/ionicons/dist/fonts/',
      dest: 'www/assets/fonts/'
    },
    {
      src: 'src/api/orderForms.json',
      dest: 'www/build/orderForms.json'
    },
    {
      src: 'src/api/reporting/stacked-chart.json',
      dest: 'www/build/stacked-chart.json'
    },
    {
      src: 'src/api/reporting/simple-chart.json',
      dest: 'www/build/simple-chart.json'
    },
    {
      src: 'src/api/requests.json',
      dest: 'www/build/requests.json'
    },
    // {
    //   src: 'node_modules/requirejs/require.js',
    //   dest: 'www/build/require.js'
    // },   
    {
      src: 'node_modules/chart.js/dist/Chart.js',
      dest: 'www/build/chart.js'
    },
    {
      src: 'node_modules/@telerik/kendo-theme-default/dist/all.css',
      dest: 'www/build/telerik.css'
    }
  ]
};
