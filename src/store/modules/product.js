import Vue from "vue";

const state = {
  products: []
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {}
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
};

//mutationları commit yardımıyla çalıştırıyoruz
const actions = {
  initApp({ commit }) {
    //vue Resource işlemleri
  },
  saveProduct({ dispatch,commit,state },product) {
    Vue.http.post(
      "https://urun-islemleri-6d2fd-default-rtdb.firebaseio.com/products.json",product )
      .then( (response) => {
        /****ürün listesinin güncellenmesi*****/ 
        product.key= response.body.name;
        commit("updateProductList",product)
        /*******/
        let tradeResult={
          purchase:product.price,
          sale:0,
          count:product.count
        }
        dispatch("setTradeResult", tradeResult)
      } )
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
