<!DOCTYPE html>
<html lang="en">

 <head>
    <title>TAB</title>

    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/xhtml; charset=UTF-8" />

    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
 </head>
<body>
    <div class="Welcome">
      <h1 style="font-size:50px;&amp;rlm;">TAB Application </h1>
      <h3 style="font-size:18px;&amp;rlm; text-align: center;"> Created by: Mary Gutierrez, Aaron Hunt, Jessica Cruz, Samantha Hollensbe, and Louis Scinta</h3>
      <p style="font-size:25px;&amp;rlm;">User Guide:
		 To navigate use arrow up, arrow down key.
		When finding the desired button click enter, to go into the category section press the number 3 key.
		To navigate inside the category section, press arrow up or arrow down.
		After finding the desired sub column press enter and then press the number 4 key, to navigate to the table.
		Level 4 contains a table Column from left to right it shows, task name, description and due date. To navigate through the columns, press the tab key.</p>
    </div>

    <div class="first_level">
      <h2 id = "subjectHeader"> Subjects</h2>
      <input type = "text" id = "subjectInput" placeholder = "Subject..." tabindex=1>
      <button onclick = "newSubject()" class = "addButton" tabindex=1> Add </button>
      <ul id = "subjectUL">
    </div>


    <div class="second_level_hide" id="categoryDisplay">
      <h3 id = "categoryHeader" >School</h3>
      <input type = "text" id = "categoryInput" placeholder = "Category..." tabIndex=2>
      <button onclick = "newCategory()" class = "addButton" tabIndex=2> Add </button>
      <br>
      <button class="button button2" tabIndex = 2>Math</button>
      <br>
    </div>
    

    <div class="third_level_hide" id="tableDisplay">
      <h4 id = "tableHeader">Task Grid</h4>
	  <div>
	  <table align='center' cellspacing=9 cellpadding=2 id="data_table" border=1>
		<tr>
		<th>Task</th>
		<th>Description</th>
		<th>Date</th>
		</tr>

		<tr id="row1">
		<td id="name_row1" contenteditable></td>
		<td id="country_row1" contenteditable></td>
		<td id="age_row1" contenteditable></td>
		<td>
		<input type="button" id="edit_button1" value="Edit" class="edit" onclick="edit_row('1')">
		<input type="button" id="save_button1" value="Save" class="save" onclick="save_row('1')">
		<input type="button" value="Delete" class="delete" onclick="delete_row('1')">
		</td>
		</tr>

		<tr id="row2">
		<td id="name_row2" contenteditable></td>
		<td id="country_row2" contenteditable></td>
		<td id="age_row2" contenteditable></td>
		<td>
		<input type="button" id="edit_button2" value="Edit" class="edit" onclick="edit_row('2')">
		<input type="button" id="save_button2" value="Save" class="save" onclick="save_row('2')">
		<input type="button" value="Delete" class="delete" onclick="delete_row('2')">
		</td>
		</tr>

		<tr id="row3">
		<td id="name_row3" contenteditable></td>
		<td id="country_row3"contenteditable></td>
		<td id="age_row3"contenteditable></td>
		<td>
		<input type="button" id="edit_button3" value="Edit" class="edit" onclick="edit_row('3')">
		<input type="button" id="save_button3" value="Save" class="save" onclick="save_row('3')">
		<input type="button" value="Delete" class="delete" onclick="delete_row('3')">
		</td>
		</tr>

		<tr>
		<td><input type="text" id="new_name" contenteditable></td>
		<td><input type="text" id="new_country"contenteditable></td>
		<td><input type="text" id="new_age"contenteditable></td>
		<td><input type="button" class="add" onclick="add_row();" value="Add Row"></td>
		</tr>

		</table>
		</div>
	
	</div>
	

  </body>

</html>
