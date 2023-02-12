export default {
  namespace: "maizuo1",

  state: {
    isShow: true,
    list: [],
  },

  // reducers 一般只用来处理同步
  reducers: {
    hide(prevState, action) {
      return { ...prevState, isShow: false };
    },
    show(prevState, action) {
      return { ...prevState, isShow: true };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log("初始化");
    },
  },

  // 异步- redux-saga
  effects: {
    // * 的意义在于将getCinemaList变成一个生命期函数
    *getCinemaList(action, { call, put }) {
      // console.log(obj);
      // yield call (可以在这里处理异步 支持使用promise对象){}
    },
  },
};
