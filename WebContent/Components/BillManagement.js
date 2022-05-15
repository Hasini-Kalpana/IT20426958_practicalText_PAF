$(document).ready(function()
{
		if ($("#alertSuccess").text().trim() == "")
		{
 				$("#alertSuccess").hide();
 		}
 		$("#alertError").hide();
});


//Rederect  Meeter Reader View============================================
$(document).on("click", "#MeeterRead", function(event)
{	 
	window.location.href="MeeterReeder.jsp";
});

//Rederect  All Bills View============================================
$(document).on("click", "#ViewBiils", function(event)
{	 
	window.location.href="ViewAllBill.jsp";
});

//Rederect  Lost Users============================================
$(document).on("click", "#ViewLost", function(event)
{	 
	window.location.href="ViewLostUser.jsp";
});


//Get Meeter Reader Details =============================================
function viewMeeterReeder()
{	
	$.ajax(
 	{
 		url : "http://localhost:8080/IT20426958_PracticalTest_PAF/ElectroG/BillCreation/meterReader",
 		type : "GET",
 		dataType : "text",
 		complete : function(response, status)
 		{
 				onGetCompleat(response.responseText, status);
 		}
 	});
}


//send data for Calculate Bill ============================================
$(document).on("click", ".calBill", function(event)
{
	 var userId = $(this).closest("tr").find('td:eq(0)').text();
	 var fullName = $(this).closest("tr").find('td:eq(1)').text();
	 var city = $(this).closest("tr").find('td:eq(2)').text();
	 var mobileNumber = $(this).closest("tr").find('td:eq(3)').text();
	 var unit = $(this).closest("tr").find('td:eq(4)').text();
	 var remark = $(this).closest("tr").find('td:eq(5)').text();

	 localStorage.setItem("userId", userId);
	 localStorage.setItem("fullName", fullName);
	 localStorage.setItem("city", city);
	 localStorage.setItem("mobileNumber", mobileNumber);
	 localStorage.setItem("unit", unit);
	 localStorage.setItem("remark", remark);
	 	
	window.location.href="CalBill.jsp";
});

//get data for cal bill
function getdata(){
	var userId = localStorage.getItem("userId");
	var fullName = localStorage.getItem("fullName");
	var city = localStorage.getItem("city");
	var mobileNumber = localStorage.getItem("mobileNumber");
	var email = localStorage.getItem("unit");
	var remark = localStorage.getItem("remark");
	
	$(".UserID").val(userId);
	$(".FullName").val(fullName); 
	$(".City").val(city); 
	$(".MobileNumber").val(mobileNumber); 
	$(".Unit").val(email); 
	$(".Remark").val(remark); 
}

//Submit bill =============================================
$(document).on("click", ".creBill", function(event)
{
	// Clear alerts---------------------
	 $("#alertSuccess").text(""); 
	 $("#alertSuccess").hide(); 
	 $("#alertError").text(""); 
	 $("#alertError").hide(); 
	 
	// Form validation-------------------
	var status = validateFormBill(); 
	if (status != true) { 
		 $("#alertError").text(status); 
		 $("#alertError").show(); 
		 return; 
	} 
	
	// If valid------------------------
	$.ajax(
 	{
 		url : "http://localhost:8080/IT20426958_PracticalTest_PAF/ElectroG/BillCreation/Add",
 		type : "POST",
 		data : $("#calbillForm").serialize(),  
 		dataType : "text",
 		complete : function(response, status)
 		{
 				onBillGetCompleat(response.responseText, status);
 		}
 	});
});


//View All Bills =============================================
function viewAllBills()
{	
	$.ajax(
 	{
 		url : "http://localhost:8080/IT20426958_PracticalTest_PAF/ElectroG/BillCreation/all",
 		type : "GET",
 		dataType : "text",
 		complete : function(response, status)
 		{
 				onGetBillCompleat(response.responseText, status);
 		}
 	});
}


//send data for validation =============================================
$(document).on("click", "#updateBill", function(event)
{	
	 var userId = $(this).closest("tr").find('td:eq(0)').text();
	 var fullName = $(this).closest("tr").find('td:eq(1)').text();
	 var unit = $(this).closest("tr").find('td:eq(4)').text();
	 var remark = $(this).closest("tr").find('td:eq(5)').text();
	 var price = $(this).closest("tr").find('td:eq(6)').text();

	 localStorage.setItem("userId", userId);
	 localStorage.setItem("fullName", fullName);
	 localStorage.setItem("unit", unit);
	 localStorage.setItem("remark", remark);
	 localStorage.setItem("price", price);
	 
	window.location.href="UpdateBill.jsp";
});


