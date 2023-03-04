<template>
  <v-app>
    <v-app-bar
      app
      color=""
    >
    <v-btn
      v-for="(item, index) in menubar"
      :key="index"
      text
      @click="$router.push(item.patch)"
    >
    <v-icon
        left
        dark
      >
      
      {{ item.icon }}
      </v-icon>
      {{ item.title }}
    </v-btn>
    </v-app-bar>
    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    menubar : [
      {
        title : 'สนทนา',
        icon: 'mdi-message',
        patch: '/'
      },
      {
        title : 'บิล',
        icon : 'mdi-cart',
        patch: '/bil'
        
      },
      {
        title: 'ร้านค้า',
        icon: 'mdi-account',
        patch: '/customer'
      }
    ]
  }),
};
</script>





