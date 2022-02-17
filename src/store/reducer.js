import * as constants from './constants'

// 初始默认的 state
const defaultState = {
  myData: null
}

const reducer = (state = defaultState, action) => {
  // 由于 state 是引用类型，不能直接修改，否则是检测不到 state 发生变化的。因此需要先复制一份进行修改，然后再返回新的state
  let newState = Object.assign({}, state)
  switch (action.type) {
    case constants.SET_DATA:
      newState.myData = action.myData
      return newState
    default:
      return state
  }
}

export default reducer