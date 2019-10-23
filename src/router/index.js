import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Classification from '@/components/classification/classification'
import Bargain from '@/components/home/bargain'
import Cation from '@/components/classification/cation'
import Sgin from '@//components/home/sgin'
import Column from '@/components/home/column'
import Details from '@/components/home/details'
import List from '@/components/home/list'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			//分类
			path: '/classification',
			component: Classification
		},
		{
			//砍价
			path:'/bargain',
			component:Bargain
		},
		{
			//分类详情
			path:'/cation/:id?',
			component:Cation
		},
		{
			//签到
			path:'/sgin',
			component:Sgin
		},
		{	//专栏
			path:'/column',
			component:Column
		},
		{	//专栏详情
			path:'/details/:id',
			component:Details
		},
		
		{	//砍价详情
			path:'/list/:id?',
			component:List
		}
	]
})
