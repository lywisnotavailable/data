<template>
  <div id="app">
    <h1 class="title">可视化仪表板智能识别生成系统</h1>
    <el-upload
    action="http://127.0.0.1:5000/predict/"
    :on-success="handle_success"
    :show-file-list="false"
  >

    <el-button class="btn1" size="large" type="primary"
      >选择图片上传,最多上传一张图片</el-button
    >
  </el-upload>
  <div id="divImage" class="divImage">
    <!-- <img :src="require(`@/assets/img/${url}.png`)" v-show="show" class="img_class" /> -->
    <img src="../assets/img/111.png" v-show="show" class="img_class">
    <el-button type="primary" class="btn2" round @click="show = !show">展示图片</el-button
    > 
    <el-button type="primary" class="btn3" round @click="to_next()">立即生成</el-button>
  </div>
  </div>
</template>

<script>
export default {
  name: "trueFirstView",
  data() {    
    let size = [];
    let info = [];
    let url = '111';
    return {
      size,
      info,
      url,
      show: true,
    }
  },
  methods: {
    handle_success(res) {
      // 获取后端参数
      this.info = [];
      this.size = [];
      console.log(res);
      this.size.push(res.imageSize[0]);
      this.size.push(res.imageSize[1]);
      for (let num of res.results) {
        if (num.conf > 0.55) {
          this.info.push(num.name);
          this.info.push(num.bbox);
        }
      }          
      localStorage.setItem('info',JSON.stringify(this.info));
      localStorage.setItem('size',JSON.stringify(this.size));
    },
    to_next() {
      // let routeUrl = this.$router.resolve({
      //   path: '/',
      // })
      // console.log(routeUrl)
      // window.open(routeUrl.href, '_blank')
      this.$router.push('/');
    }
    
  },
}
</script>
<style scoped>
.img_class {
  margin: 20px;
  width: 1300px;
  height: 800px;
}
.title {
  font-size: 70px;
  color: white;
  text-align: center;
  line-height: 1rem;
  margin-top: 70px;
}
.btn1 {
  width: 400px;
  height: 75px;
  margin-left: 750px;
  font-size: 25px;
  margin-top: 25px;
  margin-bottom: 35px;
}
.divImage {
  text-align: center;
  margin: 0 auto;
  width: 1350px;
  height: 900px;
  border: 5px solid white;
}
.btn2 {
  top: 1112px;
  left: 33%;
  width: 200px;
  height: 50px;
  font-size: 25px;
  position: fixed;
}
.btn3 {
  top: 1112px;
  left: 59%;
  width: 200px;
  height: 50px;
  font-size: 25px;
  position: fixed;
}
</style>