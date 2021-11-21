const { beforeEach, it, expect } = require('@jest/globals');
const Blockchain = require('../blockchain');
const Block = require('../block');
const exp = require('constants');


describe('Blockchain', () => {

    let bc, bc2;
    beforeEach(() => {
        bc = new Blockchain;
        bc2 = new Blockchain;
    });

    it('Starts with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('Adds a new block', () => {
        const data = 'test.test';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });

    it('Validate a valid chain', () => {
        bc2.addBlock('500U$');
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it('Invalidate a chain with a corrupt genesis block', () => {
        bc2.chain[0].data = '0U$';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('Invalidates a corrupt chain', () => {
        bc2.addBlock('200U$');
        bc2.chain[1].data = '0U$';

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('replaces the chain with a valid chain', () => {
        bc2.addBlock('600U$');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    })

    it('does not replace the chain with one of less or equll length', () => {
        bc.addBlock('200U$');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);
    })

});