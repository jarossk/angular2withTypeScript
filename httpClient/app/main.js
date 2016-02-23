System.register(['angular2/platform/browser', 'rxjs/Rx', './toh/app.component', './wiki/wiki.component'], function(exports_1) {
    var browser_1, app_component_1, wiki_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (wiki_component_1_1) {
                wiki_component_1 = wiki_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
            browser_1.bootstrap(wiki_component_1.WikiComponent);
        }
    }
});
//# sourceMappingURL=main.js.map