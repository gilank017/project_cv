<template>
  <v-app>
    <router-view></router-view>
    <footers />
  </v-app>
</template>

<script>
import Footers from "./components/footer.vue";
export default {
  name: "App",
  components: { Footers },
  metaInfo() {
    return {
      title: "CV Gilang Priambara",
      meta: [{ name: "Gilang Priambara", content: "about CV" }],
    };
  },
};
</script>
