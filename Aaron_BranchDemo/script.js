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
    var t = document.createTextNode(inputValue)
    document.getElementById("categoryInput").value = "";
    subjectName = $("#categoryHeader").text();
    categoryObject.categoryItem.appendChild(t)
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
    subjectName = $("#categoryHeader").text();
    var showIndex;
    //***************************************
    // Toggle Show/Hide 
    //***************************************
    for (i = 0; i < subjectList.length; i++)
    {
      if (subjectList[i].subjectText == subjectName)
      {
        for (j = 0; j < subjectList[i].categoryList.length; j++)
        {
          subjectList[i].categoryList[j].categoryItem.removeClass("second_level_hide");
          subjectList[i].categoryList[j].categoryItem.addClass("second_level");
        }
      }
      else (j = 0; j < subjectList[i].categoryList.length; j++)
      {
        for (j = 0; j < subjectList[i].categoryList.length; j++)
        {
          subjectList[i].categoryList[j].categoryItem.removeClass("second_level_hide");
          subjectList[i].categoryList[j].categoryItem.addClass("second_level");
        }
      }
    }








        $.each(subjectList[i].categoryList, function() 
        {
          for (p = 0; p < subjectList[i].categoryList.length; p++)
          {
            if (showIndex = p)
            {
              //Change css of this particular button
              //Can maybe do it with index?
              var item1 = $( "li" )[ index ];
              shownIndexes.push(index);
              $(item1).removeClass("button button2");
              $(item1).addClass("second_level_hide");
              $( "li" ).each(function( index2 ) 
              {
                if (!shownIndexes.includes(index2))
                {
                  var item2 = $( "li" )[ index2 ];
                  $(item2).removeClass("second_level_hide");
                  $(item2).addClass("button button2");
                  //hiddenIndexes.push(index2);
                }
              });
            }
          }
        });
      }
    }
    $("#categoryHeader").text($(this).text());
    $("#categoryDisplay").removeClass("second_level_hide");
    $("#categoryDisplay").addClass("second_level");
  });

  //*********************************************************************
  // When user presses 'd' or 'D' while selecting a button element within
  // subjectButtons, that button will be removed.
  //*********************************************************************
  $("#subjectButtons").on("keypress", "button", function(event){
    if (event.keyCode == 68 || event.keyCode == 100)
    {
      $(this).remove();
    }
  });

  //*********************************************************************
  // When user clicks a button within the second level, the third level 
  // will be displayed and header assigned to text of button.
  //*********************************************************************
  $("#categoryDisplay").on("click", "button", function()
  {
    $("#taskHeader").text($(this).text());
    $("#tableDisplay").removeClass("third_level_hide");
    $("#tableDisplay").addClass("third_level");
  });

//END OF JQUERY 
}); 


