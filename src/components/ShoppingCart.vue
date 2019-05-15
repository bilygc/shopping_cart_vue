<template>
    <div>
        <h1>Mi carrito</h1>
				<ProductForm @addToProductList= "addToProductList" />
        <ProductItem 
            v-for="product in productList" 
            v-bind:key="product.id" 
            v-bind:productItem="product"
						@addToCart="addToCart"
        />
        <div class="cart-total">Total : {{total | toPrice}}</div>
    </div>
</template>

<style scoped>
    h1 {
        font-size: 24px;
        color: chocolate;

    }

    .cart-total{
        font-size: 18px;
        color: darkgoldenrod;
    }
</style>

<script>
import ProductItem from './ProductItem.vue';
import ProductForm from './ProductForm.vue';
import { toPrice } from '../libraries/filters';
import Axios from 'axios';

export default {
		name: 'ShoppingCart',
		beforeCreate () {
			
		},
		created () {
			Axios.
			get('https://api.myjson.com/bins/hoto8').
			then((res) => {
				console.log(res);
				this.productList = res.data.products;
			});
		},
    data (){
        return {
            productList: [],
            cart:[]
        }
    },
    components: {
				ProductItem,
				ProductForm
    },
    computed: {
        total (){
            return this.cart.reduce(
                function (total, currItem){
                    return total + currItem.price
                }, 0
            );
        }
    },
    methods: {
        addToCart(productItem){
            this.cart.push(productItem);
		},
		addToProductList (productItem){
			const product = {
				name: productItem.name,
				price: productItem.price,
				id: this.productList.length + 1,
				quantity: 0
			}
			this.productList.push(product);
		}
		},
		filters: {
			toPrice
		}
}
</script>
