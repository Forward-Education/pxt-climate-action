namespace ms_sumppump_modify {
input.onButtonPressed(Button.A, function () {
    threshold += -5
// @highlight   
 basic.showNumber(threshold)
// @highlight    
basic.pause(1000)
// @highlight 
   basic.clearScreen()
})
}