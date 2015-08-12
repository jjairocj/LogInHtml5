var randomFloat = function(min,max) {
	return (Math.random() * (max - min) + min).toFixed(2);
}

var randomRange = function(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);	
}

var minRad = 9,
maxRad = 15,
minCircs = 10,
maxCircs = 25,
minOpacity = 0.2,
maxOpacity = 0.8,
minSat = 90,
maxSat = 95,
minLum = 49,
maxLum = 54,
minBlur = .75,
maxBlur = 4,
blurVariants = 5,
svg = function() { 
  var hue = 300;
  var svgstring = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">';
svgstring += '<defs>';
	 
for (var i=0; i < blurVariants; i++) {
    svgstring += '<filter id="bokeh'+i+'">';
    svgstring += '<feGaussianBlur stdDeviation="'+randomFloat(minBlur, maxBlur)+'"></feGaussianBlur>';
    svgstring += '</filter>';
}
svgstring += '</defs>';   
for (var i=1;i < randomRange(minCircs, maxCircs);i++) {
    svgstring += '<circle ';
    svgstring += 'r="'+randomRange(minRad, maxRad)+'%" ';
    svgstring += 'cx="'+randomRange(0, 100)+'%" ';
    svgstring += 'cy="'+randomRange(0, 100)+'%" ';
    svgstring += 'fill="hsla('+30+', '+randomRange(minSat, maxSat)+'%, '+randomRange(minLum, maxLum)+'%, '+randomFloat(minOpacity, maxOpacity)+')"';
    svgstring += ' filter="url(#bokeh'+randomRange(0,blurVariants)+')"';
    svgstring += '></circle>';
    }
svgstring += '</svg>';

var encodedData = window.btoa(svgstring);
var url = 'data:image/svg+xml;base64,' + encodedData;
document.body.style.backgroundImage = "url("+url+")";
}
svg();

hueangle.addEventListener("change", function() { svg(); })