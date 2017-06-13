import * as veri from '../services/veri';
export default {

  namespace: 'school',

  state: {
    list: [], //初始化数据
    schools: [], 
    studentNo: '',
    schoolName: ''
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
        });

        const schoolNames = data.schools.map((item) => {
            return item.schoolName;
        });

        yield put({
            type: 'updateSchoolNames',
            schoolNames: schoolNames
        });
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

    updateSchoolNames(state, action) {
        return {
            ...state,
            schools: action.schoolNames
        }
    },

    textDidChange(state, action) {
      return {
        ...state,
        ...action
      }
    }
  },

};
