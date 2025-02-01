import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default [
    {
        // General settings
        ignores: ['!**/.server', '!**/.client'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            // common rules
        },
        plugins: {
            // common plugins
        }
    },
    {
        // React settings
        files: ['**/*.{mjs,js,jsx,ts,tsx}'],
        plugins: {
            react: reactPlugin,
            'jsx-a11y': jsxA11yPlugin
        },
        settings: {
            react: {
                version: 'detect'
            },
            formComponents: ['Form'],
            linkComponents: [
                { name: 'Link', linkAttribute: 'to' },
                { name: 'NavLink', linkAttribute: 'to' }
            ],
            'import/resolver': {
                typescript: {}
            }
        },
        rules: {
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'quotes': ['error', 'single'],
            'comma-dangle': ['error', 'never']
        }
    },
    {
        // TypeScript settings
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tsPlugin,
            'import': importPlugin
        },
        languageOptions: {
            parser: tsParser
        },
        settings: {
            'import/internal-regex': '^~/',
            'import/resolver': {
                node: {
                    extensions: ['.ts', '.tsx']
                },
                typescript: {
                    alwaysTryTypes: true
                }
            }
        },
        rules: {
            '@typescript-eslint/indent': ['error', 4],
            'quotes': ['error', 'single'],
            'comma-dangle': ['error', 'never']
        }
    },
    {
        // Node environment settings
        files: ['.eslintrc.cjs'],
        languageOptions: {
            ecmaVersion: 'latest'
        },
        env: {
            node: true
        }
    }
];