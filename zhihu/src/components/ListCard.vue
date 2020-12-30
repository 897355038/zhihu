<template>
  <div class="card">
    <van-skeleton title avatar :row="3" :loading="!cardList.length > 0">
    <ul>
      <li v-for='(item, index) in cardList' :key='index' @click='goDetail(item.id)'>
        <div class='card-box'>
          <div class='card-left'>
            <p>{{item.title}}</p>
            <span>{{item.hint}}</span>
          </div>
          <div class='card-right'>
            <img :src='item.images[0]'>
          </div>
        </div>
      </li>
    </ul>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props:{
    newsList: {
      type: Array
    }
  },
  data(){
    return{
      cardList:[]
    }
  },
  watch:{
    newsList(newValue){
      if(newValue) {
        this.cardList = newValue
      }
    }
  },
  methods:{
    goDetail(id){
      this.$router.push({
        path: `/detail/${id}`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.card{
  .card-box{
    display: flex;
    justify-content: space-between;
    padding: .2rem;
    .card-left{
      color:#333;
      display: flex;
      flex-flow: column;
      p{
        font-size: .4rem;
      }
      span{
        font-size: 0.3rem;
        margin-top: .1rem;
      }
    }
    .card-right{
      img{
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
}
</style>
