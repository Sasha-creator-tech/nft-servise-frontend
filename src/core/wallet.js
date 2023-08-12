import { ethers } from 'ethers';

export default class Core {
    // Method to connect the MetaMask wallet
    async connectWallet() {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', []);
            const signer = provider.getSigner();
            return signer;
        } catch (error) {
            console.error('Error connecting MetaMask:', error);
            return null;
        }
    }

    //Method to request a signature from the user
    async requestSignature(signer) {
        try {
            const address = await signer.getAddress();
            const signature = await signer.signMessage(process.env.SIGNATURE_KEY);
            return { address, signature };
        } catch (error) {
            console.error('Error requesting signature:', error);
            return null;
        }
    }

}
