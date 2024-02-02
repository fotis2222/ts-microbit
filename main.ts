let x: number = 0;
basic.forever(function() {
    basic.showNumber(x);
})

input.onButtonPressed(Button.A, function() {
    x++;
})