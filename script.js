let timeDate = document.getElementById("timeDate")
let formData = document.getElementById("formData");
let taskInput = document.getElementById("taskInput");
let formSubmit = document.getElementById("formSubmit");
let taskList = document.getElementById("taskList");
let tableDone = document.getElementById("tableDone");

function showDate() {
  let show = new Date().toLocaleString("id-ID");
  console.log(new Date().toLocaleString("id-ID"));

  return timeDate.innerHTML = show
}
showDate();

formData.addEventListener("submit", function (event) {
  event.preventDefault();

  let task = taskInput.value;
  let priority = document.querySelector(
    'input[name="priority"]:checked'
  );

  console.log("Task:", task);

  if (priority) {
    console.log("Priority:", priority.value);
  } else {
    console.log("Pilih priority dulu!");
  }
});

formData.addEventListener("submit", function (event) {
event.preventDefault();

let task = taskInput.value;
let priority = document.querySelector(
    'input[name="priority"]:checked'
);

if (task === "") {
    console.log("Task tidak boleh kosong!");
    return;
}

if (!priority) {
    console.log("Pilih priority dulu!");
    return;
}

let row = taskList.insertRow();

row.insertCell(0).textContent = taskList.rows.length;
row.insertCell(1).textContent = task;
row.insertCell(2).textContent = priority.value;
row.insertCell(3).textContent = "Pending";

formData.reset();

});