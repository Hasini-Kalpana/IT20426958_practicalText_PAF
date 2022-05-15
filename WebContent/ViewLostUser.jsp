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
<body onload="viewlost()">

<br>
<h1 class="companiName">Electro Gird (PVT)Ltd</h1>
<h2 class="companiName">All Lost Users</h2><br><br>

		<div id="alertSuccess" class="container alert alert-success"></div><br>
		<div id="alertError" class="container alert alert-danger"></div>
		
<div id="lostView">

</div>

</body>
</html>