require("../src/scripts/adf");
require("../src/scripts/dashboard");
require("../src/scripts/provider");
require("../src/scripts/sortable");
require("../src/scripts/widget-content");
require("../src/scripts/widget");

angular.module('adf')
.run(function ($templateCache) {
    $templateCache.put("../src/templates/dashboard-edit.html", require("../src/templates/foundation/dashboard-edit.html"))
    $templateCache.put("../src/templates/dashboard.html", require("../src/templates/foundation/dashboard.html"))
    $templateCache.put("../src/templates/widget-add.html", require("../src/templates/foundation/widget-add.html"))
    $templateCache.put("../src/templates/widget-edit.html", require("../src/templates/foundation/widget-edit.html"))
    $templateCache.put("../src/templates/widget.html", require("../src/templates/foundation/widget.html"))
});
