import DeclarationExportPlugin from "./index";

const options = {
  modulePath: "src/index.d.ts",
  output: "dist/index.d.js",
  folderName: "projectFolder"
};

test("should have apply method", () => {
  expect(DeclarationExportPlugin.apply).toBeDefined();
});

test("should get only declaration files names", () => {
  const assets = {
    "index.js": {},
    "src/index.d.ts": {},
    "index.d.ts": {},
    "src/example/utils.d.ts": {},
    "src/example/utils.ts": {},
    "src/example/utils.js": {}
  };

  expect(DeclarationExportPlugin.allDeclarationsName(assets)).toStrictEqual([
    "src/index.d.ts",
    "index.d.ts",
    "src/example/utils.d.ts"
  ]);
});

test("should get filtered declaration files names", () => {
  const declarationNames = [
    "projectFolder/src/index.d.ts",
    "index.d.ts",
    "src/example/utils.d.ts"
  ];

  const filteredDeclarations = DeclarationExportPlugin.filterDeclarationsName(
    declarationNames,
    options.folderName,
    options.modulePath
  );
  expect(filteredDeclarations).toStrictEqual(["projectFolder/src/index.d.ts"]);
});
