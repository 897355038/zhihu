<template>
<div>
  <Header></Header>
  <div class="main">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in imagesList" :key="index">
        <div class='banner'>
          <img :src="image.image"/>
          <div class='banner_title'>
            <h5>{{image.title}}</h5>
            <span>{{image.hint}}</span>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class='content'>
      <ListCard :newsList='newsList'></ListCard>
    </div>
  </div>
  </div>
</template>

<script>
import Header from './Header'
import ListCard from './ListCard'
import { API_LATEST } from "../api/index";
export default {
  name: 'Home',
  components:{
    Header,
    ListCard
  },
  data(){
    return {
      imagesList:[],
      newsList: []
    }
  },
  async created () {
    let data = await API_LATEST()
    if (data.stories && data.stories.length>0) {
      this.imagesList = data.top_stories
      this.newsList = data.stories
    }
  }
}
</script>
<style scoped lang='less'>
@deep: ~'>>>';
@{deep}.van-swipe__indicators{
  left: 85%;
}
@{deep}.van-swipe__indicator--active{
    width: 0.4rem;
    border-radius: .2rem;
}
.main{
  .my-swipe{
    height: 6.4rem;
    background: #f2f3f5;
    .banner{
      height: 6.4rem;
      width: 100%;
      position: relative;
      img{
        width: 100%;
        height: 6.4rem;
      }
      .banner_title{
        position: absolute;
        width: 100%;
        height: 1.2rem;
        left: 0;
        bottom: 0;
        color:#fff;
        padding-left: .2rem;
        display: flex;
        flex-flow: column;
        background: -webkit-linear-gradient(top,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
        h5{
          font-size: .18rem;
        }
        span{
          font-size: .15rem;
          margin-top: .1rem;
        }
      }
    }
  }
}
</style>