const { beforeEach, it, expect } = require('@jest/globals');
const Blockchain = require('../blockchain');
const Block = require('../block');


describe('Blockchain', () => {

    let bc;
    beforeEach(() => {
        bc = new Blockchain;
    });

    it('Starts with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });
    it('Adds a new block', () => {
        const data = 'test.test';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });

});