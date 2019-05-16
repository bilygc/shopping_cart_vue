<template>
    <div>
        <h1 class="shoppingCart__title">Mi carrito</h1>
				<ProductForm @addToProductList= "addToProductList" />
        <ProductItem 
            v-for="product in productList" 
            v-bind:key="product.id" 
            v-bind:productItem="product"
						@addToCart="addToCart"
        />
        <div class="shoppingCart__text">Total : {{total | toPrice}}</div>
    </div>
</template>

<style lang="less" scoped>

    .shoppingCart__title {
        font-size: 24px;
        color: chocolate;
    }

    .shoppingCart__text{
        font-size: 18px;
        color: darkgoldenrod;
    }
</style>

<script>
import ProductItem from './ProductItem.vue';
import ProductForm from './ProductForm.vue';
import { toPrice } from '../libraries/filters';
import { mapState } from 'vuex'


export default {
		name: 'ShoppingCart',
		beforeCreate () {
			
		},
		created () {
			
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
        },
        ...mapState (['productList', 'cart'])
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
