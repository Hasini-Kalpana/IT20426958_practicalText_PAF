<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/BillManagement.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/BillManagement.js"></script>
<title>Insert title here</title>
</head>
<body onload="getdata()">

<br>
<h1 class="companiName">Electro Gird (PVT)Ltd</h1>
<h2 class="companiName">Billing Management</h2><br>
<h2 class="PageName">-- Calculate The Bill --</h2>

		<div id="alertSuccess" class="container alert alert-success"></div><br>
		<div id="alertError" class="container alert alert-danger"></div>


<div class="aCalculatBillForm">		
<form id="calbillForm">
 
  <div class="row justify-content-between text-left CalculatBillForm" >
    <div class="colum1">
  
	    <div class="mb-3">
	      <label for="disabledTextInput" class="form-label">User ID :</label>
	      <input type="text" id="UserID" name="UserID" class="UserID form-control" disabled>
	      <input type="hidden" id="UserID" name="UserID" class="UserID form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Full name :</label>
	      <input type="text" id="FullName" name="FullName" class="FullName form-control" disabled>
	      <input type="hidden" id="FullName" name="FullName" class="FullName form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">City :</label>
	      <input type="text" id="City" name="City" class="City form-control" disabled>
	      <input type="hidden" id="City" name="City" class="City form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Mobile Number :</label>
	      <input type="text" id="MobileNumber" name="MobileNumber" class="MobileNumber form-control" disabled>
	      <input type="hidden" id="MobileNumber" name="MobileNumber" class="MobileNumber form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Unit :</label>
	      <input type="text" id="Unit" name="Unit" class="Unit form-control" disabled>
	      <input type="hidden" id="Unit" name="Unit" class="Unit form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Remark :</label>
	      <input type="text" id="Remark" name="Remark" class="Remark form-control" disabled>
	      <input type="hidden" id="Remark" name="Remark" class="Remark form-control" >
	    </div>
    </div>
      

    <div class="colum2">
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Price Up To 1-30 Unit :</label>
	      <input type="text" id="Price1_30" name="Price1_30" class="form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Price Up To 30-60 Unit :</label>
	      <input type="text" id="Price30_60" name="Price30_60" class="form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Price Up To 60-90 Unit :</label>
	      <input type="text" id="Price60_90" name="Price60_90" class="form-control" >
	    </div>
	    <div class="mb-3">
	      <label for="disabledSelect" class="form-label">Unit Price > 90 :</label>
	      <input type="text" id="Price90" name="Price90" class="form-control" >
	    </div>
	        <input type="button" id="creBill" name="creBill" value="Create Bill" class="creBill btn btn-primary BilBut">
    </div>
</div>
 

</form><br>
</div>
</body>
</html>



