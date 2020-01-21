import ev3dev2_glue, time

#from pybricks import ev3brick as brick
#from pybricks.ev3devices import (Motor, TouchSensor, ColorSensor,
#                                 InfraredSensor, UltrasonicSensor, GyroSensor)
#from pybricks.parameters import (Port, Stop, Direction, Button, Color,
#                                 SoundFile, ImageFile, Align)
#from pybricks.tools import print, wait, StopWatch
#from pybricks.robotics import DriveBase

def wait(val):
    time.sleep(val/1000)
    print("Done")

class StopWatch:
    def __init__(self):
        print("tools.StopWatch")

