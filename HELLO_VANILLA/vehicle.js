class Vehicle{
	constructor(){
		this.speed = 0;
	}
	
	excel() {
		this.speed++;
	}
}
module.exports = Vehicle;

if (require.main === module) {
	// 사용 예시
	const ve = new Vehicle();
	console.log("speed:", ve.speed); 
	ve.excel();
	console.log("speed:", ve.speed);
}