<template>
  <div calss="container-fluid">
        <!-- <div class="page-header" align="center">
          <h1>CRM-Feedback System</h1>
        </div> -->

        <div class="container" style="max-width: 900px; width: 100%;">
          <el-card class="box-card">
            <h1 id="regst" align="center">Registration Form</h1>
            <el-form :label-position="labelPosition" label-width="50px" ref="regform" :model="regform" :rules="rules">
              <div class="col-md-6">
              <!-- <div class="col-xs-10"> -->
                <el-form-item label="First Name" prop="firstname">
                <el-input placeholder="Enter First name" v-model="regform.firstname"></el-input>
              </el-form-item>
              <el-form-item label="Last Name" prop="lastname">
                <el-input placeholder="Enter Last name" v-model="regform.lastname"></el-input>
              </el-form-item>
              <el-form-item label="User Name" prop="username">
                <el-input placeholder="Enter User name" v-model="regform.username"></el-input>
              </el-form-item>
              <el-form-item label="Email Address" prop="email">
                <el-input type="email" placeholder="Enter Email Address" v-model="regform.email"></el-input>
              </el-form-item>
              <el-form-item label="Enter Password" prop="password">
                <el-input type="password" placeholder="Enter Password" v-model="regform.password"></el-input>
              </el-form-item>
              <el-form-item label="Confirm Password" prop="cnfpassword">
                <el-input type="password" placeholder="Re-enter Password" v-model="regform.cnfpassword"></el-input>
              </el-form-item>
              <el-form-item label="Date of Birth" prop="dob">
                <el-date-picker v-model="regform.dob" type="date" placeholder="Select Birth Date"></el-date-picker>
              </el-form-item>
              <el-form-item label="Select Gender">
                <el-radio class="radio" v-model="regform.gender" label="Male"></el-radio>
                  <el-radio class="radio" v-model="regform.gender" label="Female"></el-radio>
                <!-- <el-radio-group v-model="regform.gender" >
                  <el-radio-button label="Male"></el-radio-button>
                  <el-radio-button label="Female"></el-radio-button>
                </el-radio-group> -->
              </el-form-item>
            <!-- </div> -->
            </div>
            <div class="col-md-6">
              <!-- <div class="col-xs-10"> -->
                <el-form-item label="Company Name" prop="company">
                <el-input v-model="regform.company" placeholder="Enter Company Name"></el-input>
              </el-form-item>
              <el-form-item label="Address 1" prop="address1">
                <el-input type="textarea" v-model="regform.address1" placeholder="Enter Address 1"></el-input>
              </el-form-item>
              <el-form-item label="Address 2">
                <el-input type="textarea" v-model="regform.address2" placeholder="Enter Address 2"></el-input>
              </el-form-item>
              <el-form-item label="Country" prop="country">
                <el-select v-model="regform.country" filterable placeholder="Select Country">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="State" prop="state">
                <el-select v-model="regform.state" filterable placeholder="Select State">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="City" prop="city">
                <el-input v-model="regform.city" placeholder="Enter City Name"></el-input>
              </el-form-item>
              <el-form-item label="Zip code" prop="zipcode">
                <el-input type="number" v-model="regform.zipcode" placeholder="Enter Zip code"></el-input>
              </el-form-item>
              <el-form-item label="Upload Photo">
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList">
                  <el-button size="small" type="primary">Click to upload</el-button>
                  <!-- <div slot="tip" class="el-upload__tip">Upload image file only</div> -->
                </el-upload>
              </el-form-item>
            <!-- </div> -->
              <!-- <el-input size="small" type="file" v-model="regform.photo" placeholder="Choose File..."></el-input> -->
              </div>
              <div align="center"><el-button id="btn-register" type="primary" v-on:click="submitForm('regform')">Register</el-button>
                <el-button id="btn-register" v-on:click="cancel($event)" type="primary">Cancel</el-button>
              </div>
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
    var validpass = (rule, value, callback) => {
      if (value !== this.regform.password) {
        callback(new Error('Password do not match!'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
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
      }],
      regform: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        dob: '',
        gender: 'Male',
        company: '',
        address1: '',
        address2: '',
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
        username: [
          {required: true, message: 'Please enter Username'}
        ],
        email: [
          {required: true, message: 'Please enter Email Address'},
          {type: 'email', message: 'Please input correct email address'}
        ],
        password: [
          {required: true, message: 'Please enter Password'}
        ],
        cnfpassword: [
          {required: true, message: 'Please Re-enter Password'},
          {validator: validpass}
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
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('Registration success...')
          this.$message({
            message: 'Successfully Registered',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancel: function (event) {
      window.location.href = 'http://localhost:8080/#/'
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
.box-card {
    margin-top: 20px;
    /*width: 600px;*/
  }
  #btn-register {
    background-color: #634987;
    border-color: #634987;
    margin-top: 20px;
    width: 150px;
  }
  #btn-register:hover {
    background-color: #4b2482;
    border-color: #4b2482;
  }
  #regst {
    margin-bottom: 20px;
    font-size: 50px;
    font-family: Anydore;
  }
</style>
