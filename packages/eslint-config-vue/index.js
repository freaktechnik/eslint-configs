"use strict";

module.exports = {
    rules: {
        "vue/html-indent": [
            "error",
            4
        ],
        "filenames/match-regex": [
            2,
            "^[A-Za-z0-9-]+$"
        ],
    },
    extends: [
        "@freaktechnik/eslint-config-browser",
        "@freaktechnik/eslint-config-webpack",
        "plugin:vue/strongly-recommended"
    ]
};
