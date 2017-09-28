/**
 * ESLint default configs of freaktechnik.
 *
 * @module eslint-plugin-freaktechnik
 */
"use strict";

module.exports = {
    configs: {
        base: {
            env: {
                es6: true
            },
            parserOptions: {
                ecmaVersion: 6
            },
            plugins: [
                "jsdoc",
                "json",
                "security",
                "filenames",
                "promise"
            ],
            rules: {
                "jsdoc/check-param-names": 2,
                "jsdoc/check-tag-names": 1,
                "jsdoc/check-types": 2,
                "jsdoc/newline-after-description": 2,
                "jsdoc/require-description-complete-sentence": 2,
                "jsdoc/require-hyphen-before-param-description": 2,
                "jsdoc/require-param": 2,
                "jsdoc/require-param-type": 1,
                "jsdoc/require-param-description": 1,
                "jsdoc/require-returns-type": 1,
                "jsdoc/require-returns-description": 0,
                "valid-jsdoc": 1,
                "block-scoped-var": 2,
                "no-console": [2, {
                    "allow": [ "warn", "error" ]
                }],
                "indent": ["error", 4],
                "array-callback-return": 2,
                "consistent-return": 1,
                "curly": ["error", "all"],
                "default-case": 2,
                "dot-location": [2, "property"],
                "dot-notation": 2,
                "no-alert": 2,
                "no-caller": 2,
                "no-else-return": 2,
                "no-empty-function": 2,
                "no-eval": 2,
                "no-extra-bind": 2,
                "no-extra-label": 2,
                "no-floating-decimal": 2,
                "no-implied-eval": 2,
                "no-invalid-this": 2,
                "no-iterator": 2,
                "no-labels": 2,
                "no-lone-blocks": 2,
                "no-magic-numbers": 2,
                "no-multi-spaces": 2,
                "no-proto": 2,
                "no-return-assign": 2,
                "no-return-await": 2,
                "no-script-url": 2,
                "no-self-compare": 2,
                "no-sequences": 2,
                "no-unmodified-loop-condition": 2,
                "no-unused-expressions": 2,
                "no-useless-call": 2,
                "no-void": 2,
                "no-useless-escape": 2,
                "no-useless-concat": 2,
                "no-useless-return": 2,
                "no-with": 1,
                "radix": 2,
                "no-use-before-define": 2,
                "yoda": 2,
                "no-catch-shadow": 2,
                "no-shadow": 1,
                "array-bracket-spacing": [
                    "error",
                    {
                        minItems: 2
                    }
                ],
                "array-bracket-spacing": [2, "always"],
                "array-element-newline": [
                    "error",
                    {
                        minItems: 2
                    }
                ],
                "block-spacing": 2,
                "brace-style": [2, "stroustrup"],
                "camelcase": 2,
                "comma-dangle": 2
                "comma-spacing": 2,
                "comma-style": 2,
                "computed-property-spacing": 2,
                "consistent-this": [2, "self"],
                "eol-last": 2,
                "func-call-spacing": 2,
                "func-name-matching": 2,
                "key-spacing": 2,
                "keyword-spacing": [2, {
                    "overrides": {
                        "if": { "after": false },
                        "for": { "after": false },
                        "while": { "after": false },
                        "catch": { "after": false },
                        "function": { "after": false },
                        "super": { "after": false },
                        "switch": { "after": false },
                        "with": { "after": false }
                    }
                }],
                "linebreak-style": 2,
                "new-cap": 2,
                "new-parens": 2,
                "newline-per-chained-call": 1,
                "no-lonely-if": 2,
                "no-mixed-operators": 2,
                "no-multiple-empty-lines": 2,
                "no-tabs": 2,
                "no-trailing-spaces": 2,
                "no-underscore-dangle": 2,
                "no-unneeded-ternary": 2,
                "no-whitespace-before-property": 2,
                "object-curly-newline": [
                    "error",
                    {
                        "minProperties": 2
                    }
                ],
                "object-curly-spacing": [2, "always"],
                "object-property-newline": 2,
                "one-var-declaration-per-line": 2,
                "one-var": 1,
                "operator-linebreak": 2,
                "padded-block": [
                    "error",
                    "never"
                ],
                "semi-spacing": 2,
                "semi": 2,
                "space-before-blocks": 2,
                "space-before-function-paren": [2, {
                    "anonymous": "never",
                    "named": "never",
                    "asyncArrow": "always"
                }],
                "no-alert": 2,
                "space-infix-ops": 2,
                "space-unary-ops": 2,
                "arrow-body-style": 1,
                "arrow-parens": 2,
                "arrow-spacing": 2,
                "generator-star-spacing": [2, "after"],
                "no-var": 2,
                "object-shorthand": 1,
                "prefer-arrow-callback": 1,
                "prefer-const": 1,
                "no-loop-func": 1,
                "strict": 1,
                "prefer-promise-reject-errors": 1,
                "no-throw-literal": 1,
                "semi-style": [2, "last"],
                "switch-colon-spacing": 2,
                "template-tag-spacing": 2,
                "unicode-bom": 2,
                "getter-return": 2,
                "no-template-curly-in-string": 2,
                "class-methods-use-this": 2,
                "no-duplicate-imports": 2,
                "no-useless-computed-key": 2,
                "no-useless-constructor": 2,
                "no-useless-rename": 2,
                "prefer-destructuring": 1,
                "prefer-rest-params": 2,
                "prefer-spread": 2,
                "prefer-template": 2,
                "rest-spread-spacing": 2,
                "template-curly-spacing": 2,
                "yield-star-spacing": 2,
                "filenames/match-regex": [
                    2,
                    "^[a-z0-9-]+$"
                ],
                "eslint-comments/disable-enable-pair": 2,
                "eslint-comments/no-udplicate-disable": 2,
                "eslint-comments/no-unlimited-disable": 2,
                "eslint-comments/no-unused-disable": 2,
                "eslint-comments/no-unused-enable": 2,
                "sort-class-members/sort-class-members": [
                    2,
                    {
                        order: [
                            "[static-properties]",
                            "[static-getters]",
                            "[static-accessor-pairs]",
                            "[static-methods]",
                            "constructor",
                            "[properties]",
                            "[getters]",
                            "[accessor-pairs]",
                            "[conventional-private-properties]",
                            "[methods]",
                            "[conventional-private-methods]"
                        ],
                        groups: {
                            "static-accessor-pairs": [
                                {
                                    type: "method",
                                    accessorPair: true,
                                    static: true
                                }
                            ],
                            "static-getters": [
                                {
                                    type: "method",
                                    kind: "get",
                                    static: true,
                                    accessorPair: false
                                }
                            ]
                        }
                        accessorPairPositioning: "getThenSet"
                    }
                ]
            },
            settings: {
                jsdoc: {
                    tagNamePreference: {
                        augments: "extends",
                        constant: "const"
                    },
                    additionalTagNames: {
                        customTags: [
                            "async"
                        ]
                    }
                }
            },
            extends: [
                "eslint:recommended",
                "plugin:promise/recommended",
                "plugin:security/recommended"
            ]
        },
        node: {
            env:  {
                node: true,
                es6: true
            },
            parserOptions: {
                ecmaVersion: 2016
            },
            plugins: [
                "node"
            ],
            rules: {
                "no-new-require": 2,
                "no-sync": 1,
                "no-buffer-constructor": 2,
                "handle-callback-err": 1
            }
            extends: [
                "plugin:freaktechnik/base",
                "plugin:node/recommended"
            ]
        },
        test: {
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: "module"
            },
            plugins: [
                "ava"
            ],
            rules: {
                "jsdoc/check-param-names": 0,
                "jsdoc/check-tag-names": 0,
                "jsdoc/check-types": 0,
                "jsdoc/newline-after-description": 0,
                "jsdoc/require-description-complete-sentence": 0,
                "jsdoc/require-hyphen-before-param-description": 0,
                "jsdoc/require-param": 0,
                "jsdoc/require-param-type": 0,
                "jsdoc/require-param-description": 0,
                "jsdoc/require-returns-type": 0,
                "jsdoc/require-returns-description": 0,
                "one-var": 0,
                "node/no-unsupported-features": 0
            },
            extends: [
                "plugin:freaktechnik/node",
                "plugin:ava/recommended"
            ]
        },
        browser: {
            env: {
                browser: true
            },
            parserOptions: {
                ecmaVersion: 2017
            },
            plugins: [
                "xss"
            ],
            rules: {
                "xss/no-mixed-html": 2,
                "xss/no-location-href-assign": 2
            },
            extends: [
                "plugin:freaktechnik/base"
            ]
        },
        extension: {
            env: {
                webextensions: true
            },
            rules: {
                "strict": 0
            }
            extends: [
                "plugin:freaktechnik/browser"
            ]
        }
    }
};
