function fizzbuzz() {
	for(var x=1; x<=100;x++){
	if(x%3===0 && x%5===0){
	print("fizzbuzz");
	}
	else if(x%5 === 0){
	print("buzz");
	}
	else if(x%3 === 0){
	print('fizz');
	}
	else{
	print(x);
	}
}
}

var r = document.getElementById('result');

function print(s){
	r.innerHTML += s + '<br>';
}

fizzbuzz();