<template>
  <div>
    <div class="text-h6 q-pb-lg q-pt-md">
      {{ $t("list.processesList") }}
      <q-spinner-puff v-show="loading" />
    </div>
    <q-list
      bordered
      separator
      class="rounded-borders"
      v-if="list && list.length"
    >
      <q-item
        clickable
        v-ripple
        v-for="item in list"
        :key="item.pid"
        @click="onItemClick(item.pm_id)"
      >
        <q-item-section avatar>
          <q-icon name="fiber_manual_record" size="16px" color="positive" />
        </q-item-section>
        <q-item-section>
          {{ item.name }}
        </q-item-section>
        <q-item-section side>
          <div class="flex items-center">
            <q-icon name="data_usage" size="18px" class="q-mr-xs" />
            <q-item-label caption class="q-pt-xs"
              >{{ $t("list.cpu") }} : {{ item.monit.cpu }}</q-item-label
            >
          </div>
        </q-item-section>
        <q-item-section side>
          <div class="flex items-center">
            <q-icon name="memory" size="18px" class="q-mr-xs" />
            <q-item-label caption class="q-pt-xs">
              {{ toMb(item.monit.memory) }}</q-item-label
            >
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import bytes from "bytes";
const {
  setIntervalAsync,
  clearIntervalAsync,
} = require("set-interval-async/dynamic");
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",

  data() {
    return {
      list: [],
      loading: false,
    };
  },

  methods: {
    async getList() {
      this.loading = true;
      const res = await this.$api.get("apps");
      this.loading = false;
      if (res && res.data) this.list = Object.values(res.data);
      console.log(res.data);
    },

    toMb(byte) {
      return bytes.format(byte, { unit: "MB" });
    },

    onItemClick(pm_id) {
      this.$router.push(`/process/${pm_id}`);
    },
  },

  mounted() {
    this.getList();
    const timer = setIntervalAsync(async () => {
      await this.getList();
    }, 5000);
  },
});
</script>
