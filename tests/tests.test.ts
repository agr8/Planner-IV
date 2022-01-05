import Activity from '../src/Activity'
import { ActivityType } from '../src/ActivityType'
import Handler from '../src/Handler'
import User from '../src/User'
import {UserType} from '../src/UserType'

let user1: User
let user2: User
let activity1: Activity
let handler: Handler

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

describe('Activity class', () =>{
    beforeEach(() =>{
        activity1 = new Activity('Mi Restaurante','Ofrece menus muy variados y muy asequibles',9,'Gran Via',ActivityType.RESTAURACION)
    })
    
    it("Try to create an activity with an invalid title, throw error 'Title is Invalid' ", () =>{
    
        let thrownError = new Error ('Title is invalid')
        thrownError.message = 'Title is invalid'
        const fn = () => {
            throw thrownError
        }
        try{
            
            new Activity('Mi','Ofrece menus muy variados y muy asequibles',9,'Gran Via',ActivityType.RESTAURACION)

        }catch(e){
            
            thrownError = e
        }
        expect(thrownError.message).toEqual('Title is invalid')         
    })
    it("Try to create an activity with an invalid description, throw error 'Description is invalid' ", () =>{
    
        let thrownError = new Error ('Description is invalid')
        thrownError.message = 'Description is invalid'
        const fn = () => {
            throw thrownError
        }
        try{
            
            new Activity('Mi Restaurante','menus',9,'Gran Via',ActivityType.RESTAURACION)

        }catch(e){
            
            thrownError = e
        }
        expect(thrownError.message).toEqual('Description is invalid')         
    })
    it("Try to create an activity with an invalid price, throw error 'Price is invalid' ", () =>{
    
        let thrownError = new Error ('Price is invalid')
        thrownError.message = 'Price is invalid'
        const fn = () => {
            throw thrownError
        }
        try{
            
            new Activity('Mi Restaurante','Ofrece menus muy variados y muy asequibles',-9,'Gran Via',ActivityType.RESTAURACION)

        }catch(e){
            
            thrownError = e
        }
        expect(thrownError.message).toEqual('Price is invalid')         
    })
    it("Try to create an activity with an invalid place, throw error 'Place is invalid' ", () =>{
    
        let thrownError = new Error ('Place is invalid')
        thrownError.message = 'Place is invalid'
        const fn = () => {
            throw thrownError
        }
        try{
            
            new Activity('Mi Restaurante','Ofrece menus muy variados y muy asequibles',9,'No se',ActivityType.RESTAURACION)

        }catch(e){
            
            thrownError = e
        }
        expect(thrownError.message).toEqual('Place is invalid')         
    })
    test("Check get methods", () => {
       expect(activity1.getTitle()).toMatch('Mi Restaurante')
       expect(activity1.getDescription()).toMatch('Ofrece menus muy variados y muy asequibles')
       expect(activity1.getPrice()).toEqual(9)
       expect(activity1.getPlace()).toMatch('Gran Via')
       expect(activity1.getType()).toBe(ActivityType.RESTAURACION)
    });

})

