<template>
	<q-card
			flat
			bordered
			class="no-border brick">
		<q-toolbar class="dense bg-info">
			<q-toolbar-title>
				{{ api.name }}
			</q-toolbar-title>
		</q-toolbar>
		<q-list>
			<template v-for="item, index in api.properties">
				<brick-expansion :group="api.name"
								 :property="item.key"
								 :description="item.value" />
				<q-separator />
			</template>
		</q-list>
	</q-card>
</template>
<script>
export default {
	name: 'Brick',
	components: {},
	props: {
		api: {
			type: Object,
			required: true
		}
	}
}

</script>
<style lang="stylus">
.brick
	> .q-toolbar
		> .q-toolbar__title
			font-size: 14px
			font-weight: 700
</style>