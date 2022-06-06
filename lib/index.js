"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.combine = void 0;
const yaml_1 = __importDefault(require("yaml"));
function combine(generators) {
    return () => generators.flatMap((generator) => generator());
}
exports.combine = combine;
function run(generator, writer) {
    const w = writer !== null && writer !== void 0 ? writer : process.stdout;
    generator().map((manifest) => w.write(yaml_1.default.stringify(manifest, { directives: true })));
}
exports.run = run;
