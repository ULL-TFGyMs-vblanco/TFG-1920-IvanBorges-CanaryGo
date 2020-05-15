
// var express = require('express')

module.exports = function (app) {
  const { firebase, firebaseAuth, firebaseDb, firebaseStg } = require('../config/firebase')
  const { admin } = require('../config/firebaseadmin')
  const { OAuth2Client } = require('google-auth-library')

  // /////////////////// IDENTIFICACIÓN ///////////////////////
  // Get (Login)
  app.get('/autorizar', function (req, res) {
    console.log('HTTP Login')
    // const usuario = {
    //   email: UsuarioLogueado().email,
    //   displayName: UsuarioLogueado().displayName,
    //   photoURL: UsuarioLogueado().photoURL,
    //   emailVerified: UsuarioLogueado().emailVerified
    // }
    // res.send(usuario)
  })

  // Put (Register)
  app.put('/autorizar', function (req, res) {
    console.log('HTTP Registrar')
    console.log('Funcionando', req.body)

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
          .then((datos) => {
            const user = datos
            firebaseAuth.signOut()
            console.log('USUARIO LOGUEADO', user.user.displayName)
            if (errorcodes === 'auth/user-not-found') {
              res.send(errorcodes)
            } else if (errorcodes === 'auth/wrong-password') {
              res.send(errorcodes)
            } else {
              // Creamos token de sesion
              if (user.user.emailVerified === true) {
                // Generamos el token del cliente
                admin.auth().createCustomToken(user.user.uid)
                  .then(function (customToken) {
                    // Enviamos token al cliente
                    res.send('Usuario correcto:' + customToken)
                  })
                  .catch(function (error) {
                    console.log('Error creating custom token:', error)
                  })
                // res.send(user.displayName)
              } else {
                res.send('auth/must-verify')
              }
            }
          })
      } else if (req.body.tipo2 === 'OAuth') {
        IniciarSesionOAuth(req, res)
      }
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
        .then(() => {
          if (errorcodes) {
            res.send('Error al crear usuario')
          } else {
            res.send('Usuario creado')
            Verificar()
            ActualizarInfo(req.body.nombre, req.body.genero, req.body.fecha, req.body.usuario, req.body.correo)
            ActualizarFoto(req.body.genero, firebaseAuth.currentUser)
            firebaseAuth.signOut()
          }
        })
    }
  })

  // Update
  app.post('/autorizar', function (req, res) {
    console.log('Actualizar perfil')
    // res.send('Actualizar perfil')
    // console.log('Funcionando', req.body)

    const usuarioactivo = UsuarioLogueado()

    // Subir informacion
    if (usuarioactivo !== false) {
      ActualizarContrasena(req.body.contrasena)
      ActualizarInfoDb(req.body.nombre, req.body.fecha, req.body.genero, req.body.correo)
      usuarioactivo.updateProfile({
        displayName: req.body.usuario,
        photoURL: req.body.foto
      }).then(function () {
        // Update successful.
        console.log('Usuario actualizado')
        res.send('Usuario actualizado')
      }).catch(function (error) {
        // An error happened.
        res.send('Fallo al actualizar')
        console.log('Error al actualizar usuario', error)
      })
    }
  })

  // Delete
  app.delete('/autorizar', function (req, res) {
    // res.send('Borrar perfil')
    // console.log('Funcionando', req.body)

    if (req.body.opcion === 'Borrar') {
      // Opcion 1 (BORRAR)
      const usuarioactivo = UsuarioLogueado()

      let documento

      console.log('El rollo', usuarioactivo.email)

      //  Obtenemos id de la db
      firebaseDb.collection('usuarios').where('Correo', '==', usuarioactivo.email).get()
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
      usuarioactivo.delete().then(function () {
        // User deleted.
        console.log('Usuario eliminado')
        res.send('Usuario eliminado')
      }).catch(function (error) {
        console.log('No se pudo eliminar el usuario', error)
      })
    } else {
      // OPCION 2 (Salir)

      firebaseAuth.signOut().then(function () {
        // Sign-out successful.
      })
        .catch(function (error) {
          console.log(error)
          console.log('Usuario desconectaod')
          res.send('Error al desconectar usuario')
        })
        .then(res.send('Usuario desconectado'))
    }
  })

  /// ///////////// UTILIDADES /////////////////

  function ActualizarInfo (nombre, genero, fecha, usuario, correo) {
    const usuarioactivo = UsuarioLogueado()

    // Subir informacion
    if (usuarioactivo !== false) {
      // Firestore
      firebaseDb.collection('usuarios').add({
        Nombre: nombre,
        Fecha: fecha,
        Genero: genero,
        Correo: correo
      }).then(function (docRef) {
        console.log('Usuarios añadido a la db')
      })
        .catch(function (error) {
          console.error('Error añadiendo usuario a la db', error)
        })

      // Authentification
      usuarioactivo.updateProfile({
        displayName: usuario
      }).then(function () {
        // Update successful.
        console.log('Usuario actualizado')
      }).catch(function (error) {
        // An error happened.
        console.log('Error al actualizar usuario', error)
      })
    }
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

  function ActualizarCorreo (correo) {
    const usuarioactivo = UsuarioLogueado()

    // Subir informacion
    if (usuarioactivo !== false) {
      usuarioactivo.updatePassword(correo)
        .then(function () {
          // Update successful.
          console.log('Correo actualizado')
        }).catch(function (error) {
          // An error happened.
          console.log('Error al actualizar correo', error)
        })
    }
  }

  function Verificar () {
    var user = firebase.auth().currentUser
    user.sendEmailVerification()
      .catch(function (error) {
        console.log(error)
        console.log(error.code)
      })
      .then(() => {
        console.log('Email de verificacion enviado')
      })
  }

  function UsuarioLogueado () {
    if (firebaseAuth.currentUser !== undefined) {
      // User is signed in.
      return firebaseAuth.currentUser
    } else {
      // No user is signed in.
      return false
    }
  }

  function ActualizarContrasena (contrasena) {
    const usuarioactivo = UsuarioLogueado()

    if (usuarioactivo !== false) {
      usuarioactivo.updatePassword(contrasena).then(function () {
        // Update successful.
        console.log('Contraseña actualizada')
      }).catch(function (error) {
        // An error happened.
        console.log('Error al actualizar contraseña', error)
      })
    }
  }

  function ActualizarFoto (genero, usuario) {
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
      await client.verifyIdToken({
        idToken: req.body.token,
        audience: req.body.id_client
      })
    }
    verify()
      .then(function (ticket) {
        // Login si no hay errores
        res.send('Usuario correcto')
      })
      .catch(function (error) {
        console.log(error)
        res.send('Usuario incorrecto')
      })
  }

  /// //////////////////////////////
}
