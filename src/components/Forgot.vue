<template>
  <div class="container-fluid">
    <!-- <div class="page-header" align="center">
      <h1>CRM-Feedback System</h1>
    </div> -->
    <div class="container" align="center" style="max-width: 500px; width: 100%;">
      <el-card class="box-card">
        <h1 id="frgp">Forgot Password</h1>
        <el-form ref="forgot" :model="forgot" :rules="rules">
          <el-form-item label="Email Address" prop="email">
              <el-input placeholder="Enter Email address" v-model="forgot.email"></el-input>
          </el-form-item>
          <el-button id="btn-submit" v-on:click="submit('forgot')" type="primary">Submit</el-button>
          <el-button id="btn-submit" v-on:click="cancel($event)" type="primary">Cancel</el-button>
        </el-form>
      </el-card>
    </div>
    <!-- <nav class="navbar navbar-default navbar-fixed-bottom" align="center">
      <p id="footer">Copyright (c) 2017 Copyright Holder All Rights Reserved.</p>
    </nav> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      forgot: {
        email: ''
      },
      rules: {
        email: [
          {required: true, message: 'Please enter Email Address'},
          { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ]
      }
    }
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: 'Password reset link has been sent to ' + this.forgot.email,
            type: 'success'
          })
          // 'Password reset link has been sent to ' + this.forgot.email, 'Message', {
          //   confirmButtonText: 'Close'
          // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancel: function (event) {
      window.location.href = 'http://localhost:8080/#/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
    margin-top: 150px;
    /*width: 500px;*/
  }
  #frgp {
    font-family: Anydore;
    font-size: 50px;
    margin-bottom: 30px;
  }
  #footer {
    margin-top: 20px;
  }
  #btn-submit {
    background-color: #634987;
    border-color: #634987;
    margin-top: 20px;
    width: 150px;
  }
  #btn-submit:hover {
    background-color: #4b2482;
    border-color: #4b2482;
  }
  /*#txt-box {
    width: 300px;
  }*/
  #btn-txt {
      margin-right: 20px;
  }

/*div{background-color: blue}*/
</style>
