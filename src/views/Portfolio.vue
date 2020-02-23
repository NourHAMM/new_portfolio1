<template>
<div>
  <NavBar is-home='false'></NavBar>
  <div class='pt-24 min-h-screen w-screen top flex flex-col flex-wrap justify-center items-canter px-8 bg-gray-200 shadow-lg'>
      <div class='w-full flex flex-wrap mb-8'  >
       <div
         v-for="(project, index) in projects" 
         :key="index" 
         class="w-1/4 p-2">
            <Card :project="project" />
                </div>
                </div>
       </div>
</div>

</template>

<script>
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import projects from '../data/projects'
export default {
    name: 'Portfolio',
    components:{
        NavBar,
        Card
    },
    data() {
        return{
            projects
        }
    }
    }

</script>

<style>

</style>