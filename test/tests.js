'use strict';

const blockchaindata = require('../lib/utils')

async function run()
{
    const ret = await blockchaindata.SplitBalance();
    console.log(ret);
}

run();