import eslintConfigBrowser from "@freaktechnik/eslint-config-browser";
import eslintConfigWebpack from "@freaktechnik/eslint-config-webpack";
import vue from "eslint-plugin-vue";

export default [
    ...eslintConfigBrowser,
    ...eslintConfigWebpack,
    ...vue.configs["flat/vue2-strongly-recommended"],
    {
        files: [ "**/*.vue" ],
        rules: {
            "vue/html-indent": [
                "error",
                4,
            ],
        },
    },
];
