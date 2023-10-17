var vg_1 = "cocoa_exporters_map.vg.json";
vegaEmbed("#world_map", vg_1, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "cocoa_prod_linechart.vg.json";
vegaEmbed("#line_chart", vg_2, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "choc_consumers_barchart.vg.json";
vegaEmbed("#bar_chart", vg_3, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "rating_proportions_bar.vg.json";
vegaEmbed("#norm_stacked_barchart", vg_4, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "ratings_hist_heatmap.vg.json";
vegaEmbed("#hist_heatmap", vg_5, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);