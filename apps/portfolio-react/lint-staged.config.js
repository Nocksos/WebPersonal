export default {
  'src/**/*.{ts,tsx}': () => 'tsc --noEmit -p tsconfig.json',
  'src/**/*.{ts,tsx,css,json}': [
    'eslint --fix',
    'prettier --write',
  ],
}
