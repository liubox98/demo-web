import $config from './config.js'
import $api from './common.js'

let db = {};
let unidb = uniCloud.database();


db = new Proxy(db, {
	get: function(target, key) {
		return new DbContext(key);
	}
});

function DbContext(name) {
	this.table = name;
	this.where_obj = {};
	this.where_arr = [];
	this.where_str = '';
	
	this.istemp = false;
	this.temp = null;
	
	this.configDefault = {
		hideLoading: true
	};
	this.response = {
		code: 200,
		datas: {},
		msg: ''
	}
}

DbContext.prototype = {
	table: '', // 数据集合|表名
	where_obj: {}, // where 条件
	where_arr: [], // where 条件
	where_str: '', // where 条件
	istemp: false,
	temp: null,
	response: {}, // 统一响应格式
	configDefault: {}	// 配置文件
};

DbContext.prototype.config = function(config) {
	// console.log('config', config)
	if (typeof config === 'object') {
		Object.assign(this.configDefault, config);
	}
	
	return this
}
DbContext.prototype.where = function(params) {
	// console.log('params', params)
	if (typeof params === 'object') {
		Object.assign(this.where_obj, params);
	}
	if (typeof params === 'string') {
		this.where_arr.push(params);
	}
	return this
}
DbContext.prototype.whereif = function(_flag, _obj) {
	if (_flag) this.where(_obj);
	return this;
}

DbContext.prototype.collection = function() {
	return unidb.collection(this.table);
}

DbContext.prototype.add = function(obj) {
	uni.showLoading({
		title: '请求中'
	})
	return this.collection()
		.add(obj)
		.then(res => {
			if ($config.debug) {
				console.log(this.table + ' add', res);
			}
			if (res.result) {
				this.response.datas = res.result;
				if (res.result.errCode === 0) this.response.code = 200;

				return Promise.resolve(this.response);
			}

			return Promise.reject(res);
		})
		.catch(err => {
			if ($config.debug) {
				console.log(this.table + ' add catch', err);
				$api.alert(err.message);
			}
			return Promise.reject(err);
		})
		.finally(res => {
			this.configDefault.hideLoading && uni.hideLoading();
		});
}

DbContext.prototype.remove = function(_id) {
	uni.showLoading({
		title: '请求中'
	})

	if (_id) {
		return this.collection()
			.doc(_id)
			.remove()
			.then(res => {
				if ($config.debug) {
					console.log(this.table + ' remove', res);
				}
				if (res.result) {
					this.response.datas = res.result;
					if (res.result.errCode === 0) this.response.code = 200;

					return Promise.resolve(this.response);
				}

				return Promise.reject(res);
			})
			.catch(err => {
				if ($config.debug) {
					console.log(this.table + ' remove catch', err);
					$api.alert(err.message);
				}
				return Promise.reject(err);
			})
			.finally(res => {
				this.configDefault.hideLoading && uni.hideLoading();
			});
	}
	this.where_str = this.where_arr.join(' && ');
	return this.collection()
		.where(this.where_str || this.where_obj)
		.remove()
		.then(res => {
			if ($config.debug) {
				console.log(this.table + ' remove', res);
			}
			if (res.result) {
				this.response.datas = res.result;
				if (res.result.errCode === 0) this.response.code = 200;

				return Promise.resolve(this.response);
			}

			return Promise.reject(res);
		})
		.catch(err => {
			if ($config.debug) {
				console.log(this.table + ' remove catch', err);
				$api.alert(err.message);
			}
			return Promise.reject(err);
		})
		.finally(res => {
			this.configDefault.hideLoading && uni.hideLoading();
		});
}

DbContext.prototype.set = function(_id, obj) {
	uni.showLoading({
		title: '请求中'
	})
	return this.collection()
		.doc(_id)
		.set(obj)
		.then(res => {
			if ($config.debug) {
				console.log(this.table + ' set', res);
			}
			if (res.result) {
				this.response.datas = res.result;
				if (res.result.errCode === 0) this.response.code = 200;

				return Promise.resolve(this.response);
			}

			return Promise.reject(res);
		})
		.catch(err => {
			if ($config.debug) {
				console.log(this.table + ' set catch', err);
				$api.alert(err.message);
			}
			return Promise.reject(err);
		})
		.finally(res => {
			this.configDefault.hideLoading && uni.hideLoading();
		});
}

