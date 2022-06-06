import YAML from 'yaml';
import { Model } from '@kubernetes-models/base';

export interface ManifestGenerator {
  (): Array<Model<any>>;
}

export function combine(generators: ManifestGenerator[]) {
  return () => generators.flatMap((generator) => generator());
}

export function run(
  generator: ManifestGenerator,
  writer?: NodeJS.WritableStream
) {
  const w = writer ?? process.stdout;
  generator().map((manifest) =>
    w.write(YAML.stringify(manifest, { directives: true }))
  );
}
