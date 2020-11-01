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
            <router-link class="nav-link" tag="div" to="/">Movie</router-link>
            </div>
            <div class="nav-item">
            <router-link class="nav-link" tag="div" to="/">Actor</router-link>
            </div>
            <div class="nav-item">
            <router-link class="nav-link" tag="div" to="/">News</router-link>
            </div>
            
        </div>
        </div>

      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>