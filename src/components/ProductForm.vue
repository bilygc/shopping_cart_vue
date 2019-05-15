<template>
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Nombre del producto" v-model="name" class="nombreP" v-validate="'required'" name="product-name">
        <span>{{errors.first('product-name')}}</span>
        <input type="number" placeholder="Precio del producto" v-model.number ="price" class="precioP" v-validate="'required|min_value:1'" name="product-price">
        <span>{{errors.first('product-price')}}</span>
        <button type="submit" class="btnP">Agregar producto</button>
    </form>
</template>

<script>
export default {
    name: 'ProductForm',
    data (){
        return {
            name: '',
            price: 0
        }
    },
    methods:{
        onSubmit (){
            this.$validator.validate().then((valid) => {
                if (valid){
                    this.$emit('addToProductList',{
                        name: this.name,
                        price: this.price
                    })
                } else {
                    console.log("algo fallo");
                }
            })
        }
    }
}
</script>

<style scoped>
    form {
        max-width: 330px;
        height: 100px;
        margin: auto;
        background: cornflowerblue;
        border-radius: 5px;
    }
    input.nombreP {
        width: 47.5%;
        margin-right: 2px;
        margin-top: 5%;
    }
    input.precioP {
        width: 47.5%;
        margin-left: 2px;
    }
    button.btnP {
        display: block;
        margin: 10px auto;
        width: 110px;
        height: 45px;
        background-color: orange;
        border-radius: 5px;
        border: none;
        color: white;
    }

    button.btnP:hover{
        background-color: darkorange;
		cursor: pointer;
    }
</style>
