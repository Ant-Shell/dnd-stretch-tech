export type AppStateStructure = {
        name: string
        url: string
    }[]

 export type FormInputs = {
        name: string
        race: string
        classs: string
        hp: string
        ac: string
        str: string
        con: string
        dex: string
        wis: string
        int: string
        cha: string
        about: string
    }

export type PartyStructure = {
        name: string,
        race: string,
        classs: string,
        hp: string,
        ac: string,
        str: string,
        con: string,
        dex: string,
        wis: string,
        int: string,
        cha: string,
        about: string
        }[]

export type CharacterStructure = {
    name: string, 
    race: string, 
    classs: string, 
    hp: string,
    ac: string,
    str: string,
    con: string,
    dex: string,
    wis: string,
    int: string,
    cha: string,
    about: string
}

export type MonsterStructure = {
    name: string
    url: string
    challenge_rating: number
    size: string
    type: string
    alignment: string
    languages: string
    armor_class: number
    hit_points: number
    xp: number
    proficiencies: {
        value: number 
        proficiency: {
            name: string
        }
    }[]
    special_abilities: {
        name: string
        desc: string
    }[]
}