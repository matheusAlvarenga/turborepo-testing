module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:storybook/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "space-before-function-paren": "off",
        "react/prop-types": "off",
        "import/prefer-default-export": "off",
        "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/require-default-props": "off"
    },
    "overrides": [
        {
            "files": ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
            "rules": {
            "storybook/hierarchy-separator": "error",
            "storybook/default-exports": "off",
            "import/no-extraneous-dependencies": "off"
            }
        },
        {
            "files": ["**/services/**"],
            "rules": {
            "import/no-cycle": "off"
            }
        }
    ],
    "ignorePatterns": [
        "build/*",
        ".turbo/*",
        "dist/*"
    ]
}