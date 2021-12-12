import {createRouter,createWebHistory} from 'vue-router'
import NotFoundPage from './pages/NotFoundPage';
import TreesContainer from './components/treeFiles/TreesContainer.vue';
import AddTree from './components/treeFiles/AddTree.vue';
import TheNatural from './pages/TheNatural.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[    
        
        {
            path:'/',component:TreesContainer 
        }
        ,{
            path:'/addtree',component:AddTree
        },
        {
            path:'/natural',component:TheNatural
        }
        ,{
            
            path:'/404' , component:NotFoundPage
        }
    ]
})

export default router;