var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var csvData = this.responseText;
  }
};
xhttp.open("GET", "busy.csv", true);
xhttp.open("GET", "classroom.csv", true);
xhttp.open("GET", "Courses.csv", true);
xhttp.open("GET", "services.csv", true);
xhttp.send();
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.3.0/papaparse.min.js"></script>