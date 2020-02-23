<template>
<div>
  <NavBar />
    <div class="relative h-screen w-screen bg-cover bg-center shadow-2xl" 
    :style="`background-image:url(${bgImage})`">
    
     <div class="h-screen w-screen bg-red-800 opacity-75" />
    <div class="absolute h-screen w-screen bg top-0 flex flex-col justify-center items-center">
      <h1 class="text-6xl font-bold text-white px-4 hover:bg-white hover:text-red-800 opacity-75">Rodolfo Roman</h1>
      <h3 class="text-3xl font-bold text-white px-4 hover:bg-white hover:text-red-800 opacity-75">Full Stack Developer / Software Architect</h3>
     </div>
     </div>
</div>    
</template>

<script>
import NavBar from '../components/NavBar'
import byImage from '../assets/bg.jpg'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data(){
    return{
      bgImage:byImage
    }
  }
}
</script>
