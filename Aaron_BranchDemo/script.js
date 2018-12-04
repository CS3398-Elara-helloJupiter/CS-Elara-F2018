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
   // alert("check1");
	
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
    header3.innerHTML = "Venue";
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
    alert("Table Created");

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
  $("#subjectButtons").on("keypress", "button", function(event){
    if (event.keyCode == 70 || event.keyCode == 102)
    {
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
    }
  });

 $("#categoryDisplay").on("keypress", "li", function(event){
    if (event.keyCode == 70 || event.keyCode == 102)
    {
      if (confirm ('Press OK to delete category: ' + $(this).text()))
      {
        tableName = $(this).text();
        $("table").filter(function()
        {
          return $(this).attr("id") == tableName;
        }).remove();
        $(this).remove();       
      }
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


/* ********************** Mary's Table starts HERE *****************************************
*/
// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
  
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
  
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
  
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no).remove();
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
  
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"
//  +new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"
//  +table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len
//  +"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"
//  +table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }
/* ********************** Mary's Table ENDS HERE *****************************************
*/



