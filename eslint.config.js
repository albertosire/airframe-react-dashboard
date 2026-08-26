const js = require('@eslint/js');
const globals = require('globals');
const babelParser = require('@babel/eslint-parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');

module.exports = [
    js.configs.recommended,
    {
        files: ['app/**/*.{js,jsx}', 'build/**/*.js'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react'],
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            import: importPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        },
    },
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
];
