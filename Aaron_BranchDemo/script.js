
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
    document.getElementById("categoryDisplay").appendChild(btn);
  }
  document.getElementById("categoryInput").value = "";
}



$(document).ready(function()
{
  //on-click even for subject list
  $("#subjectUL").on("click", "li", function()
  {
    $(this).hide(1000);
    $(this).show(1000);
    $("#categoryHeader").text($(this).text());
    $("#categoryDisplay").removeClass("second_level_hide");
    $("#categoryDisplay").addClass("second_level");

  });

  $("#categoryDisplay").on("click", "button", function()
  {
    $("#taskHeader").text($(this).text());
    $("#tableDisplay").removeClass("third_level_hide");
    $("#tableDisplay").addClass("third_level");

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

