table.border = '1';
table.style.borderCollapse = 'collapse';

let tr = table.rows;
for (let i = 0; i < tr.length; i++) {
    for (let j = 0; j < tr[i].cells.length; j++) {
        let td = tr[i].cells[j];
        td.innerHTML = `${j + 1}:${i + 1}`;
        td.style.padding = '8px';
        if (i === j) td.style.background = 'red';
    }  
}