/**
* Created by zhengx
*/
<template>
  <div class="home">
    <carousel :images="images"></carousel>
    <div style="height: 800px; width: 100%;"></div>
  </div>
</template>

<script>
  import Carousel from '@/components/Carousel.vue';
  import banner1 from '@/assets/home-banner-1.jpg';
  import banner2 from '@/assets/home-banner-2.jpg';
  import banner3 from '@/assets/home-banner-3.jpg';
  
  export default {
    components: {
      Carousel
    },
    data() {
      return {
        images: [banner1, banner2, banner3]
      }
    }
  }
</script>

<style>
  .home {
    width: 100%;
    min-width: 1200px;
  }
</style>