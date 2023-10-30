/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next', '@smartive/eslint-config/react'],
  root: true,
  rules: {
    'react/forbid-component-props': [
      'error',
      {
        forbid: [
          {
            propName: 'className',
            allowedFor: [
              'NextImageCard',
              'Blob',
              'ParallaxBlob',
              'Tag',
              'MdcfThemesAnimation',
              'NotionRichText',

              // 3rd Party Exceptions
              // guetzli
              'ArrowUp',
              'Heading1',
              'Heading2',
              'Heading3',
              'Calendar',
              'Clock',
              'Share',
              'Label',
              'Textarea',
              'Input',
              'Logo',
              'Copy',
              'Grid',
              'ChevronRight',
              'ImageCard',

              // dato
              'DatoImage',

              // next
              'NextImage',
              'NextLink',

              // scrollex
              'Scroll.Container',
              'Scroll.Item',
            ],

            message: 'Avoid using className',
          },
        ],
      },
    ],
  },
  ignorePatterns: ['.eslintrc.js', '*.config.js', 'next-sitemap.js'],
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
