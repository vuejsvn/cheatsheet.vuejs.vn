<template>
	<q-page>
		<div class="q-pa-md api-list">
			<brick v-for="api in providerView"
				   :key="api.name"
				   :api="api" />
		</div>
	</q-page>
</template
>

<script>
export default {
	name: 'PageIndex',
	components: {
	},
	data() {
		return {
			
		}
	},
	computed: {
		filterName() {
			return this.$store.state.provider.filterName.toLowerCase()
		},
		provider() {
			return this.$store.getters['provider/getAll']
		},
		providerView() {
			if (this.filterName) {
				return this.provider.filter(item => item.name.toLowerCase().includes(this.filterName))
			} else {
				return this.provider
			}
		}
	}
}
</script>

<style lang="stylus">
.api-list
	column-count: 6
	column-gap: 16px
	
	> div
		break-inside: avoid
		margin-bottom: 16px
</style>