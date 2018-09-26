/**
 * This function rewrites the path of all nodes to remove all trailing slashes.
 * @param {page} page       Gatsby Page
 * @param {object} actions  Gatsby Action Creators
 * @returns {Promise}
 */
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const newPage = Object.assign({}, page);

  return new Promise((resolve) => {
    // Remove trailing slash
    const oldPath = newPage.path;
    // Removing '/' would result in a path that's
    // an empty string which is invalid
    newPage.path = newPage.path === '/' ? newPage.path : newPage.path.replace(/\/$/, '');
    if (newPage.path !== oldPath) {
      // Remove the old page
      deletePage({ path: oldPath });

      // Add the new page
      createPage(newPage);
    }

    resolve();
  });
};
