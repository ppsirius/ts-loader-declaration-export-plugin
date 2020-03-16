import DeclarationExportPlugin from "./index";

const options = {
  modulePath: "index.d.js",
  output: "dist/index.d.js"
};
test("should have apply method", () => {
  expect(DeclarationExportPlugin.apply).toBeDefined();
});

test("should get only declaration files names", () => {
  const assets = {
    "index.js": {},
    "src/index.d.ts": {},
    "index.d.ts": {}
  };

  const instance = new DeclarationExportPlugin(options);
  expect(instance.allDeclarationsName(assets)).toStrictEqual([
    "src/index.d.ts",
    "index.d.ts"
  ]);
});
