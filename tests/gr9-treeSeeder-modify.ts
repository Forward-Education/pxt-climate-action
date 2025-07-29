namespace gr9_treeSeeder_modify {
let index = 0
index = 0

input.onButtonPressed(Button.B, function () {
    if (index < 3) {
        index += 1
    } else {
        index = 0
    }
})

basic.forever(function () {
    basic.showNumber(index)
})
}