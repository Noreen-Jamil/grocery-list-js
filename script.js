let tableHeadings = ['Item Name','Quantity','Delete'];
let table ;
let count = 0;
let deleteButton;

function addItem(){
	
	count++;

	
	let itemName = document.getElementById('grocery-item').value;
	let quantity = document.getElementById('quantity').value;
	
	if(itemName == ""){
		alert("Please Enter Item Name");
		count--;
	}else{
		document.getElementById('grocery-item').value = "";
		document.getElementById('quantity').value = "";

		let itemArray = [itemName,quantity,''];
		
		if(count==1){
			createTable();
		}
		
		let tr = table.insertRow(-1);
		itemArray.forEach(function(item,index){
			
			let td = document.createElement('td');
			td = tr.insertCell(index);
			td.style.fontFamily = "Taviraj";
			td.innerHTML = item;
			if(index==2){
				deleteButton = document.createElement('span');
				deleteButton.setAttribute('id','delete');
				deleteButton.setAttribute('onclick','remove(this)');
				deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
				td.appendChild(deleteButton);
			}
		});
	}
}
function remove(row){
	table.deleteRow(row.parentNode.parentNode.rowIndex);
	let totalNumberOfRows = document.querySelectorAll('tr');
	if(totalNumberOfRows.length == 1){
		table.parentNode.removeChild(table);
		count = 0;
	}
}

function createTable(){
	table = document.createElement('table');
	document.body.appendChild(table);

	let tr = table.insertRow(0);
	tableHeadings.forEach(function(item){
		let itemHeading = document.createElement('th');
		itemHeading.innerHTML = item;
		itemHeading.style.backgroundColor = "#294840";
		tr.appendChild(itemHeading);
	});
}