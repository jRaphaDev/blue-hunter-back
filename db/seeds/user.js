var data = [{
  model: 'User',
  documents: [
    {
      name: 'Raphael Freitas',
      username: 'Freitas',
      password: '*****',
      admin: true,
      location: 'Brazil'
    }, {
      name: 'Marcelo Ramos',
      username: 'Ramos',
      password: '*****',
      admin: false,
      location: 'Brazil'
    }
  ]}, {
    model: 'Book',
    documents: [
      {
        title: 'A volta dos que nao foram',
        author: ' Jonhy Streams',
      }, {
        title: 'Hackeando a sua 8080',
        author: ' Silvester Estalonge',
      }
    ]
  }
];

module.exports = data;