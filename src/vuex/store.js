import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)
// static state
const state = {
	num:1
}

// chg state
const mutations = {
	addNum(state,num){
		state.num += num
	},
  goList(state,obj){
    console.log(obj.$router.reload)
    if(obj.$route.name=='list'){
      obj.$router.go(0)
    }else{
      obj.$router.push('/list')
    }
    
    localStorage['keyword'] = obj.keyword
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
    }
}

const store = new Vuex.Store({
	state,mutations,getters
})

export default store