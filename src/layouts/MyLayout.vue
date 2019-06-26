<template>
	<q-layout view="lHh Lpr lFf"
			  class="bg-grey-7">
		<q-header elevated>
			<q-toolbar class="bg-secondary">
				<q-btn flat
					   dense
					   round
					   @click="leftDrawerOpen = !leftDrawerOpen"
					   aria-label="Menu">
					<q-icon name="menu"
							class="text-black" />
				</q-btn>
				<q-toolbar-title class="text-black">
					Cheat Sheet
				</q-toolbar-title>
				<div class="col-auto">
					<q-input dense
							 v-model="filterName"
							 input-class="text-grey-3"
							 borderless
							 placeholder="Filter..."
							 @change="onFilterChange">
						<template v-slot:append>
							<q-icon class="cursor-poiter text-grey-3"
									:name="filterName !== '' ? 'clear':'search'"
									@click="onFilterClick">
							</q-icon>
						</template>
					</q-input>
				</div>
				<!-- <div>Quasar v{{ $q.version }}</div> -->
			</q-toolbar>
		</q-header>
		<q-drawer v-model="leftDrawerOpen"
				  bordered
				  content-class="bg-grey-3">
			<q-list>
				<q-item-label header
					class="q-py-sm">
					<q-input dense
							 borderless
							 input-class="text-white"
							 class="bg-grey-7 q-px-sm"
							 placeholder="Filter...">
						<template v-slot:append>
							<q-icon class="cursor-poiter text-grey-3"
									:name="filterName !== '' ? 'clear':'search'"
									@click="onFilterClick">
							</q-icon>
						</template>
					</q-input>
				</q-item-label>
				<q-item clickable
						tag="a"
						v-for="item in listVueAwesome"
						:key="item.name">
					<q-item-section avatar>
						<q-img :src="item.logo" />
					</q-item-section>
					<q-item-section>
						<q-item-label>{{ item.title }}</q-item-label>
						<q-item-label caption>{{ item.description }}</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</q-drawer>
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>
<script>
import { openURL } from 'quasar'

export default {
	name: 'MyLayout',
	data() {
		return {
			leftDrawerOpen: false,
			filterName: ''
		}
	},
	computed: {
		listVueAwesome() {
			return this.$store.getters['getAllVueAwesome']
		}
	},
	methods: {
		openURL,
		onFilterClick() {
			this.filterName = ''
			this.dispatchFilterName()
		},
		onFilterChange() {
			this.dispatchFilterName()
		},
		dispatchFilterName() {
			this.$store.dispatch('provider/setFilterName', this.filterName)
		}
	}
}

</script>
<style>
</style>
