
// var express = require('express')

module.exports = function (app) {
  const { firebase, firebaseAuth, firebaseDb, firebaseStg } = require('../config/firebase')

  // /////////////////// IDENTIFICACIÓN ///////////////////////
  // Get (Login)
  app.get('/autorizar', function (req, res) {
    console.log('HTTP Login')
    // console.log('Funcionando', req.body)

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
        if (errorcodes === 'auth/user-not-found') {
          res.send(errorcodes)
        } else if (errorcodes === 'auth/wrong-password') {
          res.send(errorcodes)
        } else {
          if (firebase.auth().currentUser.emailVerified === true) {
            res.send('Usuario logueado')
          } else {
            res.send('auth/must-verify')
          }
        }
      })
  })

  // Put (Register)
  app.put('/autorizar', function (req, res) {
    console.log('HTTP Registrar')
    // console.log('Funcionando', req.body)

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
        // ActualizarFoto(req.body.foto)
        }
      })
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
    const usuarioactivo = UsuarioLogueado()
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
      // this.alert = true
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

  function ActualizarFoto (foto) {
    const usuario = UsuarioLogueado()
    const usuarioid = UsuarioLogueado().id
    const storageRef = firebaseStg.ref('avatares/usuarios/' + usuarioid)
    const fotoRef = storageRef.child('foto')
    let urlfoto

    if (foto !== undefined) {
    // Subir imagen
      fotoRef.put(foto)
        .then(function (snapshot) {
        // console.log('Archivo subido')
        // Obtener URL guardado
          fotoRef.getDownloadURL().then(function (url) {
            urlfoto = url
          })
            .then(function () {
              if (usuario != null) {
                usuario.updateProfile({
                  photoURL: urlfoto
                })
              }
            })
        })
    } else {
    // Predefinidos
      const usuarioid = firebaseAuth.currentUser.uid
      const storageRef = firebaseStg.ref('avatares/usuarios/' + usuarioid)
      const fotoRef = storageRef.child('foto')

      const storageRefDefault = firebaseStg.ref('avatares/predefinidos/')
      const fotoRefMale = storageRefDefault.child('Avatar_m.png')
      const fotoRefFemale = storageRefDefault.child('Avatar_f.png')

      let genero

      if (this.genero === 'Masculino') {
        console.log('Masculino')
        genero = fotoRefMale
      } else if (this.genero === 'Femenino') {
        console.log('Femenino')
        genero = fotoRefFemale
      }

      genero.getDownloadURL()
        .catch(function (error) {
          console.log('Error', error)
        })
        .then(function (url, archivo) {
          var xhr = new XMLHttpRequest()
          xhr.responseType = 'blob'
          xhr.onload = function (event) {
            var blob = xhr.response
            fotoRef.put(blob)
            console.log('Enviando')
          }
          xhr.open('GET', url)
          xhr.send()
        })
        .then(function (snapshot) {
          fotoRef.getDownloadURL().then(function (url) {
            usuario.updateProfile({
              photoURL: url
            })
          })
        })
    }
  }

  /// //////////////////////////////
}
