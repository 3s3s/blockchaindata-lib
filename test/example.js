'use strict';

const blockchaindata = require('../lib/utils')

async function test1()
{
    try {
        //Save text to blockchain
        const ret1 = await blockchaindata.SaveTextToBlockchain("this text will saved to Bitcoin testnet blockchain");
        if (ret1.result == false) throw new Error("SaveTextToBlockchain failed, message: "+ret1.message);

        console.log("SaveTextToBlockchain success! txid="+ret1.txid)
        
        //Save buffer to blockchain
        const ret2 = await blockchaindata.SaveBufferToBlockchain(Buffer.from(JSON.stringify({array: [1, 2, 3], message: "can save any buffer to blockchain"})));
        if (ret2.result == false) throw new Error("SaveTextToBlockchain failed, message: "+ret2.message);

        console.log("SaveTextToBlockchain success! txid="+ret2.txid)
        
        //Get some data from blockchain
        const savedObject = await blockchaindata.GetObjectFromBlockchain("8af6633160b982a0b0b4d4962ad28e0d5b3dd97e05e27cc2dd64ec0c56820df5");
        if (savedObject.type == 'error') throw new Error(savedObject.message)
            
        if (savedObject.type == 'text')
            console.log(Buffer.from(savedObject.base64, 'base64').toString('utf8'));
        else
            console.log(savedObject.base64);
        
        //return transactions for saved data    
        return [ret1.txid, ret2.txid];
    
    }
    catch (e) {
        console.log(e.message)
    }
}

async function test2(savedArray)
{
    //Read saved data from blockchain
    try {
        for (let i=0; i<savedArray.length; i++)
        {
            const savedObject = await blockchaindata.GetObjectFromBlockchain(savedArray[i]);
            if (savedObject.type == 'error') throw new Error(savedObject.message)
                
            if (savedObject.type == 'text')
                console.log(Buffer.from(savedObject.base64, 'base64').toString('utf8'));
            else
                console.log(savedObject.base64);
        }
    }
    catch(e) {
        console.log(e.message)
    }
}


async function RunTests()
{
    const saved = await test1();
    
    await test2(saved);
}

RunTests();