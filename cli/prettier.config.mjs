import baseConfig from "../prettier.config.mjs";

/**
 * @type {import('prettier').Config}
 */
const config = {
  ...baseConfig,
  arrowParens: "always",
  trailingComma: "es5",
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/", "^[.][.]/", "^[.]/"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
};

export default config;
