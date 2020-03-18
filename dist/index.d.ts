import { Compiler } from "webpack";
import IOptions from "./IOptions";
declare class DeclarationExportPlugin {
    modulePath: string;
    output: string;
    folderName: string;
    constructor(options: IOptions);
    static allDeclarationsName(assets: object): string[];
    static filterDeclarationsName(declarations: string[], modulePath: string): string[];
    filterDeclarationsAssets: (allAssets: {
        [key: string]: string;
    }, filteredDeclarations: string[]) => object[];
    deleteDeclarationsAssets: (allAssets: {
        [key: string]: string;
    }) => void;
    apply(compiler: Compiler): void;
}
export default DeclarationExportPlugin;
