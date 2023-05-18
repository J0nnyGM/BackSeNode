const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'postgres',
   database: 'movie_expert',
   username: 'root',
   password: 'root',
   host: 'localhost',
   port: 3535,
   define: {
       freezeTableName: true,
       timestamps: false
   },

})

function testConnection() {
    sequelize.authenticate()
    .then(() => {
        console.info(`Connection has been established`)
    })
    .catch(() => {
        console.error(`Unable to connect to the database`)
    })
}

testConnection()

module.exports = sequelize