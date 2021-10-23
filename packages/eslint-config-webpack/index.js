"use strict";

module.exports = {
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest"
    },
    env: {
        commonjs: true
    },
    plugins: [
        "import",
        "tree-shaking"
    ],
    settings: {
        "import/resolver": "webpack"
    },
    rules: {
        "tree-shaking/no-side-effects-in-initialization": "error"
    },
    extends: [
        "plugin:import/errors",
        "plugin:import/warnings"
    ]
};
