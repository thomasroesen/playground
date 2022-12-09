class PlayerClass {
  name: string
  hp: number
  damage: number

  constructor(name: string, hp: number, damage: number) {
    this.name = name
    this.hp = hp
    this.damage = damage
  }
}

class Player extends PlayerClass {
  name: string
  class: PlayerClass

  constructor(name: string, class: PlayerClass) {
    this.name = name
    super(class)
  }
}