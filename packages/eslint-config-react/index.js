import eslintConfigBrowser from "@freaktechnik/eslint-config-browser";
import eslintConfigWebpack from "@freaktechnik/eslint-config-webpack";
import eslintConfigBabel from "@freaktechnik/eslint-config-babel";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig(
    eslintConfigBrowser,
    eslintConfigWebpack,
    eslintConfigBabel,
    reactPlugin.configs.flat.recommended,
    jsxA11y.flatConfigs.recommended,
    {
        files: [
            "**/*.jsx",
            "**/*.mjsx",
        ],
        plugins: {
            "react-hooks": reactHooks,
        },
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
            "react/self-closing-comp": "error",
            "react/prefer-stateless-function": "warn",
            "react/prefer-es6-class": "error",
            "react/no-unsafe": "error",
            "react/no-unused-prop-types": "error",
            "react/no-unused-state": "error",
            "react/no-will-update-set-state": "error",
            "react/jsx-no-bind": "warn",
            "react/jsx-indent": [
                "error",
                4,
            ],
            "react/jsx-equals-spacing": "error",
            "react/jsx-curly-spacing": [
                "warn",
                {
                    when: "always",
                    children: true,
                },
            ],
            "react/jsx-filename-extension": "warn",
            "react/jsx-no-comment-textnodes": "warn",
            "react/jsx-tag-spacing": [
                "error",
                {
                    "closingSlash": "never",
                    "beforeSelfClosing": "never",
                    "afterOpening": "never",
                    "beforeClosing": "never",
                },
            ],
            "react/jsx-props-no-multi-spaces": "error",
            "react/jsx-pascal-case": "warn",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
);
