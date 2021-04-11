import Vue from "vue";
import { router } from "../../router";
const state = {
  products: []
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return key =>
      state.products.filter(element => {
        return element.key == key;
      });
  }
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
};

//mutationları commit yardımıyla çalıştırıyoruz
const actions = {
  initApp({ commit }) {
    Vue.http
      .get(
        "https://urun-islemleri-6d2fd-default-rtdb.firebaseio.com/products.json"
      )
      .then(response => {
        let data = response.body;
        for (let key in data) {
          data[key].key = key;
          commit("updateProductList", data[key]);
        }
      });
  },
  saveProduct({ dispatch, commit, state }, product) {
    Vue.http
      .post(
        "https://urun-islemleri-6d2fd-default-rtdb.firebaseio.com/products.json",
        product
      )
      .then(response => {
        /****ürün listesinin güncellenmesi*****/

        product.key = response.body.name;
        commit("updateProductList", product);
        /*******/
        let tradeResult = {
          purchase: product.price,
          sale: 0,
          count: product.count
        };
        dispatch("setTradeResult", tradeResult);
        router.replace("/");
      });
  },
  sellProduct({ commit }, payload) {
    //vue Resource işlemleri
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
