import nodeHtmlToImage from 'node-html-to-image';
import tailwindConfig from '../../tailwind.config';

const backgroundColors = [
  tailwindConfig.theme.colors.apricot[500],
  tailwindConfig.theme.colors.cornflower[500],
  tailwindConfig.theme.colors.mint[500],
] as const;

const getOGImageTemplate = (text: string, decoration?: string) => `<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=block" rel="stylesheet" />
  <style>
    body {
        display: grid;
        place-content: center;
        text-align: center;
        width: 1200px;
        height: 628px;
        padding: 2rem;

        background-color: ${backgroundColors[Math.floor(Math.random() * 3)]};
        color: ${tailwindConfig.theme.colors.black};

        font-family: ${tailwindConfig.theme.fontFamily.sans.join(',')};
        font-weight: ${tailwindConfig.theme.fontWeight.bold};
        font-size: ${tailwindConfig.theme.fontSize.xxl[0]};
        line-height: ${tailwindConfig.theme.fontSize.xxl[1]};
    }
    .decoration {
        font-family: ${tailwindConfig.theme.fontFamily.serif.join(',')};
        font-weight: ${tailwindConfig.theme.fontWeight.normal};
        font-style: italic;
    }
  </style>
</head>
<body>
    <p>
    ${
      decoration ? `${text.split(decoration)[0]}<em class="decoration">${decoration}</em>${text.split(decoration)[1]}` : text
    }
    </p>
</body>
</html>
`;

export const generateMetaImage = async (text: string, decoration?: string) => {
  const encodedImage = (
    await nodeHtmlToImage({
      html: getOGImageTemplate(text, decoration),
      type: 'png',
      transparent: false,
      puppeteerArgs: { args: ['--no-sandbox'] },
    })
  ).toString('base64');

  return `data:image/png;base64,${encodedImage}`;
};
