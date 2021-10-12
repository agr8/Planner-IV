import { ActivityConstants as Const } from "./Globals";
import { ActivityType } from "./ActivityType";

export default class Activity {
    private _title: string
    private _description: string
    private _price: number
    private _place: string
    private _type: ActivityType

    constructor(title: string, description: string, price: number, place: string, type: ActivityType) {
        if (title.length < Const.TITLE_MIN_LENGTH || title.length > Const.TITLE_MAX_LENGTH) {
            throw new Error('Title is invalid')
        }
        this._title = title

        if (description.length < Const.DESCRIPTION_MIN_LENGTH || description.length > Const.DESCRIPTION_MAX_LENGTH) {
            throw new Error('Description is invalid')
        }
        this._description = description

        if (price < Const.MIN_PRICE) {
            throw new Error('Price is invalid')
        }
        this._price = price

        if (place.length < Const.PLACE_MIN_LENGTH || place.length > Const.PLACE_MAX_LENGTH) {
            throw new Error('Place is invalid')
        }
        this._place = place

        this._type = type
    }

    public get title() {
        return this._title
    }

    public get description() {
        return this._description
    }

    public get price() {
        return this._price
    }

    public get place() {
        return this._place
    }

    public get type() {
        return this._type
    }
    
}