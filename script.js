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
function newSubject() 
{
  var inputValue = document.getElementById("subjectInput").value;
  //Input Validation
  if (inputValue === '')
      alert("You must write something!");
  else 
  {
      var btn = document.createElement("button");
      var t = document.createTextNode(inputValue);
      btn.appendChild(t);
      btn.tabIndex = 1;
      btn.className += "button button2";
      document.getElementById("subjectButtons").appendChild(btn);
      document.getElementById("subjectInput").value = "";
  
      //Instantiation of new subject object
      var subjectObject = 
      {
          subjectButton: btn, //Actual list item element, probably don't need
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
//*********************************************************************
// newCategory() dynamically creates a new category button and
// a category object that is associated with the subject
// selected on the first level.
//*********************************************************************
function newCategory() 
{
  var inputValue = document.getElementById("categoryInput").value;
  //Input Validation
  if (inputValue === '')
    alert("You must write something!");
  else 
  {
    var categoryObject = 
    {
      categoryItem: document.createElement("li"), //Actual button element, probably don't need
      categoryText: inputValue, //Name given to button by user input
      subject: subjectName //Name of associated subject

    }
}

//*********************************************************************
// Function that is always listening...
// JQuery used for onclick hide and show actions
// I think this is the function we will need to use for looping
//*********************************************************************
$(document).ready(function()
{
  //*********************************************************************
  // 
  //*********************************************************************
  $("#subjectButtons").on("click", "button", function()
  {
  	$("#categoryHeader").text($(this).text());
    $("#categoryDisplay").removeClass("second_level_hide");
    $("#categoryDisplay").addClass("second_level");

    subjectName = $("#categoryHeader").text();
    var showIndex;
    //***************************************
    // Toggle Show/Hide 
    //***************************************
    for (i = 0; i < subjectList.length; i++)
    {
      if (subjectList[i].subjectText == subjectName)
      {
      	//If Matched, Show List Items
        showIndex = i;

        for (j = 0; j < subjectList[i].categoryList.length; j++)
        {
          $("li").filter(function()
          {
            return $(this).text() == subjectList[i].categoryList[j].categoryItem.innerHTML;
          }).show();
        }
      }
      else 
      {
      	//If not Matched, Hide Items
        for (j = 0; j < subjectList[i].categoryList.length; j++)
        {
          //alert ("hide: " + subjectList[i].categoryList[j].categoryItem.innerHTML);
          $("li").filter(function()
            {
              return $(this).text() == subjectList[i].categoryList[j].categoryItem.innerHTML;
            }).hide();
        }
      }
    }


  });

  //*********************************************************************
  // When user presses 'd' or 'D' while selecting a button element within
  // subjectButtons, that button will be removed.
  //*********************************************************************
  $("#subjectButtons").on("dblclick", "button", function(){

      if (confirm ('Press OK to delete subject: ' + $(this).text()))
      {
        subjectName = $("#categoryHeader").text();
        for (i = 0; i < subjectList.length; i++)
        {
          if (subjectList[i].subjectText == subjectName)
          {
            //Removing Tables
            for (j = 0; j < subjectList[i].categoryList.length; j++)
            {
              var tableName = $("li").filter(function()
              {
                return $(this).text() == subjectList[i].categoryList[j].categoryItem.innerHTML;
              }).text();
            }
            $("table").filter(function()
            {
              return $(this).attr("id") == tableName;
            }).remove();
            //Removing Category items
            for (j = 0; j < subjectList[i].categoryList.length; j++)
            {
              $("li").filter(function()
              {
                return $(this).text() == subjectList[i].categoryList[j].categoryItem.innerHTML;
              }).remove();
            }
          }
        }      
        $(this).remove();       
      }
  });

 $("#categoryDisplay").on("dblclick", "li", function(){
      if (confirm ('Press OK to delete category: ' + $(this).text()))
      {
        tableName = $(this).text();
        $("table").filter(function()
        {
          return $(this).attr("id") == tableName;
        }).remove();
        $(this).remove();       
      }
  });

  //*********************************************************************
  // When user clicks a button within the second level, the third level 
  // will be displayed and header assigned to text of button.
  //*********************************************************************
  $("#categoryDisplay").on("click", "li", function()
  {
    $("#tableHeader").text($(this).text());
    $("#tableDisplay").removeClass("third_level_hide");
    $("#tableDisplay").addClass("third_level");

    tableName = $(this).text();
    $("table").filter(function()
    {
      return $(this).attr("id") == tableName;
    }).show();

    $("table").filter(function()
    {
      return $(this).attr("id") != tableName;
    }).hide();
  });


  $("#tableDisplay").on("click", "button", function ()
  {
    if (confirm("Press OK to delete row."))
    $(this).parents("tr").remove();
  });

  $("#tableDisplay").on("keypress", "button", function(event){
    if (event.keyCode == 65 || event.keyCode == 97)
    {
      tableName = $("#tableHeader").text();
      alert (tableName);
      var myTable = $("table").filter(function()
      {
        return $(this).attr("id") == tableName;
      });
      alert (myTable);
      var row = myTable.insertRow(-1);
      //var myRow = $(this).parents("tr");
      //alert (myRow);
      //var row = document.createElement('tr');
      //var myTable = $(this).closest('table');
      //alert(myTable.Caption);
      //myTable.insertRow(-1);
      //alert (myTable);
      //row = myTable.append(row);
    }
  });


