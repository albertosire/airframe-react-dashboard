var path = require("path");

var root = path.join(__dirname);

var config = {
  rootDir: root,
  serveDir: path.join(root, ".serve"),
  distDir: path.join(root, "dist"),
  // Dart Sass 1.79+ warns on @import / global functions still used by
  // Bootstrap 5.3 and this theme. Silencing keeps the build readable;
  // a full @use migration is a separate effort.
  sassLoader: {
    loader: "sass-loader",
    options: {
      sassOptions: {
        quietDeps: true,
        silenceDeprecations: [
          "import",
          "global-builtin",
          "color-functions",
          "slash-div",
          "abs-percent",
          "legacy-js-api",
        ],
      },
    },
  },
  clientManifestFile: "manifest.webpack.json",
  clientStatsFile: "stats.webpack.json",
  srcDir: path.join(root, "app"),
  srcServerDir: path.join(root, "server"),
  srcHtmlLayout: path.join(root, "app", "index.html"),
  siteTitle: "Airframe Dashboard",
  siteDescription: "Painel de relatórios individualizados e projetos de times",
  siteCannonicalUrl: "http://localhost:4100",
  siteKeywords: "react dashboard bootstrap relatórios projetos",
};

module.exports = config;
