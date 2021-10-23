"use strict";

module.exports = {
    env: {
        browser: true
    },
    parserOptions: {
        ecmaVersion: "latest"
    },
    plugins: [
        "xss",
        "compat"
    ],
    rules: {
        "xss/no-mixed-html": 2,
        "xss/no-location-href-assign": 2,
        "compat/compat": 2,
        "tree-shaking/no-side-effects-in-initialization": 0,
        "unicorn/prefer-add-event-listener": "error",
        "unicorn/prefer-node-append": "warn",
        "unicorn/prefer-node-remove": "warn",
        "unicorn/prefer-text-content": "error",
        "unicorn/prefer-dataset": "error",
        "unicorn/prefer-modern-dom-apis": "warn",
        "unicorn/no-invalid-remove-event-listener": "error"
    },
    extends: [ "@freaktechnik/eslint-config-base" ]
};
