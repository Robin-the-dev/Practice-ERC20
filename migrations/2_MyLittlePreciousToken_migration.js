const MyLittlePreciousToken = artifacts.require('MyLittlePreciousToken');

module.exports = deployer => {
  deployer.deploy(MyLittlePreciousToken, 'My Little Precious Token', 'MLPT');
};
