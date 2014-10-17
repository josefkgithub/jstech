(function () {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['post'] = template({
        "compiler": [6, ">= 2.0.0-beta.1"],
        "main": function (depth0, helpers, partials, data) {
        var helper, functionType = "function", helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression;
        return "<div class=\"entry\">\r\n    <h1>"
            + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing), (typeof helper === functionType ? helper.call(depth0, {"name": "title", "hash": {}, "data": data}) : helper)))
            + "</h1>\r\n    <div class=\"body\">\r\n        "
            + escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing), (typeof helper === functionType ? helper.call(depth0, {"name": "body", "hash": {}, "data": data}) : helper)))
            + "\r\n    </div>\r\n</div>";
    },
        "useData": true});
       }
)();