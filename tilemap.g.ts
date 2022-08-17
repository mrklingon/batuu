// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "TwinSpires":
            case "level1":return tiles.createTilemap(hex`4000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000204000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000104040002000000000000000000000000000002020000000000000000050500000001000000000000000000000000000000000004000000000000000000000004040404040000000000000000000000000000040400000000000000000505050000030200000000000000000000000000000004040000000000000000000404040505050402000000000000000000000000000404000000000006000505050500000505000000000000000000000000000000040400000000000000000004050505050505040000000000000000000000000004040400000000000005050505000005050000000000000000000000000000000404000000000000000000040505050505050400040404000404000000000004040404000000000000050505050000050505040400000000000004000000000004040000000008000000040405050505050504000404040404040000000000040404040000000000050404040404040404040405040000000004040404040404040404000000000000000405050505050505040404050505050504040004040405050404040404040404050505050505050505050504040404040404040404040404040004040404040404040404040404040405050505050505050504050505050505050505050505050505050505050505050505050405050505050505050505050404040505050404040404050505050505050505050505050505050505050505050505050505050505050505050505050505050505`, img`
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
....................................................222222222...
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "peak":
            case "tile2":return tile2;
            case "myTile0":
            case "tile3":return tile3;
            case "peak0":
            case "tile4":return tile4;
            case "myTile1":
            case "tile6":return tile6;
            case "peak1":
            case "tile5":return tile5;
            case "myTile2":
            case "tile7":return tile7;
            case "sun1":
            case "tile8":return tile8;
            case "sun2":
            case "tile9":return tile9;
            case "sun3":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
