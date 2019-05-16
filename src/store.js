import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    cart: []
  },
  getters: {
    getProductById: (state) => id =>{
      return state.productList.find((product) => {
        return product.id === id
      } );
    }
  },
  mutations: {
    updateProductList(state, productList){
      state.productList = productList;
    },
    addToProductList (state, product) {
      state.productList.push(product);
    },
    addToCart (state, product){
      state.cart.push(product);
    }
  },
  actions: {
    fetchProducts (context){
      Axios.
			get('http://api.myjson.com/bins/hoto8').
			then((res) => {
				context.commit('updateProductList', res.data.products);
			});
    }
  }
})