describe('Handler class', () =>{
    beforeEach(()=> {
        handler = new Handler()
    })
    describe('Check add_user method',() => {

        test("Try to add a new user to a group of users, checking add_user method", () => {
            
            const user3 = new User('Ana','Diaz',22,'ana@gmail.com',UserType.CLIENTE)

            const userAdded = handler.add_user('user3',user3)

            expect(userAdded).toBeTruthy()   
        })
        test("Try to add an existing user to a group of users, checking add_user method", () => {
            
            const user3 = new User('Ana','Diaz',22,'ana@gmail.com',UserType.CLIENTE)
            handler.add_user('user3',user3)

            const userAdded = handler.add_user('user3',user3)
           
            expect(userAdded).toBeFalsy()   
        })
    })
    describe('Check get_user method',() => {
        test("Check get_user method for an existing user", () => {

            const user3 = new User('Ana','Diaz',22,'ana@gmail.com',UserType.CLIENTE)
            handler.add_user('user3',user3)

            const userAdded = handler.get_user('user3')
            
            expect(userAdded).toMatchObject({"_age": 22, "_email": "ana@gmail.com", "_name": "Ana", "_surname": "Diaz", "_type": 0})
        })
        test("Check get_user method for an unexisting user", () => {
            
            const userAdded = handler.get_user('user3')

            expect(userAdded).toBeNull() 
        })
    })
    describe('Check delete_user method',() => {
        test("Check delete_user method for an existing user", () => {
            
            const user3 = new User('Ana','Diaz',22,'ana@gmail.com',UserType.CLIENTE)
            handler.add_user('user3',user3)

            const userDeleted = handler.delete_user('user3')

            expect(userDeleted).toBeTruthy()
        })
        test("Check delete_user method for an unexisting user", () => {
            
            const userDeleted = handler.delete_user('user1')

            expect(userDeleted).toBeFalsy()
        })
    })
    describe('Check add_activity method',() => {

        test("Try to add a new activity to a group of activitys, checking add_activity method", () => {
            
            const activity3 = new Activity('Mi Restaurante','Ofrece menus muy variados y muy asequibles',9,'Gran Via',ActivityType.RESTAURACION)

            const activityAdded = handler.add_activity('activity3',activity3)

            expect(activityAdded).toBeTruthy()   
        })
        test("Try to add an existing activity to a group of activitys, checking add_activity method", () => {
            
            const activity3 = new Activity('Mi Restaurante','Ofrece menus muy variados y muy asequibles',9,'Gran Via',ActivityType.RESTAURACION)

            handler.add_activity('activity3',activity3)

            const activityAdded = handler.add_activity('activity3',activity3)
           
            expect(activityAdded).toBeFalsy()   
        })
    })
    describe('Check get_activity method',() => {
        test("Check get_activity method for an existing activity", () => {

            const activity3 = new Activity('Mi Restaurante','Ofrece menus muy variados y muy asequibles',9,'Gran Via',ActivityType.RESTAURACION)
            handler.add_activity('activity3',activity3)

            const activityAdded = handler.get_activity('activity3')
            
            expect(activityAdded).toMatchObject({"_description": "Ofrece menus muy variados y muy asequibles", "_place": "Gran Via", "_price": 9, "_title": "Mi Restaurante", "_type": 4})
        })
        test("Check get_activity method for an unexisting activity", () => {
            
            const activityAdded = handler.get_activity('activity3')

            expect(activityAdded).toBeNull() 
        })
    })
    describe('Check delete_activity method',() => {
        test("Check delete_activity method for an existing activity", () => {
            
            const activity3 = new Activity('Mi Restaurante','Ofrece menus muy variados y muy asequibles',9,'Gran Via',ActivityType.RESTAURACION)
            handler.add_activity('activity3',activity3)

            const activityDeleted = handler.delete_activity('activity3')

            expect(activityDeleted).toBeTruthy()
        })
        test("Check delete_activity method for an unexisting activity", () => {
            
            const activityDeleted = handler.delete_activity('activity1')

            expect(activityDeleted).toBeFalsy()
        })
    })
    describe('Check the types of activities types most frequented ',() => {
        test("Checking get_frequency method, it should return values, even if the frequency is '0'", () => {
            
            const frequency = handler.get_frequency(ActivityType.RESTAURACION)

            expect(frequency).toEqual(0)
        })
        test("Try to update a the frequency of a Activity's type  with an invalid frequency, throw error 'Frequency is invalid' ", () =>{
    
            let thrownError = new Error ('Frequency is invalid')
            thrownError.message = 'Frequency is invalid'
            const fn = () => {
                throw thrownError
            }
            try{
                
                handler.update_frequency(ActivityType.RESTAURACION,-1)
    
            }catch(e){
                
                thrownError = e
            }
            expect(thrownError.message).toEqual('Frequency is invalid')         
        
        })  
        test("Try to update the frequency of a Activity's type, checking update_method", () => {
            
            const frequencyUpdated = handler.update_frequency(ActivityType.RESTAURACION,1)

            expect(frequencyUpdated).toBeTruthy()
        })
        test("Checking get_frequency method after updating a frequency", () => {
            
            handler.update_frequency(ActivityType.RESTAURACION,1)

            const frequency = handler.get_frequency(ActivityType.RESTAURACION)

            expect(frequency).toEqual(1)
        })
    })


})
