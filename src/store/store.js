import Vuex from "vuex";
import Vue from "vue";
import  product from "./modules/product"


Vue.use(vuex);

export const store = new Vuex.store({
    state:{

    },
    modules:{
        product
    }
})