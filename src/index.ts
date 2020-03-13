class DeclarationExportPlugin {
  constructor(options = {}) {
    console.log(options);
  }

  apply(compiler) {
    console.log(compiler, " compiler object");
    compiler.hooks.done.tap("Hello World Plugin", (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      console.log("Hello World!");
      return "lol";
    });
  }
}

export default DeclarationExportPlugin;
