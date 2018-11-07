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