<template>
    <div>
        <h1>Detalle de producto {{$route.params.id}}</h1>
        <div style="text-align: center" v-if="productDetail">
            <span>ID: {{productDetail.id}}</span><br>
            <span>Nombre: {{productDetail.name}}</span><br>
            <span>Precio: {{productDetail.price}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetail',
    data () {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        productDetail () {
            const id = parseInt(this.$route.params.id);
            return this.$store.getters.getProductById(id);
        }
    }
}
</script>
