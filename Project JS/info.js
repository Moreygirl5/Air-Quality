const facts = document.querySelectorAll(".fact");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;
  
    function showFact(index) {
      facts.forEach((fact, i) => {
        fact.style.display = i === index ? "block" : "none";
      });
    }
  
    function showNextFact() {
      currentIndex = (currentIndex + 1) % facts.length;
      showFact(currentIndex);
    }
  
    function showPreviousFact() {
      currentIndex = (currentIndex - 1 + facts.length) % facts.length;
      showFact(currentIndex);
    }
  
    prevBtn.addEventListener("click", () => {
      showPreviousFact();
    });
  
    nextBtn.addEventListener("click", () => {
      showNextFact();
    });
  
    showFact(currentIndex);