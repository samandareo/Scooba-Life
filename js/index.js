function changeStyleOfham() {
        const element = document.getElementById('second-section');
        if (element.style.display === "flex") {
          element.style.display = "none";
        } else {
          element.style.display = "flex";
        }
    }