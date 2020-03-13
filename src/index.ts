import { Compiler } from "webpack";
import IOptions from "./IOptions";

class DeclarationExportPlugin {
  constructor(options: IOptions) {
    console.log(options);
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(
      "DeclarationExportPlugin",
      (compilation, callback) => {
        const declarationFilesNames = Object.keys(compilation.assets).filter(
          asset => {
            if (asset.indexOf(".d.ts") !== -1) return asset;
          }
        );

        console.log(declarationFilesNames);

        callback();
      }
    );
  }

  private generateDeclarations() {}
}

export default DeclarationExportPlugin;
