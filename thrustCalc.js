exports.thrustcalculation = function(dia,pitch,rpm){
  var dia = Number(dia);
  var pitch = Number(pitch);
  var rpm = Number(rpm);

  //Calculation Step by Step
  var stepOne = (1.225*(3.14)*Math.pow((0.0254*dia),2))/4;
  // console.log(stepOne)
  var stepTwo = Math.pow((rpm*0.0254*pitch/60),2)
  // console.log(stepTwo);
  var stepThree = Math.pow((dia),1.5)
  // console.log(stepThree);
  stepFour = Math.pow((3.29546*pitch),1.5)
  var Thrust = stepOne*stepTwo*stepThree/stepFour

console.log(Thrust)

  return Thrust;


}
