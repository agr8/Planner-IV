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
}