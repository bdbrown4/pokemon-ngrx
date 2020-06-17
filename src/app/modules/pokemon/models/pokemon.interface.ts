export interface PokemonInterface {
    attackMoves: AttackMoves;
    _id: string;
    name: string;
    pokeId: number;
    gender: string;
    powerType: string;
    powerSubType: string;
    attackPower: number;
    combatPower: number;
    defense: number;
    sprite: string;
    spriteFemale: string;
    shinySprite: string;
    shinySpriteFemale: string;
    png: string;
    hp: number;
}

export interface AttackMoves {
    fastMove: string;
    chargedMove: string;
}