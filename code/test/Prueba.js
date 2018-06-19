const { BigNumber } = web3;
const should = require("chai")
  .use(require("chai-as-promised"))
  .use(require("chai-bignumber")(BigNumber))
  .should();

  const Prueba = artifacts.require('Prueba');

contract('Prueba', addresses => {
    const owner = addresses[0];

    describe('', () => {
        it("soloCall function should return false state", async () => {
            let prueba = await Prueba.new();
            let state = await prueba.soloCall();
            //console.log("State value: ", state);
            state.should.equal(false);
        });

        it("it should change boolState value", async () => {
            let prueba = await Prueba.new();
            let tx = await prueba.changeBoolState(true);
            //console.log(tx);
            let newState = await prueba.soloCall();
            //console.log("State value: ", newState);
            newState.should.equal(true);
        });
        
    });
});