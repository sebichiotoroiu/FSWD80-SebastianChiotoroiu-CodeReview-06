class Places {
	name = "";
	image = "";
	address = "";
	price = "";
	hours = "";
	date = "";

	constructor(name, image, address, price, hours, date) {
		this.name = name;
		this.image = image;
		this.address = address;
		this.price = price;
		this.hours = hours;
		this.date = date;
	}

	display(extension) {
		return `<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="card">
		<h4 class="placeName">${this.name}</h4> <br> <img id="pic" 
		class="img-fluid rounded mx-auto d-block" 
		src="${this.image}"><br><p>Address: ${this.address}</p> 
		<p>Opening Hours: ${this.hours}</p> 
		 <p>Price: ${this.price}</p>${extension}
		 Created: ${this.date} </p></div></div>`;
	}
}

let eachLocation = [
new Places("Castle Bran", "img/brancastle.jpg", "General Traian Mosoiu 24, 507025 Brasov, Romania", "8€ / 4€(students)", "Mon-Sat: 9:00-16:00", "2016-05-22 11:00"),
new Places("Corvin's Castle", "img/Hunyadi-Castle-Romania.jpg", "Castelului 1-3, 331141 Hunedoara, Romania",  "20€ / 5€(children)", "Mon-Sat: 9:00-17:00,", "2017-09-30 10:00"),
new Places("Parliament Bucharest", "img/The Palace of the Parliament.jpg", "Izvor 2-4,sector 5, 050563 Bucharest, Romania", "10€", "Mon-Su: 10:00 - 18:00", "2018-02-25 10:30"),
new Places("Barsana Monastery", "img/maramures-barsana-romania.jpg", "DJ186 276, Barsana, 437035 Maramures, Romania", "free entrance", "Mon-Su: 06:00 - 23:30", "2013-05-30 10:00")
]

for (let val of eachLocation) {
	document.getElementById("infoOne").innerHTML += val.display("");
}
class Restaurant extends Places {
	phone;
	website;

	constructor(name, image, address, price, hours, phone, website, date) {
		super(name, image, address, price, hours, date);
		this.phone = phone;
		this.website = website;
	}

	display(extension) {
		return super.display(`<p>Phone: ${this.phone}</p> <p> Website: <a href="${this.website}" target="_blank">${this.website}</a> </p> ${extension}`);
	}
}

let eachRestaurant = [
	new Restaurant("Donaudelta", "img/Donaudelta.jpg", "Sechshauser Gürtel 7, 1150 Wien", "50$ - 200$", "Mon-Su: 12.00-23.00", "+43 650 5641000", "http://www.donaudelta.at", "2017-06-30 16:00"),
	new Restaurant("Bukowina", "img/Bukovina.jpg", "1010 Wien, Ballgasse 6", "50$ - 150$", "Tue-Su: 12.00-23.00", "+43 (1) 5120628" ,"http://www.restaurantbukowina.at", "2018-05-30 20:00"),
	new Restaurant("Casa Romaneasca", "img/Casa-romaneasca.jpg", "Laxenburger 107, 1100 Wien", "30$-130$", "Mon-Su: 11.00-22.30", "+43 (1) 9920106", "www.casaromaneasca.at", "2017-05-30 19:00"),
	new Restaurant("Casa Miorita", "img/CasaMiorita.jpg", "Schweglerstraße 29, 1150 Wien", "40$ - 200$", "Tue-Su: 11:30-23:00", "0699 11097143", "https://casamiorita.com", "2019-04-30 19:30")
]

for (let val2 of eachRestaurant) {
	document.getElementById("infoTwo").innerHTML += val2.display("");
}

class Events extends Restaurant {
	type;

	constructor(name, image, address, price, hours, phone, website, type, date) {
		super(name, image, address, price, hours, phone, website, date);
		this.type = type;
	}

	display() {
		return super.display(`<p>Type of Event: ${this.type}</p>`);
	}
}

let eachEvent = [
	new Events("Untold", "img/Untold.jpg", "Various Venues, Cluj-Napoca, Romania", "100€", "01-04.08.2019. 20:00", "no information", "https://www.festicket.com/festivals/untold-festival/", "Electronic House", "2018-08-30 20:00"),
	new Events("Neversea", "img/Neversea.jpg", "Constanța, 900178, Romania", "Sold  out", "04-07.07.2019 - 19:30", "no information", "https://www.festicket.com/festivals/neversea-festival/", "Eectronic House", "2019-07-30 23:00"),
	new Events("Electric Castle", "img/Electric Castle.jpg", "Bánffy Castle, Bontida, Romania", "Coming Soon", "17-22.07.2020 - 20:00", "no information", "https://www.festicket.com/festivals/electric-castle/2019/", "Electronic House", "2019-09-30 10:00"),
	new Events("DAVA", "img/DavaFestival2019_V3.jpg", "Mihai Viteazu nr. 96, Sighisoara, Romania", "Coming Soon", "30-31.08.2020 - 20:00", "no information", "https://www.festicket.com/festivals/dava-festival/", "Electronic House", "2019-08-30 23:00")
]

for (let val3 of eachEvent) {
	document.getElementById("infoThree").innerHTML += val3.display();
}

var sortare:any[]=[eachLocation, eachRestaurant, eachEvent];
console.log(sortare);

//Ascending sorting 

function ascSort() {
  for (let i=0; i <sortare.length; i++) {
    sortare.sort(function(a,b){
      return Date.parse(a.date)-Date.parse(b.date);//tranforms dates in millisec and compares them
    });
    document.getElementById('container').innerHTML +=`<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="card">
		<h4 class="placeName">${sortare[i].name}</h4> <br> <img id="pic" 
		class="img-fluid rounded mx-auto d-block" 
		src="${sortare[i].image}"><br><p>Address: ${sortare[i].address}</p> 
		<p>Opening Hours: ${sortare[i].hours}</p> 
		 <p>Price: ${sortare[i].price}</p>
		 Created: ${sortare[i].date} </p></div></div>`
  }

  console.log(sortare);
}

//.................Descending sort
function descSort() {
  for (let i=0; i<sortare.length; i++) {
    sortare.sort(function(a,b){
      return Date.parse(b.date)-Date.parse(a.date);//tranforms dates in millisec and compares them
    });
    document.getElementById('container').innerHTML +=`<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="card">
		<h4 class="placeName">${sortare[i].name}</h4> <br> <img id="pic" 
		class="img-fluid rounded mx-auto d-block" 
		src="${sortare[i].image}"><br><p>Address: ${sortare[i].address}</p> 
		<p>Opening Hours: ${sortare[i].hours}</p> 
		 <p>Price: ${sortare[i].price}</p>
		 Created: ${sortare[i].date} </p></div></div>`
  }

  console.log(sortare);
}






