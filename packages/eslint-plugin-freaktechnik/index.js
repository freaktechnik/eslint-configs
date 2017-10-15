/**
 * ESLint default configs of freaktechnik.
 *
 * @module eslint-plugin-freaktechnik
 */
"use strict";

const base = require("eslint-config-base"),
    node = require("eslint-config-node"),
    test = require("eslint-config-test"),
    browser = require("eslint-config-browser"),
    extension = require("eslint-config-extension");

module.exports = {
    configs: {
        base,
        node,
        test,
        browser,
        extension
    }
};
