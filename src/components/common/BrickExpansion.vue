<template>
	<q-expansion-item :group="group"
					  dense
					  class="brick-item"
					  :label="property"
					  :duration="100"
					  header-class="bg-grey-3">
		<q-card>
			<q-card-section>
				{{description}}
			</q-card-section>
		</q-card>
	</q-expansion-item>
</template>
<script>
export default {
	name: 'BrickExpansion',
	props: {
		group: String,
		property: String,
		description: [Object, String]
	}
}

</script>
<style lang="stylus">
.brick-item
	.q-item
		padding-left: $space-base * 0.5
		padding-right: $space-base * 0.5
</style>
