<template>
	<view class="box-sizing-b w-full">
		<!-- 01. 头部组件 -->
		<use-header :search-tip="searchTip" :search-auto="searchAuto" @search="search"></use-header>

		<!-- 02. 轮播区 -->
		<view class="swiper-area pos-r" v-if="swiperDatas && swiperDatas.length > 0">
			<!-- 轮播组件 -->
			<swiper class="swiper w-full" autoplay indicator-dots indicator-color="#f7f7f7"
				indicator-active-color="#ff6a6c">
				<swiper-item class="swiper-item padding-lr wh-full box-sizing-b" v-for="(item, index) in swiperDatas"
					:key="index">
					<view class="wh-full" @click.stop="topage(item)">
						<image class="border-radius wh-full" mode="aspectFill" :lazy-load="true" :src="item.img" />
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 03. 分类区 -->
		<view class="custom-category-area">
			<!-- 资料按钮，竖着占3行1列，靠左显示 -->
			<view class="category-item data-button" @click="navigateToPage('data')">
				<text class="tac clamp"
					style="color: #0000ff; font-weight: bold; background-color: #f2f2f2; padding: 10rpx; display: block;">资料</text>
			</view>

			<!-- 新建一个容器包装商城和社区按钮 -->
			<view class="mall-community-container">
				<view class="category-item mall-button" @click="navigateToPage('store')">
					<text class="tac clamp"
						style="color: #ff6a6c; font-weight: bold; background-color: #f2f2f2; padding: 10rpx; display: block;">商城</text>
				</view>

				<view class="category-item community-button" @click="navigateToPage('ticket')">
					<text class="tac clamp"
						style="color: #009688; font-weight: bold; background-color: #f2f2f2; padding: 10rpx; display: block;">社区</text>
				</view>
			</view>
		</view>

		<!--  04. 自定义内容展示区-->
		<use-hot-goods :datas="goodsHotDatas" autoload="none" title="热门资料"></use-hot-goods>
		<use-hot-goods :datas="goodsHotDatas" autoload="none" title="商城热卖"></use-hot-goods>

		<!-- 置顶 -->
		<use-totop ref="usetop" :style="{ marginBottom: navHeight + 'px' }"></use-totop>

		<!-- #ifdef MP-WEIXIN -->
		<official-account @bindload="wxOAccountLoad" @binderror="wxOAccountErr"></official-account>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';

	export default {
		computed: {
			...mapState(['member'])
		},
		data() {
			return {
				// 头部参数
				searchAuto: !0,
				searchTip: '请输入搜索关键字',

				// 轮播区
				swiperDatas: [],
				// 金刚区分类
				categoryDatas: [],
				// 限时精选
				goodsLimitDatas: [],
				// 热门推荐
				goodsHotDatas: [],

				scrollTop: 0,
				navHeight: 0,
			};
		},
		// 监听页面加载
		onLoad() {},
		onPageScroll(e) {
			// this.scrollTop = e.scrollTop
			this.$refs.usetop.change(e.scrollTop);
		},
		// 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
		onShow() {
			this.loadData();
		},
		// 监听用户下拉刷新
		onPullDownRefresh() {
			this.loadData(() => {
				uni.stopPullDownRefresh();
			});
		},
		// 用户点击右上角分享
		// https://uniapp.dcloud.io/api/plugins/share?id=showsharemenu
		onShareAppMessage: function(ops) {
			let _this = this,
				mid = 0;

			if (_this.member && _this.member._id) {
				mid = _this.member._id;
			}

			return {
				title: '蜗牛俱乐部',
				path: `/pages/tabbar/home?mid=${mid}`,
				// imageUrl: 'https://mall-os-api.use-cloud.com/files/upload/image/20200408/200408115587860242.jpg',
				success: function(res) {
					// 转发成功
					console.log('转发成功', res);
				},
				fail: function(res) {
					// 转发失败
					console.log('转发失败', res);
				}
			};
		},

		methods: {
			// 加载数据
			async loadData(callback) {
				await this.$func.usemall.call('app/mp/home', {
					rows: 8
				}).then(res => {
					console.log('res', res)
					if (res.code === 200) {
						// 轮播图
						this.swiperDatas = res.datas.carousel || [];
						// 分类导航
						this.categoryDatas = res.datas.category || [];
						// 限时精选
						this.goodsLimitDatas = res.datas.limited || [];
						// 热门推荐
						this.goodsHotDatas = res.datas.hot || [];

						if (typeof callback === 'function') {
							// 数据加载完成回调函数
							callback();
						}
					}
				});
			},
			// 搜索回调函数
			search() {
				console.log('home search');
			},
			goPage(page) {
				console.log(`/pages/tabbar/${page}`)
				uni.switchTab({
					url: `/pages/tabbar/${page}`
				});
			},
			// 跳转页面
			topage(item) {
				// console.log('分类点击', item);
				if (item && item.type == '网页') {
					uni.navigateTo({
						url: `/pages/content/web?url=${item.url}`
					});
				} else if (item && item.type == '页面') {
					uni.navigateTo({
						url: `${item.url}`
					});
				} else {
					if (item.id) this.$api.togoods({
						id: item._id
					});
				}
			},
			navigateToPage(page) {
				// 跳转页面
				this.goPage(page);
			}
		},
		mounted() {
			// #ifdef H5 || MP-360
			this.navHeight = 50;
			// #endif
		}
	};
</script>

<style lang="scss">
	/* 轮播图区 */
	.swiper-area {
		.swiper {
			height: 320rpx;
		}
	}

	.category-item {
		width: calc(50% - 10rpx);
		/* 每个按钮占用1x2的格子，调整宽度 */
		background-color: #fff;
		/* 背景颜色 */
		border: 1px solid #ddd;
		/* 边框样式 */
		border-radius: 8rpx;
		/* 边框圆角 */
		padding: 20rpx;
		/* 格子内边距 */
		text-align: center;
		margin-bottom: 20rpx;
		/* 调整按钮之间的间距 */

		/* 鼠标悬停效果（可选） */
		&:hover {
			background-color: #f7f7f7;
		}

		text {
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}
	}

	/* 新的分类区样式 */
	.custom-category-area {
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		/* 调整内边距 */
	}

	/* 新容器样式，商城和社区按钮共享同一列 */
	.mall-community-container {
		display: flex;
		flex-direction: column;
		/* 垂直方向排列按钮 */
		width: 50%;
		/* 设置容器宽度为50% */
	}

	/* 商城按钮和社区按钮样式，横着占1行1列 */
	.mall-button,
	.community-button {
		width: 100%;
		/* 设置按钮宽度为100% */
		height: 100rpx;
		/* 设置按钮高度为500像素 */
		text-align: right;
	}
</style>