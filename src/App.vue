<template>
  <v-app>
    <headers />
    <router-view></router-view>
    <footers />
  </v-app>
</template>

<script>
import Headers from "./components/headers.vue";
import Footers from "./components/footer.vue";
export default {
  name: "App",
  components: { Headers, Footers },
  metaInfo() {
    return {
      title: "CV Gilang Priambara",
      meta: [{ name: "Gilang Priambara", content: "about CV" }],
    };
  },
};
</script>
