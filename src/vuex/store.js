import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)
// static state
const state = {
	num:1,
  curKey:'',
  history:[]
}

// chg state
const mutations = {
  del(state){
    state.history = []
    localStorage.removeItem('history')
  },
	addNum(state,num){
		state.num += num
	},
  goList(state,obj){
    // console.log(obj.$router.reload)
    if(obj.$route.name=='list'){
      obj.$router.go(0)
    }else{
      obj.$router.push('/list')
    }
    
    state.curKey = obj.keyword
    localStorage['keyword'] = obj.keyword

    // 取出历史搜索列表
    var keyArr = localStorage['history'] ? JSON.parse(localStorage['history']) : []
    var flag = false;

    keyArr.forEach((item,i)=>{
      if(item==obj.keyword){
        keyArr.splice(i,1)
        keyArr.push(obj.keyword)
        flag = true;
      }
    })

    if(!flag){
      //说明没有一样的
      keyArr.push(obj.keyword)
    }
    
    localStorage['history'] = JSON.stringify(keyArr)
    state.history = state.history.concat(keyArr)
  }
}

//getters
const getters = {
    Fname(state){
      let name = state.name.toLowerCase()
      return name.substr(0,1).toUpperCase()+name.substr(1)
    },
    dbnum(state){
        return state.num*2
    },
    hasLogin(state){
        let userInfo = JSON.parse(localStorage['userInfo'])
        // console.log(localStorage['userInfo'])
        return userInfo
    }
}

const store = new Vuex.Store({
	state,mutations,getters
})

export default store