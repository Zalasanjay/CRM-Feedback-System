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
             <el-button class="active" size="large" id="btn-txta" type="text" v-on:click="editprofile()"><i class="fa fa-pencil-square-o" aria-hidden="true" style="margin-right: 10px;"></i>Edit Profile<i style="margin-left: 10px;" class="el-icon-arrow-right el-icon-right"></i></el-button><br>
             <el-button size="large" id="btn-txt" type="text" v-on:click="myfeedback()"><i class="fa fa-commenting-o" aria-hidden="true" style="margin-right: 10px;"></i>My Feedback<i style="margin-left: 10px;" class="el-icon-arrow-right el-icon-right"></i></el-button><br>
             <el-button size="large" id="btn-txt" type="text" v-on:click="crtfeedback()"><i class="fa fa-plus" aria-hidden="true" style="margin-right: 10px;"></i>Create Feedback<i style="margin-left: 10px;" class="el-icon-arrow-right el-icon-right"></i></el-button><br>
           </el-card>
          </div>
          <div class="col-sm-10">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="font-family: Anydore;"><h1>Edit Profile</h1></span>
                </div>
                <!-- style="background-color: rgba(0, 0, 0, 0.47);" -->
                <!-- <h1 style="font-family: Anydore;">Edit Profile</h1><hr> -->
                <el-form :label-position="labelPosition" label-width="150px" ref="updateform" :model="updateform" :rules="rules">

                <div class="col-md-5">
                  <div class="col-xs-10"><el-form-item label="First Name" prop="firstname">
                    <el-input placeholder="Enter First name" v-model="updateform.firstname"></el-input>
                  </el-form-item>
                  <el-form-item label="Last Name" prop="lastname">
                    <el-input placeholder="Enter Last name" v-model="updateform.lastname"></el-input>
                  </el-form-item>
                  <el-form-item label="Date of Birth" prop="dob">
                    <el-date-picker v-model="updateform.dob" type="date" placeholder="Select Birth Date"></el-date-picker>
                  </el-form-item>
                  <el-form-item label="Select Gender">
                    <el-radio class="radio" v-model="updateform.gender" label="Male"></el-radio>
                      <el-radio class="radio" v-model="updateform.gender" label="Female"></el-radio>
                    <!-- <el-radio-group v-model="updateform.gender" >
                      <el-radio-button label="Male"></el-radio-button>
                      <el-radio-button label="Female"></el-radio-button>
                    </el-radio-group> -->
                  </el-form-item>
                  <el-form-item label="Company Name" prop="company">
                    <el-input v-model="updateform.company" placeholder="Enter Company Name"></el-input>
                  </el-form-item>
                  <el-form-item label="Address 1" prop="address1">
                    <el-input type="textarea" v-model="updateform.address1" placeholder="Enter Address 1"></el-input>
                  </el-form-item></div>
                </div>
                <div class="col-md-5">
                  <div class="col-xs-10"><el-form-item label="Country" prop="country">
                    <el-select v-model="updateform.country" filterable placeholder="Select Country">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="State" prop="state">
                    <el-select v-model="updateform.state" filterable placeholder="Select State">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="City" prop="city">
                    <el-input v-model="updateform.city" placeholder="Enter City Name"></el-input>
                  </el-form-item>
                  <el-form-item label="Zip code" prop="zipcode">
                    <el-input type="number" v-model="updateform.zipcode" placeholder="Enter Zip code"></el-input>
                  </el-form-item>
                  <el-form-item label="Upload Photo">
                    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList">
                      <el-button size="small" type="primary">Click to upload</el-button>
                      <div slot="tip" class="el-upload__tip">Upload image file only</div>
                    </el-upload>
                  </el-form-item></div>
                  <!-- <el-input size="small" type="file" v-model="updateform.photo" placeholder="Choose File..."></el-input> -->
                </div>
                <div class="col-sm-10" align="center">
                  <el-button id="btn-update" type="primary" v-on:click="submitForm('updateform')">Update Details</el-button>
                </div>
                </el-form>
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
      form: {
        crntpassword: '',
        newpassword: '',
        cnfpassword: ''
      },
      updateform: {
        firstname: '',
        lastname: '',
        dob: '',
        gender: 'Male',
        company: '',
        address1: '',
        country: '',
        state: '',
        city: '',
        zipcode: '',
        fileList: []
      },
      rules: {
        firstname: [
          {required: true, message: 'Please enter Firstname'}
          // {type: 'char', message: 'pls entr chars only'}
        ],
        lastname: [
          {required: true, message: 'Please enter Lastname'}
        ],
        dob: [
           {type: 'date', required: true, message: 'Please pick DOB'}
        ],
        company: [
          {required: true, message: 'Please enter Company name'}
        ],
        address1: [
          {required: true, message: 'Please enter Address'}
        ],
        city: [
          {required: true, message: 'Please enter City name'}
        ],
        country: [
          {required: true, message: 'Please select country'}
        ],
        state: [
          {required: true, message: 'Please select state'}
        ],
        zipcode: [
          {required: true, message: 'Please enter zip code'},
          {min: 6, max: 6, message: 'Please valid zip code'}
        ]
        // photo: [
        //   {required: true, message: 'Please upload photo'}
        // ]
      },
      options: [{
        value: 'India',
        label: 'India'
      }, {
        value: 'France',
        label: 'France'
      }, {
        value: 'United States',
        label: 'United States'
      }, {
        value: 'China',
        label: 'China'
      }, {
        value: 'Spain',
        label: 'Spain'
      }, {
        value: 'Malaysia',
        label: 'Malaysia'
      }, {
        value: 'Germany',
        label: 'Germany'
      }, {
        value: 'Netherlands',
        label: 'Netherlands'
      }, {
        value: 'South Africa',
        label: 'South Africa'
      }, {
        value: 'Denmark',
        label: 'Denmark'
      }],
      options2: [{
        value: 'Gujarat',
        label: 'Gujarat'
      }, {
        value: 'Paris',
        label: 'Paris'
      }, {
        value: 'Florida',
        label: 'Florida'
      }, {
        value: 'Zhenjiang',
        label: 'Zhenjiang'
      }, {
        value: 'Asturias',
        label: 'Asturias'
      }, {
        value: 'Penang',
        label: 'Penang'
      }, {
        value: 'Berlin',
        label: 'Berlin'
      }, {
        value: 'North Holland',
        label: 'North Holland'
      }, {
        value: 'Pretoria',
        label: 'Pretoria'
      }, {
        value: 'Hovedstanden',
        label: 'Hovedstanden'
      }]
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    signout () {
      console.log(1)
      location.href = 'http://localhost:8080/#/'
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('Registration success...')
          this.$message({
            message: 'Profile Successfully Update',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
#btn-txt:hover {
  color: #ffa60d;
}
.active {
  color: #ffa60d;
}
#btn-update {
  background-color: #634987;
  border-color: #634987;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 150px;
}
#btn-update:hover {
  background-color: #4b2482;
  border-color: #4b2482;
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
