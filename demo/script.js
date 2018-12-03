//Create new list item when clicking on the "Add" button
function newSubject() 
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("subjectInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
//Input Validation
  if (inputValue === '') 
  {
    alert("You must write something!");
  } 
  else 
  {
    li.tabIndex = 1;
    li.className += "button button2";
    document.getElementById("subjectUL").appendChild(li);
  }
  document.getElementById("subjectInput").value = "";
}

//Create new list item when clicking on the "Add" button
function newCategory() 
{
  var btn = document.createElement("button");
  var inputValue = document.getElementById("categoryInput").value;
  var t = document.createTextNode(inputValue);
  btn.appendChild(t);
//Input Validation
  if (inputValue === '') 
  {
    alert("You must write something!");
  } 
  else 
  {
    btn.tabIndex=2;
    btn.className += "button button2";
    document.getElementById("categoryDisplay").appendChild(btn);
  }
  document.getElementById("categoryInput").value = "";
}



$(document).ready(function()
{
  //on-click event for subject list
  $("#subjectUL").on("click", "li", function()
  {
    $("#categoryHeader").text($(this).text());
    $("#categoryDisplay").removeClass("second_level_hide");
    $("#categoryDisplay").addClass("second_level");

  });
  //hiding element in subject list on double click 
    $("#subjectUL").on("keypress", "li", function(event)
  {
    if (event.keyCode == 68 || event.keyCode == 100)
    {
      $(this).remove();      
    }

  });
  //on-click event for category list
  $("#categoryDisplay").on("click", "button", function()
  {
    $("#taskHeader").text($(this).text());
    $("#tableDisplay").removeClass("third_level_hide");
    $("#tableDisplay").addClass("third_level");
  });


	var random_id = function  () 
	{
		var id_num = Math.random().toString(9).substr(2,3);
		var id_str = Math.random().toString(36).substr(2);
		
		return id_num + id_str;
	}

	}); 
	
function generate_table() {
	
	
	
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 3; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
	  
      var cellText = document.createTextNode("edit me").contentEditable="true";
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "1");
    document.getElementById("tableDisplay").appendChild(tbl);

}


