import { boot } from "quasar/wrappers";
import { setIntervalAsync } from "set-interval-async/dynamic";

export default boot(async ({ app, store }) => {
  if (!store.state.processes.initialized) {
    await load(store);
    store.commit("processes/init");
    const timer = setIntervalAsync(async () => {
      await load(store);
    }, 5000);
  }
});

async function load(store) {
  store.commit("processes/setLoading", true);
  await store.dispatch("processes/getList");
  store.commit("processes/setLoading", false);
}
