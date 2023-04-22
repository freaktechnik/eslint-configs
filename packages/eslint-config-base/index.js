"use strict";

module.exports = {
    env: {
        es2021: true,
        "shared-node-browser": true
    },
    parserOptions: {
        ecmaVersion: "latest"
    },
    plugins: [
        "jsdoc",
        "json-light",
        "security",
        "filenames",
        "promise",
        "eslint-comments",
        "sort-class-members",
        "unicorn",
        "optimize-regex"
    ],
    rules: {
        "jsdoc/check-access": 1,
        "jsdoc/check-alignment": 2,
        "jsdoc/check-param-names": 2,
        "jsdoc/check-tag-names": 1,
        "jsdoc/check-types": 2,
        "jsdoc/newline-after-description": 2,
        "jsdoc/require-description-complete-sentence": 2,
        "jsdoc/require-hyphen-before-param-description": 2,
        "jsdoc/require-param": 2,
        "jsdoc/require-param-type": 1,
        "jsdoc/require-param-name": 1,
        "jsdoc/require-param-description": 1,
        "jsdoc/require-returns-type": 1,
        "jsdoc/require-returns-description": 0,
        "jsdoc/check-property-names": 2,
        "jsdoc/valid-types": 2,
        "jsdoc/check-values": 1,
        "jsdoc/empty-tags": 1,
        "jsdoc/implements-on-classes": 1,
        "jsdoc/multiline-blocks": 1,
        "jsdoc/no-multi-asterisks": 1,
        "jsdoc/require-property": 1,
        "jsdoc/require-property-description": 1,
        "jsdoc/require-property-name": 1,
        "jsdoc/require-property-type": 1,
        "jsdoc/require-returns": 1,
        "jsdoc/require-returns-check": 1,
        "jsdoc/require-yields": 1,
        "jsdoc/require-yields-check": 1,
        "jsdoc/tag-lines": 1,
        "jsdoc/sort-tags": 1,
        "jsdoc/check-syntax": 2,
        "block-scoped-var": 2,
        "no-console": [
            2,
            {
                allow: [
                    "warn",
                    "error"
                ]
            }
        ],
        "indent": [
            "error",
            4
        ],
        "array-callback-return": 2,
        "consistent-return": 1,
        "curly": [
            "error",
            "all"
        ],
        "default-case": 2,
        "dot-location": [
            2,
            "property"
        ],
        "dot-notation": 2,
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
        "array-bracket-newline": [
            "error",
            {
                minItems: 2
            }
        ],
        "array-bracket-spacing": [
            2,
            "always"
        ],
        "array-element-newline": [
            "error",
            {
                minItems: 2
            }
        ],
        "block-spacing": 2,
        "brace-style": [
            2,
            "stroustrup"
        ],
        "camelcase": 2,
        "comma-dangle": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-this": [
            2,
            "self"
        ],
        "eol-last": 2,
        "func-call-spacing": 2,
        "func-name-matching": 2,
        "key-spacing": 2,
        "keyword-spacing": [
            2,
            {
                overrides: {
                    if: { "after": false },
                    for: { "after": false },
                    while: { "after": false },
                    catch: { "after": false },
                    function: { "after": false },
                    super: { "after": false },
                    switch: { "after": false },
                    with: { "after": false }
                }
            }
        ],
        "linebreak-style": 2,
        "new-cap": 2,
        "new-parens": 2,
        "newline-per-chained-call": 1,
        "no-lonely-if": 2,
        "no-mixed-operators": 2,
        "no-multiple-empty-lines": 2,
        "no-tabs": 2,
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "object-curly-newline": [
            "error",
            {
                minProperties: 2,
                consistent: true
            }
        ],
        "object-curly-spacing": [
            2,
            "always"
        ],
        "object-property-newline": 2,
        "one-var-declaration-per-line": 2,
        "one-var": 1,
        "operator-linebreak": 2,
        "padded-blocks": [
            "error",
            "never"
        ],
        "semi-spacing": 2,
        "semi": 2,
        "space-before-blocks": 2,
        "space-before-function-paren": [
            2,
            {
                anonymous: "never",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "no-alert": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "arrow-body-style": 1,
        "arrow-parens": 2,
        "arrow-spacing": 2,
        "generator-star-spacing": [
            2,
            "after"
        ],
        "no-var": 2,
        "object-shorthand": 1,
        "prefer-arrow-callback": 1,
        "prefer-const": 1,
        "no-loop-func": 1,
        "strict": 1,
        "prefer-promise-reject-errors": 1,
        "no-throw-literal": 1,
        "semi-style": [
            2,
            "last"
        ],
        "switch-colon-spacing": 2,
        "template-tag-spacing": 2,
        "unicode-bom": 2,
        "getter-return": 2,
        "no-template-curly-in-string": 2,
        "class-methods-use-this": 1,
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
        "require-atomic-updates": 2,
        "no-async-promise-executor": 2,
        "no-misleading-character-class": 2,
        "no-prototype-builtins": 0,
        "no-negated-condition": "warn",
        "prefer-object-has-own": "warn",
        "no-constant-binary-expression": "error",
        "no-new-native-nonconstructor": "error",
        "no-empty-static-block": "error",
        "filenames/match-regex": [
            2,
            "^[a-z0-9-.]+$"
        ],
        "promise/always-return": 1,
        "promise/prefer-await-to-then": "warn",
        "security/detect-non-literal-fs-filename": 0,
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
                    "[conventional-private-getters]",
                    "[conventional-private-accessor-pairs]",
                    "[methods]",
                    "[conventional-private-methods]"
                ],
                groups: {
                    "static-accessor-pairs": [ {
                        type: "method",
                        accessorPair: true,
                        static: true
                    } ],
                    "static-getters": [ {
                        type: "method",
                        kind: "get",
                        static: true,
                        accessorPair: false
                    } ],
                    "conventional-private-getters": [ {
                        type: "method",
                        kind: "get",
                        accessorPair: false,
                        name: "/_.+/"
                    } ],
                    "conventional-private-accessor-pairs": [ {
                        type: "method",
                        accessorPair: true,
                        name: "/_.+/"
                    } ]
                },
                accessorPairPositioning: "getThenSet"
            }
        ],
        "security/detect-object-injection": 0,
        "unicorn/throw-new-error": "error",
        "unicorn/number-literal-case": "error",
        "unicorn/escape-case": "error",
        "unicorn/no-array-instanceof": "error",
        "unicorn/no-new-buffer": "error",
        "unicorn/no-hex-escape": "error",
        "unicorn/prefer-starts-ends-with": "error",
        "unicorn/import-index": [
            "warn",
            {
                ignoreImports: true
            }
        ],
        "unicorn/new-for-builtins": "error",
        "unicorn/regex-shorthand": "warn",
        "unicorn/error-message": "warn",
        "unicorn/prefer-exponentiation-operator": "warn",
        "unicorn/no-console-spaces": "warn",
        "unicorn/no-for-loop": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/expiring-todo-comments": "warn",
        "unicorn/prevent-abbreviations": [
            "warn",
            {
                replacements: {
                    args: false
                }
            }
        ],
        "unicorn/prefer-string-slice": "error",
        "unicorn/prefer-negative-index": "error",
        "unicorn/prefer-trim-start-end": "error",
        "unicorn/prefer-set-has": "warn",
        "unicorn/no-null": "warn",
        "unicorn/prefer-array-find": "error",
        "unicorn/prefer-date-now": "error",
        "unicorn/empty-brace-spaces": "warn",
        "unicorn/no-lonely-if": "warn",
        "unicorn/prefer-default-parameters": "warn",
        "unicorn/prefer-array-some": "warn",
        "unicorn/prefer-regexp-test": "warn",
        "unicorn/prefer-array-index-of": "error",
        "unicorn/no-this-assignment": "error",
        "unicorn/no-array-push-push": "warn",
        "unicorn/no-array-for-each": "warn",
        "unicorn/no-useless-undefined": "error",
        "unicorn/prefer-switch": "error",
        "unicorn/require-array-join-separator": "error",
        "unicorn/require-number-to-fixed-digits-argument": "error",
        "unicorn/prefer-prototype-methods": "error",
        "unicorn/no-array-method-this-argument": "warn",
        "unicorn/no-useless-fallback-in-spread": "error",
        "unicorn/no-empty-file": "error",
        "unicorn/no-useless-promise-resolve-reject": "error",
        "unicorn/prefer-logical-operator-over-ternary": "error",
        "unicorn/no-typeof-undefined": "error",
        "unicorn/prefer-set-size": "error",
        "unicorn/no-unnecessary-await": "warn",
        "unicorn/no-useless-switch-case": "error",
        "unicorn/prefer-modern-math-apis": "error",
        "unicorn/no-unreadable-iife": "error",
        "unicorn/prefer-native-coercion-functions": "warn",
        "unicorn/prefer-replace-all": "warn",
        "unicorn/prefer-optional-catch-binding": "warn",
        "optimize-regex/optimize-regex": "warn"
    },
    settings: {
        jsdoc: {
            tagNamePreference: {
                augments: "extends",
                constant: "const"
            },
            additionalTagNames: {
                customTags: [ "async" ]
            },
            mode: "typescript"
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:promise/recommended",
        "plugin:security/recommended",
        "plugin:array-func/recommended",
        "plugin:eslint-comments/recommended"
    ]
};
