namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const ship = SpriteKind.create()
    export const enemyship = SpriteKind.create()
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == "walk" && Traveler.overlapsWith(xw)) {
        xw.destroy()
        setSkin("xwing")
        state = "fly"
    } else {
        if (state == "walk" && Traveler.overlapsWith(MFalc)) {
            MFalc.destroy()
            setSkin("falcon")
            state = "fly"
        } else {
            if (state == "fly") {
                if (figure == "falcon") {
                    MFalc = sprites.create(assets.image`Falcon`, SpriteKind.ship)
                    MFalc.setVelocity(0, 100)
                    MFalc.setPosition(Traveler.x, Traveler.y)
                    state = "walk"
                } else {
                    xw = sprites.create(assets.image`xwing`, SpriteKind.ship)
                    xw.setVelocity(0, 100)
                    xw.setPosition(Traveler.x, Traveler.y)
                    state = "walk"
                }
            }
        }
    }
})
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
    if (text == "falcon") {
        Traveler.setImage(assets.image`FalconRight`)
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
})
let TFighter: Sprite = null
let projectile: Sprite = null
let Traveler: Sprite = null
let MFalc: Sprite = null
let xw: Sprite = null
let TOWER1: Sprite = null
let dir = 0
let state = ""
let figure = ""
figure = "wookie"
BuildCity()
state = "walk"
dir = 1
info.setLife(10)
forever(function () {
    Traveler.setVelocity(0, 100)
})
forever(function () {
    pause(2000)
    if (7 < randint(0, 10)) {
        mkTIE()
    }
})
