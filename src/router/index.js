import Vue from 'vue'
import Router from 'vue-router'
import Seller from '@/components/Seller/Seller'
import Comment from '@/components/Comments/Comments'
import Goods from '@/components/Goods/Goods'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name:'Goods',
        component: Goods
    },
    {
    	path:'/seller',
    	name:'Seller',
    	component: Seller
    },
    {
    	path:'/comment',
    	name:'Comment',
    	component: Comment
    }
  ]
})
