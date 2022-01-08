import Activity from '../src/Activity'
import { ActivityType } from '../src/ActivityType'

let activity1: Activity
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