//get data for Update
function getdataUpdate(){
	var userId = localStorage.getItem("userId");
	var fullName = localStorage.getItem("fullName");
	var unit = localStorage.getItem("unit");
	var remark = localStorage.getItem("remark");
	var price = localStorage.getItem("price");
	
	$(".UserID").val(userId);
	$(".FullName").val(fullName); 
	$(".Unit").val(unit);
	$(".Price").val(price);
	$(".Remark").val(remark); 
}


//Submit Update =============================================
$(document).on("click", "#updateBil", function(event)
{	
	// Clear alerts---------------------
	 $("#alertSuccess").text(""); 
	 $("#alertSuccess").hide(); 
	 $("#alertError").text(""); 
	 $("#alertError").hide(); 
	 
	// Form validation-------------------
	var status = validateFormUpdate(); 
	if (status != true) { 
		 $("#alertError").text(status); 
		 $("#alertError").show(); 
		 return; 
	} 
	
	// If valid------------------------
	var data = "{'UserID':'"+$("#UserID").val().trim()+"','Price':'"+$("#Price").val().trim()+"','Remark':'"+$("#Remark").val().trim()+"'}";
	$.ajax(
 	{
 		url : "http://localhost:8080/IT20426958_PracticalTest_PAF/ElectroG/BillCreation/Update",
 		type : "PUT",
 		data : data, 
 		contentType: "application/json",  
 		dataType : "text",
 		complete : function(response, status)
 		{
 				onUpdateCompleat(response.responseText, status);
 		}
 	});
});


//Lost Users =============================================
function viewlost(){
	$.ajax(
 	{
 		url : "http://localhost:8080/IT20426958_PracticalTest_PAF/ElectroG/BillCreation/LostUser",
 		type : "GET",
 		dataType : "text",
 		complete : function(response, status)
 		{
 				onLostUserCompleat(response.responseText, status);
 		}
 	});
}


//Delete =============================================
$(document).on("click", ".deletelost", function(event)
{	
	// Clear alerts---------------------
	 $("#alertSuccess").text(""); 
	 $("#alertSuccess").hide(); 
	 $("#alertError").text(""); 
	 $("#alertError").hide(); 
	 
	 var userId = $(this).closest("tr").find('td:eq(1)').text();

	 var del = "<UserData><UserID>"+userId+"</UserID></UserData>"
	$.ajax(
 	{
 		url : "http://localhost:8080/IT20426958_PracticalTest_PAF/ElectroG/BillCreation/Delete",
 		type : "Delete",
 		data : del,   
 		contentType: "application/xml",  
 		dataType : "text",
 		complete : function(response, status)
 		{
 				ondeleteCompleat(response.responseText, status);
 		}
 	});
});


function validateFormBill() { 

	if ($("#Price1_30").val().trim() == "") { 
		return "Insert Price1_30 Price."; 	
	}
	
	var priceNu = validateNumber($("#Price1_30").val());
	if (priceNu == false){
		return "Insert Price Corectly."; 
	}
	
	if ($("#Price30_60").val().trim() == "") { 
		return "Insert Price30_60 Price."; 	
	}
	
	var priceNu = validateNumber($("#Price30_60").val());
	if (priceNu == false){
		return "Insert Price Corectly."; 
	}
	
	if ($("#Price60_90").val().trim() == "") { 
		return "Insert Price60_90 Price."; 	
	}
	
	var priceNu = validateNumber($("#Price60_90").val());
	if (priceNu == false){
		return "Insert Price Corectly."; 
	}
	
	if ($("#Price90").val().trim() == "") { 
		return "Insert Price90 Price."; 	
	}
	
	var priceNu = validateNumber($("#Price90").val());
	if (priceNu == false){
		return "Insert Price Corectly."; 
	}
	
	return true; 
}


function validateFormUpdate() { 
	
	if ($("#Remark").val().trim() == "") { 
		return "Insert Remark Price."; 	
	}

	if ($("#Price").val().trim() == "") { 
		return "Insert Price."; 	
	}
	
	var priceNu = validateNumber($("#Price").val());
	if (priceNu == false){
		return "Insert Price Corectly."; 
	}
	
	return true; 
}

function validateNumber(Price){
	
	if(Price.match(/^[0-9]*$/)) {
   		return true;
  	}else { 
   		return false; 
  }
}

