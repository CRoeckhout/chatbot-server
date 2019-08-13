'use strict';
var _ = require('lodash');

module.exports = function (app) {

  // Create database tables
  var mysqlDs = app.dataSources.db;
  var models = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role',
  'Conversation', 'Question']
  _.forEach(models, ((model, modelName) => {
    modelName = model
    model = mysqlDs.models[model]
    _(model.definition.settings.foreignKeys).forEach((foreignKey) => mysqlDs.connector.execute(`ALTER TABLE ${modelName} DROP FOREIGN KEY ${foreignKey.name} ;`, (err) => { }));

    mysqlDs.autoupdate(modelName, function (err) {
      if (err) throw err;
    });
  }))
}