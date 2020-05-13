import productStore from "./productStore";
import Vuex from 'vuex';

const stores = new Vuex.Store({
    modules: {
        product: productStore,
    }
});

export default stores;
