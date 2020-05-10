function replaceAll() {
    var str = document.getElementById("text").value
	var selector = document.getElementById("option");
	var value = selector[selector.selectedIndex].value;


	if(value == "HTML"){
		
		str = str.replace(/&/g, "&amp;");
		str = str.replace(/"/g, "&quot;");
		str = str.replace(/'/g, "&#039;");
		str = str.replace(/</g, "&lt;");
		str = str.replace(/>/g, "&gt;");
		str = str.replace(/\//g, "&#47;");
		
	}
	
	if(value=="letters"){
		
		str = str.replace(/A/g, "&#65;");
		str = str.replace(/B/g, "&#66;");
		str = str.replace(/C/g, "&#67;");
		str = str.replace(/D/g, "&#68;");
		str = str.replace(/E/g, "&#69;");
		str = str.replace(/F/g, "&#70;");
		str = str.replace(/G/g, "&#71;");
		str = str.replace(/H/g, "&#72;");
		str = str.replace(/I/g, "&#73;");
		str = str.replace(/J/g, "&#74;");
		str = str.replace(/K/g, "&#75;");
		str = str.replace(/L/g, "&#76;");
		str = str.replace(/M/g, "&#77;");
		str = str.replace(/N/g, "&#78;");
		str = str.replace(/O/g, "&#79;");
		str = str.replace(/P/g, "&#80;");
		str = str.replace(/Q/g, "&#81;");
		str = str.replace(/R/g, "&#82;");
		str = str.replace(/S/g, "&#83;");
		str = str.replace(/T/g, "&#84;");
		str = str.replace(/U/g, "&#85;");
		str = str.replace(/V/g, "&#86;");
		str = str.replace(/W/g, "&#87;");
		str = str.replace(/X/g, "&#88;");
		str = str.replace(/Y/g, "&#89;");
		str = str.replace(/Z/g, "&#90;");
		
		str = str.replace(/a/g, "&#97;");
		str = str.replace(/b/g, "&#98;");
		str = str.replace(/c/g, "&#99;");
		str = str.replace(/d/g, "&#100;");
		str = str.replace(/e/g, "&#101;");
		str = str.replace(/f/g, "&#102;");
		str = str.replace(/g/g, "&#103;");
		str = str.replace(/h/g, "&#104;");
		str = str.replace(/i/g, "&#105;");
		str = str.replace(/j/g, "&#106;");
		str = str.replace(/k/g, "&#107;");
		str = str.replace(/l/g, "&#108;");
		str = str.replace(/m/g, "&#109;");
		str = str.replace(/n/g, "&#110;");
		str = str.replace(/o/g, "&#111;");
		str = str.replace(/p/g, "&#112;");
		str = str.replace(/q/g, "&#113;");
		str = str.replace(/r/g, "&#114;");
		str = str.replace(/s/g, "&#115;");
		str = str.replace(/t/g, "&#116;");
		str = str.replace(/u/g, "&#117;");
		str = str.replace(/v/g, "&#118;");
		str = str.replace(/w/g, "&#119;");
		str = str.replace(/x/g, "&#120;");
		str = str.replace(/y/g, "&#121;");
		str = str.replace(/z/g, "&#122;");
		
	}


    document.getElementById("text").value = str
}
