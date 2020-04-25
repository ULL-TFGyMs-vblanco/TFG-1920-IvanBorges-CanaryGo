<template>
  <div class="login-box">
    <a href="#" class="social-button" id="facebook-connect" @click="IniciarSesionFacebook">
      <span>{{facebook}}</span>
    </a>
    <a href="#" class="social-button" id="google-connect" @click="IniciarSesionGoogle">
      <span>{{google}}</span>
    </a>
  </div>
</template>

<script>
import { firebaseAuth, firebaseAuthGoogle, firebaseAuthFacebook } from 'boot/firebase'

export default {
  name: 'LoginButtons',
  data () {
    return {
      google: this.$t('google'),
      facebook: this.$t('facebook')
    }
  },
  methods: {
    IniciarSesionGoogle () {
      const provider = firebaseAuthGoogle
      // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebaseAuth.useDeviceLanguage()
      provider.setCustomParameters({
        login_hint: 'user@example.com'
      })

      let errorcode = false
      /* eslint-disable no-unused-vars */
      firebaseAuth.signInWithPopup(provider)
        .catch(function (error) {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.email
          const credential = error.credential
          errorcode = true
        })
        .then(function (result) {
          // Google Access Token
          const token = result.credential.accessToken
          const user = result.user
        })
        .then(() => {
          if (errorcode === true) {
            this.Fail(this.$t('error_google'))
          } else {
            this.Success()
          }
        })
    },
    IniciarSesionFacebook () {
      const provider = firebaseAuthFacebook
      provider.addScope('user_birthday')
      firebaseAuth.useDeviceLanguage()
      provider.setCustomParameters({
        login_hint: 'user@example.com'
      })

      let errorcode = false
      /* eslint-disable no-unused-vars */
      firebaseAuth.signInWithPopup(provider)
        .catch(function (error) {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.email
          const credential = error.credential
          errorcode = true
        })
        .then(function (result) {
          // Google Access Token
          const token = result.credential.accessToken
          const user = result.user
        })
        .then(() => {
          if (errorcode === true) {
            this.Fail(this.$t('error_facebook'))
          } else {
            this.Success()
          }
        })
    },
    Success () {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: this.$t('login_sucess'),
        position: 'bottom',
        timeout: 1000,
        progress: true
      })
      this.$router.push('./events')
    },
    Fail (error) {
      this.$q.notify({
        color: 'negative',
        message: error,
        position: 'bottom',
        timeout: 2000,
        progress: true
      })
    }
  }
}
</script>

<style>
html * {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}

.login-box {
  background: rgba(255, 255, 255, 0.048);
  padding: 20px;
  max-width: 480px;
  margin: 5vh auto;
  text-align: center;
  letter-spacing: 1px;
  position: relative;
  font-size: calc(7px + 6 * ((100vw - 20px) / 1280));
}

.login-box:hover {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.login-box h2 {
  margin: 20px 0 20px;
  padding: 0;
  text-transform: uppercase;
  color: #4688f1;
}

.social-button {
  background-position: 25px 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  width: 100%;
  border-radius: 3px;
  margin: 10px auto;
  outline: rgb(255, 255, 255) none 0px;
  padding-left: 20%;
  transition: all 0.2s cubic-bezier(0.72, 0.01, 0.56, 1) 0s;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#facebook-connect {
  background: rgb(255, 255, 255)
    url("https://raw.githubusercontent.com/eswarasai/social-login/master/img/facebook.svg?sanitize=true")
    no-repeat scroll 5px 0px / 30px 50px padding-box border-box;
  border: 1px solid rgb(60, 90, 154);
}

#facebook-connect:hover {
  border-color: rgb(60, 90, 154);
  background: rgb(60, 90, 154)
    url("https://raw.githubusercontent.com/eswarasai/social-login/master/img/facebook-white.svg?sanitize=true")
    no-repeat scroll 5px 0px / 30px 50px padding-box border-box;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease-out;
}

#facebook-connect span {
  box-sizing: border-box;
  color: rgb(60, 90, 154);
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: 0px none rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#facebook-connect:hover span {
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#google-connect {
  background: rgb(255, 255, 255)
    url("https://raw.githubusercontent.com/eswarasai/social-login/master/img/google-plus.png")
    no-repeat scroll 5px 0px / 50px 50px padding-box border-box;
  border: 1px solid rgb(220, 74, 61);
}

#google-connect:hover {
  border-color: rgb(220, 74, 61);
  background: rgb(220, 74, 61)
    url("https://raw.githubusercontent.com/eswarasai/social-login/master/img/google-plus-white.png")
    no-repeat scroll 5px 0px / 50px 50px padding-box border-box;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease-out;
}

#google-connect span {
  box-sizing: border-box;
  color: rgb(220, 74, 61);
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: 0px none rgb(220, 74, 61);
  outline: rgb(255, 255, 255) none 0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#google-connect:hover span {
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
