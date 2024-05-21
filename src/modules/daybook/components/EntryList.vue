<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar Entradas" />
    </div>

    <div class="entry-scroll-area">
      <entry-component v-for="entry in 10" :key="entry" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    EntryComponent: defineAsyncComponent(() =>
      import(/* webpackChunkName: "EntryComponent" */ "./EntryComponent")
    ),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scroll-area {
  height: calc(100vh - 115px);
  overflow: scroll;
}
</style>
