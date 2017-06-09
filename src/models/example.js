
export default {

  namespace: 'example',

  state: {
    dataSource: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    
    *search() {
      this.setState({
        dataSource: !value ? [] : [
          value,
          value + value,
          value + value + value,
        ],
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
