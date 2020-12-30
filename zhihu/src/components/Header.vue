<template>
  <div class="header">
    <div class='header-box'>
      <div class='header-left'>
        <h5>6</h5>
        <span>六月</span>
      </div>
      <div class='header-center'>
        <h3>知乎日报</h3>
      </div>
      <div class='header-right'>
        <img src="https://img.yzcdn.cn/vant/cat.jpeg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  created(){
  }
}
</script>
<style scoped lang='less'>
.header{
  .header-box{
    display: flex;
    position: relative;
    height: 1.2rem;
    padding: .2rem 0;
    box-sizing: border-box;
    .header-left{
      width: 20%;
      text-align: center;
      display: flex;
      flex-flow: column;
      border-right: 1px solid #ccc;
      h5{
        font-size: .4rem;
      }
      span{
        font-size: .3rem;
      }
    }
    .header-center{
      margin-left: .3rem;
      h3{
       font-size: 0.5rem;
       line-height: 0.8rem;
      }
    }
    .header-right{
        position: absolute;
        right: 0;
        top: 0;
        width: 20%;
        text-align: center;
      img{
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
