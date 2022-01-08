import Activity from '../src/Activity'
import { ActivityType } from '../src/ActivityType'
import Handler from '../src/Handler'
import User from '../src/User'
import {UserType} from '../src/UserType'

let handler: Handler

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
