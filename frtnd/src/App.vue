<template>
  <v-app>
    <v-app-bar app dense color="#D8D8D8">
      <v-toolbar-title class="headline text-uppercase">
        <span>FICHOS PARA LA UNIVERESIDAD DE CÓRDOBA</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>


    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
