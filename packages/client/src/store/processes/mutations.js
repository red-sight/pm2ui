export function set(state, payload) {
  state.list = payload;
}

export function init(state) {
  state.initialized = true;
}

export function setLoading(state, payload) {
  state.loading = payload;
}
