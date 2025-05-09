import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "no-console": ["error", { allow: ["warn", "error"] }],
            "semi": ["error", "always"],
            "quotes": ["error", "double"],
        }
    },
    {
        files: ["tests/**/*.js"],
        rules: {
            "no-console": "off"
        },
        env: {
            mocha: true,
            node: true
        }
    }
];
