<template>
  <v-app>
    <v-main>
      <v-slide-x-transition :duration="150" mode="out-in">
      <router-view/>
    </v-slide-x-transition>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
