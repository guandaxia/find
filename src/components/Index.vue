<template>
<div>
  <div class="header">
      <div class="title">
          密码共享
      </div>
  </div>
  <div class="form">
      <mt-field label="账号" type="number" v-model="account" placeholder="请输入账号"></mt-field>
      <mt-field v-if="show" label="密码" type="number" v-model="password" :disableClear="disableClear" :readonly="readonly"></mt-field>
  </div>
  <p v-if="count">共收录个{{count}}密码</p>
  <div class="button">
    <mt-button @click.native="query">查询</mt-button>
  </div>
  <div class="button footer">
    <router-link to="/add"><mt-button >增加</mt-button></router-link>
  </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  // props: ['count'],
  data () {
    return {
      show: false,
      account: '',
      password: '',
      count : 0,
      disableClear : true,
      readonly: true
    }
  },
  created: function(){
    var self = this
    var query = new AV.Query('Account')
    query.count().then(function (count) {
      console.log('w'+count)
      self.count = count
    }, function (error) {
    })
  },
  methods: {
    query: function () {
      // this.$toast('Hello world!')
      var self = this

      if(self.account == 0){
        self.$toast({
          message: '请输入要查询的账号',
          duration: 3000
        })
        return
      }


      self.$indicator.open('查询中...');
      var query = new AV.Query('Account');
      query.equalTo('account', String(self.account));
      query.find().then(function(results) {
          self.$indicator.close()
          console.log(results.length);
          if (results.length != 0) {
              console.log(results[0].attributes.password);
              var password = results[0].attributes.password;

              if (password !== undefined) {
                  console.log('test')
                  self.show = true
                  self.password = password
              }
          } else {
              self.show = false
              console.log('未找到')
              self.$toast({
                message: '未找到该密码',
                duration: 3000
              })
          }

      }, function(error) {})
      console.log('test')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{
  margin: 20px auto 0;
  width: 80%;
}

.button button{
  color: #3cc51f;
  margin: 0 auto;
  width: 100%;  
}
</style>
