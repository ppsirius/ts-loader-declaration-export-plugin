import { Compiler } from "webpack";
import IOptions from "./IOptions";

class DeclarationExportPlugin {
  modulePath: string;
  output: string;
  folderName: string;

  constructor(options: IOptions) {
    if (!options.modulePath || !options.output || !options.folderName) {
      throw new Error(`Please set correct options object, check docs`);
    }
    this.modulePath = options.modulePath;
    this.output = options.output;
    this.folderName = options.folderName;
  }

  static allDeclarationsName(assets: object): string[] {
    return Object.keys(assets).filter(asset => {
      if (asset.indexOf(".d.ts") !== -1) return asset;
    });
  }

  static filterDeclarationsName(
    declarations: string[],
    modulePath: string
  ): string[] {
    return declarations.filter(declaration => {
      console.log(declaration, " declaration");
      if (declaration.indexOf(`${modulePath}`) !== -1) {
        console.log(declaration, " declaration if");
        return declaration;
      }
    });
  }

  filterDeclarationsAssets = (
    allAssets: { [key: string]: string },
    filteredDeclarations: string[]
  ): object[] => {
    const filteredAssets: object[] = Object.keys(allAssets)
      .filter(fileName => {
        for (const file of filteredDeclarations) {
          if (fileName.indexOf(file) !== -1) {
            return fileName;
          }
        }
      })
      .map(fileName => {
        return {
          [this.output]: allAssets[fileName]
        };
      });

    return filteredAssets;
  };

  deleteDeclarationsAssets = (allAssets: { [key: string]: string }): void => {
    DeclarationExportPlugin.allDeclarationsName(allAssets).forEach(asset => {
      delete allAssets[asset];
    });
  };

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(
      "DeclarationExportPlugin",
      (compilation, callback) => {
        const filteredDeclarations = DeclarationExportPlugin.filterDeclarationsName(
          DeclarationExportPlugin.allDeclarationsName(compilation.assets),
          this.modulePath
        );

        const generatedDeclarations = this.filterDeclarationsAssets(
          compilation.assets,
          filteredDeclarations
        );

        this.deleteDeclarationsAssets(compilation.assets);

        compilation.assets = {
          ...compilation.assets,
          ...generatedDeclarations[0]
        };
        console.log(...generatedDeclarations, " decration assets ");
        console.log(compilation.assets, " compilation.assets");

        callback();
      }
    );
  }
}

export default DeclarationExportPlugin;
