/**
* Wallet registrator and checker
*/
class WalletRegister extends Contract{

    Property: {
        String name = 'WalletRegister';
    }
    
    Storage: {
        BlockchainObject wallets;
    }

    public WalletRegister(){
    }
    

    /**
    * Register new wallet and public key
    */
    public registerWallet(string address, string publicKey){
        assert.false(storage.wallets[address], 'Wallet already registred');
        storage.wallets[address] = {address: address, key: publicKey};
    }
    
    /**
    * Check is wallet registred
    */
    public checkWallet(string address){
        const wallet = storage.wallets[address];
        if(!wallet){
            return false;
        }
        return wallet;
    }

}
