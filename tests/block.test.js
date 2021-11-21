const { describe, it, beforeEach, expect } = require('@jest/globals');
const Block = require('../block.js');

describe('Block', () => {

    let data, lastBlock, block;

    beforeEach(() => {

        data = "test.test";
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);

    })

    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    })

    it('sets the `lastHash` to match the hash of the last Block', () => {
        expect(block.lasthash).toEqual(lastBlock.hash);
    })
});
