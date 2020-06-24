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

function loginCheck(username, pass){
	if(username !== 'Asep' && pass !=='123456'){
		return console.log(`Successful Login Attempt!`)

	} else{
		return console.log(`username or password in incorrect`)
	}
}

loginCheck(`Asep`,`123456`);
