import {Contract, ethers} from "ethers";
import mainContractABI from "../abi/mainContractABI.json";
import store from "../store/index";

export default class Core {
    // Method to connect the MetaMask wallet
    async getSigner() {
        try {
            const provider = await Core.getProvider();
            return provider.getSigner();
        } catch (error) {
            console.error("Error connecting MetaMask:", error);
            return null;
        }
    }

    //Method to request a signature from the user
    async requestSignature(signer) {
        try {
            const signatureTimestamp = ~~(new Date().getTime() / 1000);
            const address = await signer.getAddress();
            const signature = await signer.signMessage(
                `${process.env.SIGNATURE_KEY}_${signatureTimestamp}`,
            );
            return { address, signature, signatureTimestamp };
        } catch (error) {
            console.error("Error requesting signature:", error);
            return null;
        }
    }

    static async getProvider() {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                return provider;
            } else if (process.env.DEFAULT_NODE) {
                return new ethers.providers.JsonRpcProvider(process.env.DEFAULT_NODE);
            }
        } catch (err) {
            console.log(err);
        }
    }

    setMainContract(signer) {
        if (!signer) {
            throw new Error("Signer is not initialized");
        }
        store.commit("setContract", new Contract(process.env.MAIN_CONTRACT_ADDRESS, mainContractABI, signer));
    }
}
