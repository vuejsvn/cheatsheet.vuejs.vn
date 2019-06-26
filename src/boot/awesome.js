const vueAwesome = [
	{
		title: 'Quasar',
		name: 'quasar',
		version: 'v1.0.0',
		description: 'High performance, Material Design 2, full front end stack with Vuejs',
		logo: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg'
	}
]

export default ({ store }) => {
	store.dispatch('fetchVueAwesome', vueAwesome)
}