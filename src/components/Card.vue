<template>
   <div class= "bg-white rounded shadow-lg" >
              <img class= "w-fil" :src="project.image" alt="" />
             <div class="px-6 -py-4">

                 <p class= "font-bold text-gray-700 text-lg  mb-2">{{ project.name }}</p>
                 <p class="text-gray-700 text-base mb-4">{{ project.description}}</p>
                    <a :href="project.url" target:="_blank" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Open</a>

                    <div class="px-6 py-4">
                        <span
                         v-for="(hashtag, index) in project.hashtags"
                         :key="index"
                         class="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
                            #{{hashtag}}</span>
                    </div>
                 </div>
             </div>
</template>

<script>
export default {
    name:'Card',
    props: {
        project:{
            type:Object,
            default: () => ({
                name: '',
                description: '',
                image:'',
                hashtags:[],
                url:''
             })
            }
        }
    }

</script>