DbContext.prototype.update = function(_id, obj) {
	uni.showLoading({
		title: '请求中'
	})
	
	if (_id && typeof _id === 'string') {
		return this.collection()
			.doc(_id)
			.update(obj)
			.then(res => {
				if ($config.debug) {
					console.log(this.table + ' update', res);
				}
				if (res.result) {
					this.response.datas = res.result;
					if (res.result.errCode === 0) this.response.code = 200;

					return Promise.resolve(this.response);
				}

				return Promise.reject(res);
			})
			.catch(err => {
				if ($config.debug) {
					console.log(this.table + ' doc update catch', err);
					$api.alert(err.message);
				}
				return Promise.reject(err);
			})
			.finally(res => {
				this.configDefault.hideLoading && uni.hideLoading();
			});
	}
	
	if (typeof _id === 'object') obj = _id;
	this.where_str = this.where_arr.join(' && ');
	return this.collection()
		.where(this.where_str || this.where_obj)
		.update(obj)
		.then(res => {
			if ($config.debug) {
				console.log(this.table + ' update', res);
			}
			if (res.result) {
				this.response.datas = res.result;
				if (res.result.errCode === 0) this.response.code = 200;

				return Promise.resolve(this.response);
			}

			return Promise.reject(res);
		})
		.catch(err => {
			if ($config.debug) {
				console.log(this.table + ' update catch', err);
				$api.alert(err.message);
			}
			return Promise.reject(err);
		})
		.finally(res => {
			this.configDefault.hideLoading && uni.hideLoading();
		});
}

// 
DbContext.prototype.tofirst = function(_id) {
	// #ifndef APP || APP-NVUE
	uni.showNavigationBarLoading();
	// #endif
	if (typeof _id === 'string') {
		return this.collection()
			.doc(_id)
			.get({
				getOne: true
			})
			.then(res => {
				if ($config.debug) {
					console.log(this.table + ' doc.tofirst', res);
				}
				
				if (res.result && res.result.errCode === 0) {
					this.response.code = 200;
					this.response.datas = res.result.data || {};
				
					return Promise.resolve(this.response);
				}

				return Promise.reject(res);
			})
			.catch(err => {
				if ($config.debug) {
					console.log(this.table + ' doc.tofirst catch', err);
					$api.alert(err.message);
				}
				return Promise.reject(err);
			})
			.finally(res => {
				// #ifndef APP || APP-NVUE
				uni.hideNavigationBarLoading();
				// #endif
			});
	}
	
	const req = Object.assign({orderby: ''}, _id);
	this.where_str = this.where_arr.join(' && ');
	return this.collection()
		.where(this.where_str || this.where_obj)
		.orderBy(req.orderby)
		.get({
			getOne: true
		})
		.then(res => {
			if ($config.debug) {
				console.log(this.table + ' tofirst', res);
			}
			if (res.result && res.result.errCode === 0) {
				this.response.code = 200;
				this.response.datas = res.result.data || {};

				return Promise.resolve(this.response);
			}

			return Promise.reject(res);
		})
		.catch(err => {
			if ($config.debug) {
				console.log(this.table + ' tofirst catch', err);
				$api.alert(err.message);
			}
			// return Promise.reject(err);
		})
		.finally(res => {
			// #ifndef APP || APP-NVUE
			uni.hideNavigationBarLoading();
			// #endif
		});
}

DbContext.prototype.tolist = function(req) {
	// 页码 页数 排序
	req = Object.assign({
		page: 1,
		rows: 30,
		orderby: ''
	}, req);
	// #ifndef APP || APP-NVUE
	uni.showNavigationBarLoading();
	// #endif
	
	let ctx = this.collection();
	
	this.where_str = this.where_arr.join(' && ');
	if (Object.keys(this.where_obj).length > 0) { ctx = ctx.where(this.where_obj); }
	if (this.where_str) { ctx = ctx.where(this.where_str); }
	
	return ctx
		.orderBy(req.orderby)
		.skip((req.page - 1) * req.rows)
		.limit(req.rows)
		.get()
		.then(res => {
			if ($config.debug) {
				console.log(this.table + ' tolist', res);
			}
			if (res.result) {
				this.response.datas = res.result.data;

				if (res.result.errCode === 0) this.response.code = 200;

				return Promise.resolve(this.response);
			}

			return Promise.reject(res);
		})
		.catch(err => {
			if ($config.debug) {
				console.log(this.table + ' tolist catch', err);
				$api.alert(err.message);
			}
			return Promise.reject(err);
		})
		.finally(res => {
			// #ifndef APP || APP-NVUE
			uni.hideNavigationBarLoading();
			// #endif
		});
}

DbContext.prototype.totable = function(req) {
	// 页码 页数 排序
	req = Object.assign({
		page: 1,
		rows: 10,
		orderby: ''
	}, req);
	// #ifndef APP || APP-NVUE
	uni.showNavigationBarLoading();
	// #endif
	this.where_str = this.where_arr.join(' && ');
	return this.collection()
		.where(this.where_str || this.where_obj)
		.orderBy(req.orderby)
		.skip((req.page - 1) * req.rows)
		.limit(req.rows)
		.get({
			getCount: true
		})
		.then(res => {
			if ($config.debug) {
				console.log(this.table + ' totable', res);
			}
			if (res.result) {
				this.response.datas.rows = res.result.data;
				this.response.datas.total = res.result.count;

				if (res.result.errCode === 0) this.response.code = 200;

				return Promise.resolve(this.response);
			}

			return Promise.reject(res);
		})
		.catch(err => {
			if ($config.debug) {
				console.log(this.table + ' totable catch', err);
				$api.alert(err.message);
			}
			return Promise.reject(err);
		})
		.finally(res => {
			// #ifndef APP || APP-NVUE
			uni.hideNavigationBarLoading();
			// #endif
		});
}

export default db;
