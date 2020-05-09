
module.exports = function (app) {
  const { firebaseDb, firebaseStg, firebaseAuth } = require('../config/firebase')

  // /////////////////// EVENTOS ///////////////////////
  // Get
  app.get('/eventos', function (req, res) {
    console.log('HTTP Obtener Evento')
    // res.send('HTTP Obtener Evento')

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
    const datos_evento = []

    consulta.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      // Leemos los datos
        const evento = {
          nombre_evento: doc.data().nombre_evento,
          localizacion: doc.data().localizacion,
          precio: doc.data().precio,
          fecha_inicio: doc.data().fecha_inicio,
          votos: doc.data().votos,
          comentarios: doc.data().comentarios,
          usuario: doc.data().usuario,
          isla: doc.data().isla,
          id: doc.id,
          foto_usuario: doc.data().foto_usuario
        }

        const storageRef = firebaseStg.ref('eventos/' + doc.id)
        var fotoRef = storageRef.child('foto')

        // Obtener foto
        fotoRef.getDownloadURL().then(function (url) {
          evento.foto = url
        }).then(function (docRef) {

        })
        datos_evento.push(evento)
      })
    })
      .then(function (snapshot) {
        console.log('Eventos leidos')
        res.send(datos_evento)
      })
      .catch(function (error) {
        console.error('Error leyendo eventos', error)
        res.send('Error al leer los eventos')
      })
  })

  // Put
  app.put('/eventos', function (req, res) {
    console.log('HTTP Crear Evento')

    // Insertar db
    firebaseDb.collection('prueba').add({
      Nombre_evento: req.body.nombre_evento,
      Localizacion: req.body.localizacion,
      Fecha_inicio: req.body.fecha_inicio,
      Fecha_fin: req.body.fecha_fin,
      Precio: req.body.precio,
      Descuento: req.body.descuento,
      Descripcion: req.body.descripcion,
      Votos: 0,
      Comentarios: 0,
      Usuario: req.body.usuario,
      Isla: req.body.isla,
      Fecha_creacion: new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() + ',' + new Date().getHours() + ':' + new Date().getMinutes() + new Date().getMilliseconds(),
      Foto_usuario: firebaseAuth.currentUser.photoURL
    })
      .then(function (docRef) {
      // Subir imagenes
        console.log('Eve')
        const storageRef = firebaseStg.ref('prueba/' + docRef.id)
        const thisRef = storageRef.child('foto')

      // thisRef.put(req.body.file)
      //   .then(function (snapshot) {
      //     console.log('Archivo subido')
      //     res.send('Evento añadido')
      //   })
      })
      .catch(function (error) {
        console.error('Error añadiendo evento ', error)
        res.send('Error al crear Evento')
      })
  })

  // Update
  app.post('/eventos', function (req, res) {
    console.log('Actualizar evento')
    res.send('Actualizar evento')

    if (req.data.operacion === 'Restar') {
      Restar()
    } else {
      Sumar()
    }

    res.send('Votos actualizados')
  })

  // Delete
  app.delete('/eventos', function (req, res) {
    console.log('Borrar evento')
    // res.send('Borrar evento')
  })

  /// ///////////// UTILIDADES /////////////////

  function Sumar (id) {
    var votosactuales = 0
    firebaseDb.collection('eventos').doc(id).get().then((querySnapshot) => {
      votosactuales = querySnapshot.data().votos
      firebaseDb.collection('eventos').doc(id).update({
        votos: votosactuales + 1
      })
    })
  }

  function Restar (id) {
    var votosactuales = 0
    firebaseDb.collection('eventos').doc(id).get().then((querySnapshot) => {
      votosactuales = querySnapshot.data().votos
      firebaseDb.collection('eventos').doc(id).update({
        votos: votosactuales - 1
      })
    })
  }
}
