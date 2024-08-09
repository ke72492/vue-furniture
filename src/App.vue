<script>
import { RouterView } from 'vue-router';
import TheNav from '@/components/Template/TheNav.vue';
import TheFooter from '@/components/Template/TheFooter.vue';

export default {
  components: {
    TheNav,
    TheFooter,
  },
  watch: {
    // 監聽路由，當路由改變時，動態的去改變title
    $route(to) {
      document.title = to.meta.title || 'Shopping Cart';
    },
  },
};
</script>
<!-- test -->
<template>
  <!-- 使用$route.name 可以獲取到目前頁面的name -->
  <TheNav v-if="$route.name !== 'Login'" />

  <RouterView />

  <TheFooter v-if="$route.name !== 'Login'" />
</template>
