function search() {

    let input = document.getElementById('searchInput').value.toLowerCase();
    
    let elements = document.querySelectorAll('body *:not(script):not(style)');
    
  
    elements.forEach(element => {
        if (element.nodeType === 1) {
            element.innerHTML = element.innerHTML.replace(/<span class="highlight">|</span>g, '');
        }
    });

    if (input === '') return;

    elements.forEach(element => {
        if (element.nodeType === 1) { 
            let innerHTML = element.innerHTML.toLowerCase();
            if (innerHTML.includes(input)) {
                let regex = new RegExp(input, 'gi');
                element.innerHTML = element.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
            }
        }
    });
}