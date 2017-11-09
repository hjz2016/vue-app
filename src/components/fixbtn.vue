<template>
  <div id="fixbtn" @click='goToTop'>
  </div>
</template>

<script>
export default {
  name: 'fixbtn',
  data () {
    return {
      msg: 'fixbtn'
    }
  },
  methods:{
      goToTop(){
          document.documentElement.scrollTop = 0
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
   
</style>
