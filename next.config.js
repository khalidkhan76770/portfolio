module.exports = {
  reactStrictMode: true,
  /**
   * Export the site to work on GitHub Pages under the /portfolio
   * sub‑path. The basePath and assetPrefix ensure all links and
   * assets resolve correctly when deployed at
   * https://<user>.github.io/portfolio/.
   */
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
};
