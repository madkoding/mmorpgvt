module.exports = {
  async redirects() {
    return [
      {
        source: '/',        // Ruta de origen
        destination: '/login', // Ruta de destino
        permanent: false,      // Indica si la redirección es permanente (301) o temporal (302)
      },
    ]
  },
}