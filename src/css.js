const string = `
 .skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 1px solid red;
}
 .skin *::before, *::after {
  box-sizing: border-box;
}

.skin {
  background: #ffffff;
  min-height: 50vh;
  position: relative;
  border: 6px solid #000000;
  width: 500px;
  height: 500px;
  top: 50px;
  left: 50%;
  margin-left: -250px;
  background: #019fe9;
  border-radius: 50%;
  position: relative;
}
.eye {
  border: 3px solid black;
  width: 100px;
  height: 128px;
  position: absolute;
  top: 6px;
  left: 60%;
  margin-left: -50px;
  background: #ffffff;
  border-radius: 75px/100px;
  z-index: 1;
}
.eye::before {
  content: '';
  display: block;
  width: 38px;
  height: 50px;
  position: absolute;
  left: 6px;
  bottom: 13px;
  background: #000000;
  border-radius: 75px/100px;
}
.eye::after {
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  position: absolute;
  left: 16px;
  bottom: 36px;
  background: #ffffff;
  border-radius: 50%;
}
.eye.left {
  transform: translateX(-100px);
}
.face {
  position: absolute;
  border: 3px solid black;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: #ffffff;
  left: 50%;
  margin-left: -210px;
  bottom: 10px;
}
.nose {
  border: 3px solid black;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ff0000;
  left: 217px;
  top: 110px;
}
.nose::before {
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  position: absolute;
  left: 8px;
  bottom: 24px;
  background: #ffffff;
  border-radius: 50%;
}
.mouth {
  border-left: 3px solid black;
  position: absolute;
  height: 230px;
  left: 240px;
  bottom: 100px;
}
.mouth::after {
  content: '';
  display: block;
  position: absolute;
  border: 3px solid black;
  width: 300px;
  height: 100px;
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  border-top-color: transparent;
  bottom: 0;
  left: -150px;
}
.mustache {
  position: relative;
}
.mustacheLeft_1 {
  border-top: 3px solid black;
  position: absolute;
  width: 130px;
  left: 70px;
  top: 200px;
}
.mustacheLeft_2 {
  border-top: 3px solid black;
  position: absolute;
  width: 150px;
  left: 50px;
  top: 168px;
  transform: rotate(15deg);
}
.mustacheLeft_3 {
  border-top: 3px solid black;
  position: absolute;
  width: 150px;
  left: 50px;
  top: 246px;
  transform: rotate(-15deg);
}
.mustacheRight_1 {
  border-top: 3px solid black;
  position: absolute;
  width: 130px;
  right: 70px;
  top: 200px;
}
.mustacheRight_2 {
  border-top: 3px solid black;
  position: absolute;
  width: 150px;
  right: 50px;
  top: 168px;
  transform: rotate(-15deg);
}
.mustacheRight_3 {
  border-top: 3px solid black;
  position: absolute;
  width: 150px;
  Right: 50px;
  top: 246px;
  transform: rotate(15deg);
}
.neck {
  border: 4px solid black;
  width: 300px;
  height: 30px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  margin-left: -150px;
  background: #ff0000;
  border-radius: 40px;
}
.neck::before {
  content: '';
  display: block;
  position: absolute;
  width: 300px;
  height: 30px;
  bottom: -34px;
  background: #ffffff;
}
.bell {
  border: 3px solid black;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -28px;
  border-radius: 50%;
  background: #ecc81a;
}
.bell::after {
  content: '';
  display: block;
  border: 3px solid black;
  width: 60px;
  height: 10px;
  position: absolute;
  bottom: 22px;
  left: 50%;
  margin-left: -30px;
  border-radius: 40px;
  background: #ecc81a;
}
.bellHole {
  width: 15px;
  height: 15px;
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
  border-left: 3px solid black;
  height: 16px;
  top: 5px;
  left: 6px;
}
`

export default string