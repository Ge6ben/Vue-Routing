import {createRouter,createWebHistory} from 'vue-router'
import NotFoundPage from './pages/NotFoundPage';
import TreesContainer from './components/treeFiles/TreesContainer.vue';
import AddTree from './components/treeFiles/AddTree.vue';
// import TheHeader from './components/layouts/TheNav.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[    
        // {
        //     path:'/',component:TheHeader,props:true
        // }
        // ,
        {
            path:'/trees',component:TreesContainer ,props:true
        },
        {
            path:'/addtree',component:AddTree
        }
        ,{
            
            path:'/404' , component:NotFoundPage
        }
    ]
})

export default router;