//*********************************************************************
// InitializePageAfterLoad() generates an empty subjectList declared
// as a global variable so subject and category objects can be
// appended in any function
//*********************************************************************

function InitializePageAfterLoad() {
    subjectList = [];
    window.subjectList = subjectList;
}




//*********************************************************************
// newSubjectObject() dynamically creates a new subject list item and
// adds a subject object to the subjectList
//*********************************************************************
function newSubjectObject() {
    var inputValue = document.getElementById("subjectInput").value;

    //Input Validation
    if (inputValue === '')
        alert("You must write something!");
    else {
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        li.tabIndex = 1;
        li.className += "button button2";
        document.getElementById("subjectUL").appendChild(li);
    
        document.getElementById("subjectInput").value = "";
    
        //Instantiation of new subject
        var subjectObject = {
            subjectLI: li, //Actual list item element, probably don't need
            subjectText: inputValue, //Name given to button by user input
            categoryList: [] //Empty list to hold associated categories
        }
    
        //Appending new subject object to global subjectList list
        subjectList.push(subjectObject);
    }
}




//*********************************************************************
// newCategory() dynamically creates a new category button and
// a category object that is associated with the subject
// selected on the first level.
//*********************************************************************
function newCategory() {
    var inputValue = document.getElementById("categoryInput").value;

    //Input Validation
    if (inputValue === '')
        alert("You must write something!");
    else {
        var btn = document.createElement("button");
        var t = document.createTextNode(inputValue);
        btn.appendChild(t);
        btn.tabIndex=2;
        btn.className += "button button2";
        document.getElementById("categoryDisplay").appendChild(btn);
  
        document.getElementById("categoryInput").value = "";
    
        //Grabs name of subject selected on first-level
        subjectName = $("#categoryHeader").text();

        //Instantiation of new category
        var subjectObject = {
            categoryBtn: btn, //Actual button element, probably don't need
            categoryText: inputValue, //Name given to button by user input
            subject: subjectName //Name of associated subject
        }
    
        //Looping through global subject list, matching the category to
        //the subject, appending category object to the subject's categoryList
        for (x = 0; x < subjectList.length; x++){
            if (subjectList[x].subjectText == subjectName){
                subjectList[x].categoryList.push(subjectName);
                
                //Debugging
                //alert(subjectList[x].categoryList[0]);
            }
        }
    }
}




//*********************************************************************
// Function that is always listening...
// JQuery used for onclick hide and show actions
//*********************************************************************
$(document).ready(function() {

  //Shows list element based on button clicked by user
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

  //Shows task grid based on subject clicked by user
  $("#categoryDisplay").on("click", "button", function()
  {
    $("#taskGridHeader").text($(this).text());
    $("#taskGridDisplay").removeClass("third_level_hide");
    $("#taskGridDisplay").addClass("third_level");
  });
     
    //Task grid displaying
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

