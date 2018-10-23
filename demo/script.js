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