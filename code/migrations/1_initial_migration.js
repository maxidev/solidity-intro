var Migrations = artifacts.require("./Migrations.sol");
var Prueba = artifacts.require("./Prueba.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Prueba);
};
