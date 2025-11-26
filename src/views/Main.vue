<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" alt="Logo" height="30">
      <div class="px-2 flex-1">
        <div class="text-white">Movie</div>
        <div class="text-grey-1 fs-xxs">News</div>
      </div>
    </div>

    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around">
        <div class="nav-item active">
          <router-link class="nav-link" to="/">Movie</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/">Actor</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/">News</router-link>
        </div>
      </div>
    </div>

    <div class="extra-pages bg-black">
      <div class="extra-pages__inner">
        <router-link
          v-for="page in extraPages"
          :key="page"
          class="extra-pages__link"
          :to="`/page-${page}`"
        >
          Page {{ page }}
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      extraPages: Array.from({ length: 10 }, (_, index) => index + 1)
    }
  }
}
</script>

<style scoped>
.extra-pages {
  overflow-x: auto;
}

.extra-pages__inner {
  display: flex;
  padding: 8px 12px 12px;
  gap: 8px;
}

.extra-pages__link {
  padding: 6px 12px;
  border-radius: 12px;
  background: #1f1f1f;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease;
}

.extra-pages__link:hover {
  background: #2d8cf0;
  color: #fff;
}
</style>
