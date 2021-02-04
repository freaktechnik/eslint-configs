"use strict";

module.exports = {
    parser: "@babel/eslint-parser",
    plugins: [ "@babel" ],
    rules: {
        "new-cap": 0,
        "object-curly-spacing": 0,
        "no-invalid-this": 0,
        "semi": 0,
        "@babel/new-cap": 2,
        "@babel/object-curly-spacing": [
            "error",
            "always"
        ],
        "@babel/no-invalid-this": 2,
        "@babel/semi": 2
    }
};
