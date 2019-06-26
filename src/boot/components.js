// import Brick from 'components/common/Brick'
// import BrickExpansion from 'components/common/BrickExpansion'
// import CodeHighlight from 'components/common/CodeHighlight'
export default async ({ Vue }) => {
	// Vue.component('Brick', Brick)
	// Vue.component('BrickExpansion', BrickExpansion)
	// Vue.component('CodeHighlight', CodeHighlight)
	const req = require.context('components/common/', true, /\.(js|vue)$/i)
	req.keys().map(key => {
		const componentConfig = req(key)
		const fileName = key.match(/\w+/)[0]
		Vue.component(fileName, componentConfig.default || componentConfig)
	})
}