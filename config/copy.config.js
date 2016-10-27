
// https://www.npmjs.com/package/fs-extra

module.exports = {
  include: [
    {
      src: '{{SRC}}/assets/',
      dest: '{{WWW}}/assets/'
    },
    {
      src: '{{SRC}}/index.html',
      dest: '{{WWW}}/index.html'
    },
    {
      src: '{{SRC}}/service-worker.js',
      dest: '{{WWW}}/service-worker.js'
    },
    {
      src: 'node_modules/ionic-angular/polyfills/polyfills.js',
      dest: '{{WWW}}/build/polyfills.js'
    },
    {
      src: 'node_modules/ionicons/dist/fonts/',
      dest: '{{WWW}}/assets/fonts/'
    },
    {
      src: '{{SRC}}/api/orderForms.json',
      dest: '{{WWW}}/build/orderForms.json'
    },
    {
      src: '{{SRC}}/api/reporting/stacked-chart.json',
      dest: '{{WWW}}/build/stacked-chart.json'
    },
    {
      src: '{{SRC}}/api/reporting/simple-chart.json',
      dest: '{{WWW}}/build/simple-chart.json'
    },
    {
      src: '{{SRC}}/api/requests.json',
      dest: '{{WWW}}/build/requests.json'
    },
    {
      src: 'node_modules/@telerik/kendo-theme-default/dist/all.css',
      dest: '{{WWW}}/build/telerik.css'
    }
  ]
};
