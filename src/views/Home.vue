<template>
  <div>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <a :href="item.url" :target="item.isNewPage ? '_self' : '_blank'">
          <h3 class="medium d-flex centered">{{ item.original_title }}</h3>
          <img alt="banner" :src="baseurl + item.backdrop_path" width="100%" ref="bannerHeight" @load="imgLoad">
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
      baseurl: 'https://image.tmdb.org/t/p/original',
      bannerHeight: '',
      banners: []
    }
  },
  methods: {
    async fetchNewsCat() {
      const resNew = await this.$http.get('news/list')
      console.log(resNew)
    },
    async fetchMovie() {
      const response = await this.$http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=05dc3d92066f96e0187d56c1c2be6673&language=zh-tw')
      this.banners = response.data.results
    },

    imgLoad() {
      this.$nextTick(() => {
        const bannerHeights = this.$refs.bannerHeight
        if (bannerHeights && bannerHeights.length) {
          this.bannerHeight = bannerHeights[0].height
        }
      })
    }
  },
  mounted() {
    this.imgLoad()
    window.addEventListener(
      'resize',
      () => {
        const bannerHeights = this.$refs.bannerHeight
        if (bannerHeights && bannerHeights.length) {
          this.bannerHeight = bannerHeights[0].height
        }
        this.imgLoad()
      },
      false
    )
  },
  created() {
    // this.fetchNewsCat()
    this.fetchMovie()
  }
}
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
