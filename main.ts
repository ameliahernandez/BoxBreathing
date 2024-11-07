input.onButtonPressed(Button.A, function () {
    while (Einatmen <= 4) {
        basic.showString("" + (Einatmen))
        Einatmen += 1
        basic.pause(100)
    }
    while (Anhalten <= 4) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Target)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        Anhalten += 1
        basic.pause(100)
    }
    while (Ausatmen <= 4) {
        basic.showString("" + (Ausatmen))
        Ausatmen += 1
        basic.pause(100)
    }
    Anhalten = 1
    while (Anhalten <= 4) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Target)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        Anhalten += 1
        basic.pause(100)
    }
    Einatmen = 1
    Anhalten = 1
    Ausatmen = 1
    Relaxscore += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Relaxscore)
})
let Ausatmen = 0
let Anhalten = 0
let Einatmen = 0
let Relaxscore = 0
Relaxscore = 0
Einatmen = 1
Anhalten = 1
Ausatmen = 1
let BoxAnimation = 0
let X = 0
let Y = 0
let switchX = 1
let switchY = 0
for (let Index = 0; Index <= 4; Index++) {
    while (BoxAnimation <= 4) {
        led.plot(X, Y)
        X += switchX
        Y += switchY
        BoxAnimation += 1
        basic.pause(100)
    }
    X = 0
    Y = 0
    BoxAnimation = 0
    if (Index == 1) {
        switchX = -1
        switchY = 0
        X = 4
        Y = 4
    } else {
        if (Index == 0) {
            switchX = 0
            switchY = 1
            X = 4
            Y = 0
        } else {
            if (Index == 2) {
                switchX = 0
                switchY = -1
                X = 0
                Y = 4
            }
        }
    }
}
