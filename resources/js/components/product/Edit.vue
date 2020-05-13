<template>
    <div class="">
        <form @submit.prevent="edit">
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="product.name" type="text" class="form-control" id="name" placeholder="Enter name product" />
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input v-model="product.price" type="text" class="form-control" id="price" placeholder="Enter price" />
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data: function () {
            return {
            }
        },
        beforeCreate() {
            this.$store.dispatch('product/fetchOne', this.$route.params.id);
        },
        computed: {
            ...mapState('product', {
                product: 'product'
            }),
        },
        methods: {
            edit: function() {
                this.$store.dispatch('product/editProduct', this.product);
                this.$router.push({name: 'productIndex'});
            }
        }
    }
</script>
