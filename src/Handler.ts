import User from "./User";
import Activity from "./Activity"

export default class Handler {
    private _users: Map<string,User>
    private _activities: Map<string,Activity>

    // Data should be load from database, JSON, etc
    constructor() {
        this._users = new Map<string,User>()
        this._activities = new Map<string,Activity>()
    }

    add_user(ID: string, usuario: User) {
        if(this._users.has(ID)) {
            return false
        } else {
            this._users.set(ID,usuario)
            return true
        }
    }
    get_user(ID: string) {
        if (this._users.has(ID))
            return this._users.get(ID)
        else
            return null
    }
    //Both add methods check if an User/Activity with the given key exists, as it would be overwritten
    //Both get methods return null if an User/Activity with a given key doesn't exist


    add_activity(ID: string, actividad: Activity) {
        if(this._activities.has(ID)) {
            return false
        } else {
            this._activities.set(ID,actividad)
            return true
        }  
    }
    get_activity(ID: string) {
        if (this._activities.has(ID))
            return this._activities.get(ID)
        else
            return null
    }
}