//Section Number
var section = '9/xae' ;

//MSH Table
$tableCtr=1 ;
$("#addRow").click(function()
{
	rowString = `
		    		<tr>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="aeTitle`+$tableCtr+`" name="aeTitle`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td>
							<div class="ui form">
								<input type="text" class="editField" id="resourceID`+$tableCtr+`" name="resourceID`+$tableCtr+`" readOnly />
							</div>
						</td>
						<td class="center aligned">
							<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
						</td>
					</tr>
	` ;
	$('#mainTable tbody:last').before(rowString);
	$('#tableCtr').val($tableCtr);
	$('.editField').prop('readOnly', false);
	$tableCtr++ ;
});

//Data Fetch
var url = apiUrl+'/section9/xae/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	//Sample Messages Table
	$.each(response.details,function(key,detail)
	{
		rowString = `
			    		<tr>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.aeTitle+`" id="aeTitle`+$tableCtr+`" name="aeTitle`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" class="editField" value="`+detail.resourceID+`" id="resourceID`+$tableCtr+`" name="resourceID`+$tableCtr+`" readOnly />
								</div>
							</td>
							<td class="center aligned">
								<button class="ui red basic button deleteRow" onclick="deleteRow()" >X</button>
							</td>
						</tr>
		` ;
		$('#mainTable tbody:last').before(rowString);
		$('.deleteRow').attr("disabled", true);
		$('#tableCtr').val($tableCtr);
		$tableCtr++ ;
	}); 

	//Editable Options
	$('.addRowButton').attr("disabled", true);
	$('.deleteRow').attr("disabled", true);
	$('.dropdown').unbind("click");
	if(edit==1)
	{
		$('.editField').prop('readOnly', false);
		$('.addRowButton').attr("disabled", false);
		$('.deleteRow').attr("disabled", false);
		$('.ui.dropdown').dropdown();
	}
});

//Editable Options if AJAX Query Fails
$('.addRowButton').attr("disabled", true);
$('.deleteRow').attr("disabled", true);
$('.dropdown').unbind("click");
if(edit==1)
{
	$('.editField').prop('readOnly', false);
	$('.addRowButton').attr("disabled", false);
	$('.deleteRow').attr("disabled", false);
	$('.ui.dropdown').dropdown();
}