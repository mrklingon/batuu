namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const ship = SpriteKind.create()
    export const enemyship = SpriteKind.create()
    export const populace = SpriteKind.create()
}
function BuildCity () {
    scene.setBackgroundColor(9)
    TOWER1 = sprites.create(assets.image`Tower`, SpriteKind.Building)
    xw = sprites.create(assets.image`xwing`, SpriteKind.ship)
    xw.setPosition(400, 221)
    TOWER1.setPosition(24, 221)
    MFalc = sprites.create(assets.image`Falcon`, SpriteKind.ship)
    MFalc.setPosition(77, 240)
    Traveler = sprites.create(assets.image`wookiel`, SpriteKind.Player)
    Traveler.setPosition(40, 232)
    Traveler.setStayInScreen(true)
    Traveler.setVelocity(0, 100)
    xw.setVelocity(0, 100)
    scene.cameraFollowSprite(Traveler)
    controller.moveSprite(Traveler)
    tiles.setCurrentTilemap(tilemap`TwinSpires`)
    effects.clouds.startScreenEffect()
}
function setSkin (text: string) {
    if (text == "wookie") {
        Traveler.setImage(assets.image`wookier`)
        figure = "wookie"
    }
    if (text == "falcon") {
        Traveler.setImage(assets.image`FalconRight`)
        figure = "falcon"
    }
    if (text == "xwing") {
        Traveler.setImage(assets.image`xwingR`)
        figure = "xwing"
    }
}
function setTraveler (text: string) {
    if (text == "wookie") {
        Traveler.setImage(assets.image`wookier`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == "fly") {
        music.pewPew.play()
        projectile = sprites.createProjectileFromSprite(assets.image`blast`, Traveler, 500 * dir, 0)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == "walk") {
        Traveler.setImage(assets.image`wookiel`)
    }
    if (state == "fly") {
        if (figure == "falcon") {
            Traveler.setImage(assets.image`FalconLeft`)
        } else {
            Traveler.setImage(assets.image`xwingL`)
        }
    }
    dir = -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == "walk") {
        Traveler.setImage(assets.image`wookier`)
    }
    if (state == "fly") {
        if (figure == "falcon") {
            Traveler.setImage(assets.image`FalconRight`)
        } else {
            Traveler.setImage(assets.image`xwingR`)
        }
    }
    dir = 1
})
sprites.onOverlap(SpriteKind.enemyship, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    music.knock.play()
    info.changeScoreBy(randint(10, 50))
    numties += -1
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (Traveler.y > 200) {
        if (state == "walk") {
            if (state == "walk" && Traveler.overlapsWith(xw)) {
                xw.destroy()
                setSkin("xwing")
                state = "fly"
            }
            if (state == "walk" && Traveler.overlapsWith(MFalc)) {
                MFalc.destroy()
                setSkin("falcon")
                state = "fly"
            }
        } else {
            if (state == "fly") {
                if (figure == "falcon") {
                    setSkin("wookie")
                    MFalc = sprites.create(assets.image`Falcon`, SpriteKind.ship)
                    MFalc.setVelocity(0, 70)
                    MFalc.setPosition(Traveler.x, Traveler.y)
                    state = "walk"
                } else {
                    setSkin("wookie")
                    xw = sprites.create(assets.image`xwing`, SpriteKind.ship)
                    xw.setVelocity(0, 70)
                    xw.setPosition(Traveler.x, Traveler.y)
                    state = "walk"
                }
            }
        }
    }
})
function mkTIE () {
    TFighter = sprites.create(assets.image`TIE`, SpriteKind.enemyship)
    TFighter.setVelocity(randint(-50, 50), 0)
    TFighter.x += randint(-20, 20)
    TFighter.y += randint(-20, 20)
    TFighter.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.enemyship, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    music.knock.play()
    info.changeScoreBy(randint(10, 50))
    info.changeLifeBy(-1)
    numties += -1
})
function mkpop () {
    person = sprites.create(people[randint(0, 5)], SpriteKind.populace)
    person.setPosition(500, 250)
    person.setVelocity(0, 1000)
    pause(1000)
    person.setVelocity(randint(-50, 50), 0)
    person.setBounceOnWall(true)
}
let person: Sprite = null
let TFighter: Sprite = null
let projectile: Sprite = null
let Traveler: Sprite = null
let MFalc: Sprite = null
let xw: Sprite = null
let TOWER1: Sprite = null
let people: Image[] = []
let dir = 0
let state = ""
let figure = ""
game.splash("Navigate Galaxy's Edge,", "Fly spaceships,")
game.splash("Shoot down First Order TIEs!")
figure = "wookie"
BuildCity()
state = "walk"
dir = 1
people = [
assets.image`person1`,
assets.image`droid1`,
assets.image`droid0`,
assets.image`droid2`,
assets.image`person2`,
assets.image`person0`
]
info.setLife(10)
let maxties = 7
let numties = 0
let maxpeeps = 10
let numpeeps = 0
mkpop()
forever(function () {
    if (state == "walk" && Traveler.y < 230) {
        Traveler.y = 230
    }
})
forever(function () {
    pause(randint(500, 3000))
    if (numpeeps < maxpeeps && 7 < randint(0, 10)) {
        mkpop()
        numpeeps += 1
    }
})
forever(function () {
    Traveler.setVelocity(0, 100)
})
forever(function () {
    pause(randint(500, 3000))
    if (numties < maxties && 7 < randint(0, 10)) {
        numties += 1
        mkTIE()
    }
})
