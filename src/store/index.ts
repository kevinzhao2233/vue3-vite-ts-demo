import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
export interface State {
  count: number
  token: string
}

export interface Getter {
  token: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state(): State {
    return {
      count: 0,
      token: ''
    }
  },
  getters: {
    token: (state) => state.token
  },
  mutations: {
    increment(state) {
      state.count++
    },
    reset(state) {
      state.count = 0
    }
  }
})
