<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>网站正在建设中，您可以通过其他方式加入我们！</p>
    <ul :class="UA">
      <li>
        <img src="../assets/contactwechat.png" alt="微信" />
        <div>微信</div>
      </li>
      <li>
        <img src="../assets/contactqq.png" alt="QQ" />
        <div>QQ</div>
      </li>
      <li>
        <img src="../assets/contactautohome.png" alt="汽车之家">
        <div>汽车之家</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  props: {
    msg: String
  },
  
  data() {
    return {
      UA: 'pc'
    }
  },
  
  created() {
    this.getUserAgent();
  },
  
  methods: {
    getUserAgent() {
      this.UA = navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/) ? 'mobile' : 'pc';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul.pc {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
ul.mobile {
  display: block;
}
ul img {
  width: 120px;
  height: 120px;
}
li {
  display: block;
  margin: 0 10px 20px 10px;
}
</style>
