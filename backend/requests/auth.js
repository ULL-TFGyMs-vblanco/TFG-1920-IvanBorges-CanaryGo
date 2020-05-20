
// var express = require('express')

module.exports = function (app) {
  const { firebaseAuth, firebaseDb, firebaseStg } = require('../config/firebase')
  const { admin } = require('../config/firebaseadmin')
  const { OAuth2Client } = require('google-auth-library')

  // /////////////////// IDENTIFICACIÓN ///////////////////////
  // Get ()
  app.get('/autorizar', function (req, res) {
    console.log('HTTP Login')
  })

  // Put (Login - Registro)
  app.put('/autorizar', function (req, res) {
    console.log('HTTP Registrar')
    console.log('Funcionando', req.body)

    // ///////////////////// LOGIN //////////////////////////

    if (req.body.tipo === 'Login') {
      if (req.body.tipo2 === 'Estandar') {
        let errorcodes = ''

        firebaseAuth.signInWithEmailAndPassword(req.body.correo, req.body.contrasena)
          .catch(function (error) {
            // Errores
            var errorCode = error.code
            var errorMessage = error.message
            console.log(errorCode)
            console.log(errorMessage)
            errorcodes = errorCode
          })
          .then(() => {
            const user = firebaseAuth.currentUser
            firebaseAuth.signOut()
            // console.log('USUARIO LOGUEADO', user.displayName)
            if (errorcodes === 'auth/user-not-found') {
              res.send(errorcodes)
            } else if (errorcodes === 'auth/wrong-password') {
              res.send(errorcodes)
            } else if (errorcodes === 'auth/too-many-requests') {
              res.send(errorcodes)
            } else {
              // Creamos token de sesion
              if (user.emailVerified === true) {
                // Generamos el token del cliente
                admin.auth().createCustomToken(user.uid)
                  .then(function (customToken) {
                    // Enviamos token al cliente
                    res.send('Usuario correcto:' + customToken)
                  })
                  .catch(function (error) {
                    console.log('Error al crear token:', error)
                    res.send('auth/user-not-found')
                  })
              } else {
                res.send('auth/must-verify')
              }
            }
          })
      } else if (req.body.tipo2 === 'OAuth') {
        IniciarSesionOAuth(req, res)
      }

      // ///////////////////// REGISTRO //////////////////////////
    } else if (req.body.tipo === 'Registro') {
      let errorcodes = false

      firebaseAuth.createUserWithEmailAndPassword(req.body.correo, req.body.contrasena2)
        .catch(function (error) {
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
          errorcodes = true
        })
        .then((datos) => {
          const user = firebaseAuth.currentUser
          firebaseAuth.signOut()
          // Gestionamos
          if (errorcodes) {
            res.send('Error al crear usuario')
          } else {
            Verificar(user)
            ActualizarInfo(req.body.nombre, req.body.genero, req.body.fecha, req.body.usuario, req.body.correo, user)
            FotoDefault(req.body.genero, user)
            res.send('Usuario creado')
          }
        })
    }
  })

  // Update
  app.post('/autorizar', function (req, res) {
    console.log('Actualizar perfil')
    // res.send('Actualizar perfil')
    // console.log('Funcionando', req.body)

    firebaseAuth.signInWithCustomToken(req.body.token).then(() => {
      const user = firebaseAuth.currentUser
      firebaseAuth.signOut()
      // Subir informacion

      ActualizarContrasena(req.body.contrasena, user)
      ActualizarInfoDb(req.body.nombre, req.body.fecha, req.body.genero, req.body.correo)
      ActualizarCorreo(req.body.correo, req.body.token)
      user.updateProfile({
        displayName: req.body.usuario,
        photoURL: req.body.foto
      }).then(function () {
        // Correcto
        console.log('Usuario actualizado')
        res.send('Usuario actualizado')
      }).catch(function (error) {
        res.send('Fallo al actualizar')
        console.log('Error al actualizar usuario', error)
      })
    }).catch(function (error) {
      console.log(error)
    })
  })

  // Delete
  app.delete('/autorizar', function (req, res) {
    // res.send('Borrar perfil')
    // console.log('Funcionando', req.body)

    // ///////////////////// ELIMINAR USUARIO //////////////////////////
    firebaseAuth.signInWithCustomToken(req.body.token).then(() => {
      const user = firebaseAuth.currentUser
      firebaseAuth.signOut()

      let documento

      console.log('El rollo', user.email)

      //  Obtenemos id de la db
      firebaseDb.collection('usuarios').where('Correo', '==', user.email).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            documento = doc.id
          })
        }).catch(function (error) {
          console.error('Error encontrando usuario en db', error)
        })
        .then(function () {
          // Borramos de la db
          firebaseDb.collection('usuarios').doc(documento).delete()
            .then(function () {
              console.log('Usuario borrado de la db')
            }).catch(function (error) {
              console.error('Erro al borrar el usuario de la db ', error)
            })
        }).catch(function (error) {
          console.error('Error borrando db', error)
        })

      // Borramos usuario
      user.delete().then(function () {
        // User deleted.
        console.log('Usuario eliminado')
        res.send('Usuario eliminado')
      }).catch(function (error) {
        console.log('No se pudo eliminar el usuario', error)
      })
    }).catch(function (error) {
      console.log(error)
    })
  })

  /// ///////////// UTILIDADES /////////////////

  function ActualizarInfo (nombre, genero, fecha, usuario, correo, user) {
    const usuarioactivo = user

    // Subir informacion

    // Firestore
    admin.firestore().collection('usuarios').add({
      nombre: nombre,
      fecha: fecha,
      genero: genero,
      correo: correo
    })
      .then(() => {
        console.log('Usuarios añadido a la db')
      })
      .catch(function (error) {
        console.error('Error añadiendo usuario a la db', error)
      })

    // Autentificacion
    usuarioactivo.updateProfile({
      displayName: usuario
    }).then(function () {
      console.log('Usuario actualizado')
    }).catch(function (error) {
      console.log('Error al actualizar usuario', error)
    })
  }

  function ActualizarInfoDb (nombre, fecha, genero, correo) {
    const usuarios = firebaseDb.collection('usuarios')
    // const usuarioactivo = UsuarioLogueado()
    let documento

    firebaseDb.collection('usuarios').where('Correo', '==', correo).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          documento = doc.id
        })
      }).catch(function (error) {
        console.error('Error encontrando usuario en db', error)
      })
      .then(function () {
        usuarios.doc(String(documento)).update({
          Nombre: nombre,
          Fecha: fecha,
          Genero: genero
        }).then(function (docRef) {
          // Subir imagenes
          console.log('Info en db actualizada')
        })
          .catch(function (error) {
            console.error('Error al actualizar info en db', error)
          })
      }).catch(function (error) {
        console.error('Error actualizando db', error)
      })
  }

  function ActualizarCorreo (correo, token) {
    firebaseAuth.signInWithCustomToken(token).then(() => {
      const user = firebaseAuth.currentUser
      firebaseAuth.signOut()

      // Subir informacion
      user.updateEmail(correo)
        .then(function () {
          // correcto
          console.log('Correo actualizado')
        }).catch(function (error) {
          // error
          console.log('Error al actualizar correo', error)
        })
    }).catch(function (error) {
      console.log(error)
    })
  }

  function Verificar (user) {
    user.sendEmailVerification()
      .catch(function (error) {
        console.log(error)
        console.log(error.code)
      })
      .then(() => {
        console.log('Email de verificacion enviado')
      })
  }

  function ActualizarContrasena (contrasena, user) {
    user.updatePassword(contrasena).then(function () {
      // Correcto
      console.log('Contraseña actualizada')
    }).catch(function (error) {
      // error
      console.log('Error al actualizar contraseña', error)
    })
  }

  function FotoDefault (genero, usuario) {
    const storageRefDefault = firebaseStg.ref('avatares/predefinidos/')
    const fotoRefMale = storageRefDefault.child('Avatar_m.png')
    const fotoRefFemale = storageRefDefault.child('Avatar_f.png')

    let tipofoto
    if (genero === 'Masculino') {
      console.log('Masculino')
      tipofoto = fotoRefMale
    } else if (this.genero === 'Femenino') {
      console.log('Femenino')
      tipofoto = fotoRefFemale
    }

    tipofoto.getDownloadURL()
      .catch(function (error) {
        console.log('Error', error)
      })
      .then(function (url) {
        usuario.updateProfile({
          photoURL: url
        })
      })
  }

  function IniciarSesionOAuth (req, res) {
    const client = new OAuth2Client(req.body.id_client)

    async function verify () {
      // Comprobar que la consulta se haga desde nuestra app y sea un usuario valido
      const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: req.body.id_client
      })
      return ticket
    }
    verify()
      .then(function (ticket) {
        const payload = ticket.getPayload()
        const userid = payload.sub

        // Creamos un token para el usuario si no hay problemas
        admin.auth().createCustomToken(userid)
          .then(function (customToken) {
            // Enviamos token al cliente
            res.send('Usuario correcto:' + customToken)
          })
          .catch(function (error) {
            console.log('Error al crear token:', error)
            res.send('Usuario incorrecto')
          })
      })
      .catch(function (error) {
        console.log('Error al verificar', error)
        res.send('Usuario incorrecto')
      })
  }

  /// //////////////////////////////
}
