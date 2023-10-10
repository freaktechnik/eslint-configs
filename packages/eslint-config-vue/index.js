import eslintConfigBrowser from "@freaktechnik/eslint-config-browser";
import eslintConfigWebpack from "@freaktechnik/eslint-config-webpack";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url)),
    compat = new FlatCompat({
        baseDirectory: dirname,
        resolvePluginsRelativeTo: dirname,
    });

export default [
    ...eslintConfigBrowser,
    ...eslintConfigWebpack,
    ...compat.extends("plugin:vue/strongly-recommended"),
    {
        files: [ "**/*.vue" ],
        rules: {
            "vue/html-indent": [
                "error",
                4,
            ],
            "filenames/match-regex": [
                2,
                "^[A-Za-z0-9-]+$",
            ],
        },
    },
];
