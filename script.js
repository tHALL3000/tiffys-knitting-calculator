/*section for first calculation*/
function calculate()
{
    var field1 = document.getElementById("pattern-gauge-stitiches").value;
    var field2 = document.getElementById("my-gauge-stitiches").value;

    var result = parseFloat(field1 / 4) - parseFloat(field2 / 4);


/*Section for animation*/
    
function peek(target) {
  document.getElementById(target).classList.toggle("peekaboo")
}

/*Things I have tried*/
    
    /*{ document.getElementById("answer").innerHTML = + result; " different than the pattern";}*/
    
    
    /*
    num1 = document.getElementById("pattern-gauge-stitiches").value;
    num2 = document.getElementById("pattern-my-stitiches").value;
    document.getElementById("result").innerHTML = (num1 / 4) - (num2 / 4);
}
/*
document.getElementById("result").innerHTML = mph.toFixed(2);
}

/*size(200, 100);

float score = 95;
boolean patternSize = score <= 0;

if (patternSize) {
background(0, 255, 0);
fill(0);
textSize(18);
text("Congratulations!", 30, 55);
}
/*
let value = result.innerHTML
if(parseInt(value) < 0){
	box.style.display = "smaller than the pattern size"
} else {
	box.style.display = "larger than the pattern size"
}
*/