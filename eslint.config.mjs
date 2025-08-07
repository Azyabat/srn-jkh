import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
      "next/core-web-vitals",
      "next/typescript",
      "prettier"
    )
  ),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      prettier: fixupPluginRules(prettier),
      react: fixupPluginRules(react),
    },

    settings: {
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx"],
        },

        typescript: {
          project: "./tsconfig.json",
        },

        alias: {
          map: [["@", path.resolve(__dirname, './src')]],
          extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx"],
        },
      },

      react: {
        pragma: "React",
        version: "detect",
      },
    },
    rules: {
      "newline-before-return": "error",
      "lines-between-class-members": ["error", "always"],
      "prettier/prettier": "error",
      "node/no-missing-require": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-named-as-default": 0,
      "node/no-missing-import": "off",
      "import/no-extraneous-dependencies": "error",
      "node/no-extraneous-require": "off",
      "node/no-extraneous-import": "off",
      "import/no-unresolved": "error",
      "no-unused-vars": "off",

      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
        },
      ],

      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",

      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
    },
  },
];

export default eslintConfig;
