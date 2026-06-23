def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.show_string("Shake to make!")
basic.pause(200)
basic.show_string("Tilt so the logo down to drink")