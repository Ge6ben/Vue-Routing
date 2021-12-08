import {createRouter,createWebHistory} from 'vue-router'
import NotFoundPage from './pages/NotFoundPage'
import TheTrees from './components/treeFiles/TheTrees.vue';
import TreesContainer from './components/treeFiles/TreesContainer.vue';


const router = createRouter({
    history:createWebHistory(),
    routes:[    
        {
            path:'/',component:TheTrees
        },
        {
            path:'/trees',component:TreesContainer
        }
        ,{
            
            path:'/404' , component:NotFoundPage
        }
    ]
})

export default router;