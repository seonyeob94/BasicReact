const Animal = require('./ooptest');

class Human extends Animal{
	constructor(){
		super();
		this.job = "student";
	}
	
	chibbo(job){
		this.job=job;
	}
	
}
module.exports = Human;
// 테스트 코드
if (require.main === module) {
  const hum = new Human();
  console.log(hum.x);      // 0
  console.log(hum.y);      // 0
  console.log(hum.job);    // student

  hum.move(100, 50);
  hum.chibbo("programmer");

  console.log(hum.x);      // 100
  console.log(hum.y);      // 50
  console.log(hum.job);    // programmer
}

