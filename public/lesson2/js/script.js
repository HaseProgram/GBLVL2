class User {
  name = ''
  _age = 18

  constructor (name) {
    this.name = name
  }

  publicStatus () {
    console.log('Working hard (no)!')
    console.log(this.name)
    console.log(this._age)
  }

  isAuth () {
    // no impl
  }
}

class AuthUser extends User {
  constructor (name) {
    super(name)
  }

  isAuth () {
    console.log('Auth is true')
  }
}

class NonAuthUser extends User {
  constructor (name) {
    super(name)
  }

  isAuth () {
    console.log('Auth is false')
  }
}

const UserInstanceAuth = new AuthUser('Auth')
const UserInstanceNonAuth = new NonAuthUser('NonAuth')

const UsersArray = [UserInstanceAuth, UserInstanceNonAuth]
UsersArray.forEach(user => {
  user.isAuth()
})
