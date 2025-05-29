let sheet = document.querySelector(".sheet");
sheet.style.display = "grid";
sheet.style.gridTemplateColumns = "repeat(27, minmax(100px, 1fr))";
sheet.style.marginTop = "20px";
sheet.style.gridTemplateRows = "repeat(101, minmax(30px, 1fr))";
sheet.style.width="100%";
sheet.style.scrollable = "true";
sheet.style.overflow = "auto";
sheet.style.boxShadow = "0 -1px 5px rgb(173, 173, 173, 0.2)"


for(let i=0; i<101; i++){
    for(let j =0; j<27; j++){
        //creating the first cell as empty header
        if(i ===0 && j===0){
            let header = document.createElement("span");
            header.classList.add("header");
            header.style.border = "2px solid #ccc";
            header.textContent = "";
            header.style.backgroundColor = "#f0f0f0";
            sheet.appendChild(header)
        }else{
            //creating rest of the cells
            let cell = document.createElement("span");
            cell.classList.add("cell");
            cell.setAttribute("data-row", i);
            cell.setAttribute("data-column", j);
            cell.setAttribute("id", `cell-${i}-${j}`);
            cell.style.border = "1px solid #ccc";
            cell.style.padding="0 5px";
            cell.style.alignContent="center";
            //creating input element inside the cell
            let input = document.createElement("input");
            input.classList.add("span_input");
            input.style.alignContent="center";
            input.style.backgroundColor = "transparent";
            input.style.border = "none";
            input.style.outline = "none";
            input.style.fontSize = "16px";
            input.style.width="100%";
            if(j === 0 && i > 0) {
                // creating 1 column of numbers j being the column and i being the row 
                cell.textContent = i; // Row numbers
                cell.style.backgroundColor = "#f0f0f0";
                cell.style.fontWeight = "bold";
                cell.style.textAlign = "center";
                cell.style.alignContent="center";
            } else if(i === 0 && j > 0) {
                // creating 1 row of letters i being the row and j being the column
                cell.textContent = String.fromCharCode(64 + j); // Column letters A-Z
                cell.style.backgroundColor = "#f0f0f0";
                cell.style.fontWeight = "bold";
                cell.style.textAlign = "center";
                cell.style.alignContent="center";
            } else {
                input.contentEditable = "true";
                cell.appendChild(input);
            }
            sheet.appendChild(cell);
        }
  
    }
}

var changed_bold=false
var changed_italic=false
var changed_underline=false
var changed_align_left=false
var changed_align_right=false
var changed_bold=false
var changed_align_center=false
// var changed_font_color=false
// var changed_bg_color = false


let inputs = document.querySelectorAll(".span_input");
inputs.forEach(input => {
    input.addEventListener("focus", (e) => {
        // Bold
        let bold = document.querySelector("#bold");
        bold.onclick = () => {
            if (changed_bold) {
                input.style.fontWeight = "normal";
                changed_bold = false;
            } else {
                input.style.fontWeight = "bold";
                changed_bold = true;
            }
        };

        // Italic
        let italic = document.querySelector("#italic");
        italic.onclick = () => {
            if (changed_italic) {
                input.style.fontStyle = "normal";
                changed_italic = false;
            } else {
                input.style.fontStyle = "italic";
                changed_italic = true;
            }
        };

        // Underline (fixed selector)
        let underline = document.querySelector("#underline");
        underline.onclick = () => {
            if (changed_underline) {
                input.style.textDecoration = "none";
                changed_underline = false;
            } else {
                input.style.textDecoration = "underline";
                changed_underline = true;
            }
        };

        // Align Left
        let align_left = document.querySelector("#align-left");
        align_left.onclick = () => {
            if (changed_align_left) {
                input.style.textAlign = "";
                changed_align_left = false;
            } else {
                input.style.textAlign = "left";
                changed_align_left = true;
            }
        };

        // Align Right
        let align_right = document.querySelector("#align-right");
        align_right.onclick = () => {
            if (changed_align_right) {
                input.style.textAlign = "";
                changed_align_right = false;
            } else {
                input.style.textAlign = "right";
                changed_align_right = true;
            }
        };

        // Align Center
        let align_center = document.querySelector("#align-center");
        align_center.onclick = () => {
            if (changed_align_center) {
                input.style.textAlign = "";
                changed_align_center = false;
            } else {
                input.style.textAlign = "center";
                changed_align_center = true;
            }
        };

        let font_color = document.querySelector("#font_color_input");
        font_color.oninput = (event)=>{
                input.style.color= event.target.value;
        }

        let bg_color = document.querySelector("#bg_color_input")
        bg_color.oninput = (event)=>{
                input.parentElement.style.backgroundColor = event.target.value;
        }

    });
});
