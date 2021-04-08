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
  saveProduct({ commit }, payload) {
    //vue Resource işlemleri
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
