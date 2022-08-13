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
    mkTIE()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Traveler.setImage(assets.image`wookiel`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Traveler.setImage(assets.image`wookier`)
})
function mkTIE () {
    TFighter = sprites.create(assets.image`TIE`, SpriteKind.enemyship)
    TFighter.setVelocity(50, 0)
    TFighter.setBounceOnWall(true)
}
let TFighter: Sprite = null
let Traveler: Sprite = null
let MFalc: Sprite = null
let TOWER1: Sprite = null
BuildCity()
forever(function () {
    Traveler.setVelocity(0, 100)
})
