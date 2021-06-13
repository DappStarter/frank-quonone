require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strike rival sad social hover civil army giggle'; 
let testAccounts = [
"0x348a1c2e2e5e5d3625f0f0d0b2cd6a89d433e3722582bdf64841dd01b97f8ba7",
"0x0c20abfa388f28c8f13dabe4d5760ffdbc4f841294a7163f83b3a71a7279b36f",
"0x9e4cdb77cbbf6d92cf3629f85da4cc34ec193228d401b8e1d33ba937bbfef788",
"0x785df5c9f3892f99405baa58891b673b1903aad59377c280b0c1f4a2b5f5c862",
"0x3cdb3a80ee435188a1f81e1e634deb09737e19370d107f46a7b5fe7dc4eb6c57",
"0x92639fffc0cc805fd60db0db936fd994afe64b25d5f26738acc98c28d025ba70",
"0xab37b3b1fd820bbb5d5d86714b4528ff149a9a70166ee9cc33b806025f00c05f",
"0x8e4179c28dfa0a9de544753f07ffd432cb5876701fe95f1d77ac94773400b31d",
"0x76ca46bce559179023581e5d0009ff47e40055aa7486a3552a5ea0f4b26d576d",
"0x8f14d96d46678022c8c67eab259464832aaf3976094340d57ae1ff7006d5f32d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

