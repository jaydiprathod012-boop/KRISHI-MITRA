function analyze() {
  const image = document.getElementById("imageInput").files[0];
  if (!image) {
    alert("Please upload an image of produce");
    return;
  }

  // Mock AI grading
  const grades = ["A", "B", "C"];
  const grade = grades[Math.floor(Math.random() * grades.length)];
  const confidence = (Math.random() * (0.95 - 0.75) + 0.75).toFixed(2);

  document.getElementById("resultBox").style.display = "block";
  document.getElementById("grade").innerText = `Grade: ${grade}`;
  document.getElementById("confidence").innerText = `Confidence: ${confidence}`;

  showBuyers(grade);
}

function showBuyers(grade) {
  const buyers = {
    "A": ["Agro Exporter (20km)", "Premium Mandi (30km)"],
    "B": ["Local Wholesaler (10km)", "City Market (25km)"],
    "C": ["Nearby Trader (5km)"]
  };

  const list = document.getElementById("buyerList");
  list.innerHTML = "";

  buyers[grade].forEach(buyer => {
    const li = document.createElement("li");
    li.innerText = buyer;
    list.appendChild(li);
  });

  document.getElementById("buyersBox").style.display = "block";
}
