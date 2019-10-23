// 第二部
import HTTP from '../utils/http'
const _http=new HTTP()
class Product{
	// 轮播
	list(){
		return _http.request({
			url:'banner/list'
			
		})
	}
	// 全民砍价
	list1(){
		return _http.request({
			url:'shop/goods/kanjia/list'
		})
	}
	//精选专题
	list2(){
		return _http.request({
			url:'cms/news/list'
		})
	}
	//人气推荐
	list3(){
		return _http.request({
			url:'shop/goods/kanjia/list'
		})
	}
	//专栏详情
	list4(newid){
		return _http.request({
			url:'cms/news/detail',
			type:'post',
			data:{
				id:newid
			}
		})
	}
	//砍价详情
	list5(newid){
		return _http.request({
			url:'shop/goods/kanjia/info',
			type:'post',
			data:{
				joiner:newid
			}
		})
	}
	//分类详情
	detail (productId) {
	  return _http.request({
	    type: 'post',
	    url: 'shop/goods/list',
	    data: {
	      id: productId
	    }
	  })
	}
}
export default Product