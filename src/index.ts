import { Compiler } from "webpack";
import IOptions from "./IOptions";

class DeclarationExportPlugin {
  modulePath: string;
  output: string;

  constructor(options: IOptions) {
    if (!options.modulePath || !options.output) {
      throw new Error(`Please set correct options object, check docs`);
    }
    this.modulePath = options.modulePath;
    this.output = options.output;
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
      if (declaration.indexOf(`${modulePath}`) !== -1) {
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

        callback();
      }
    );
  }
}

export default DeclarationExportPlugin;
