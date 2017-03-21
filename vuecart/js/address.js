new Vue({
	el:"#address",
	data:{
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
				addressID:'10001',
				userName:'李忠胜',
				streetName:'四川省成都市郫县红光镇西华大学',
				postCode:'610039',
				tel:'18228075165',
				isDefault:false
			},
			{
				addressID:'10001',
				userName:'李忠胜',
				streetName:'四川省成都市郫县红光镇西华大学',
				postCode:'610039',
				tel:'18228075165',
				isDefault:false
			},
			{
				addressID:'10001',
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