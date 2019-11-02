/**
 * Invalidate a file path from require cache.
 *
 * @param filePath File path to invalidate
 */
const invalidateRequireCacheForFile = function(filePath: string) {
  delete require.cache[require.resolve(filePath)];
};

/**
 * Require a file without using cached version.
 *
 * @param filePath File path to require
 */
export const requireNoCache = function(filePath: string) {
  invalidateRequireCacheForFile(filePath);
  return require(filePath);
};
