/**
* Created by zhengx
*/
<template>
  <footer>
    <div>
      <p class="link-wrap">
        <a 
          v-for="(item, index) in links"
          :key="index"
          ref="nofollow"
          class="link-item"
          :href="item.link"
          target="_blank"
          v-text="item.title">
        </a>
      </p>
      <p class="copyright">Copyright © 2019 秦领大队陕西领克车友总会 陕ICP备18000283号-1</p>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          { title: '领克官网', link: 'https://www.lynkco.com.cn' },
          { title: '汽车之家', link: 'https://www.autohome.com.cn' },
          { title: '新浪汽车', link: 'https://auto.sina.com.cn/' },
          { title: '搜狐汽车', link: 'https://auto.sohu.com/' },
          { title: '', link: '' },
          { title: '', link: '' },
          { title: '', link: '' },
          { title: '', link: '' }
        ]
      }
    }
  }
</script>

<style>
  footer {
    widht: 100%;
    min-width: 1200px;
    background: #414141;
    padding-top: 40px;
    font-size: 14px;
  }
  footer>div {
    width: 1200px;
    margin: 0 auto;
  }
  footer .copyright {
    color: #aaa;
    padding: 20px 0;
  }
  footer .link-item {
    display: inline-block;
    color: #aaa;
    margin-right: 10px;
    transition: color .3s;
    text-decoration: none;
  }
  footer .link-item:hover {
    color: #ff485b;
  }
</style>