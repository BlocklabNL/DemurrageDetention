
var Shipment = artifacts.require("./Shipments.sol");

module.exports = function(deployer) {
  deployer.deploy(Shipment);
};
