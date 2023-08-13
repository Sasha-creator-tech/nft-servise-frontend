import axios from "axios";
import config from "../../assets/config.json";

const api = {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        // eslint-disable-next-line
        login({ commit }, body) {
            return axios.post(`${config.BASE_API}/user/auth/login`, {
                ...body,
            });
        },
    },
};

export default api;
