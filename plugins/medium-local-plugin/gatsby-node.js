const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

const prefix = `])}while(1);</x>`;

const convertTimestamps = (nextObj, prevObj, prevKey) => {
  if (typeof nextObj === `object`) {
    Object.keys(nextObj).map(key => convertTimestamps(nextObj[key], nextObj, key));
  } else {
    if (typeof nextObj === `number` && nextObj >> 0 !== nextObj) {
      const date = new Date(nextObj);
      if (date.getTime() === nextObj) {
        prevObj[prevKey] = date.toISOString().slice(0, 10);
      }
    }
  }
};

const strip = payload => payload.replace(prefix, ``);

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, { path }) => {
  const { createNode } = actions;

  try {
    let result;
    try {
      result = await readFileAsync(path, 'utf8');
    } catch (e) {
      console.error(`Cannot read blog post file ${path}!`);
      throw e;
    }
    const json = JSON.parse(strip(result));

    let importableResources = [];
    let posts = {}; // because `posts` needs to be in a scope accessible by `links` below

    const users = Object.keys(json.payload.references.User).map(key => json.payload.references.User[key]);
    importableResources = importableResources.concat(users);

    if (json.payload.posts) {
      posts = json.payload.posts;
      importableResources = importableResources.concat(posts);
    }

    if (json.payload.references.Post) {
      posts = Object.keys(json.payload.references.Post).map(key => json.payload.references.Post[key]);
      importableResources = importableResources.concat(posts);
    }

    if (json.payload.references.Collection) {
      const collections = Object.keys(json.payload.references.Collection).map(
        key => json.payload.references.Collection[key]
      );
      importableResources = importableResources.concat(collections);
    }

    const resources = Array.prototype.concat(...importableResources).map(resource => {
      return {
        ...resource,
        medium_id: resource.id,
        id: createNodeId(resource.id ? resource.id : resource.userId),
      };
    });

    const getID = node => (node ? node.id : null);

    resources.map(resource => {
      convertTimestamps(resource);

      const contentDigest = createContentDigest(resource);

      const links =
        resource.type === `Post`
          ? {
              author___NODE: getID(resources.find(r => r.userId === resource.creatorId)),
            }
          : resource.type === `User`
          ? {
              posts___NODE: resources.filter(r => r.type === `Post` && r.creatorId === resource.userId).map(r => r.id),
            }
          : {};

      const node = Object.assign(
        resource,
        {
          parent: null,
          children: [],
          internal: {
            type: `Medium${resource.type}`,
            contentDigest,
          },
        },
        links
      );

      createNode(node);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
