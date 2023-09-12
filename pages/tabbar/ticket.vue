<template>
	<view>
		<text>故障工单页面</text>
		<button @click="goto('abc')"> 点击跳转详情页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goto(item) {
				uni.navigateTo({
					url: '/pages/tabbar/abc',
				})
			}
		}
	}
</script>

<style>

</style>