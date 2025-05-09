function runChecks() {
    const htmlInput = document.getElementById('htmlInput').value;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlInput, 'text/html');
    let results = "";
  

    const images = doc.querySelectorAll('img');
    images.forEach((img, i) => {
      if (!img.hasAttribute('alt') || img.getAttribute('alt').trim() === '') {
        results += `<p class="error">Image ${i + 1} is missing alt text.</p>`;
      }
    });
  
    
    document.getElementById('results').innerHTML = results || "<p class='info'>No major issues found!</p>";
  }
  