
module.exports = function (app) {
  global.XMLHttpRequest = require('xhr2')
  global.xhr = new XMLHttpRequest()
  // eslint-disable-next-line no-unused-vars
  const { firebaseDb, firebaseStg, firebaseAuth } = require('../config/firebase')

  // /////////////////// EVENTOS ///////////////////////
  // Get
  app.get('/eventos', function (req, res) {
    console.log('HTTP Obtener Evento')
    console.log('Funcionando', req.body)
    // res.send('HTTP Obtener Evento')
  })

  // Put
  app.put('/eventos', async function (req, res) {
    console.log('HTTP Crear Evento General')
    console.log('Funcionando', req.body)
    // console.log('Funcionando2', req.data)

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

      firebaseDb.collection('evento').add({
        nombre_evento: req.body.nombre_evento,
        localizacion: req.body.localizacion,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        precio: req.body.precio,
        descuento: req.body.descuento,
        descripcion: req.body.descripcion,
        votos: 0,
        comentarios: 0,
        usuario: 'usuario',
        isla: req.body.isla,
        fecha_creacion: new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() + ',' + new Date().getHours() + ':' + new Date().getMinutes() + new Date().getMilliseconds(),
        foto_usuario: firebaseAuth.currentUser.photoURL,
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
    }
  })

  // Update
  app.post('/eventos', function (req, res) {
    console.log('Actualizar evento')
    res.send('Actualizar evento')

    if (req.body.operacion === 'Restar') {
      Restar(req.body.id, res)
    } else if (req.body.operacion === 'Restar') {
      Sumar(req.body.id, res)
    } else if (req.body.operacion === 'Evento') {
      EstablecerFoto(req.body.foto, req.body.id, res)
    }
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
        res.send('Votos actualizados')
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
        res.send('Votos actualizados')
      })
    })
  }

  function EstablecerFoto (url, id, res) {
    firebaseDb.collection('eventos').doc(id).update({
      foto: url
    })
  }
}
