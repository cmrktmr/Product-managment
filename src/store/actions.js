import Vue from "vue"
export const setTradeResult = ({state ,commit}, tradeResult) => {

commit("updateTradeResult", tradeResult)
let tradeData = {
    purchase: state.purchase,
    sale:state.sale
}
Vue.http.put("https://urun-islemleri-6d2fd-default-rtdb.firebaseio.com/trade-result.json",tradeData)
.then(response => {
    console.log(response);
})
}

export const getTradeResult = ({commit}) =>{

}