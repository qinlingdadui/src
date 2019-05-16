/**
* Created by zhengx
*/
<template>
  <div class="carousel">
    <img v-for="(item, index) in images" :key="index" :src="item" v-show="activeIndex === index"/>
    <div class="indicator">
      <span
        v-for="(item, index) in images"
        :key="index"
        :class="[{'active': index === activeIndex}]"
        @click.stop="handleIndicatorClick(index)">
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    
    data() {
      return {
        activeIndex: 0,
        t: null
      }
    },
    
    mounted() {
      this.autoPlay();
    },
    
    methods: {
      handleDirect(direction) {
        let len = this.images.length;
        if (direction === 'next') {
          this.activeIndex ++;
          if (this.activeIndex > len - 1) {
            this.activeIndex = 0
          }
        }
        if (direction === 'prev') {
          this.activeIndex --;
          if (this.activeIndex < 0) {
            this.activeIndex = len - 1;
          }
        }
      },
      
      autoPlay() {
        let that = this;
        if (this.t) {
          clearTimeout(this.t);
        }
        this.t = setTimeout(() => {
          this.handleDirect('next');
          that.autoPlay();
        }, 3000);
      },
      
      handleIndicatorClick(index) {
        this.activeIndex = index;
        this.autoPlay();
      }
    }
  }
</script>

<style>
  .carousel {
    position: relative;
  }
  .carousel img {
    display: block;
    width: 100%;
  }
  .carousel .indicator {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }
  .carousel .indicator span {
    display: inline-block;
    width: 3px;
    height: 18px;
    background: #ccc;
    margin: 0 5px;
    cursor: pointer;
  }
  .carousel .indicator span.active {
    height: 40px;
  }
</style>