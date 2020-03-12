const string = `
/** 
  * Hey, this is Ricky,
  * A Web Developer.
  * Next, 
  * I will show my CSS skills,
  * A cute Doraemon.
  * Wish you like it.
  **/
  
 .skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::before, *::after {
  box-sizing: border-box;
}
body {
  background: #ffffff;
  min-height: 100vh;
  position: relative;
}
.skin {
  border: 3px solid #000000;
  width: 250px;
  height: 250px;
  top: 25px;
  left: 50%;
  margin-left: -125px;
  background: #019fe9;
  border-radius: 50%;
  position: relative;
}
.eye {
  border: 2px solid black;
  width: 50px;
  height: 64px;
  position: absolute;
  top: 3px;
  left: 60%;
  margin-left: -25px;
  background: #ffffff;
  border-radius: 38px/50px;
  z-index: 1;
}
.eye::before {
  content: '';
  display: block;
  width: 19px;
  height: 25px;
  position: absolute;
  left: 2px;
  bottom: 6px;
  background: #000000;
  border-radius: 38px/50px;
}
.eye::after {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  position: absolute;
  left: 4px;
  bottom: 9px;
  background: #ffffff;
  border-radius: 50%;
}
.eye.left {
  transform: translateX(-50px);
}
.face {
  position: absolute;
  border: 2px solid black;
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: #ffffff;
  left: 50%;
  margin-left: -105px;
  bottom: 5px;
}


.nose {
  border: 2px solid black;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #ff0000;
  left: 108px;
  top: 55px;
}
.nose::before {
  content: '';
  display: block;
  width: 7px;
  height: 7px;
  position: absolute;
  left: 4px;
  bottom: 12px;
  background: #ffffff;
  border-radius: 50%;
}
.mouth {
  border-left: 2px solid black;
  position: absolute;
  height: 115px;
  left: 120px;
  bottom: 50px;
}
.mouth::after {
  content: '';
  display: block;
  position: absolute;
  border: 2px solid black;
  width: 150px;
  height: 50px;
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  border-top-color: transparent;
  bottom: 0;
  left: -75px;
}
.mustache {
  position: relative;
}
.mustacheLeft_1 {
  border-top: 2px solid black;
  position: absolute;
  width: 65px;
  left: 35px;
  top: 100px;
}
.mustacheLeft_2 {
  border-top: 2px solid black;
  position: absolute;
  width: 75px;
  left: 25px;
  top: 84px;
  transform: rotate(15deg);
}
.mustacheLeft_3 {
  border-top: 2px solid black;
  position: absolute;
  width: 75px;
  left: 25px;
  top: 123px;
  transform: rotate(-15deg);
}
.mustacheRight_1 {
  border-top: 2px solid black;
  position: absolute;
  width: 65px;
  right: 35px;
  top: 100px;
}
.mustacheRight_2 {
  border-top: 2px solid black;
  position: absolute;
  width: 75px;
  right: 25px;
  top: 84px;
  transform: rotate(-15deg);
}
.mustacheRight_3 {
  border-top: 2px solid black;
  position: absolute;
  width: 75px;
  Right: 25px;
  top: 123px;
  transform: rotate(15deg);
}
.neck {
  border: 2px solid black;
  width: 150px;
  height: 15px;
  position: absolute;
  left: 50%;
  bottom: 5px;
  margin-left: -75px;
  background: #ff0000;
  border-radius: 20px;
}
.neck::before {
  content: '';
  display: block;
  position: absolute;
  width: 150px;
  height: 15px;
  bottom: -17px;
  background: #ffffff;
}
.bell {
  border: 2px solid black;
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -14px;
  border-radius: 50%;
  background: #ecc81a;
}
.bell::after {
  content: '';
  display: block;
  border: 2px solid black;
  width: 30px;
  height: 5px;
  position: absolute;
  bottom: 11px;
  left: 50%;
  margin-left: -15px;
  border-radius: 20px;
  background: #ecc81a;
}
.bellHole {
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  top: 54%;
  left: 25%;
  background-color: #000000;
}
.bellHole::after {
  content: '';
  display: block;
  position: absolute;
  border-left: 2px solid black;
  height: 8px;
  top: 2px;
  left: 3px;
}

/** 
  * Done! 
  * How do you feel?
  * Amazing? Funny? or any comment?
  * Please just let me Know.
  * Thank you.
  **/
`

export default string