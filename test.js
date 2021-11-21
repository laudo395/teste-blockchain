const Block = require('./block.js')


const block = new Block('123123', '12312asd', 'asdfasdfa', '100');


console.log(block.toString());


console.log(Block.genesis().toString())

const fistBlock = Block.mineBlock(Block.genesis(), '$500')


console.log(fistBlock.toString())



