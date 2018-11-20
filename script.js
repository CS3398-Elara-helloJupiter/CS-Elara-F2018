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
	
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}