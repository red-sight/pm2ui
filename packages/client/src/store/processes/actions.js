import { api } from "src/boot/axios";

export async function getList(context) {
  const res = await api.get("apps");
  context.commit("set", Object.values(res.data));
}
