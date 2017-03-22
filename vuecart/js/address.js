new Vue({
	el:"#address",
	data:{
		shippingMethod:1,
		chooseItem:0,
		limitList:3,
		addressList:[
			{
				addressID:'10001',
				userName:'李忠胜',
				streetName:'四川省成都市郫县红光镇西华大学',
				postCode:'610039',
				tel:'18228075165',
				isDefault:true
			},
			{
				addressID:'10002',
				userName:'李忠胜',
				streetName:'贵州省安顺市第一高级中学',
				postCode:'610039',
				tel:'18228075165',
				isDefault:false
			},
			{
				addressID:'10003',
				userName:'李忠胜',
				streetName:'贵州省平坝县白云镇白云村',
				postCode:'610039',
				tel:'18228075165',
				isDefault:false
			},
			{
				addressID:'10004',
				userName:'李忠胜',
				streetName:'四川省成都市郫县红光镇西华大学老宿舍区一舍203',
				postCode:'610039',
				tel:'18228075165',
				isDefault:false
			},
			{
				addressID:'10005',
				userName:'李忠胜',
				streetName:'四川省成都市郫县红光镇西华大学',
				postCode:'610039',
				tel:'18228075165',
				isDefault:false
			}
		]
	},
	mounted:function(){
		this.$nextTick(function(){
			this.cartInit()	
		})
	},
	filters:{

	},
	methods:{
		cartInit:function(){
			// document.write('页面加载中...')
		},
		listMore:function(){
			this.limitList = this.addressList.length;
		},
		setDefault:function(address){
			this.addressList.forEach(function(item,index){
				if (address.addressID == item.addressID) {
					address.isDefault = true;
				}else{
					item.isDefault = false;
				}
			})
		}
	},
	computed:{
		fliterAddressList:function(){
			// var temp = this.limitList;
			return this.addressList.slice(0,this.limitList)
			// this.limitList = 3;
		}
	}
})