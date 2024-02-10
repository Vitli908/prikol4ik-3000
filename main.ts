input.onButtonPressed(Button.A, function () {
    game.setScore(2)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    game.setScore(3)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
    basic.clearScreen()
})
game.setScore(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        game.setScore(22)
    }
    if (game.score() == 22) {
        if (input.buttonIsPressed(Button.AB)) {
            for (let index = 0; index < 5; index++) {
                basic.showIcon(IconNames.SmallDiamond)
                basic.showIcon(IconNames.Diamond)
            }
        } else {
            basic.clearScreen()
        }
    }
})
