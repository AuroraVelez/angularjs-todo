/**
 * Created by avelez on 3/31/16.
 */
(function () {
    "use strict";

    var fs = require('fs');

    function capture (spec) {
        var name = spec.description.split(' ').join('_');

        browser.takeScreenshot().then(function (png) {
            var stream = fs.createWriteStream('tests/e2e/screenshots/' + name + '.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    }

    exports.takeScreenshot = function (spec) {
        capture(spec);
    };

    exports.takeScreenshotOnFailure = function (spec) {
        if (spec.results().passed()) return;

        capture(spec);
    };

}());