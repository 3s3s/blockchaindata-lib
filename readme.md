Install

npm install blockchaindata-lib

Using

```
'use strict';

const blockchaindata = require('blockchaindata-lib')

try {
    blockchaindata.SaveTextToBlockchain("this text will saved to Bitcoin testnet blockchain");
    
    blockchaindata.SaveBufferToBlockchain(Buffer.from(JSON.stringify({array: [1, 2, 3], message: "can save any buffer to blockchain"})));
    
    const savedObject = await blockchaindata.GetObjectFromBlockchain("8af6633160b982a0b0b4d4962ad28e0d5b3dd97e05e27cc2dd64ec0c56820df5");

    if (savedObject.type == 'text')
        console.log(Buffer.from(savedObject.base64, 'base64').toString('utf8'));
    else
        console.log(savedObject.base64);

}
catch (e) {
    console.log(e.message)
}

```

API

updateNetwork(url, user, password, network = "tBTC")

SaveTextToBlockchain(dataString, network = "tBTC")

SaveBufferToBlockchain(buffer, network = "tBTC")

SaveFileToBlockchain(data, network = "tBTC")

GetObjectFromBlockchain(txid, network = "tBTC")