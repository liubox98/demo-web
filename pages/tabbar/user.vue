<template>
	<view class="user-area">
		<view class="header-area padding-lr-sm" :class="(is_mp && !is_alipay) ? 'padding-top-big' : 'padding-top'">
			<view class="dflex-b">
				<view class="member-area padding-top-sm margin-bottom dflex pos-r"
					@click="to('/pages/user/setting/personal')">
					<view>
						<image class="headimg border-radius-c"
							:src="member.member_headimg || '/static/images/user/default.png'"></image>
					</view>
					<view class="margin-left-sm">
						<view class="info-box">
							<text v-if="islogin"
								class="fs-lg">{{ member.member_name || member.member_nickname || '小蜗牛🐌' }}</text>
							<text v-else>未登录</text>
						</view>
						<view v-if="member.member_city"><text class="fs-xxs">{{ member.member_city }}</text></view>
					</view>
				</view>
			</view>

			<view class="border-radius">
				<view class="vip-card-area pos-r padding-lr padding-tb-sm">
					<view v-if="islogin">
						<text class="iconfont iconhuiyuan"></text>
						<text class="margin-left-sm">蜗牛俱乐部 会员</text>
					</view>
					<view v-else>
						<text class="iconfont iconhuiyuan"></text>
						<text class="margin-left-sm">登录 · 享会员好礼</text>
					</view>
				</view>

				<view class="stats-area dflex-c bg-main">
					<view class="item dflex dflex-flow-c" @click="toOrder('/pages/user/order/order', '全部')">
						<text class="num">{{ member.member_monetary / 100 || 0 }}</text>
						<text>累计消费</text>
						<view class="vertical-line"></view>
					</view>
					<view class="item dflex dflex-flow-c" @click="to('/pages/user/coupon/coupon')">
						<text class="num">{{ member.member_coupon_cnt || 6 }}</text>
						<text>优惠券</text>
					</view>
				</view>
			</view>
		</view>

		<view class="container-area padding-lr-sm padding-bottom-sm">
			<!-- 我的订单 -->
			<view class="border-radius margin-top-sm bg-main">
				<use-list-title title="我的订单" iconfont="icondingdan" color="#ff6a6c" fwt="600" tip="查看全部订单"
					@goto="toOrder('/pages/user/order/order', '全部')"></use-list-title>

				<view class="order-area padding-bottom-sm padding-lr dflex-c">
					<view class="item dflex dflex-flow-c" @click="toOrder('/pages/user/order/order', '待付款')">
						<view class="iconfont">&#xe6da;<view class="badge badge-small"
								v-if="stats && stats.order_state && stats.order_state['待付款'] > 0">
								{{stats.order_state['待付款']}}
							</view>
						</view>
						<text>待付款</text>
					</view>
					<view class="item dflex dflex-flow-c" @click="toOrder('/pages/user/order/order', '待发货')">
						<view class="iconfont">&#xe6d9;<view class="badge badge-small"
								v-if="stats && stats.order_state && stats.order_state['待发货'] > 0">
								{{stats.order_state['待发货']}}
							</view>
						</view>
						<text>待发货</text>
					</view>
					<view class="item dflex dflex-flow-c" @click="toOrder('/pages/user/order/order', '待收货')">
						<view class="iconfont">&#xe6d7;<view class="badge badge-small"
								v-if="stats && stats.order_state && stats.order_state['待收货'] > 0">
								{{stats.order_state['待收货']}}
							</view>
						</view>
						<text>待收货</text>
					</view>
					<view class="item dflex dflex-flow-c" @click="toOrder('/pages/user/order/order', '待评价')">
						<view class="iconfont">&#xe6db;<view class="badge badge-small"
								v-if="stats && stats.order_state && stats.order_state['待评价'] > 0">
								{{stats.order_state['待评价']}}
							</view>
						</view>
						<text>待评价</text>
					</view>
					<view class="item dflex dflex-flow-c" @click="toOrder('/pages/user/order/order', '售后中')">
						<view class="iconfont">&#xe715;<view class="badge badge-small"
								v-if="stats && stats.order_state && stats.order_state['售后中'] > 0">
								{{stats.order_state['售后中']}}
							</view>
						</view>
						<text>售后/退款</text>
					</view>
				</view>
			</view>
			<view class="border-radius margin-top-sm bg-main">
				<use-list-title title="工单详情" iconfont="iconshoucang-" color="#ff6a6c" fwt="600" :tip="stats.collect"
					@goto="to('/pages/user/collect/collect')"></use-list-title>
			</view>

			<view class="border-radius margin-top-sm bg-main">
				<!-- 我的足迹 -->
				<use-list-title title="我的足迹" iconfont="iconzuji" color="#ffab6c" fwt="600" :tip="stats.browsing"
					@goto="to('/pages/user/browsing/browsing')"></use-list-title>
				<scroll-view scroll-x class="browsing-area padding-lr">
					<view class="dflex">
						<view v-for="(item, index) in historyDatas" :key="index">
							<image class="border-radius-sm margin-right-sm" @click="togoods(item)" :src="item.img"
								mode="aspectFill"></image>
						</view>
					</view>
				</scroll-view>

				<use-list-title title="我发表的" iconfonts="icon-jiluwendang" color="#ff6a6c" fwt="600" :tip="stats.collect"
					@goto="to('/pages/user/collect/collect')"></use-list-title>

				<use-list-title title="我评论的" iconfont="iconshoucang-" color="#ff6a6c" fwt="600" :tip="stats.collect"
					@goto="to('/pages/user/collect/collect')"></use-list-title>

				<use-list-title title="我的收藏" iconfont="iconshoucang-" color="#ff6a6c" fwt="600" :tip="stats.collect"
					@goto="to('/pages/user/collect/collect')"></use-list-title>

				<use-list-title title="地址" iconfont="icondizhi-" color="#5a9ded" fwt="600"
					@goto="to('/pages/user/address/address')"></use-list-title>
				<!-- 
				<use-list-title title="设置" iconfont="iconshezhi-" color="#58bc8a" fwt="600"
					@goto="to('/pages/user/setting/setting')"></use-list-title> -->
			</view>

			<view v-if="islogin" class="border-radius margin-top-sm padding-sm dflex-c bg-main log-out-btn"
				@click="openActionSheet">
				<text class="cell-tit">退出登录</text>
			</view>
			<view v-else class="border-radius margin-top-sm padding-sm dflex-c bg-main log-out-btn"
				@click="to('/pages/login/login')">
				<text class="cell-tit">去登录</text>
			</view>

			<!-- 操作菜单 -->
			<use-action-sheet v-model="actionSheetShow" :list="actionSheetList" :tips="actionSheetTips"
				@click="actionSheetClick" @close="actionSheetClose"></use-action-sheet>
		</view>

	</view>
