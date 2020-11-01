<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/s1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/s2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/s1.jpg" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <el-carousel :interval="5000" type="card" height="200px">
      <el-carousel-item v-for="banner in banners" :key="banner">
        <!--img class="w-100" src="../assets/images/s1.jpg" alt=""-->
        <img :src="banner" />
      </el-carousel-item>
    </el-carousel>

    

    <!-- news -->
    <m-card icon="menu" title="News">
        [Movie] xxxxxx<br>
        [Movie] yyyy<br>
        [Movie] zzz<br>
    </m-card>
    <!-- news -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: ["../assets/images/s1.jpg", "../assets/images/s2.jpg"],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
};
</script>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
