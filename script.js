
function calculateInterest() {
	var bal = prompt('What is the starting balance?');
	var apr = prompt('What is the Annual Percentage Rate?');
	var pay = prompt('What are you planning on paying monthly?');
	var monInt = [];
	var monBal = [];
	var i = 0;


	do {
		var intrst = ((bal * 1) * (apr * 1) / 12).toFixed(2);
		monInt[i] = intrst * 1;
		bal = (((bal * 1) + (intrst * 1)) - (pay * 1)).toFixed(2);
		monBal[i] = bal * 1;


		var row = $("<tr>");
		row.append($("<td>" + (i + 1) + "</td>"))
			 .append($("<td> $" + monInt[i] + "</td>"))
			 .append($("<td> $" + monBal[i] + "</td>"));
		$("#Interest tbody").append(row);
		i++
}
while ((bal * 1) > 0);
console.log(monBal);
console.log(monInt);
};
