
function calculateInterest() {
	var bal = prompt('What is the starting balance?');
	var apr = prompt('What is the Annual Percentage Rate?');
	var pay = prompt('What are you planning on paying monthly?');
	var monInt = [];
	var monBal = [];
	var i = 0;
	var left;

	var startingTable = document.getElementById("Starting");
	var startingRow = startingTable.insertRow(1);
	var cell1 = startingRow.insertCell(0);
	var cell2 = startingRow.insertCell(1);
	var cell3 = startingRow.insertCell(2);
	cell1.innerHTML = "$" + pay;
	cell2.innerHTML = (apr) + "%";
	cell3.innerHTML = "$" + bal;

	do {
		var intrst = ((bal * 1) * ((apr/100) * 1) / 12).toFixed(2);
		monInt[i] = (intrst * 1);//.toFixed(2);
		bal = (((bal * 1) + (intrst * 1)) - (pay * 1)).toFixed(2);
		monBal[i] = (bal * 1);

		if(monInt[i] >= pay) {
			alert('Your monthly payment isn\'t enough to pay the interest');
			break;
		}



		if (monBal[i] < 0) {
			left = (-bal * 1);
			monBal[i] = 0;
		}

		var row = $("<tr>");
		row.append($("<td>" + (i + 1) + "</td>"))
			 .append($("<td> $" + ((monInt[i]).toFixed(2)) + "</td>"))
			 .append($("<td> $" + ((monBal[i]).toFixed(2)) + "</td>"));
		$("#Interest tbody").append(row);


		i++
}
while ((bal * 1) > 0);

var leftoverTable = document.getElementById("Leftover");
var leftoverRow = leftoverTable.insertRow(1);
var cell1 = leftoverRow.insertCell(0);
cell1.innerHTML = "$" + left;

console.log(monBal);
console.log(monInt);
console.log(left);
};
