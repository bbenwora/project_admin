<template>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-card>
          <v-toolbar
            color="orange lighten-1"
            dark
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
            <v-toolbar-title>Message</v-toolbar-title>
  
            <v-spacer></v-spacer>
  
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
  
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                inset
              >
                {{
                  item.header
                }}
              </v-subheader>
  
              <v-divider
                v-else-if="item.divider"
                :key="index"
                inset
              ></v-divider>
  
              <v-list-item
                v-else
                :key="item.title"
                ripple
              >
                <v-list-item-avatar>
                  <img :src="item.avatar">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </template>

  <script>
  export default {
    data () {
      return {
        items: [
          {
            header: 'Today',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=660',
            title: 'vida',
            subtitle:
              `<span class="font-weight-bold">สนใจสินค้าค่ะ</span> &mdash; 09:00 AM`,
          },
          {
            avatar: 'https://picsum.photos/250/300?image=821',
            title: 'Violet <span class="grey--text text--lighten-1"></span>',
            subtitle:
              '<span class="font-weight-bold">ขอสอบถามรายละเอียดสินค้าค่ะ</span> &mdash; 03:30 PM',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=783',
            title: 'Chloe',
            subtitle:
              '<span class="font-weight-bold">ต้องการสอบถามค่ะ</span> &mdash; 05:00 AM',
          },
          {
            header: 'Yesterday',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1006',
            title: 'Mia',
            subtitle:
              '<span class="font-weight-bold">ขอสอบถามรายละเอียดสินค้าค่ะ</span> &mdash; 01:25 PM',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=146',
            title: 'Hannah',
            subtitle:
              '<span class="font-weight-bold">ได้รับสินค้าแล้วค่ะ</span> &mdash; 02:45 AM',
          },
          {
            header: 'Last Week',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1008',
            title: 'Madison',
            subtitle:
              '<span class="font-weight-bold">ได้รับสินค้าแล้วค่ะ</span> &mdash; 04:33 PM',
          },
        ],
      }
    },
  }
</script>