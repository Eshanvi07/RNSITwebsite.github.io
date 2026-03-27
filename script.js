function filterCourses() {
  let val = document.getElementById("courseFilter").value;
  let courses = document.querySelectorAll("#courseList .card");

  courses.forEach(c => {
    c.style.display =
      val === "all" || c.dataset.course === val
        ? "block"
        : "none";
  });
}