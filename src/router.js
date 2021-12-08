import {createRouter,createWebHistory} from 'vue-router'
import NotFoundPage from './pages/NotFoundPage'
import TheTrees from './components/treeFiles/TheTrees.vue';


const router = createRouter({
    history:createWebHistory(),
    routes:[    
        {
            path:'/',component:TheTrees
        }
        ,{
            
            path:'/404' , component:NotFoundPage
        }
    ]
})

export default router;