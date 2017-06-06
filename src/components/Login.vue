<template>
  <div class="container-fluid">
    <!-- <div class="page-header" align="center">
      <h1>CRM-Feedback System</h1>
    </div> -->
    <div class="container" align="center" style="max-width: 500px; width: 100%;">
      <el-card class="box-card" style="background-color: #FCFCFD;">
        <h1 id="lgin">Login</h1>
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="Username" prop="username">
            <!-- style="font-family: Anydore;" -->
              <el-input id="txt-box" placeholder="Enter Username" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
              <el-input id="txt-box" type="password" placeholder="Enter Password" v-model="form.password"></el-input>
          </el-form-item>
          <el-button class="link" id="btn-txt" type="text" v-on:click="registration($event)" icon="edit">New Registration</el-button>
          <el-button class="link" type="text" v-on:click="forgot($event)" icon="information">Forgot Password?</el-button>
          <br>
          <el-button class="login" id="btn-login" type="primary" v-on:click="submitForm('form')">Login</el-button>
        </el-form>
      </el-card>
    </div>
    <!-- <nav class="navbar navbar-default navbar-fixed-bottom" align="center">
      <p id="footer">Copyright (c) 2017 All Rights Reserved.</p>
    </nav> -->
    <!-- <h1>CRM-Feedback System</h1> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: 'Please enter Username', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please enter Password'}
        ]
      }
    }
  },
  methods: {
    forgot: function (event) {
      window.location.href = 'http://localhost:8080/#/forgot'
    },
    registration: function (event) {
      window.location.href = 'http://localhost:8080/#/registration'
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('Login success...')
          window.location.href = 'http://localhost:8080/#/dashboard'
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  background-color: #634987;
  border-color: #634987;
}
.login:hover {
  background-color: #4b2482;
  border-color: #4b2482;
}
.link {
  color: #8F67A2;
}
.link:hover {
  color: #4b2482;
}
.box-card {
    margin-top: 150px;
    /*width: 500px;*/
  }
  #lgin {
    margin-bottom: 20px;
    font-size: 50px;
    font-family: Anydore;
  }
  #footer {
    margin-top: 20px;
  }
  #btn-login {
    margin-top: 20px;
    width: 150px;
  }
  /*#txt-box {
    width: 300px;
  }*/
  #btn-txt {
      margin-right: 20px;
  }

/*div{background-color: blue}*/
</style>
