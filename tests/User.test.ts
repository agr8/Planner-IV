import User from '../src/User'
import {UserType} from '../src/UserType'

let user1: User
let user2: User

describe('User class', () =>{
    beforeEach(() =>{
        user1 = new User('name','surname',18,'email@gmail.com',UserType.CLIENTE)
        user2 = new User('Maria','Gonzalez',33,'maria@coreo.ugr.com',UserType.CLIENTE)

    })
    
    it("Try to create a user with an invalid name, throw error 'Invalid Name' ", () =>{
    
        let thrownError = new Error ('Name is invalid')
        thrownError.message = 'Name is invalid'
        const fn = () => {
            throw thrownError
        }
        try{
            
            new User('name','surname',18,'email',UserType.CLIENTE)

        }catch(e){
            
            thrownError = e
        }
        expect(thrownError.message).toEqual('Name is invalid')         
    })
    it("Try to create a user with an invalid Age, throw error 'Invalid age' ", () =>{
    
        let thrownError = new Error ('Invalid age')
        thrownError.message = 'Invalid age'
        const fn = () => {
            throw thrownError
        }
        try{
            
            new User('name','surname',11,'email',UserType.CLIENTE)

        }catch(e){
            
            thrownError = e
        }
        expect(thrownError.message).toEqual('Invalid age')         
    })
    it("Try to create a user with an invalid surname, throw error 'Surname is invalid' ", () =>{
    
        let thrownError = new Error ('Surname is invalid')
        thrownError.message = 'Surname is invalid'
        const fn = () => {
            throw thrownError
        }
        try{
            
            new User('name','s',11,'email',UserType.CLIENTE)

        }catch(e){
            
            thrownError = e
        }
        expect(thrownError.message).toEqual('Surname is invalid')         
    })
    test("Check get methods", () => {
       expect(user1.getName()).toMatch('name')
       expect(user1.getSurname()).toMatch('surname')
       expect(user1.getAge()).toEqual(18)
       expect(user1.getEmail()).toMatch('email@gmail.com')
       expect(user1.getType()).toBe(UserType.CLIENTE)
    });

})
