
export default [
    {
        input: "src/fast-string.js",
        output: [
            {
                file: "dist/fast-string.cjs",
                format: "cjs"
            },
            {
                file: "dist/fast-string.js",
                format: "esm"
            }
        ]
    }
];
