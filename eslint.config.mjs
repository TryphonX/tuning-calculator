import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	...nextTs,
	{
		ignores: ['.venv/**'],
	},
	{
		extends: compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/eslint-recommended',
			'plugin:@typescript-eslint/recommended',
			'prettier',
		),

		plugins: {
			'@typescript-eslint': typescriptEslint,
			'@next/next': nextPlugin,
		},

		languageOptions: {
			parser: tsParser,
			globals: {
				...globals.browser,
				...globals.node,
			},
		},

		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			quotes: [
				'error',
				'single',
				{
					avoidEscape: true,
				},
			],
			semi: ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],
			'@typescript-eslint/no-unused-vars': 'error',
		},
	},
]);
