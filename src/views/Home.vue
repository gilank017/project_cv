<template>
  <div class="home">
    <v-img
      dark
      src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div
                :class="{
                  'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp,
                  'title font-weight-bold': $vuetify.breakpoint.smAndDown,
                }"
              >
                Welcome to my page.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
