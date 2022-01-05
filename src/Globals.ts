//File created to store all constants values along the app

export abstract class UserConstants {
    static readonly NAME_MIN_LENGTH: number = 1
    static readonly NAME_MAX_LENGTH: number = 24

    static readonly SURNAME_MIN_LENGTH: number = 2
    static readonly SURNAME_MAX_LENGTH: number = 50

    static readonly MIN_AGE: number = 12
    static readonly MAX_AGE: number = 125

    static readonly MAIL_MIN_LENGTH: number = 3
    static readonly MAIL_MAX_LENGTH: number = 320
}

export abstract class ActivityConstants {
    static readonly TITLE_MIN_LENGTH: number = 8
    static readonly TITLE_MAX_LENGTH: number = 72

    static readonly DESCRIPTION_MIN_LENGTH: number = 40
    static readonly DESCRIPTION_MAX_LENGTH: number = 1024

    static readonly PLACE_MIN_LENGTH: number = 8
    static readonly PLACE_MAX_LENGTH: number = 128

    static readonly MIN_PRICE: number = 0
}
export abstract class FrequencyConstants {
    static readonly MIN_FREQUENCY: number = 0
}

