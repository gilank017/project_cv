<template>
  <div class="Work">
    <v-img
      src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <v-layout class="mt-12">
        <v-container>
          <v-layout justify-center class="mt-12">
            <v-card>
              <v-flex xs12>
                <div class="display-1 font-weight-bold ma-4" id="portfolio">
                  My Work
                </div>
              </v-flex>
              <v-flex xs12 class="mt-5">
                <v-layout wrap>
                  <template v-for="(app, i) in apps">
                    <v-flex :key="i" xs12 sm6 md4>
                      <work :app="app" />
                    </v-flex>
                  </template>
                </v-layout>
              </v-flex>
            </v-card>
          </v-layout>
        </v-container>
      </v-layout>
    </v-img>
  </div>
</template>

<script>
import Work from "../components/portofolio.vue";
export default {
  components: { Work },
  data() {
    return {
      apps: [
        {
          name: "Finance App",
          price: "COMING SOON",
          logo: "finance-logo.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "",
            },
            {
              name: "android",
              icon: "mdi-android",
              link: "",
            },
          ],
          description:
            "My sister always kept asking me about my money situation and how I was doing there, so I decided that I would make an app that we could use to track our finances. Using Plaid I was able to get access to my bank account and hers and connect the 2 using firebase Functions and Auth to secure the app. ",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: "",
            },
            {
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "",
            },
            {
              name: "Cordova",
              icon: "mdi-cordova",
              link: "",
            },
            {
              name: "Firebase",
              icon: "mdi-firebase",
              link: "",
            },
            {
              name: "Node",
              icon: "mdi-nodejs",
              link: "",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "",
          },
        },
        {
          name: "Baguette",
          price: "COMING SOON",
          logo: "baguette-logo.png",
          platforms: [
            {
              name: "apple",
              icon: "mdi-apple",
              link: "",
            },
            {
              name: "android",
              icon: "mdi-android",
              link: "",
            },
          ],
          description:
            "Similar to 'Bag it'. I wanted to make a swippable market place where people could swipe on goods from a store. Also it got rid of all the extra distractions and you are able to focus on just one item at a time. Still need to build the recommender system. But I am working on it! :)",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: "",
            },
            {
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "",
            },
            {
              name: "Cordova",
              icon: "mdi-cordova",
              link: "",
            },
            {
              name: "Firebase",
              icon: "mdi-firebase",
              link: "",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "",
          },
        },
        {
          name: "Prima Electrical",
          price: "OPEN SOURCE",
          logo: "logo.png",
          platforms: [
            {
              name: "web",
              icon: "mdi-web",
              link: "",
            },
          ],
          description:
            "We Wanted to help people who want to create an ecommerce store with VueJS and Vuetify have a template that had authentication and payments integrated right from the get go. So now you can hit the ground running! In Collaboration with Aatish Balla.",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: "https://vuejs.org/",
            },
            {
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com/",
            },
            {
              name: "Firebase",
              icon: "mdi-firebase",
              link: "https://firebase.google.com/",
            },
            {
              name: "Stripe",
              icon: "mdi-credit-card-outline",
              link: "",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "",
          },
        },
      ],
    };
  },
};
</script>
