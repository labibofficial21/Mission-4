let timeDate = document.getElementById("timeDate");
let formData = document.getElementById("formData");
let taskInput = document.getElementById("taskInput");
let formSubmit = document.getElementById("formSubmit");
let taskList = document.getElementById("taskList");
let tableDone = document.getElementById("tableDone");

// show date
function showDate() {
	let show = new Date().toLocaleString("id-ID");
	console.log(new Date().toLocaleString("id-ID"));

	return (timeDate.innerHTML = show);
}
showDate();

function deleteButton() {
	let deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.type = "button";

	deleteBtn.onclick = function () {
		let row = deleteBtn.closest("tr");
		row.remove();
	};

	return deleteBtn;
}

console.log(deleteButton);

// Fungsi membuat checkbox interaktif
function createCheckbox(row) {
	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	checkbox.onchange = function () {
		if (checkbox.checked) {
			row.classList.add("completed");
			let statusCell = row.cells[4];
			if (statusCell) statusCell.textContent = "Done";

			tableDone.appendChild(row);
		} else {
			row.classList.remove("completed");
			let statusCell = row.cells[4];
			if (statusCell) statusCell.textContent = "Progress";

			taskList.appendChild(row);
		}
	};

	return checkbox;
}

// after click submit
formData.addEventListener("submit", function (event) {
	event.preventDefault();

	let task = taskInput.value;
	let priority = document.querySelector('input[name="priority"]:checked');

	if (task === "") {
		console.log("Task tidak boleh kosong!");
		return;
	}

	if (!priority) {
		console.log("Pilih priority dulu!");
		return;
	}

	let newRow = taskList.insertRow();

	newRow.innerHTML += `
    <tr>
        <td class="check-cell"></td>
        <td>${taskList.rows.length}</td>
        <td>${task}</td>
        <td>${priority.value}</td>
        <td>Progress</td>
        <td>${showDate()}</td>
        <td class ="action-cell"></td>
    </tr>
    `;

	let checkCell = newRow.querySelector(".check-cell");
	checkCell.appendChild(createCheckbox(newRow));

	let actionCell = newRow.querySelector(".action-cell");
	actionCell.appendChild(deleteButton());

	formData.reset();
});

let deleteAllBtn = document.getElementById("deleteAllBtn");

deleteAllBtn.onclick = function () {
	while (taskList.rows.length > 1) {
		taskList.deleteRow(1);
	}

	while (tableDone.rows.length > 1) {
		tableDone.deleteRow(1);
	}
	tableDone.innerHTML = "";

	console.log("Semua task berhasil dihapus!");
};
