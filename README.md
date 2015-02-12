karma-textreplace-preprocessor
================================

##### PROTOTYPE - Preprocessor for replacing a specific string in a file by the content of another one

## Installation
```json
{
    "devDependencies": {
        "karma": "~0.12.1",
        "karma-textreplace-preprocessor": "0.0.0"
    }
}
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      './**/*Partial.js': ['textreplace']
    },

    files: [
      './**/*.js'
    ],
    textreplacePreprocessor: {
      
      // file where the content is
      contentFile: 'relativepath/to/the/file.ext'
    }
  });
};
```
