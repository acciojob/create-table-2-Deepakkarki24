 function createTable() {
        //Write your code here
        let table = document.querySelector("table");

        let rowN = prompt("inputNumber of rows");
        let colN = prompt("inputNumber of columns");
        let tbody = document.createElement("tbody");
        table.append(tbody);

        for (let i = 0; i < rowN; i++) {
          let row = document.createElement("tr");
          tbody.append(row);

          for (let j = 0; j < colN; j++) {
            let col = document.createElement("td");
            col.innerText = `Row-${i} Column-${j}`;
            row.append(col);
          }
        }
      }