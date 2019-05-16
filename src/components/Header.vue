<template>
  <header>
    <div class="clearfloat">
      <img src="../assets/header-logo.png" alt="秦领大队" width="70" height="60" style="margin-top: 9px"/>
      <img src="../assets/header-name.png" alt="陕西领克车友总会" width="" height="44px" style="margin-top: 17px; margin-left: 12px;">
      <nav>
        <ul class="clearfloat">
          <router-link v-for="(item, index) in menu" tag="li" :to="item.path" :key="index">{{item.name}}</router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          { name: '首页', path: 'home' },
          { name: '新闻中心', path: 'news' },
          { name: '关于我们', path: 'about' }
        ]
      }
    }
  }
</script>

<style>
  header {
    width: 100%;
    min-width: 1200px;
    background: #fff;
  }
  header>div {
    width: 1200px;
    margin: 0 auto;
  }
  .clearfloat:before,
  .clearfloat:after {
    content: '';
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
  }
  header>div>img {
    float: left;
  }
  header nav {
    float: right;
  }
  header nav ul li {
    list-style: none;
    float: left;
    padding: 25px 0;
    font-size: 20px;
    color: #333;
  }
  header nav ul li+li {
    margin-left: 64px;
  }
  header .router-link-active {
    color: #da251d;
  }
</style>