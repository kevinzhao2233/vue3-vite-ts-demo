import { defineStore, acceptHMRUpdate } from 'pinia';

export interface IState {
  count: number
  token: string
}

export const useAppStore = defineStore('app', {
  state: (): IState => ({
    count: 0,
    token: '',
  }),
  actions: {
    increment() {
      this.count += 1;
    },
    reset() {
      this.count = 0;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
