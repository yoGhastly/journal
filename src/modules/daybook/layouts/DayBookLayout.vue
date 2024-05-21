<template>
  <navbar-component />
  <div class="d-flex">
    <div class="col-4">
      <entry-list />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavbarComponent: defineAsyncComponent(() =>
      import("../components/NavbarComponent")
    ),
    EntryList: defineAsyncComponent(() =>
      import(/* webpackChunkName: "EntryList"*/ "../components/EntryList")
    ),
  },
};
</script>
