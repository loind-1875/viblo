<template>
	<div class="">
		<form @submit.prevent="add">
		    <div class="form-group">
			    <label for="name">Name</label>
			    <input v-model="name" type="text" class="form-control" id="name" placeholder="Enter name product" />
		    </div>
		    <div class="form-group">
			    <label for="price">Price</label>
			    <input v-model="price" type="text" class="form-control" id="price" placeholder="Enter price" />
		    </div>
		    <button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>

<script>
	export default {
	    data: function () {
	        return {
	            name: '',
                price: '',
            }
        },
		methods: {
		    add: function() {
                this.$store.dispatch('product/addProduct', {
                    name: this.name,
                    price: this.price,
                });
                this.$router.push({name: 'productIndex'});
            }
        }
	}
</script>
