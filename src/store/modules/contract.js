const api = {
    state: {
        contract: null
    },
    getters: {
        getContract: (state) => state.contract
    },
    mutations: {
        setContract(state, contract) {
            state.contract = contract;
        }
    },
    actions: {
        // eslint-disable-next-line
        async buyToken({ commit, getters, dispatch }, body) {
            try {
                await getters.getContract.buyTokens(
                    body.tokenContract, body.tokenId, body.amount,
                    {
                        value: ((await dispatch("getTokenPrice", {
                            _collectionAddress: body.tokenContract,
                            _tokenId: body.tokenId
                        })).toNumber() * body.amount).toString(),
                    }
                )
            } catch (err) {
                console.log(err);
            }
        },

        // eslint-disable-next-line
        getTokenPrice({ commit, getters }, body) {
            try {
                return getters.getContract.getTokenPrice(body._collectionAddress, body._tokenId);
            } catch (err) {
                console.log(err);
            }
        }
    },
};

export default api;
