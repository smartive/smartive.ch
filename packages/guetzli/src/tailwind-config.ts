import deepmerge from 'deepmerge';
const smartiveConfig = require('../tailwind.config');
const packageJson = require('../package.json');

const arrayMergeFn = (destinationArray: any[], sourceArray: any[]) => {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc;
    return [...acc, cur];
  }, []);
};

/**
 * Merge smartive configuration with external Tailwind CSS configuration
 * @param {object} tailwindConfig - external Tailwind config object
 * @return {object} merged config object
 */
export const tailwindConfig = (tailwindConfig: any) => {
  let purge;
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    };
  } else {
    purge = tailwindConfig.purge;
  }
  return deepmerge(
    { ...tailwindConfig, purge },
    {
      ...smartiveConfig,
      purge: {
        content: [`node_modules/${packageJson.name}/${packageJson.main}`],
      },
    },
    { arrayMerge: arrayMergeFn }
  );
};
