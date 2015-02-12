module.exports = (function () {
    'use strict';

    var util = require('util');
    var fs = require('fs');

    function createReplacetextPreprocessor(basePath, config) {
        config = typeof config === 'object' ? config : {};

        var strmatch = config.strmatch;
        if (strmatch.length < 3)
            throw new Error('strmatch too small');
        var strregex = new RegExp(strmatch);

        var contentFile = config.contentFile;
        if (!contentFile)
            throw new Error('content file must be defined');


        return function (content, file, done) {
            var fixtureName = file.originalPath
                .replace(basePath + '/', '')
                .replace(/\.json$/, '');

            // Set the template
            var template = getTemplate(config.variableName);

            // Update the fixture name
            fixtureName = prependPrefix + fixtureName.replace(stripPrefix, '');

            file.path = file.path.replace(/\.json$/, '.js');

            done(util.format(template, fixtureName, content));
        };
    }

    createReplacetextPreprocessor.$inject = ['config.basePath', 'config.replacetextPreprocessor'];

    return createReplacetextPreprocessor;
})();
