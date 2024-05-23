<template>
  <v-app>
    <v-main>
      <!-- <v-slide-x-transition :duration="150" mode="out-in">
      <router-view/>
    </v-slide-x-transition> -->

    <router-view v-slot="{ Component }">
      <v-slide-x-transition :duration="150" mode="out-in">
        <component :is="Component" />
      </v-slide-x-transition>
    </router-view>

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
