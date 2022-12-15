let p_text = document.querySelector(".p_text");
let btn_click = document.querySelector(".btn_click");

let inp_row = document.querySelector("#inp_row");
let inp_col = document.querySelector("#inp_col");

const myTable = document.querySelector(".mtable");

let row;
let col;

let result = [];

btn_click.addEventListener("click", () => {
  p_text.innerHTML = "";
  row = Number(inp_row.value);
  col = Number(inp_col.value);

  if (row - Math.floor(row) === 0 && col - Math.floor(col) === 0) {
    for (let i = 0; i < row; i++) {
      let el_row = document.createElement("tr");
      console.dir(el_row);
      for (let j = 0; j < col; j++) {
        let el_col = document.createElement("td");
        el_col.innerHTML = (j + 1) * (i + 1);
        el_row.append(el_col);
      }
      myTable.append(el_row);
    }
  } else {
    row = 0;
    col = 0;
    inp_col.value = " ";
    inp_row.value = " ";
    p_text.innerHTML = " vos done incorrect";
  }

  console.log(row);
  console.log(col);
  console.log(typeof row);
});
