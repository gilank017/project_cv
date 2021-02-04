<template>
  <v-app-bar flat absolute color="transparent" dark height="120px">
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <div
            :class="{
              'display-1 font-weight-bold': $vuetify.breakpoint.smAndUp,
              'title font-weight-bold': $vuetify.breakpoint.smAndDown,
            }"
          >
            Gilang Priambara Listanto
          </div>
          <v-spacer></v-spacer>
          <v-toolbar-items class="text-right">
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              text
              @click="aboutPage"
              >About</v-btn
            >
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              text
              @click="workPage"
              >My Work</v-btn
            >
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              text
              @click="contactPage"
              >Contact</v-btn
            >
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    aboutPage() {
      this.$router.push("/About");
    },
    workPage() {
      this.$router.push("/Work");
    },
    contactPage() {
      this.$router.push("/Contact");
    },
  },
};
</script>
