/// <reference types="node" />
import { Model } from '@kubernetes-models/base';
export interface ManifestGenerator {
    (): Array<Model<any>>;
}
export declare function combine(generators: ManifestGenerator[]): () => Model<any>[];
export declare function run(generator: ManifestGenerator, writer?: NodeJS.WritableStream): void;
