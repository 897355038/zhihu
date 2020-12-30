<template>
  <div class="news-content">
    <div class='news-box'>
      <div class='news-bg'>
        <img :src='newsData.images[0]' v-if = 'newsData.images && newsData.images[0]'>
          <div class='banner_title'>
            <p>{{newsData.title}}</p>
          </div>
      </div>
      <div class='news-info'>
        <van-skeleton  :row="5" title :loading="!newsData.body">
          <div v-html='newsData.body'>
          </div>
        </van-skeleton>
      </div>
    </div>
    <van-tabbar>
      <van-tabbar-item icon="arrow-left" to="/home"></van-tabbar-item>
      <van-tabbar-item icon="comment-o" :badge='countData.comments'></van-tabbar-item>
      <van-tabbar-item icon="good-job-o" :badge='countData.long_comments'></van-tabbar-item>
      <van-tabbar-item icon="friends-o" :badge='countData.popularity'></van-tabbar-item>
      <van-tabbar-item icon="back-top" :badge='countData.short_comments'></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import { API_COMMENT, API_DETAIL } from "../api/index";
export default {
  name: 'Detail',
  data(){
    return {
      newsId: '',
      newsData:{},
      countData: {}
    }
  },
  async created(){
    this.newsId = this.$route.params.id
    this.countData= await API_COMMENT(this.newsId)
    this.newsData= await API_DETAIL(this.newsId)
    if (this.newsData.css && this.newsData.css[0]) {
      let link = document.getElementById('link')
      if(!link) {
        link=document.createElement('link')
        link.href=this.newsData.css[0]
        link.id='link'
        link.rel='stylesheet'
        document.body.appendChild(link)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@deep: ~'>>>';
@{deep}.van-info{
  background: transparent;
  color:#666;
  right: -8px;
  font-size: .2rem;
}
@{deep}.van-tabbar-item--active{
  color: #646566;
}
@{deep}.van-tabbar-item__icon{
  font-size: .5rem;
}
.news-content{
  width: 100%;
  overflow: hidden;
  .news-box{
    .news-bg{
      height: 6.4rem;
      width: 100%;
      background: #f2f3f5;
      position: relative;
      img{
        width: 100%;
        height: 6.4rem;
      }
      .banner_title{
        position: absolute;
        width: 100%;
        height: 0.8rem;
        left: 0;
        bottom: 0;
        color:#fff;
        padding-left: .2rem;
        display: flex;
        flex-flow: column;
        background: -webkit-linear-gradient(top,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
        p{
          font-size: .3rem;
        }
      }   
    }
    .news-info{
      margin-top: .4rem;
    }
  }
}
</style>
