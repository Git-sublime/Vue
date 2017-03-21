var vm = new Vue({
	el:'#app',
	data:{
		show:false,
		deleteItem:'',
		allClecked:false,
		totalMoney:0,
		list:[
			{
				productName:"黄鹤楼香烟",
				productPrice:19,
				productNumber:1,
				productImage:"img/hl.jpg",
				parts:"打火机"
			},
			{
				productName:"加多宝",
				productPrice:5,
				productNumber:8,
				productImage:"img/jdb.jpg",
				parts:"吸管，纸巾"
			},
			{
				productName:"iPhone7",
				productPrice:5388,
				productNumber:1,
				productImage:"img/ip7.jpg",
				parts:"充电器"
			},
			{
				productName:"黄鹤楼香烟",
				productPrice:19,
				productNumber:1,
				productImage:"img/hl.jpg",
				parts:"打火机"
			},
			{
				productName:"加多宝",
				productPrice:5,
				productNumber:8,
				productImage:"img/jdb.jpg",
				parts:"吸管，纸巾"
			}
		]
	},
	filters:{
		formatMoney:function(value){
			return "￥"+value.toFixed(2);
		}
	},
	mounted:function(){
		this.$nextTick(function(){
			this.cartInit()	
		})
	},
	methods:{
		cartInit:function(){
			// document.write('页面加载中...')
		},
		cartView:function(){
			this.$http.get("data/cartDate.json").then(res=>{
				this.list=res.body.result.list;
				this.totalMoney=res.body.result.totalMoney;
			})	
		},
		changeNumber:function(product,way){
			if (way>0) {
				product.productNumber++;
			}else{
				product.productNumber--;
				if (product.productNumber < 1) {
					product.productNumber = 1;
				}
			}
			this.calcPriceMoney()
		},
		selected:function(item){
			if (typeof item.checked == 'undefined') {
				this.$set(item,"checked",true);
			}else{
				item.checked = !item.checked;
			};
			this.calcPriceMoney();
		},
		checkAll:function(flag){
			this.allClecked = flag;
			var _this = this;
			if (this.allClecked) {
				this.list.forEach(function(item,index){
					if (typeof item.checked == 'undefined') {
						_this.$set(item,'checked',true)
					}else{
						item.checked = true;
					}
				})
			}else{
				this.list.forEach(function(item,index){
					item.checked = false
				})
			}
			this.calcPriceMoney();
		},
		calcPriceMoney:function(){
			var _this = this;
			this.totalMoney = 0;
			this.list.forEach(function(item,index){
				if (item.checked) {
					_this.totalMoney += item.productNumber*item.productPrice;
				}
			})
		},
		deleteProduct:function(item){
			this.show = true;
			this.deleteItem = item;
		},
		yesDelete:function(){
			this.show = false;
			var index = this.list.indexOf(this.deleteItem);
			this.list.splice(index,1);
			this.calcPriceMoney();
		}
	}
})