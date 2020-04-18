'use strict'
navigator.getBattery().then(function(battery) {
  function updateAllBatteryInfo(){
    updateChargeInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  battery.addEventListener('levelchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    var level = battery.level * 100;
    var batteryLevel = jQuery('#battery #battery-level');
    batteryLevel.css('width', level + '%');
    batteryLevel.text(level + '%');
    if(battery.charging) {
      batteryLevel.addClass('charging');
      batteryLevel.removeClass('high');
      batteryLevel.removeClass('medium');
      batteryLevel.removeClass('low');
    } else if (level > 50) {
      batteryLevel.addClass('high');
      batteryLevel.removeClass('charging');
      batteryLevel.removeClass('medium');
      batteryLevel.removeClass('low');
    } else if (level >= 25 ) {
      batteryLevel.addClass('medium');
      batteryLevel.removeClass('charging');
      batteryLevel.removeClass('high');
      batteryLevel.removeClass('low');
    } else {
      batteryLevel.addClass('low');
      batteryLevel.removeClass('charging');
      batteryLevel.removeClass('high');
      batteryLevel.removeClass('medium');
    }

  }
});
