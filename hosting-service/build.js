const { build } = require("esbuild");
const { dependencies } = require("./package.json");

build({
  bundle: true,
  entryPoints: ["bin/hosting-service.ts"],
  external: Object.keys(dependencies),
  minify: true,
  outfile: "dist/hosting-service.js",
  platform: "node",
});
