function renderCoverage(coverage,elementID, outlineColor = "#0000AA",fillColor = "#DDDDFF", elementWidth = 1, elementHeight = 20)
{
	var canvas = document.getElementById(elementID);
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.strokeStyle=outlineColor;
		ctx.rect(0,0,coverage.length*elementWidth,elementHeight);
		ctx.stroke();
		ctx.fillStyle=fillColor;
		for(var i=0; i<coverage.length;i++)
		{
			if(coverage[i] == 1)
			{
				ctx.fillRect(i*elementWidth,0,elementWidth,elementHeight);
				ctx.stroke();
			}
		}
	}
}