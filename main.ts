namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const ship = SpriteKind.create()
    export const enemyship = SpriteKind.create()
}
function BuildCity () {
    scene.setBackgroundColor(9)
    TOWER1 = sprites.create(assets.image`Tower`, SpriteKind.Building)
    TOWER1.setPosition(24, 221)
    MFalc = sprites.create(assets.image`Falcon`, SpriteKind.ship)
    MFalc.setPosition(77, 240)
    Traveler = sprites.create(assets.image`wookiel`, SpriteKind.Player)
    Traveler.setPosition(40, 232)
    Traveler.setStayInScreen(true)
    Traveler.setVelocity(0, 100)
    scene.cameraFollowSprite(Traveler)
    controller.moveSprite(Traveler)
    tiles.setCurrentTilemap(tilemap`TwinSpires`)
    effects.clouds.startScreenEffect()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == "walk" && Traveler.overlapsWith(MFalc)) {
        MFalc.destroy()
        Traveler.setImage(assets.image`FalconRight`)
        state = "fly"
    } else {
        if (state == "fly") {
            MFalc = sprites.create(assets.image`Falcon`, SpriteKind.ship)
            MFalc.setVelocity(0, 100)
            MFalc.setPosition(Traveler.x, Traveler.y)
            Traveler.setImage(assets.image`wookier`)
            state = "walk"
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == "walk") {
        Traveler.setImage(assets.image`wookiel`)
    }
    if (state == "fly") {
        Traveler.setImage(assets.image`FalconLeft`)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == "walk") {
        Traveler.setImage(assets.image`wookier`)
    }
    if (state == "fly") {
        Traveler.setImage(assets.image`FalconRight`)
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
})
let TFighter: Sprite = null
let Traveler: Sprite = null
let MFalc: Sprite = null
let TOWER1: Sprite = null
let state = ""
BuildCity()
state = "walk"
forever(function () {
    Traveler.setVelocity(0, 100)
})
forever(function () {
    pause(5000)
    if (7 < randint(0, 10)) {
        mkTIE()
    }
})
