<%@ 
	page language="java" contentType="text/html; charset=ISO-8859-1"
    	pageEncoding="ISO-8859-1"
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/BillManagement.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/BillManagement.js"></script>
<title>Bill Management main</title>
</head>
<body onload="getdataUpdate()">

<br>
<h1 class="companiName">Electro Gird (PVT)Ltd</h1>
<h2 class="companiName">Update Bill</h2><br><br>

<div id="alertSuccess" class="container alert alert-success"></div><br>
<div id="alertError" class="container alert alert-danger"></div>


<div class="aCalculatBillForm">		
<form id="UpdateB">
 
  <div class="CalculatBillForm1" >
  
	    <div class="mb-3">
	      <label for="disabledTextInput" class="form-label">User ID :</label>
	      <input type="text" id="UserID" name="UserID" class="UserID form-control" disabled>
	      <input type="hidden" id="UserID" name="UserID" class="UserID form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Full name :</label>
	      <input type="text" id="FullName" name="FullName" class="FullName form-control" disabled>
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Unit :</label>
	      <input type="text" id="Unit" name="Unit" class="Unit form-control" disabled>
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Remark :</label>
	      <input type="text" id="Remark" name="Remark" class="Remark form-control">
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Price :</label>
	      <input type="text" id="Price" name="Price" class="Price form-control" >
	    </div>
	        <input type="button" id="updateBil" name="updateBil" value="Create Bill" class="updateBil btn btn-primary BilBut1">
</div>
 

</form><br>
</div>

</body>
</html>