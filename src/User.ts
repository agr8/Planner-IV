import { UserConstants as Const } from "./Globals"
import { UserType } from "./UserType"

export default class User {
    private _name: string
    private _surname: string
    private _age: number
    private _email: string
    private _type: UserType

    constructor(name: string, surname: string, age: number, email: string, type: UserType) {
          if (name.length < Const.NAME_MIN_LENGTH || name.length > Const.NAME_MAX_LENGTH) {
              throw new Error('Name is invalid')
          }
          this._name = name

          if (surname.length < Const.SURNAME_MIN_LENGTH || surname.length > Const.SURNAME_MAX_LENGTH) {
              throw new Error('Surname is invalid')
          }
          this._surname = surname

          if (age < Const.MIN_AGE || age > Const.MAX_AGE) {
              throw new Error('Invalid age')
          }
          this._age = age

          // Should be checked with proper regex
          this._email = email

          this._type = type

    }

    public get name() {
        return this._name
    }

    public get surname() {
        return this._surname
    }

    public get age() {
        return this._age
    }
    
    public get email() {
        return this._email
    }

    public get type() {
        return this._type
    }
}