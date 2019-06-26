export default {
	namespaced: true,
	state: () => ({
		listFile: [],
		filterName: ''
	}),
	actions: {
		fetchData({ commit }, payload) {
			commit('fetchData', payload)
		},
		pushItem({ commit}, payload) {
			commit('pushItem', payload)
		},
		setFilterName({ commit }, payload) {
			commit('setFilterName', payload)
		}
	},
	mutations: {
		fetchData: (state, payload) => state.listFile = payload,
		pushItem: (state, payload) => state.listFile.push(payload),
		setFilterName: (state, payload) => state.filterName = payload
	},
	getters: {
		getAll: (state) => state.listFile,
		getByName: (state) => name => state.listFile.filter(item => item.name.includes(name))
	}
}
