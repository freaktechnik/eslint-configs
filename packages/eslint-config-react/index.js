"use strict";

module.exports = {
    rules: {
        "no-fallthrough": 0,
        "one-var": 0,
        "react/default-props-match-prop-types": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-danger": "error",
        "react/no-multi-comp": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-typos": "warn",
        "react/no-this-in-sfc": "error",
        "react/void-dom-elements-no-children": "error",
        "react/self-closing-prop": "error",
        "react/prefer-stateless-function": "warn",
        "react/prefer-es6-class": "error",
        "react/no-unsafe": "error",
        "react/no-unused-prop-types": "error",
        "react/no-unused-state": "error",
        "react/no-will-update-set-state": "error",
        "react/jsx-no-bind": "warn",
        "react/jsx-indent": ["error", 4],
        "react/jsx-equals-spacing": "error",
        "react/jsx-curly-spacing": [
            "warn",
            {
                when: "always",
                children: true
            }
        ],
        "react/jsx-filename-extension": "warn",
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-tag-spacing": [
            "error",
            {
                "closingSlash": "never",
                "beforeSelfClosing": "never",
                "afterOpening": "never",
                "beforeClosing": "never"
            }
        ],
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-pascal-case": "warn"
    },
    plugins: [ "jsx-a11y" ],
    extends: [
        "@freaktechnik/eslint-config-browser",
        "@freaktechnik/eslint-config-webpack",
        "@freaktechnik/eslint-config-babel",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ]
};
