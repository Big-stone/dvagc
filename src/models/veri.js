import * as veri from '../services/veri';
export default {

  namespace: 'school',

  state: {
    list: [] //初始化数据
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put}) {
      const { data } = yield call(veri.fetch, payload)
      yield put({
        type: 'save',
        list: data.schools
      })
    }
  },

  reducers: {
    save(state, action) {
      // console.log(payload);
      return { 
        ...state, 
        list: action.list
      };
    },
  },

};