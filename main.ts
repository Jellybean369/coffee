input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # # . . #
        # # # # #
        `)
    basic.pause(150)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . # #
        # # # # #
        # # # # #
        `)
    basic.pause(150)
    basic.showLeds(`
        # . . . #
        # # . . #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(150)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(150)
    basic.showLeds(`
        # . . . #
        # # . . #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(150)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . # #
        # # # # #
        # # # # #
        `)
    basic.pause(150)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # # . . #
        # # # # #
        `)
    basic.pause(150)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
basic.showString("Shake to make!")
