//====================================== Task month and weather============================

// const monthweather = prompt ("Reqem daxil edin ve ayi oyrenin");

// switch (monthweather) {
// 	case "1": console.log ("Yanvar-qis ayidir");
// 	break
// 	case "2": console.log ("Fevral-qis ayidir");
// 	break
// 	case "3": console.log ("Mart-yaz ayidir");
// 	break
// 	case "4": console.log ("Aprel-yaz ayidir");
// 	break
// 	case "5": console.log ("May-yaz ayidir");
// 	break
// 	case "6": console.log ("Iyun-yay ayidir");
// 	break
// 	case "7": console.log ("Iyul-yay ayidir");
// 	break
// 	case "8": console.log ("Avgust-yay ayidir");
// 	break
// 	case "9": console.log ("Sentyabr-payiz ayidir");
// 	break
// 	case "10": console.log ("Oktyabr-payiz ayidir");
// 	break
// 	case "11": console.log ("Noyabr-payiz ayidir");
// 	break
// 	case "12": console.log ("Dekabr-qis ayidir");
// 	break
// 	default: console.log("Bele bir ay yoxdur");
// }



//=================================== Task with cars class/switchcase==========================================
// we have 5 car models

class Car {
	constructor (model, year, color) {
		this.model= model;
		this.year=year;
		this.color=color;
	}

}
const mercedes = new Car ("Mercedes", 2017, "grey");
const bmw = new Car ("BMW", 2017, "black");
const landRover = new Car ("Land Rover", 2012, "blue");
const hyundai = new Car ("Hyundai", 2009, "white");
const toyota = new Car ("Toyota Camry", 2012, "purple");

const carModel = prompt ("Masinin adini daxil edin");

switch (carModel) {
	case "mercedes": console.log(mercedes);
	break
	case "bmw": console.log(bmw);
	break
	case "land rover": console.log(landRover);
	break
	case "hyundai": console.log(hyundai);
	break
	case "toyota": console.log(toyota);
	break
	default: console.log("Bele masin modeli movcud deyil");
}