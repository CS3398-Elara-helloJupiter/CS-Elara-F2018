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
      alert("Subject created for: " + subjectObject.subjectText);
  }
}

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
    alert("Category created for: " + categoryObject.categoryText);
    
    //Create Table and Caption
    var cTable = document.createElement("TABLE");
    cTable.border = "1";
    cTable.id = categoryObject.categoryText;
    var cap = cTable.createCaption();
    cap.innerHTML = "<b>" + categoryObject.categoryText + "</b>";

    //Add the header row.
    var row = cTable.insertRow(-1);
    var header1 = document.createElement("TH");
    header1.innerHTML = "Date";
    row.appendChild(header1);
    var header2 = document.createElement("TH");
    header2.innerHTML = "Event";
    row.appendChild(header2);
    var header3 = document.createElement("TH");
    header3.innerHTML = "Description";
    row.appendChild(header3);

    //Add data rows
    for (var i = 1; i < 4; i++)
    {

        var row = cTable.insertRow(i);
        row.id = cTable.id+","+"row"+i;

        var cell1 = row.insertCell(0);
        cell1.contentEditable = true;
        cell1.id = cTable.id+","+"name_row"+i;

        var cell2 = row.insertCell(1);
        cell2.contentEditable = true;
        cell2.id = cTable.id+","+"country_row"+i;

        var cell3 = row.insertCell(2);
        cell3.contentEditable = true;
        cell3.id = cTable.id+","+"age_row"+i;

        var inputCell = row.insertCell(3);
        var deleteButton = document.createElement("button");
        deleteButton.id = cTable.id+","+"delete_button"+i;
        deleteButton.className = "delete";
        var t = document.createTextNode("Delete");
        deleteButton.appendChild(t);
        //deleteButton.onclick = function(){delete_row(i)};
        inputCell.append(deleteButton);

        var editButton = document.createElement("button");
        editButton.id = cTable.id+","+"edit_button"+i;
        editButton.className = "edit";
        var t = document.createTextNode("Edit");
        editButton.appendChild(t);
        //editButton.onclick = function(){edit_row(i)};
        inputCell.append(editButton);

        var saveButton = document.createElement("button");
        saveButton.id = cTable.id+","+"save_button"+i;
        saveButton.className = "save";
        var t = document.createTextNode("Save");
        saveButton.appendChild(t);
        //saveButton.onclick = function(){save_row(i)};
        inputCell.append(saveButton);


    }
    row = cTable.insertRow(4);
    var cell1 = row.insertCell(0);
    cell1.contentEditable = true;
    cell1.id = cTable.id+"new_name";
    var cell2 = row.insertCell(1);
    cell2.contentEditable = true;
    cell2.id = cTable.id+"new_country";
    var cell3 = row.insertCell(2);
    cell3.contentEditable = true;
    cell3.id = cTable.id+"new_age";

    var cell4 = row.insertCell(3);
    var addButton = document.createElement("button");
    addButton.className = "addButton";
    var t = document.createTextNode("Add Row");
    //addButton.onclick = function(){add_row()};
    addButton.appendChild(t);
    cell4.append(addButton);

    //Add Table to Document
    document.getElementById("tableDisplay").append(cTable);

    var t = document.createTextNode(inputValue);
    document.getElementById("categoryInput").value = "";
    subjectName = $("#categoryHeader").text();
    categoryObject.categoryItem.appendChild(t);
    categoryObject.categoryItem.tabIndex=2;
    categoryObject.categoryItem.className += "button button2";
    document.getElementById("categoryDisplay").appendChild(categoryObject.categoryItem);
    
    //Looping through global subject list, matching the category to
    //the subject, appending category object to the subject's categoryList
    for (x = 0; x < subjectList.length; x++)
    {
      if (subjectList[x].subjectText == subjectName)
      {
        subjectList[x].categoryList.push(categoryObject);
		
        //alert("subjectList[x].categoryList: " + categoryObject.categoryItem.text());
      }
    }
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


  //   $(".delete").on("click", "button", function ()
  // {
  //   alert("delete found");
  //   $(this).parents("tr").remove();
  // });




//END OF JQUERY 
}); 
