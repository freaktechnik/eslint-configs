"use strict";

module.exports = {
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2015
    },
    env: {
        commonjs: true
    },
    plugins: [ "import" ],
    settings: {
        "import/resolver": "webpack"
    },
    extends: [
        "plugin:import/errors",
        "plugin:import/warnings"
    ]
};