function onGetCompleat(response, status)
{
		if (status == "success")
 		{
 			var resultSet = JSON.parse(response);
 
 			if (resultSet.status.trim() == "success")
 			{
 					$("#alertSuccess").text("Successfully Read.");
 					$("#alertSuccess").show();
 
 					$("#divItemsGrid").html(resultSet.data);
 			} else if (resultSet.status.trim() == "error")
 			{
 					$("#alertError").text(resultSet.data);
 					$("#alertError").show();
 			}
 
 		} else if (status == "error")
 		{
 			$("#alertError").text("Error while reading the item.");
 			$("#alertError").show();
 		} else
 		{
 			$("#alertError").text("Unknown error while reading..");
 			$("#alertError").show();
 		} 
 		
 		$("#hidItemIDSave").val("");
 		$("#formItem")[0].reset();
}


function onBillGetCompleat(response, status)
{
		if (status == "success")
 		{
 			var resultSet = JSON.parse(response);
 
 			if (resultSet.status.trim() == "success")
 			{
 					$("#alertSuccess").text("Successfully Created.");
 					$("#alertSuccess").show();
 
 			} else if (resultSet.status.trim() == "Error while Create Bill")
 			{
 					$("#alertError").text("Error while Create Bill");
 					$("#alertError").show();
 			}
 
 		} else if (status == "error")
 		{
 			$("#alertError").text("Error while Create the item.");
 			$("#alertError").show();
 		} else
 		{
 			$("#alertError").text("Unknown error while Cteare..");
 			$("#alertError").show();
 		} 
 		
 		$("#hidItemIDSave").val("");
 		$("#formItem")[0].reset();
}


function onGetBillCompleat(response, status)
{
		if (status == "success")
 		{
 			var resultSet = JSON.parse(response);
 
 			if (resultSet.status.trim() == "success")
 			{
 					$("#alertSuccess").text("Successfully Read.");
 					$("#alertSuccess").show();
 
 					$("#billView").html(resultSet.data);
 			} else if (resultSet.status.trim() == "error")
 			{
 					$("#alertError").text(resultSet.data);
 					$("#alertError").show();
 			}
 
 		} else if (status == "error")
 		{
 			$("#alertError").text("Error while reading the item.");
 			$("#alertError").show();
 		} else
 		{
 			$("#alertError").text("Unknown error while reading..");
 			$("#alertError").show();
 		} 
 		
 		$("#hidItemIDSave").val("");
 		$("#formItem")[0].reset();
}


function onUpdateCompleat(response, status)
{
		if (status == "success")
 		{
 			var resultSet = JSON.parse(response);
 
 			if (resultSet.status.trim() == "success")
 			{
 					$("#alertSuccess").text("Successfully Update.");
 					$("#alertSuccess").show();
 
 					$("#billView").html(resultSet.data);
 			} else if (resultSet.status.trim() == "Error while Update the item")
 			{
 					$("#alertError").text("Error while Update the item");
 					$("#alertError").show();
 			}
 
 		} else if (status == "error")
 		{
 			$("#alertError").text("Error while Update the item.");
 			$("#alertError").show();
 		} else
 		{
 			$("#alertError").text("Unknown error while Update..");
 			$("#alertError").show();
 		} 
 		
 		$("#hidItemIDSave").val("");
 		$("#formItem")[0].reset();
}


function onLostUserCompleat(response, status)
{
		if (status == "success")
 		{
 			var resultSet = JSON.parse(response);
 
 			if (resultSet.status.trim() == "success")
 			{
 					$("#alertSuccess").text("Successfully Read.");
 					$("#alertSuccess").show();
 
 					$("#lostView").html(resultSet.data);
 			} else if (resultSet.status.trim() == "error")
 			{
 					$("#alertError").text(resultSet.data);
 					$("#alertError").show();
 			}
 
 		} else if (status == "error")
 		{
 			$("#alertError").text("Error while reading the item.");
 			$("#alertError").show();
 		} else
 		{
 			$("#alertError").text("Unknown error while reading..");
 			$("#alertError").show();
 		} 
 		
 		$("#hidItemIDSave").val("");
 		$("#formItem")[0].reset();
}


function ondeleteCompleat(response, status)
{
		if (status == "success")
 		{
 			var resultSet = JSON.parse(response);
 
 			if (resultSet.status.trim() == "success")
 			{
 					$("#alertSuccess").text("Successfully Delete.");
 					$("#alertSuccess").show();
 
 					$("#lostView").html(resultSet.data);
 			} else if (resultSet.status.trim() == "Error while Delete")
 			{
 					$("#alertError").text("Error while Delete");
 					$("#alertError").show();
 			}
 
 		} else if (status == "error")
 		{
 			$("#alertError").text("Error while Deleting the item.");
 			$("#alertError").show();
 		} else
 		{
 			$("#alertError").text("Unknown error while Deleting..");
 			$("#alertError").show();
 		} 
 		
 		$("#hidItemIDSave").val("");
 		$("#formItem")[0].reset();
}

