import eslintConfigBrowser from "@freaktechnik/eslint-config-browser";
import eslintConfigWebpack from "@freaktechnik/eslint-config-webpack";
import vue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig(
    eslintConfigBrowser,
    eslintConfigWebpack,
    vue.configs["flat/vue2-strongly-recommended"],
    {
        name: "freaktechnik/eslint-config-vue",
        files: [ "**/*.vue" ],
        rules: {
            "vue/html-indent": [
                "error",
                4,
            ],
        },
    },
);
