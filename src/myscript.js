let prodArray = [];

function addProd() {
    let pid = document.getElementById("prodId").value;
    let pname = document.getElementById("prodName").value;
    let pprice = document.getElementById("prodPrice").value;

    if (checkData(pid, pname, pprice)) {
        chkDuplicate(pid, pname, pprice);
        display();
    }

}


function checkData(pid, pname, pprice) {
    if (pid == "" || isNaN(pid)) {
        alert("Enter correct product Id");
    }
    else if (isNaN(pname) === false || pname === "") {
        alert("Enter valid Product Name");
    }
    else if (isNaN(pprice) || pprice === "") {
        alert("Enter valid Product price");
    }
    else {
        return true;
    }

}

//insert elements in an array
function datainput(pid, pname, pprice) {
    prodArray.push({
        "id": pid,
        "name": pname,
        "price": pprice
    });
}

//check for the duplicate values
function chkDuplicate(pid, pname, pprice){
    if(prodArray.length == 0){
        datainput(pid,pname,pprice);
    }
    else{
        for(var i=0;i<prodArray.length;i++){
            if(prodArray[i].id==pid)
                alert("Id already present!!");
        }
    }
    datainput(pid,pname,pprice);
}


//display in table format
function display() {
    let result = "";

    if (prodArray.length === 0) {
        document.getElementById("output").innerHTML = "<p>No values</p>";
    }
    else {

        for (let i = 0; i < prodArray.length; i++) {
            result += `<tr><td>${prodArray[i].id}</td><td>${prodArray[i].name}</td><td>${prodArray[i].price}</td></tr>`;
        }
        document.getElementById("output").innerHTML = `<table>
        
        
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
        </tr>
        ${result}
        </table>`;

    }
}