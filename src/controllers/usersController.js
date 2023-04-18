const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite') 

class usersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users where email = (?)", [email])

    if(checkUserExists) {
      throw new AppError('Esse e-mail já está cadastrado.')
    }

    return response.status(201).json()
  }
}

module.exports = usersController