var day_select = document.getElementById("day");
var month_select = document.getElementById("month");
var year_select = document.getElementById("year");

var day_loop = "";
var month_loop = "";
var year_loop = "";

// day options
for (var i = 1; i <= 31; i++) {
  day_loop += `<option value="${i}">${i}</option>`;
}

// month options
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
for (var i = 0; i < months.length; i++) {
  month_loop += `<option value="${i}">${months[i]}</option>`;
}

// year options
for (var i = 1950; i <= 2024; i++) {
  year_loop += `<option value="${i}">${i}</option>`;
}

// Set options
day_select.innerHTML = `<option hidden>Select Day</option>` + day_loop;
month_select.innerHTML = `<option hidden>Select Month</option>` + month_loop;
year_select.innerHTML = `<option hidden>Select Year</option>` + year_loop;

// Function to calculate and display age
function calculateAge() {
  var day = parseInt(day_select.value);
  var month = parseInt(month_select.value);
  var year = parseInt(year_select.value);

  if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    var today = new Date();
    var birthDate = new Date(year, month, day);

    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var ageMonths = today.getMonth() - birthDate.getMonth();
    var ageDays = today.getDate() - birthDate.getDate();

    // Correct for negative days
    if (ageDays < 0) {
      ageMonths--;
      var lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += lastMonth.getDate();
    }

    // Correct for negative months
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    // Display the calculated age
    document.getElementById("years-result").innerText = `${ageYears}`;
    document.getElementById("months-result").innerText = `${ageMonths}`;
    document.getElementById("days-result").innerText = `${ageDays}`;
  } else {
    document.getElementById("years-result").innerText = "Enter A Valid Year";
    document.getElementById("months-result").innerText = "Enter A Valid Month";
    document.getElementById("days-result").innerText = "Enter A Valid Day";
  }
}

// Add event listener to the button
document.getElementById("calculate-btn").addEventListener("click", calculateAge);