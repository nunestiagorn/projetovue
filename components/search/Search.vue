<template>
	<p class="control has-icons-left">
		<input
			class="input is-rounded"
			type="text"
			v-model="value"
			:placeholder="placeholder"
			@keyup="search(value)"
		>
		<!-- icon for the search bar -->
		<span class="icon is-small is-left">
			<i class="fa fa-search"></i>
		</span>
	</p>
</template>

<script>
// search starts empty
export default {
  name: 'search',
	data () {
		return {
			value: ''
		}
	},

// if in the wish lists, change the placeholder
	computed: {
		placeholder () {
			if (this.$route.path === '/wishlist') {
				return 'Lista de Desejos...';
			} else {
				return 'Procurar...';
			}
		}
	},

// if lenght > 0 the search is 'true' and starts looking for what the user tapped
	methods: {
		search (value) {
			if (value.length > 0) {
				this.$store.commit('setHasUserSearched', true);
				this.$store.commit('setProductTitleSearched', value);
			} else {
				this.$store.commit('setHasUserSearched', false);
				this.$store.commit('setProductTitleSearched', '');
			}
		}
	}
}
</script>

