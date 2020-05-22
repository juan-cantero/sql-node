module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'juan',
    password:'hungryheart',
    database:'sqlnode',
    define: {
        timestamps: true,// created_at,updated_at
        underscored:true // snakecase
    }
}; 