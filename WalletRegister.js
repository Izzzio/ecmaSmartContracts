/**
 * Wallet registrator and checker
 */
class WalletRegister extends Contract {
    init() {
        this.wallets = new BlockchainObject('wallets');
    }

    /**
     * Register new wallet and public key
     */
    registerWallet(address, publicKey) {
        assert.false(this.wallets[address], 'Wallet already registered');
        this.wallets[address] = {address: address, key: publicKey};
    }

    /**
     * Check is wallet registered
     */
    checkWallet(address) {
        const wallet = this.wallets[address];
        if(!wallet) {
            return false;
        }
        return wallet;
    }
    
    get name() {
        return 'WalletRegister';
    }

    get contract() {
        return {name: this.name};
    }
}

global.registerContract(WalletRegister);
