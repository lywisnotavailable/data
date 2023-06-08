<template>
  <div id="app">
    <div class="topMenu">
      <div class="leftTop">
        <!-- <div class="two">
          <img class="back" src="./assets/back.png" />
          <img class="reco" src="./assets/reco.png" />
        </div>
        <div class="divi">
          <el-divider direction="vertical"></el-divider>
        </div> -->
        <div class="save">
          <img src="../assets/save.png" />
        </div>
      </div>
      <div class="midTop">
        <div class="word">工作空间</div>
      </div>
      <!-- <div class="rightTop">
        <button class="pub">发布</button>
      </div> -->
    </div>
    <div class="content">
      <leftMenu></leftMenu>
    </div>
  </div>
</template>

<script>
import leftMenu from "../components/leftMenu.vue";

export default {
  name: "App",
  components: {
    leftMenu,
  },
};
</script>

<style>
html,body,#app {
  height: 100%;
  width: 100%;
  background: rgb(27, 27, 32);
}
.topMenu {
  height: 5%;
  width: 100%;
  background: rgb(27, 27, 32);
}
.leftTop {
  height: 100%;
  margin-left: 5%;
  width: 25%;
  float: left;
}
.el-divider--vertical{
  height: 100%;
  width: 25%;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
.word{
  color: snow;
  font-size:35px;
  margin-top:10px;
}
.two {
  float: left;
}
.divi {
  margin-top: 1%;
  width: 3px;
  height: 100%;
  float: left;
}
.save {
  float: left;
}
.two img {
  margin-left: 3px;
  margin-top: 5%;
  padding-left: 1px;
  width: 50px;
  height: 90%;
  border: black solid 1px;
}
.save img {
  margin-left: 15px;
  margin-top: 10%;
  width: 50px;
  height: 90%;
  /* border: black solid 1px; */
}
.midTop {
  width: 10%;
  height: 100%;
  float: left;
  line-height: 200%;
  margin-left: 18%;
}
.rightTop {
  margin-left: 85%;
  padding-top: 8px;
}
.content {
  height: 95%;
  width: 100%;
  background: gray;
}
</style>
