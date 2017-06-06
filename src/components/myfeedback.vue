<template>
  <div class="container-fluid">
       <div class="jumbotron">
         <!-- <div class="page-header"> -->
        <!-- <div class="container"> -->
          <div class="row">
            <div class="col-md-8">
              <img class="img-responsive" id="logo" src="../assets/feedback.png">
              <h1 id="head">CRM-Feedback System</h1>
            </div><br><br><br>
            <div class="pull-right">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <i class="fa fa-user" aria-hidden="true" style="margin-right: 10px;"></i>John Marry<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-button id="drp-btn" type="text" @click="chngpassword()">Changes Password</el-button><br>
                  <el-button id="drp-btn" type="text" @click="signout()">Sign out</el-button>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dialog title="Change Password" :visible.sync="dialogFormVisible">
                 <el-form :model="form" :label-Position="lb">
                  <el-form-item label="Current Password">
                    <el-input  placeholder="Enter Your Current Password" v-model="form.crntpassword"></el-input>
                  </el-form-item>
                  <el-form-item label="New Password">
                    <el-input  placeholder="Enter New Password" v-model="form.newpassword"></el-input>
                  </el-form-item>
                  <el-form-item label="Re-enter new password">
                    <el-input  placeholder="Re-enter new password" v-model="form.cnfpassword"></el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </div>
        <!-- </div> -->
      <div class="container-fluid">
        <div class="row content">
          <div class="col-sm-2 sidenav">
            <el-card class="box-card" style="background-color: rgba(0, 0, 0, 0.47);">
             <img src="../assets/user.jpg" class="img-circle img-responsive" alt="User Profile" width="220" height="190">
             <el-button size="large" id="btn-txt" type="text" v-on:click="myprofile()"><i class="fa fa-user" aria-hidden="true" style="margin-right: 10px;"></i>My Profile<i style="margin-left: 10px;" class="el-icon-arrow-right el-icon-right"></i></el-button><br>
             <el-button size="large" id="btn-txt" type="text" v-on:click="editprofile()"><i class="fa fa-pencil-square-o" aria-hidden="true" style="margin-right: 10px;"></i>Edit Profile<i style="margin-left: 10px;" class="el-icon-arrow-right el-icon-right"></i></el-button><br>
             <el-button class="active" size="large" id="btn-txta" type="text" v-on:click="myfeedback()"><i class="fa fa-commenting-o" aria-hidden="true" style="margin-right: 10px;"></i>My Feedback<i style="margin-left: 10px;" class="el-icon-arrow-right el-icon-right"></i></el-button><br>
             <el-button size="large" id="btn-txt" type="text" v-on:click="crtfeedback()"><i class="fa fa-plus" aria-hidden="true" style="margin-right: 10px;"></i>Create Feedback<i style="margin-left: 10px;" class="el-icon-arrow-right el-icon-right"></i></el-button><br>
           </el-card>
          </div>
          <div class="col-sm-10">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="font-family: Anydore;"><h1>My Feedback</h1></span>
                </div>
                <div class="col-md-3"><label @click="display('Feedback 1')" id="info">Feedback 1 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 2')" id="info">Feedback 2 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 3')" id="info">Feedback 3 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 4')" id="info">Feedback 4 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 5')" id="info">Feedback 5 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 6')" id="info">Feedback 6 <i class="el-icon-check"></i></label><br></div>
                <div><label @click="display('Feedback 7')" id="info">Feedback 7 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 8')" id="info">Feedback 8 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 9')" id="info">Feedback 9 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 10')" id="info">Feedback 10 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 11')" id="info">Feedback 11 <i class="el-icon-check"></i></label><br>
                <label @click="display('Feedback 12')" id="info">Feedback 12 <i class="el-icon-check"></i></label><br></div>
                <!-- style="background-color: rgba(0, 0, 0, 0.47);" -->
              </el-card>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lb: 'top',
      labelPosition: 'left',
      dialogFormVisible: false,
      // display: false,
      form: {
        crntpassword: '',
        newpassword: '',
        cnfpassword: ''
      }
    }
  },
  methods: {
    display (event) {
      this.$alert(event, 'Feedback Details', {
        confirmButtonText: 'Close'
      })
    },
    signout () {
      console.log(1)
      location.href = 'http://localhost:8080/#/'
    },
    chngpassword () {
      this.dialogFormVisible = true
    },
    myprofile () {
      window.location.href = 'http://localhost:8080/#/dashboard'
    },
    editprofile () {
      window.location.href = 'http://localhost:8080/#/editprofile'
    },
    myfeedback () {
      window.location.href = 'http://localhost:8080/#/myfeedback'
    }
    // crtfeedback () {
    //   window.location.href = ''
    // }
  }
}
</script>
<style scoped>
#info {
  font-size: 18px;
  margin-right: 30px;
  margin-bottom: 30px;
}
#info:hover {
  color: #ffa60d;
}
#drp-btn {
  color: #000000;
  margin-left: 10px;
  margin-right: 10px;
}
#btn-txta {
  margin-top: 20px;
}
#btn-txt {
  margin-top: 20px;
  color: #fff;
}
.active {
  color: #ffa60d;
}
#btn-txt:hover {
  color: #ffa60d;
}
#head {
  /*margin-top: 50px;*/
  font-family: Anydore;
  color: #ffa60d;
}
#logo {
  float: left;
  /*margin-top: 50px;*/
  margin-left: 20px;
  margin-right: 30px;
  height: 90px;
  width: 90px;
}
.page-header {
  height: 100px;
}
.jumbotron {
    /*padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    color: inherit;*/
    background-color: rgba(0, 0, 0, 0.47);
}
.el-dropdown {
    color: #ffa60d;
    font-size: 18px;
}
</style>
