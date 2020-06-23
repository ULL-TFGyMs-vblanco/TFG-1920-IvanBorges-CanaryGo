
module.exports = function (app) {
  global.XMLHttpRequest = require('xhr2')
  global.xhr = new XMLHttpRequest()
  // eslint-disable-next-line no-unused-vars
  const { firebaseAuth, firebaseDb, firebaseStg } = require('../config/firebase')
  // const { admin } = require('../config/firebaseadmin')
  // const { OAuth2Client } = require('google-auth-library')

  // /////////////////// EVENTOS ///////////////////////
  // Get
  app.get('/eventos', function (req, res) {
    console.log('HTTP Obtener Evento')
    console.log('Funcionando', req.body)
    res.send('HTTP Obtener Evento')
  })

  // Put
  app.put('/eventos', async function (req, res) {
    console.log('HTTP Crear Evento General')
    console.log('Funcionando', req.body)
    // console.log('Funcionando2', req.data)

    firebaseAuth.signInWithCustomToken(req.body.token).then(() => {
      firebaseAuth.signOut()
      // Subir informacion

      if (req.body.tipo === 'Consultar') {
        // Consultas
        var eventos = firebaseDb.collection('eventos')
        var destacados = eventos.orderBy('votos', 'desc')
        var novedades = eventos.orderBy('fecha_creacion', 'desc')
        var zona = eventos.orderBy('fecha_creacion', 'desc')
        // var isla = eventos.where('isla', '==', 'Tenerife')

        // Gestión consultas
        var consulta
        if (req.body.tab === 'tab1') {
          consulta = destacados
        } else if (req.body.tab === 'tab2') {
          consulta = novedades
        } else if (req.body.tab === 'tab3') {
          consulta = zona
        }

        // Requerimos filtro por isla si es necesario
        if (req.body.isla !== '') {
          consulta = consulta.where('isla', '==', req.body.isla)
        }

        /// ///////////
        // Leer bbdd
        const datosevento = []
        consulta.get()
          .then((querySnapshot) => {
            return querySnapshot.forEach((doc) => {
              // Leemos los datos
              const evento = {
                foto: doc.data().foto,
                nombre_evento: doc.data().nombre_evento,
                localizacion: doc.data().localizacion,
                precio: doc.data().precio,
                fecha_inicio: doc.data().fecha_inicio,
                votos: doc.data().votos,
                comentarios: doc.data().comentarios,
                usuario: doc.data().usuario,
                isla: doc.data().isla,
                id: doc.id,
                foto_usuario: doc.data().foto_usuario,
                navegador: doc.data().navegador
              }

              datosevento.push(evento)
              // })
            })
          })
          .then(() => {
            res.send(datosevento)
          })

        // //
      } else if (req.body.tipo === 'Crear') {
        // Insertar db
        console.log('Nuevo evento')
        console.log('DATOS', req.body)

        firebaseDb.collection('eventos').add({
          nombre_evento: req.body.nombre_evento,
          localizacion: req.body.localizacion,
          fecha_inicio: req.body.fecha_inicio,
          fecha_fin: req.body.fecha_fin,
          precio: req.body.precio,
          descuento: req.body.descuento,
          descripcion: req.body.descripcion,
          votos: 0,
          comentarios: 0,
          usuario: req.body.usuario,
          isla: req.body.isla,
          fecha_creacion: new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() + ',' + new Date().getHours() + ':' + new Date().getMinutes() + new Date().getMilliseconds(),
          foto_usuario: req.body.foto_usuario,
          navegador: req.body.nombre_evento.replace(/ /g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
          foto: ''
        })
          .then(function (docRef) {
            res.send('Evento añadido:' + docRef.id)
            console.log('Evento añadido')
          })
          .catch(function (error) {
            console.error('Error añadiendo evento ', error)
            res.send('Error al crear Evento')
          })
        // OBTENER EVENTO
      } else if (req.body.tipo === 'Buscar') {
        // Filtro para buscar por nombre
        var bbdd = firebaseDb.collection('eventos')
        consulta = bbdd.where('nombre_evento', '==', req.body.navegador)

        // Datos fijos
        let evento = []
        const comentarios_ = []
        const datosevento = []
        /// ///////////
        // Leer bbdd

        consulta.get()
          .then((querySnapshot) => {
            return querySnapshot.forEach((doc) => {
              // Leemos los datos
              evento = {
                foto: doc.data().foto,
                nombre_evento: doc.data().nombre_evento,
                localizacion: doc.data().localizacion,
                precio: doc.data().precio,
                fecha_inicio: doc.data().fecha_inicio,
                votos: doc.data().votos,
                comentarios: doc.data().comentarios,
                usuario: doc.data().usuario,
                isla: doc.data().isla,
                id: doc.id,
                foto_usuario: doc.data().foto_usuario,
                navegador: doc.data().navegador,
                comentarios_texto: ''
              }

              // datosevento.push(evento)
              // })
            })
          })
          .then(() => {
            // Filtro para buscar comentarios
            var bbdd2 = firebaseDb.collection('eventos/' + evento.id + '/comentarios')
            console.log('Buscando comentarios')

            bbdd2.get()
              .then((querySnapshot) => {
                return querySnapshot.forEach((doc) => {
                  // Leemos los datos
                  comentarios_.push(doc.data())
                  //
                })
              })
              .then(() => {
                evento.comentarios_texto = comentarios_
                datosevento.push(evento)
                res.send(datosevento)
              })
          })

        // //
      }
    }).catch(function (error) {
      console.error('Error verificando usuario', error)
      res.send('Error al verificar usuario en Evento')
    })
  })

  // Update
  app.post('/eventos', function (req, res) {
    console.log('Actualizar evento', req.body)
    // res.send('Actualizar evento')

    firebaseAuth.signInWithCustomToken(req.body.token).then(() => {
      const user = firebaseAuth.currentUser
      firebaseAuth.signOut()

      if (req.body.operacion === 'Restar') {
        EstablecerVoto(user.email, req.body.id, res)
        // Restar(req.body.id, res)
      } else if (req.body.operacion === 'Sumar') {
        EstablecerVoto(user.email, req.body.id)
        Sumar(req.body.id, res)
      } else if (req.body.operacion === 'Evento') {
        EstablecerFoto(req.body.foto, req.body.id)
      }
    }).catch(function (error) {
      console.error('Error actualizando evento final', error)
      res.send('Error al actualizar Evento final')
    })
  })

  // Delete
  app.delete('/eventos', function (req, res) {
    console.log('Borrar evento')
    // res.send('Borrar evento')
  })

  /// ///////////// UTILIDADES /////////////////

  function Sumar (id, res) {
    var votosactuales = 0
    firebaseDb.collection('eventos').doc(id).get().then((querySnapshot) => {
      votosactuales = querySnapshot.data().votos
      firebaseDb.collection('eventos').doc(id).update({
        votos: votosactuales + 1
      }).then(function () {
        // res.send('Votos actualizados')
      })
    })
  }

  function Restar (id, res) {
    var votosactuales = 0
    firebaseDb.collection('eventos').doc(id).get().then((querySnapshot) => {
      votosactuales = querySnapshot.data().votos
      firebaseDb.collection('eventos').doc(id).update({
        votos: votosactuales - 1
      }).then(function () {
        // res.send('Votos actualizados')
      })
    })
  }

  function EstablecerFoto (url, id) {
    firebaseDb.collection('eventos').doc(id).update({
      foto: url
    })
  }

  function EstablecerVoto (email, id, res) {
    console.log('Registrando voto', id)
    // firebaseDb.collection('eventos').doc(String(id)).update({
    //   emails: email,
    //   votos: 0
    // }).then(() => {
    //   console.log('hecho')
    //   res.send('LOL')
    // }).catch((error) => {
    //   console.log(error)
    // })
    // firebaseDb.collection('eventos/' + id + '/votantes').add({
    //   emails: email
    // })

    firebaseDb.collection('prueba').add({
      emails: email
    }).then(() => {
      console.log('hecho')
      res.send('LOL')
    }).catch((error) => {
      console.log(error)
    })
    firebaseDb.collection('eventos/' + id + '/votantes').add({
      emails: email
    })
  }
}
