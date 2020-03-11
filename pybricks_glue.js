/* global Sk, sim */
/* exported $builtinmodule */

var $builtinmodule = function(name) {
  var mod = {};

  mod.get_clock = new Sk.builtin.func(function() {
    return sim.clock / sim.fps;
  });

  mod.ev3devices = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var self = this;

    mod.Motor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;
      
      $loc.dc = new Sk.builtin.func(function(self, dc) {        
      });

      $loc.angle = new Sk.builtin.func(function(self) {        
      });

      $loc.reset_angle = new Sk.builtin.func(function(self, reset_angle) {        
      });

      $loc.speed = new Sk.builtin.func(function(self) {        
      });

      $loc.stop = new Sk.builtin.func(function(self, stop) {        
      });

      $loc.run = new Sk.builtin.func(function(self, run) {        
      });

      $loc.run_time = new Sk.builtin.func(function(self, run_time) {        
      });

      $loc.run_angle = new Sk.builtin.func(function(self, run_angle) {
      });

      $loc.run_target = new Sk.builtin.func(function(self, run_target) {        
      });

      $loc.track_target = new Sk.builtin.func(function(self, track_target) {        
      });

      $loc.stalled = new Sk.builtin.func(function(self) {        
      });

      $loc.run_until_stalled = new Sk.builtin.func(function(self, run_until_stalled) {        
      });

      $loc.set_dc_settings = new Sk.builtin.func(function(self, set_dc_settings) {        
      });

      $loc.set_run_settings = new Sk.builtin.func(function(self, set_run_settings) {        
      });

      $loc.set_pid_settings = new Sk.builtin.func(function(self, set_pid_settings) {        
      });

    }, 'Motor', []);
  
    mod.ColorSensor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;
  
      $loc.__init__ = new Sk.builtin.func(function(self, address) {
        if (address.v == 'in2') {
          self.side = 'left';
        } else if (address.v == 'in3') {
          self.side = 'right';
        } else {
          throw new Sk.builtin.TypeError('No color sensor connected to ' + String(address.v));
        }
      });
  
      $loc.color = new Sk.builtin.func(function(self) {
      });
  
      $loc.ambient = new Sk.builtin.func(function(self) {
      });
  
      $loc.reflection = new Sk.builtin.func(function(self) {  
      });
  
      $loc.rgb = new Sk.builtin.func(function(self) {
      });
  
    }, 'ColorSensor', []);
  
    mod.TouchSensor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;
  
      $loc.__init__ = new Sk.builtin.func(function(self, address) {
      });
  
      $loc.pressed = new Sk.builtin.func(function(self) {
      });
  
    }, 'TouchSensor', []);
  
    mod.GyroSensor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;
  
      $loc.__init__ = new Sk.builtin.func(function(self, address) {
        if (address.v != 'in4') {
          throw new Sk.builtin.TypeError('No gyro sensor connected to ' + String(address.v));
        }
      });
      
      $loc.speed = new Sk.builtin.func(function(self) {
      });
  
      $loc.angle = new Sk.builtin.func(function(self) {
      });
  
      $loc.reset_angle = new Sk.builtin.func(function(self, angle) {
      });
  
    }, 'GyroSensor', []);
  
    mod.UltrasonicSensor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;
  
      $loc.__init__ = new Sk.builtin.func(function(self, address) {
        if (address.v != 'in1') {
          throw new Sk.builtin.TypeError('No ultrasonic sensor connected to ' + String(address.v));
        }
      });
  
      $loc.distance = new Sk.builtin.func(function(self, distance) {
      });
  
      $loc.presence = new Sk.builtin.func(function(self) {
      });
  
    }, 'UltrasonicSensor', []);

    mod.InfraredSensor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;

      $loc.distance = new Sk.builtin.func(function(self) {        
      });

      $loc.beacon = new Sk.builtin.func(function(self, beacon) {
      });

      $loc.buttons = new Sk.builtin.func(function(self, buttons) {        
      });

    }, 'InfraredSensor', [])
  
  }, 'ev3devices', []); 

  mod.ev3brick = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var self = this;

    $loc.__init__ = new Sk.builtin.func(function(self, address){
    });

    $loc.buttons = new Sk.builtin.func(function(self, buttons){      
    });

    $loc.light = new Sk.builtin.func(function(self, light){      
    });

    mod.sound = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;
      
      $loc.beep = new Sk.builtin.func(function(self, beep){        
      });

      $loc.beeps = new Sk.builtin.func(function(self, beeps){        
      });

      $loc.file = new Sk.builtin.func(function(self, file){        
      });

    }, 'sound', []);

    mod.display = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;

      $loc.clear = new Sk.builtin.func(function(self, clear){        
      });

      $loc.text = new Sk.builtin.func(function(self, text) {        
      });

      $loc.image = new Sk.builtin.func(function(self, image) {        
      });

    }, 'display', []);

    mod.battery = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;

      $loc.voltage = new Sk.builtin.func(function(self, voltage){
      });

      $loc.current = new Sk.builtin.func(function(self, current){        
      });

    }, 'battery', []);

  }, 'ev3brick', []);

  mod.parameters = sk.misceval.buildClass(mod, function($gbl, $loc) {
    var self = this;

    mod.Port = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    }, 'Port', []);

    mod.Stop = Sk.misceval.buildClass(mod, function($gbl, $loc) {      
    }, 'Stop', []);

    mod.Direction = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    }, 'Direction', []);

    mod.Button = Sk.misceval.buildClass(mod, function($gbl, $loc) {      
    }, 'Button', []);

    mod.Color = Sk.misceval.buildClass(mod, function($gbl, $loc) {      
    }, 'Color', []);

    mod.SoundFile = Sk.misceval.buildClass(mod, function($gbl, $loc) {      
    }, 'SoundFile', []);

    mod.ImageFile = Sk.misceval.buildClass(mod, function($gbl, $loc) {      
    }, 'ImageFile', []);

    mod.Align = Sk.misceval.buildClass(mod, function($gbl, $loc) {      
    }, 'Align', []);

  }, 'parameters', []);

  mod.robotics = Sk.misceval.buildClass(mod, function ($gbl, $loc) {
    var self = this;

    mod.DriveBase = Sk.misceval.buildClass(mod, function($gbl, $loc) {    
      var self = this;

      $loc.drive = new Sk.builtin.func(function(self, drive) {
      });  

      $loc.drive_time = new Sk.builtin.func(function(self, drive_time) {        
      });

      $loc.stop = new Sk.builtin.func(function(self, stop) {        
      });

    }, 'DriveBase', []);

  }, 'robotics', []);

  mod.tools = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    var self = this;

    $loc.print = new Sk.builtin.func(function(self, print) {
    });

    $loc.wait = new Sk.builtin.func(function(self, wait) {      
    });

    mod.StopWatch = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      var self = this;

      $loc.time = new Sk.builtin.func(function(self) {
      });
      
      $loc.pause = new Sk.builtin.func(function(self) {        
      });

      $loc.resume = new Sk.builtin.func(function(self) {        
      });

      $loc.reset = new Sk.builtin.func(function(self) {        
      });

    }, 'StopWatch', []);

  }, 'tools', []);

  return mod;
};