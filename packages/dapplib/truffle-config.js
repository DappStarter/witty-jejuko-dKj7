require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stove crawl prefer pulp hundred light army gasp'; 
let testAccounts = [
"0xa6345d8fe03d6842b5cc6df548d76a480906d9e774f8285b2913997013016df4",
"0x8b46d1ebcfa69f3e753008fa6469ef4d600142eddc8878c128aaba26c4874886",
"0x6d1703f31d2f0d66267b967b5630b826f399e1920954243e753007b499bbeffa",
"0x766129da4c7929db2d0141ec14c9cc175ef488e722156198c275e353e5b75bfc",
"0x156c927c415b25974b3f5004a6592640c07bfd5438f4853d6b0a280aa1146b69",
"0x25408ed025504e1055f6b73d40308a5e9b762681f30f2cda1c29061341fda385",
"0x334aaa4337a69e8929c12757b138294c235fbed27e13afcebe8c44ff9ebbe3a6",
"0x40aa6b5a053f780faac30cf521701fc5ddb227fafc51775a501634c6821cbe82",
"0x5ac518ae3f1dd2229a0568f4cfdf95cfa7cc3cb61bfd0a9091ea4928e31695d9",
"0x6a4d398b1aa050f205c6719f4d7617c1d391e144111044bd14ed7eb61b9dd888"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

