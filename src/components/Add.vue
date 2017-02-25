<template>
  <div class="add">
    <mt-header fixed title="增加账号信息">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="form">
      <mt-field label="账号" type="number" v-model="account" placeholder="请输入账号"></mt-field>
      <mt-field label="密码" type="text" v-model="password" placeholder="请输入密码" ></mt-field>
    </div>
    <div class="button">
      <mt-button @click.native="save">增加</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    //保存账号和密码
    save : function(){
      let self = this

      if(self.account == 0 || self.password == 0){
        self.$toast({
          message: '请输入完整信息',
          duration: 3000
        })
        return
      }

      self.$indicator.open('添加中...');
      let Account = AV.Object.extend('Account');
      let account = new Account();
      account.set('account', String(self.account));
      account.set('password', String(self.password));
      account.save().then(function(account) {
        self.$indicator.close()
        // 成功保存之后，执行其他逻辑.
        console.log('New object created with objectId: ' + account.id);
        self.account = ''
        self.password = ''

        self.$toast({
          message: '添加成功',
          iconClass: 'icon icon-success',
          duration: 3000
        })
          
      }, function(error) {

          self.$toast({
            message: '出现错误，请重试',
            duration: 3000
          })

          // 异常处理
          console.error('Failed to create new object, with error message: ' + error.message);
      });
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
