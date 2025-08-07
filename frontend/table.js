let data = {"50 Fly" : "35", "50 back" : "37", "50 Breast" : "46", "50 Free" : "32", "100 Fly" : "1:19", "100 Back" : "1:23", "100 Breast" : "1:42", "200 Fly" : "NA", "200 Back" : "NA", "200 Breast" : "NA", "200 Free" : "2:36", "400 Free" : "NA", "800 Free" : "NA", "1500 Free" : "NA"};

function populateTable(data) {
    const tableBody = document.getElementById("tableBody");
    const headerRow = document.getElementById("tableHeader");

    tableBody.innerHTML = "";
    headerRow.innerHTML = "";

    const headers = Object.keys(data[0]);
    const headerRowElement = document.createElement("tr");

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRowElement.appendChild(th);
    });

    data.forEach(row => {
        const tr = document.createElement("tr");

        headers.forEach(header => {
            const td = document.createElement("td");
            td.textContent = row[header];
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}

populateTable(data);

async function fetchData(){
    const loading = document.getElementById("loading");
    const errorMessage = document.getElementById("errorMessage");
    const table = document.getElementById("table");

    try{
        
    }
    catch(e){

    }
}