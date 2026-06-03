export default {
  'src/**/*.{ts,tsx}': [
    () => 'tsc --noEmit -p tsconfig.json',
    'eslint --fix',
  ],
  'src/**/*.{ts,tsx,css,json}': [
    'prettier --write',
  ],
}
