export default {
  namespace: "maizuo1",

  state: {
    isShow: true,
    isFine: false,
  },
  reducers: {
    hide(prevState, action) {
      return { ...prevState, isShow: false };
    },
    show(prevState, action) { 
      return { ...prevState, isShow: true };
    },
  },
};
