var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var globals = require('rollup-plugin-node-globals');
var builtins = require('rollup-plugin-node-builtins');
var json = require('rollup-plugin-json');


// https://github.com/rollup/rollup/wiki/JavaScript-API

var rollupConfig = {
  /**
   * entry: The bundle's starting point. This file will
   * be included, along with the minimum necessary code
   * from its dependencies
   */
  entry: 'src/app/main.dev.ts',

  /**
   * sourceMap: If true, a separate sourcemap file will
   * be created.
   */
  sourceMap: true,

  /**
   * format: The format of the generated bundle
   */
  format: 'iife',

  /**
   * dest: the output filename for the bundle in the buildDir
   */
  dest: 'main.js',

  /**
   * plugins: Array of plugin objects, or a single plugin object.
   * See https://github.com/rollup/rollup/wiki/Plugins for more info.
   */
  plugins: [
    builtins(),
    commonjs({
      namedExports: {
        '@progress/kendo-angular-charts': ['ChartsModule'],
        '@progress/kendo-angular-intl/dist/npm/js/intl.service': ['IntlService'],
        '@progress/kendo-angular-intl/dist/npm/js/cldr-intl.service': ['CldrIntlService'],
        '@progress/kendo-angular-popup/dist/npm/js/popup.module': ["PopupModule"],
        '@progress/kendo-angular-charts/dist/npm/js/charts.module': ['ChartsModule'],
        '@progress/kendo-angular-charts/dist/npm/js/common/theme.service': ['ThemeService'],
        '@progress/kendo-angular-charts/dist/npm/js/chart.component': ['ChartComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/common/tooltip-template.service': ['TooltipTemplateService'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/chart-auto-theme.component': ['ChartAutoThemeComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/common/configuration.service' :  ['ConfigurationService'],
        '@progress/kendo-angular-charts/dist/npm/js/common/collection.service' :  ['CollectionService'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/value-axis.component': ['ValueAxisComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/value-axis-item.component': ['ValueAxisItemComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/category-axis-item.component': ['CategoryAxisItemComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/category-axis.component': ['CategoryAxisComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/series.component': ['SeriesComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/series-item.component': ['SeriesItemComponent'],
        '@progress/kendo-angular-popup/dist/npm/js/services/position.service': ['PositionService'],
        '@progress/kendo-angular-popup/dist/npm/js/services/align.service': ['AlignService'],
        '@progress/kendo-angular-popup/dist/npm/js/popup.component': ['PopupComponent'],
        '@progress/kendo-angular-popup/dist/npm/js/services/dom.service': ['DOMService'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/tooltip/crosshair-tooltips.component': ['CrosshairTooltipsComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/tooltip/crosshair-tooltip.component': ['CrosshairTooltipComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/tooltip/crosshair-tooltips-container.component': ['CrosshairTooltipsContainerComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/tooltip/tooltip-popup.component': ['TooltipPopupComponent'],
        '@progress/kendo-angular-charts/dist/npm/js/chart/tooltip/shared-tooltip-template.directive': ['SharedTooltipTemplateDirective'],        
        '@progress/kendo-angular-charts/dist/npm/js/chart/tooltip/series-tooltip-template.directive': ['SeriesTooltipTemplateDirective']        
      }
    }),
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js']
    }),
    globals(),
    json()
  ]

};


if (process.env.IONIC_ENV == 'prod') {
  // production mode
  rollupConfig.entry = '{{TMP}}/app/main.prod.ts';
  rollupConfig.sourceMap = false;
}


module.exports = rollupConfig;