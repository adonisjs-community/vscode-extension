// tslint:disable: curly
const { locate } = require("func-loc");
import { requireNoCache } from "./require";

/**
 * Location in a file.
 */
export type Location = {
  lineNo: number;
  column: number;
  source: string;
};

/**
 * Get the line number a function is declared in a Javascrip file.
 *
 * @param functionName Function name to locate
 * @param jsFilePath Javascript file to search
 */
export async function getLineNumber(
  functionName: string,
  jsFilePath: string
): Promise<Location> {
  const notFound: Location = { lineNo: -1, column: -1, source: "" };
  const file = requireNoCache(jsFilePath.replace(/file:\/\//, ""));
  const prototype = file.prototype[functionName];
  if (!prototype) return notFound;

  const declation = await locate(prototype);
  if (!declation) return notFound;

  return { lineNo: declation.line, ...declation };
}
