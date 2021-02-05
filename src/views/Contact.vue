<template>
  <div class="contact">
    <v-img
      src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <v-layout class="mt-12">
        <v-container>
          <v-layout justify-center class="mt-12">
            <v-card>
              <v-flex xs12>
                <div class="display-1 font-weight-bold ma-4" id="contact">
                  Send me a message... :)
                </div>
              </v-flex>
              <v-flex xs12 class="mt-5">
                <v-layout wrap>
                  <template v-for="(contact, i) in contactLinks">
                    <v-flex sm6 md4 xs12 :key="i">
                      <personal :contact="contact" />
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
import Personal from "../components/contactPersonal.vue";
export default {
  components: { Personal },
  data() {
    return {
      contactLinks: [
        {
          name: "Email",
          value: "gilank.zone@gmail.com",
          link: "gilank.zone@gmail.com",
          icon: "mdi-email",
        },
        {
          name: "LinkedIn",
          value: "Gilang Priambara",
          link: "https://www.linkedin.com/in/gilank017/",
          icon: "mdi-linkedin",
        },
        {
          name: "Github",
          value: "gilank017",
          link: "https://github.com/gilank017/",
          icon: "mdi-github",
        },
        {
          name: "Facebook",
          value: "Gilank",
          link: "https://www.facebook.com/Gilank",
          icon: "mdi-facebook",
        },
        {
          name: "Instagram",
          value: "@gilank017",
          link: "https://www.instagram.com/gilank017/",
          icon: "mdi-instagram",
        },
      ],
    };
  },
};
</script>
