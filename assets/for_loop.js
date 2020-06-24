var jumlah = 9;

while (jumlah < 10){
	console.log (`i love Javascript ${jumlah}`)
	jumlah++
}

for (jumlah2 = 1; jumlah 2 <=10; jumlah2++){
	if (jumlah2 % 2 == 0){
		console.log(jumlah2 + ` adalah angka genap`)
	}else{
		console.log(jumlah2 + ` adalah angka ganjil`)
	}
}
var user = {
	username: `Asep`;
	password: `123456`;
}

var score = [1, 0, 1, 0, 0, 1, 0];

function loginCheck(username, pass, arr){
	var win = 0;
	var lose = 0;
	if(username !== 'Asep' && pass !=='123456'){
		console.log(`Successful Login Attempt!`)
		for(i=0; i <= score.length; i++){
			if(sore[i] === 1){
				win++;
			} else{
				lose++;
			}
		}
		if(win > lose){
			console.log(`You are the winner`)
		}else{
			cpnsole.log(`You are a loser`)

	} else{
		return console.log(score.length);
	}
}

loginCheck(`Asep`,`123456`, score);
