import axios from "axios";
import config from "../../assets/config.json";

const api = {
    state: {
        collections: [],
        balances: [],
        nftToken: null,
        brands: []
    },
    getters: {
        getCollections: (state) => state.collections,
        getBalances: (state) => state.balances,
        getNftTokenData: (state) => state.nftToken,
        getBrands: (state) => state.brands
    },
    mutations: {
        setCollection(state, collections) {
            state.collections = collections;
        },
        setBalances(state, balances) {
            state.balances = balances;
        },
        setNftTokenData(state, nftTokenData) {
            state.nftToken = nftTokenData;
        },
        setBrands(state, brands) {
            state.brands = brands;
        }
    },
    actions: {
        // eslint-disable-next-line
        login({ commit }, body) {
            try {
                return axios.post(`${config.BASE_API}/user/auth/login`, {
                    ...body,
                });
            } catch (err) {
                console.log(err);
            }
        },

        // eslint-disable-next-line
        async fetchCollections({ commit }) {
            try {
                const collections = await axios.get(
                    `${config.BASE_API}/nfttoken`,
                );
                commit("setCollection", collections.data);
                return collections.data;
            } catch (err) {
                console.log(err);
            }
        },

        // eslint-disable-next-line
        async fetchBalance({ commit }, params) {
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                    return;
                }
                const balances = await axios.get(
                    `${config.BASE_API}/user/balance?address=${params.address}`,
                    {
                        headers: {
                            Authorization: `Bearer ${
                                JSON.parse(token).token.data.token
                            }`,
                        },
                    },
                );
                commit("setBalances", balances.data);
                return balances.data;
            } catch (err) {
                console.log(err);
            }
        },

        // eslint-disable-next-line
        async fetchNftToken({ commit }, address) {
            try {
                const nftTokenData = await axios.get(`${config.BASE_API}/nfttoken/${address}`);
                commit("setNftTokenData", nftTokenData.data);
                return nftTokenData.data;
            } catch (err) {
                console.log(err);
            }
        },

        // eslint-disable-next-line
        async fetchBrands({ commit }) {
            try {
                const brands = await axios.get(`${config.BASE_API}/brand`);
                commit("setBrands", brands.data);
                return brands.data;
            } catch (err) {
                console.log(err);
            }
        }
    },
};

export default api;
