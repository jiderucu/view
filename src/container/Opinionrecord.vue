<template>
  <div class="o-record">
    <x-header class="l-header">我的好评记录</x-header>
    <div v-for="item in list" class="text-box">
      <p class="left-l">{{item.title}}</p>
      <p class="left">{{item.subTime}}</p>
      <span class="left">{{item.status}}</span>
      <span class="left-p">{{item.money}}</span>
    </div>
  </div>
</template>

<script>
  import { XHeader, Group, Cell } from 'vux'
  export default {
    data () {
      return {
        list: [{
          id: 1,
          title: '淘宝订单号:XXXX',
          subTime: '提交时间: 2017-03-04 12:22',
          status: '审核状态:审核通过',
          money: '红包发放状态：已发放',
          url: '/'
        }, {
          id: 2,
          title: '淘宝订单号:XXXX',
          subTime: '提交时间:2017-03-04 12:22',
          status: '审核状态:审核通过',
          money: '红包发放状态:已发放',
          url: {
            path: '/',
            replace: false
          }
        }]
      }
    },
    components: {
      XHeader,
      Group,
      Cell
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
      .o-record{
        .text-box{
          width:100%;
          height:100px;
          text-align: left;
          border-bottom:1px solid black;
          font-size: 14px;
        }
        .left-l{
          margin-left:5px;
        }
        .left{
          margin-left: 19px;
        }
        .left-p{
          margin-left:60px;
        }
      }
</style>
