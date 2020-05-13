<template>
	<div>
		<div class="m-4">
			<h4>List Product</h4>
		</div>
		<table
            v-if="products.length"
            class="table table-hover">
			<thead>
			    <tr>
			        <th scope="col">#</th>
			        <th scope="col">Name</th>
			        <th scope="col">Price</th>
			        <th scope="col">Action</th>
			    </tr>
			</thead>
			<tbody>
			    <tr v-for="(product, index) in products" :key="product.id">
			        <th scope="row">{{ index+1 }}</th>
			        <td>{{ product.name }}</td>
			        <td>{{ product.price }}</td>
			        <td>
                        <router-link class="btn btn-primary" :to="`/products/edit/${product.id}`">Edit</router-link>
                        <input @click="deleteProduct(product.id)" class="btn btn-danger" type="button" value="Delete" />
                    </td>
			    </tr>
			</tbody>
		</table>
        <div v-else>
            <h4 class="text-center">No product</h4>
        </div>
	</div>
</template>

<script>
	export default {
	    name: 'List',
        data: function() {
	        return {}
        },
       computed: {
           products () {
               return this.$store.state.product.products;
           }
        },
        created: function () {
            this.$store.dispatch('product/fetch');
        },
        methods: {
            deleteProduct: function (id) {
	            let result = confirm('Are you sure');

	            if (!result) {
                    return;
                }

                this.$store.dispatch('product/deleteProduct', id);
            }
        }
    }
</script>
