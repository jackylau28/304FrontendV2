<template>
  <div>
    <!--swiper-- ref="mySwiper" :options="swiperOptions">
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
    </!--swiper-->

     <!--el-carousel trigger="click" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img
          :src="baseurl + item.backdrop_path"
          alt="banner"
          ref="bannerHeight"
          width="300px"
          @load="imgLoad"
        >
      </el-carousel-item>
    </el-carousel-->

   <el-carousel :interval="4000" type="card"  >
    <el-carousel-item v-for="item in banners" :key="item.id">
        <a href="item.url" :target="item.isNewPage ? '_self' : '_blank'">
            <h3 class="medium d-flex centered">{{ item.original_title }}</h3>
            <img alt="banner"  :src="baseurl + item.backdrop_path" width="100%" >
        </a>
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
        baseurl:'https://image.tmdb.org/t/p/original',
        bannerHeight: '',
      banners: '',
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  methods:{
      async fetchNewsCat (){
          const res_new= await this.$http.get('news/list')
          console.log(res_new)
      },
      async fetchMovie(){
          const response= await this.$http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=05dc3d92066f96e0187d56c1c2be6673&language=zh-tw')
          //return {banners: response.data.data}
          console.log(response.data.results)   
          this.banners=  response.data.results
        //return {banners: response.data.results}
      },
  
      imgLoad() {
        this.$nextTick(() => {
          this.bannerHeight = this.$refs.bannerHeight[0].height
        })
      }
  },
    mounted() {
        this.imgLoad()
        window.addEventListener('resize', () => {
        this.bannerHeight = this.$refs.bannerHeight[0].height
        this.imgLoad()
        }, false)
    },
  created() {
      //this.fetchNewsCat()
      this.fetchMovie()
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
.centered {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
