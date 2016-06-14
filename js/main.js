	// MouseOver

	document.onmouseover = function(event) {
	  var target = event.target,
	      fieldCoords = target.getBoundingClientRect();
	  
	  var fieldInnerCoords = {
    	top: fieldCoords.top + pageYOffset,
    	left: fieldCoords.left + pageXOffset
  	  };

  	  var atr = target.getAttribute('data-tooltip');
	  var hoverBlock = document.getElementById('hovBlock');

	  if(!atr) return;
	 
	  hoverBlock.style.display = "block";
	  hoverBlock.innerHTML = atr;

	  var left = fieldInnerCoords.left + ( (target.offsetWidth - hoverBlock.offsetWidth) / 2 );
	  if(left < 0) left = 0;

	  var top = fieldInnerCoords.top - 35;
	  if(fieldCoords.top < 20) {
	  	top = fieldInnerCoords.top + target.offsetHeight + 5;
	  };

	  hoverBlock.style.top = top + "px";
      hoverBlock.style.left = left + "px";

	  this.onmouseout = function() {
	  	hoverBlock.style.display = "none";
	  }

	}
	


	