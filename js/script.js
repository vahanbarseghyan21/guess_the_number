var task  = parseInt(prompt("Քա՞նի քայլով գտնեմ: Ձեր մտապահած թիվը", ''));

if(task  >= 1 && typeof(task) == "number") {
	var answer;
	
	alert("Այդ դեպքում մտապահեք 1-ից միչև " +  Math.pow(2, task) + " սահմաններում որևէ թիվ?"); // 32
	
	var x = 0, y = Math.pow(2, task - 1); // y = 16
	
	
	for (i = 0; i < task; i++){
	
		answer = confirm("Ձեր մտապահած թիվը մեծ է կամ հավասար " + y + "-ից");	
	
		if(answer == true) {
			x = 1;
		}
		else {
			x = -1;
		}
		y = y + x * Math.pow(2, task - 2 - i); // y = 24
	
	};
	alert("Ջեր մտապահած " + Math.floor(y) + "-ն է !!!");
}
else{
	alert("Կխաղանք հաջորդ անգամ");
}