function do_lights () {
    startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
    startbit.startbit_setPixelRGB(StartbitLights.Light2, StartbitRGBColors.Blue)
    startbit.startbit_showLight()
    basic.pause(100)
    startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Blue)
    startbit.startbit_setPixelRGB(StartbitLights.Light2, StartbitRGBColors.Red)
    startbit.startbit_showLight()
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
    startbit.startbit_setMotorSpeed(100, 100)
    basic.pause(2000)
    startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Green)
    startbit.startbit_setMotorSpeed(0, 0)
})
input.onButtonPressed(Button.B, function () {
    police_lights = (police_lights + 1) % 2
})
let police_lights = 0
startbit.startbit_Init()
basic.showIcon(IconNames.Happy)
led.setBrightness(255)
startbit.startbit_showLight()
police_lights = 0
basic.forever(function () {
    if (police_lights == 1) {
        do_lights()
    } else {
        startbit.startbit_clearLight()
    }
})
