/**
* Created by zhengx
*/
<template>
  <footer>
    <div>
      <ul class="link-wrap">
        
      </ul>
      <p class="copyright">Copyright © 2019 秦领大队陕西领克车友总会 陕ICP备18000283号-1</p>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          { title: '领克官网', link: 'https://www.lynkco.com.cn/' }
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
  }
  footer>div {
    width: 1200px;
    margin: 0 auto;
  }
  footer .copyright {
    color: white;
    padding: 20px 0;
  }
</style>