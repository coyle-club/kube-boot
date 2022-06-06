import { run, combine } from './index';

run(combine(process.argv.slice(2).map(require)));
