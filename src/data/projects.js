import basictodo  from '../assets/projects/01.png'
import todob  from '../assets/projects/02.png'
import todot  from '../assets/projects/03.png'
import inventory  from '../assets/projects/04.png'
import vuetodo  from '../assets/projects/05.png'
import mynotes  from '../assets/projects/06.png'
import login  from '../assets/projects/07.png'


const projects = [
    {
        name: 'Basic Todo App',
        description: 'A vanilla HTML,  JS and CSS Todo Application',
        image: basictodo,
        hashtags:['todo','html5','css','javascript'],
        url:'https://basictodo.toparadise.online'
    },
    {
        name: 'Todo App with Bootstrap',
        description: 'A Todo Application in Vanilla  Javascript and Bootstrap',
        image: todob,
        hashtags:['todo','html5','javascript','bootstrap'],
        url:'https://todob.toparadise.online/'
    },
    {
            name: 'Todo App with Tailwind',
            description: 'A Todo Application in Vanilla  Javascript and TailwindCSS',
            image: todot,
            hashtags:['todo','html5','javascript','tailwind'],
            url:'https://todot.toparadise.online/'
    },
    {
        name: 'Basic Inventory App',
        description: 'A Basic Inventory App in Vue.js',
        image:  inventory,
        hashtags:['inventory','vue.js','javascript','tailwind'],
        url:'https://inventory.toparadise.online/'
    },
    {
        name: 'Todo App with Tailwind and Vue.js',
        description: 'A Todo Application in Vue.js and TailwindCSS',
        image: vuetodo,
        hashtags:['todo','vue.js','javascript','tailwind'],
        url:'https://vuetodo.toparadise.online/'
},
{
    name: 'Look at my notes!',
    description: 'A Vue.js Application with Vuex, Implementing a CRUD notes App.',
    image: mynotes,
    hashtags:['CRUD','vue.js','javascript','tailwind','vuex','vue-router'],
    url:'https://mynotes.toparadise.online/'
},
{
    name: 'The Login!',
    description: 'A Vue.js Application with Vuex, Implementing a Login with firebase in Email/Password and Google.',
    image: login,
    hashtags:['firebase','auth','vue.js','javascript','tailwind','vuex','vue-router'],
    url:'https://theloginb.toparadise.online/'
}
]
export default projects
