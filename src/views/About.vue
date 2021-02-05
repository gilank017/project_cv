<template>
  <div class="about">
    <v-img
      src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <v-layout class="mt-12">
        <v-container>
          <v-flex xs12>
            <v-layout justify-center class="mt-12">
              <v-card max-width="900" elevation="24">
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-card elevation="12">
                        <v-img src="@/assets/pictures.jpg"> </v-img>
                      </v-card>
                    </v-col>
                    <v-col cols="6">
                      <div class="display-1 font-weight-bold" id="about">
                        About Me
                      </div>
                      <v-divider class="mb-6"></v-divider>
                      <div class="font-weight-">
                        Saya adalah mahasiswa yang baru menyelesaikan studi
                        Strata I di Universitas Islam Majapahit jurusan Teknik
                        Informatika. Saya memiliki kemampuan programming PHP,
                        Javascript, C++, Database PHPMyAdmin, SQL Server. Saya
                        terbiasa mengoperasikan Microsoft Office untuk melakukan
                        pembukuan. Saya adalah orang yang bisa bekerja dengan
                        baik sebagai bagian dari tim dan saya sendiri. Saya juga
                        pekerja keras dan berkemauan untuk belajar hal – hal
                        baru
                      </div>
                      <div class="display-1 font-weight-bold mt-4" id="profile">
                        Profile
                      </div>
                      <v-divider class="mb-6"></v-divider>
                      <div class="font-weight-bold ma-2">
                        Name : Gilang Priambara Listanto
                      </div>
                      <div class="font-weight-bold ma-2">
                        Tempat Tanggal Lahir : Mojokerto , 08 Juli 1995
                      </div>
                      <div class="font-weight-bold ma-2">
                        Alamat : Dsn.Sroyo Ds.Dlanggu Kec.Dlanggu Kab.Mojokerto
                      </div>
                      <div class="font-weight-bold ma-2">
                        Kewarganegaraan : Indonesia
                      </div>
                      <div>
                        <v-btn
                          rounded
                          color="primary"
                          href="https://drive.google.com/file/d/130AoWJIoNG9V4v1OZinXaI-3a6DHqSgU/view?usp=sharing"
                          >Download Resume</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-layout>
          </v-flex>
        </v-container>
      </v-layout>
    </v-img>
  </div>
</template>
