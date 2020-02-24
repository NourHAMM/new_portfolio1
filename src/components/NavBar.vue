<template>
  <nav class="nav w-screen z-20 text-white" :class="isHome ? '' : 'shadow-2xl bg-blue-800'">
    <div class="left">
      <span class="font-light text-3x1">
        My
      <span class="font-semibold">Portfolio</span>
      </span>
    </div>
    <div class="right">

      <router-link class="link" to="/"> Home</router-link>
      <router-link class="link" to="/portfolio"> Portfolio</router-link>
 </div>
  </nav>
</template>

<script>
export default {
    name:'NavBar',
    props: {
      ishome: {
        type: Boolean,
        default: true
      }
    }
}
</script>

<style lang="scss" scoped>
.nav{
  @apply h-24 fixed px-12 flex justify-between items-center;
}
.link{
  @apply px-2 font-semibold;
  &:hover{
    @apply text-yellow-500;
  }
}
</style>
