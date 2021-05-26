document.getElementById("dropD").addEventListener("optionclick", function(){
	
	
});

document.getElementById("dropD").addEventListener("click", function(){
	try{
		var txt = "";
		var ary = "";
		var word = "";
		var aryCoupon = new Array();
		var aryDetails = new Array();
		var aryDates = new Array();
		var aryInstructions = new Array();
		//On Init click, the dropdown fields are populated.
			$.get('promos.csv', function (data) {

				txt = data;
				//splitOnce
				ary = txt.split("\n");
				//Take each of the lists and split them up on their commas.
				ary.forEach(splitAgain);
				/*splitAgain chops up items in ary.*/
				function splitAgain(items){
					word = items.split(",");
					aryCoupon.push(word[0]);
					aryDetails.push(word[1]);
					aryDates.push(word[2]);
					aryInstructions.push(word[3]);
					//More Columns
					//aryNotes1.push(word[4]);
					//aryNotes2.push(word[5];
				}
				//Creates dropdown upon click.
				function dropDown(flag){
						for(var i=0;i<aryCoupon.length;i++){
							var selection = document.getElementById("dropD");
							var option = document.createElement('option');
							option.innerHTML = aryCoupon[i];
							option.value = i;
							selection.appendChild(option);
						}
				}
				//On blur, the dropDown will match the option.values in aryCoupon, aryDetails, aryDates, and aryInstructions and display the results in a div.
					document.getElementById("dropD").addEventListener("blur", function(){
						console.log(flag);
					});
				/*def.innerHTML = detail[option.value];
				output1.append(def);*/
				//console.log(aryCoupon, aryDetails, aryDates, aryInstructions);


				flagger(flag);
				function flagger(flag){
					if(flag == false){
						//alert("working");
						/*if(option.selected == true){
								console.log(option.value);
						}*/
					}
					else{
						dropDown(true);
						dropDown(false);
						var flag = false;
						flagger(flag);
						alert("why?");
					}
				}
			}); 
		/*var output = document.getElementById("output");
		var div = document.createElement('div');
		console.log(aryDetails[option.value -1]);
		div.innerHTML = aryDetails[option.value-1];
		output.appendChild(div);*/
	}
	catch(e){
		console.log(e);
	}
});
//this occurs after the click.
