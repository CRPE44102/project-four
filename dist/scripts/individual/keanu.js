function openNav() {
	let widths = []
    const max = 250
   	let currentIndex = 0
    
    for (let i = 0; i < max; i++) {
    	widths.push(i)
    }
    
    while (true) {
    	if (currentIndex >= max) break
        
        document.getElementById("mySidebar").style.width = (widths[currentIndex] + "px");
        document.getElementById("main").style.marginLeft = (widths[currentIndex] + "px");
        
        currentIndex++
    }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}