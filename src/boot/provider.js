const getShortHand = (type) => {
	let shortHand = ''
	switch (type) {
		case 'props':
			shortHand = ':'
			break
		case 'events':
			shortHand = '@'
			break
		case 'methods':
			shortHand = '.'
			break
		case 'slots':
			shortHand = '#'
			break
		case 'scopedSlots':
			shortHand = '#'
			break
		default:
			shortHand = ''
			break
	}
	return shortHand
}

const convertItem = (type, key, value) => {
	const result = {
		key: `${getShortHand(type)}${key}`,
		value: value
	}
	return result
}

const parseJson = async ({ type, behavior, ...api }) => {
	let result = []
	Object.keys(api).map(attributeType => {
		const attributeList = api[attributeType]
		Object.keys(attributeList).map(attributeKey => {
			const temp = convertItem(attributeType, attributeKey, attributeList[attributeKey])
			result.push(temp)
		})
	})
	return result
}

// import axios from 'axios'

export default async ({ store }) => {
	const req = require.context('src/statics/quasar/', true, /Q[A-Za-z]\w+\.json$/i)
	req.keys().map(key => {
		const fileName = key.split('/').pop().replace(/\.\w+$/, '')
		import(
			`src/statics/api/${fileName}.json`
		).then(json => {
			parseJson(json.default).then(result => {
				store.dispatch('provider/pushItem', {
					name: fileName,
					properties: result
				})
			})
		})
		// axios.get(`statics/api/${fileName}.json`).then(json => {
		// 	// console.log(json)
		// 	parseJson(json.data).then(result => {
		// 		store.dispatch('provider/pushItem', {
		// 			name: fileName,
		// 			properties: result
		// 		})
		// 	})
		// })
	})
}