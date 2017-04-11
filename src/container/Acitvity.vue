<template>
  <div class="a-activity">
     <x-header class="l-header">活动规则</x-header>
      <Swiper :list="list" auto loop >
    </Swiper>
    <textarea class="textarea">如果你无法简洁的表达你的想法，那只说明你还不够了解它。
    --啊尔伯特.爱因斯坦</textarea>
     <router-link to="/opinion" class="text-type">
     <x-button type="default" class="text-but">立即参加</x-button>
     </router-link>
  </div>
</template>
<script>
   import {
    XHeader,
    Swiper,
    XButton
    } from 'vux'
export default {
     data () {
       return {
         list: [{
           img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
         }, {
           img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
         }, {
           img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
         }]
       }
     },
     components: {
       XHeader,
       Swiper,
       XButton
     }
   }
</script>

<style lang="less">
  .a-activity{
    .textarea{
      width:100%;
      height:250px;
      border: none;
      outline: none;
    }
    .text-type{
      text-decoration: none;
    }
    .text-but{
      width:60%;
      position:absolute;
      left:20%;
      bottom: 50px;
    }
  }
</style>