</template>
<script>
	const db = uniCloud.database();

	import {
		mapState,
		mapMutations
	} from 'vuex';
	const _history = 'usemall-goods-history'
	export default {
		computed: {
			...mapState(['islogin', 'member'])
		},
		data() {
			return {
				isreq: false,
				// 浏览历史
				historyDatas: {},
				// 统计数据
				stats: {},

				actionSheetShow: false,
				actionSheetList: [],
				actionSheetTips: {
					text: "",
					color: "#9a9a9a",
					size: 24
				},

				is_mp: false,
				is_alipay: false,
			};
		},
		onLoad() {
			this.$nextTick(() => {
				this.is_mp = this.$env.is_mp;
				this.is_alipay = this.$env.platform == 'alipay';
			})
		},
		onShow() {
			let _this = this;
			if (!this.islogin) {
				this.$api.msg('账号未登录');
				return;
			}

			this.loadData();
		},
		methods: {
			...mapMutations(['logout', 'putMember']),
			// 加载数据
			loadData() {

				this.$func.usemall.call('member/data').then(res => {
					if (res.code == 200) {
						this.putMember(res.datas.member);
						console.log('member/data', res);

						this.stats = res.datas.stats;
						this.stats.order_state = {};
						this.stats.order.forEach(_order => {
							this.stats.order_state[_order._id] = _order.num;
						});
					}
				});

				// 浏览历史
				const goodsTemp = db.collection('usemall-goods').getTemp();

				db.collection('usemall-goods-history', goodsTemp)
					.where('create_uid == $env.uid')
					.field(
						'visit_cnt, last_modify_time, goods._id as goods_id, goods.img as goods_img, goods.state as goods_state'
					)
					.orderBy('last_modify_time desc')
					.get()
					.then(res => {
						if (res && res.result && res.result.errCode === 0) {
							let _historyDatas = [];
							res.result.data.forEach(x => {
								x._id = x.goods_id[0];
								x.img = x.goods_img[0];
								x.state = x.goods_state[0];
								_historyDatas.push(x);
							});
							this.historyDatas = _historyDatas;
						}
					});
			},

			// 打开操作菜单
			openActionSheet() {
				this.actionSheetShow = true;

				this.$api.timerout(() => {
					this.actionSheetList = [{
						text: "退出登录",
						color: "#333"
					}, {
						text: "切换账号",
						color: "#333"
					}, ];

				}, 0);
			},
			// 关闭操作菜单
			actionSheetClose() {
				console.log(this.actionSheetShow);
			},
			// 点击操作菜单
			actionSheetClick(index) {
				switch (index) {
					case 0:
						this.$api.msg('退出成功');
						this.logout();
						this.$api.timerout(() => {
							this.$api.tohome();
						}, 200);
						break;
					case 1:
						this.$api.tologin();
						break;
				}
			},

			// 统一跳转接口，拦截未登录路由
			to(url) {
				if (!this.islogin) {
					this.$api.tologin()
					return;
				}

				uni.navigateTo({
					url
				});
			},
			// 跳转到 订单
			toOrder(url, state) {
				if (!this.islogin) {
					this.$api.tologin()
					return;
				}

				uni.setStorage({
					key: '__order_state',
					data: state,
					success(res) {
						console.log(res);
					},
					complete() {
						uni.navigateTo({
							url
						});
					}
				});
			},

			// 跳转商品详情
			togoods(item) {
				this.$api.togoods({
					id: item._id
				});
			}
		}
	};
</script>
<style lang="scss">
	page {
		min-height: 100%;
		background: $page-color-base;
	}

	.member-area {
		image {
			width: 130rpx;
			height: 130rpx;
			border: 5rpx solid #fff;
		}
	}

	.vip-card-area {
		color: #f7d680;
		background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
	}

	.stats-area {
		.item {
			padding: 30rpx 0;
		}

		.num {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 6rpx;
		}
	}

	.order-area {
		.item {}

		.iconfont {
			position: relative;
			font-size: $font-lg + 8upx;

			.badge {
				right: initial;
			}
		}
	}

	.stats-area .item,
	.order-area .item {
		position: relative;
		font-size: $font-sm;
		color: $font-color-base;
		flex: 1;
	}

	.browsing-area {
		image {
			width: 160rpx;
			height: 160rpx;
		}
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}

	.log-out-btn {
		color: $font-color-base;
	}
</style>