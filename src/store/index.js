import Vue from 'vue'
import Vuex from 'vuex'

import provider from './provider'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function( /* { ssrContext } */ ) {
	const Store = new Vuex.Store({
		modules: {
			provider
		},

		state: () => {
			vueAwesome: []
		},
		actions: {
			fetchVueAwesome: ({ commit }, payload) => {
				commit('fetchVueAwesome', payload)
			}
		},
		mutations: {
			fetchVueAwesome: (state, payload) => state.vueAwesome = payload
		},
		getters: {
			getAllVueAwesome: state => state.vueAwesome
		},

		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEV
	})

	return Store
}
