var CoffeeType = document.getElementById("CType").value;
var CoffeeSize = document.getElementById("CSize").value;
var MilkType = document.getElementById("Milk").value;
//var Extras = document.getElementById("Extras").value;
var Sugar = document.getElementById("Sugar").value;
var Cream = document.getElementById("Cream").value;
var Syrup = document.getElementById("Syrup").value;
var CoffeeCost = 0.00;
var TotalCost = 0.00;
var OutputSummary = document.getElementById("TotalOrder");
var OutputCoffeeCost = document.getElementById("cCost");
var OrderSummary = "";

let DrinkNumber = 0;


//Hides Milk menu until user selects latte or cappaccino or americano
var ShowMilk = document.getElementById("Milk");
var ShowMilkLabel = document.getElementById("MilkLabel");
/*
ShowMilk.style.display = "none";
ShowMilkLabel.style.display = "none";
*/
document.getElementById("cCostText").style.display = "inline";
document.getElementById("cCost").style.display = "inline";
document.getElementById("tCostText").style.display = "inline";
document.getElementById("tCost").style.display = "inline";

function UpdateCoffee(){
	CoffeeType = document.getElementById("CType").value;
	CoffeeSize = document.getElementById("CSize").value;
	MilkType = document.getElementById("Milk").value;
	Sugar = document.getElementById("Sugar").value;
	Cream = document.getElementById("Cream").value;
	Syrup = document.getElementById("Syrup").value;

	if (CoffeeSize == "Small"){
		CoffeeCost = 2.45;
	} else if (CoffeeSize == "Medium"){
		CoffeeCost = 2.65;
	} else if (CoffeeSize == "Large"){
		CoffeeCost = 2.85;
	}
	if (Cream == "Yes"){
		CoffeeCost = CoffeeCost + 0.5;
	}
	CoffeeCost = CoffeeCost + (0.25 * Syrup);
	
	if (CoffeeType == "Latte" || CoffeeType == "Cappuccino" || CoffeeType == "White"){
		ShowMilk.style.display = "inline";
		ShowMilkLabel.style.display = "inline";
	} else {
		ShowMilk.style.display = "none";
		ShowMilkLabel.style.display = "none";
		MilkType = "No";

	}

	document.getElementById("cCost").innerHTML = CoffeeCost;

}



function AddToOrder(){

	DrinkNumber = DrinkNumber + 1;
	if (DrinkNumber == 10){
		alert("10 Drinks ordered! This one is on the house!");
		CoffeeCost = 0;
		DrinkNumber = 0;
	}else{
	
	}

	TotalCost = TotalCost + CoffeeCost;
	document.getElementById("tCost").innerHTML = TotalCost;

	//OutputSummary.innerHTML = OrderSummary + " x ";
	OrderSummary = OrderSummary + "<br>" + CoffeeSize + " " + CoffeeType + ", " + MilkType + " Milk";
	if (Sugar == "Yes" || Cream == "Yes" || Syrup > 0){
		OrderSummary = OrderSummary + " ( Extras: ";
		if (Sugar == "Yes"){
			OrderSummary = OrderSummary + "Sugar, ";
		}
		if (Cream == "Yes"){
			OrderSummary = OrderSummary + "Cream, ";
		}
		if (Syrup != "0"){
			OrderSummary = OrderSummary + Syrup +" Shots of syrup.";
		}
		OrderSummary = OrderSummary + " ) ";
	} 
	OrderSummary = OrderSummary + " = £" + CoffeeCost;
	OutputCoffeeCost.innerHTML = 0;

	OutputSummary.innerHTML = OrderSummary 

	
}

function PlaceOrder(){
	alert("Order Placed, Thanks for using our coffee system!");
	OrderSummary = "";
	OutputSummary.innerHTML = "";

	TotalCost = 0;
	document.getElementById("tCost").innerHTML = TotalCost;
	CoffeeCost = 0;
	document.getElementById("cCost").innerHTML = CoffeeCost;

}



let FavouriteDrink = ""; let FavouriteSize = ""; let FavouriteMilk = ""; let FavouriteSugar = ""; let FavouriteCream = ""; let FavouriteSyrup = "";
console.log(FavouriteDrink);

function AddFavourite(){
	FavouriteDrink = CoffeeType;
	FavouriteSize = CoffeeSize;
	FavouriteMilk = MilkType;
	FavouriteSugar = Sugar;
	FavouriteCream = Cream;
	FavouriteSyrup = Syrup;
	alert(FavouriteSize + ", " + FavouriteDrink + " added to favourites");
}

function OrderFavourite(){
	
	CoffeeType = FavouriteDrink;
	CoffeeSize = FavouriteSize;
	MilkType = FavouriteMilk;
	Sugar = FavouriteSugar;
	Cream = FavouriteCream;
	Syrup = FavouriteSyrup;

	if (CoffeeSize == "Small"){
		CoffeeCost = 2.45;
	} else if (CoffeeSize == "Medium"){
		CoffeeCost = 2.65;
	} else if (CoffeeSize == "Large"){
		CoffeeCost = 2.85;
	}
	if (Cream == "Yes"){
		CoffeeCost = CoffeeCost + 0.5;
	}
	CoffeeCost = CoffeeCost + (0.25 * Syrup);

	AddToOrder();
}


