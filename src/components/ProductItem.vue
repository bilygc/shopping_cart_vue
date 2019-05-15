<template>
    <div v-if="productItem" class="product-item-container">
				<div class="product-item-description">
					<span>{{productItem.name}}</span>
					<span>{{productItem.price | toPrice}}</span>
				</div>
        <button class="product-item-button" @click="$emit('addToCart', productItem)"> Agregar</button>
    </div>
</template>

<script>
import { toPrice } from '../libraries/filters';

export default {
    name: "ProductItem",
    props: {
        productItem: Object
		},
		filters: {
			toPrice
		}
}

</script>

<style scoped> 
    .product-item-container{
			width: 300px;
			height: 50px;
			margin: 1rem auto;
			box-shadow: 9px 8px 13px 1px lightgray;
			border-radius: 5px;
			background-color: cornflowerblue;
			color: white;
			font-weight: 700;
			font-size: 20px;
			display: flex;
			align-items: center;
			padding: 1rem;
			justify-content: space-between;

    }

    .product-item-button{
			width: 100px;
			height: 35px;
			background-color: orange;
			border-radius: 5px;
			border: none;
			color: white;
    }
		.product-item-button:hover{
			background-color: darkorange;
			cursor: pointer;
		}

		.product-item-description{
			display: flex;
			flex-direction: column;
			justify-content: left;
		}
</style>
