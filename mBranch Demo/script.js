
/*
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
  {
    //document.getElementById("categoryHeader").innerHTML = ev.target.innerHTML;
    alert("event processed");
  }
}, false);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) 
{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) 
{
  close[i].onclick = function() 
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
*/




//Create new list item when clicking on the "Add" button
function newSubject() 
{
  alert("newSubject called");
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
    li.className += "button button2";
    document.getElementById("subjectUL").appendChild(li);
  }
  document.getElementById("subjectInput").value = "";
}

//Create new list item when clicking on the "Add" button
function newCategory() 
{
  alert("newCategory called");
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
    btn.className += "button button2";
    document.getElementById("school_display").appendChild(btn);
  }
  document.getElementById("categoryInput").value = "";
}

function toggleDisplays(num) 
{
  // assigns a button selection to variable
  x = document.getElementById("work_display");
  y = document.getElementById("school_display");
  z = document.getElementById("misc_display");
  f = document.getElementById("table_display");
  // Toggles second level based on button clicked by user
  if (num == 1) 
  {
    y.style.display = "block";
    x.style.display = "none"
    z.style.display = "none";
    f.style.display = "none";
  } 
  else if (num == 2) 
  {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    f.style.display = "none";
  } 
  else if (num == 3) 
  {
    z.style.display = "block";
    x.style.display = "none";
    y.style.display = "none";
    f.style.display = "none";
  } 
  else if (num == 4) 
  { //Shows table when any button on second level is selected
    f.style.display = "block";
    $("myTable td").remove();

    var tsk_1 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_2 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_3 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_4 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_5 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_6 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_7 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_8 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_9 = {task:contenteditable, comments:contenteditable, due:contenteditable};
    var tsk_10 = {task:contenteditable, comments:contenteditable, due:contenteditable};


    if(num2 ==1)
    {
      row= [tsk_1,tsk_2,tsk_3];
    }
    else if (num2 == 2)
    {
      row = [tsk_4, tsk_5, tsk_6];
    }
    else if (num2 == 3)
    {
      row = [tsk_7, tsk_8, tsk_9, tsk_10];
    }
    for (x = 0; x < row.length; x++) {
      $('#myTable').append( //Jquery call to update table
      '<tr><td>' + row[x].task +
      '</td><td>' + row[x].comments +
      '</td><td>' + row[x].due +
      '</td>');
    }
  }
}


function InitialzePageAfterLoad() 
{
  //Initializes a blank page
  x = document.getElementById("work_display");
  y = document.getElementById("school_display");
  z = document.getElementById("misc_display");
  f = document.getElementById("table_display");
  x.style.display = "none";
  y.style.display = "none"
  z.style.display = "none";
  f.style.display = "none";
}


$(document).ready(function()
{
  

  //on-click even for subject list
  $("#subjectUL").on("click", "li", function()
  {
    $(this).hide(1000);
    $(this).show(1000);
    $("#categoryHeader").text($(this).text());
  });


  


//ajax row data
	var ajax_data =
	[
		{fname:" ", lname:"", email:""}, 
		{fname:"", lname:"", email:""}, 
		{fname:"", lname:"", email:""}, 
		{fname:"", lname:"", email:""}, 
		{fname:"", lname:"", email:""}, 
		{fname:"", lname:"", email:""}, 
	]



	var random_id = function  () 
	{
		var id_num = Math.random().toString(9).substr(2,3);
		var id_str = Math.random().toString(36).substr(2);
		
		return id_num + id_str;
	}




}); 