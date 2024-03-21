/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next', '@smartive/eslint-config/react'],
  root: true,
  plugins: ['validate-filename'],
  rules: {
    // still needed for: interactive-quiz.tsx, salary-calculator.tsx, get-meta.ts.
    // fixes for these eslint rules will be done in a separate PR - parallel to xstate upgrade
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-base-to-string': 'warn',

    'validate-filename/naming-rules': [
      'error',
      {
        rules: [
          {
            case: 'kebab',
            target: '**/**',
            // validate-filename doesn't support filenames which start with a number e.g. `blobs/1.tsx`
            excludes: ['blobs']
          },
        ],
      },
    ],
    'react/forbid-component-props': [
      'error',
      {
        forbid: [
          {
            propName: 'className',
            allowedFor: [
              'Blob',
              'ParallaxBlob',
              'Tag',
              'AvatarFallback',

              // 3rd Party Exceptions
              // guetzli
              'ArrowUp',
              'Heading1',
              'Heading2',
              'Heading3',
              'Clock',
              'Calendar',
              'Label',
              'Textarea',
              'Input',
              'Logo',
              'Copy',
              'Grid',
              'ChevronRight',

              // dato
              'DatoImage',

              // next
              'NextImage',
              'NextLink',

              // scrollex
              'Scroll.Container',
              'Scroll.Item',

              // /10 page
              'Section',

              // mux
              'MuxVideo',

              // three js
              'Canvas',
            ],

            message: 'Avoid using className',
          },
        ],
      },
    ],
  },
  ignorePatterns: ['.eslintrc.js', '*.config.js', 'test/check-page-errors.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': ['warn'],
        // react-datocms - Image component has no alt property
        'jsx-a11y/alt-text': [
          2,
          {
            elements: ['img', 'object', 'area', 'input[type="image"]'],
            object: ['Object'],
            area: ['Area'],
            'input[type="image"]': ['InputImage'],
          },
        ],
      },
    },
  ],
};
