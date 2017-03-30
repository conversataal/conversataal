exports.modifyWebpackConfig = function(config, stage) {
  config.alias = {
      'materialize': 'materialize-css/dist/js/materialize.min',
      'materialize-css': 'materialize-css/dist/js/materialize.min'
  };
  return config
}