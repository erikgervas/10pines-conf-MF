export default (config, env, helpers) => {
  config.output.library = 'loomio';
  config.output.libraryTarget = 'umd';
  config.output.chunkFilename = '[name].js';
  config.entry.singleSpaEntry = './singleSpaEntry.js';
};