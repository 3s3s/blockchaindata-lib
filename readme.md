## Documentation

Presently, we do not have any formal documentation other than our [example](https://github.com/3s3s/blockchaindata-lib/tree/master/test:// "example")

## Installation

``` bash
npm install blockchaindata-lib
```
## API

`SaveTextToBlockchain( dataString )`
dataString - any string that will be saved to blockchain

`SaveJSONToBlockchain( objectJSON )`
objectJSON - any json object that will be savet to blockchain

`SaveFileToBlockchain( data )`
data - the javascript File object 

`GetObjectFromBlockchain( txid )`
txid - transaction id


##### Return values
All "Save" functions are returned the json object 
`{result: boolean, message: string, txid: string}`

function GetObjectFromBlockchain returned the json object
`{type: string, base64: string}`