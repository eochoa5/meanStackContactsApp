
var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope', '$http',
function($scope, $http){
	console.log("hello world from controller");
	
	var refresh =  function(){
		$http.get('/contactlist').then(function (response) {
	            $scope.contactlist = response.data;
	             $scope.contact = null;﻿
				
	            
	        }, function(response) {
	            //some error
	            
	        });
	};

	refresh();

	$scope.addContact = function(){
		$http.post('/contactlist', $scope.contact).then(function (response) {
           console.log(response);
           refresh();
			
            
        }, function(response) {
            //some error
            
        });

	};
	

	$scope.remove= function(id){
		$http.delete('/contactlist/'+id).then(function (response) {
           //
           refresh();
			
            
        }, function(response) {
            //some error
            
        });

	};

	

	$scope.edit = function(id) {
 		 console.log(id);
 		 document.getElementById('updateBtn').disabled = false;
 		 document.getElementById('addBtn').disabled = true;
  		$http.get('/contactlist/' + id).then(function (response) {
           //
           $scope.contact = response.data;
			
            
        }, function(response) {
            //some error
            
        });
	}; 

	$scope.update = function() {
		document.getElementById('updateBtn').disabled = true;
		document.getElementById('addBtn').disabled = false;
  		console.log($scope.contact._id);
 		 $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function (response) {
           refresh();
			  
        }, function(response) {
            //some error
            
        });
	}; 

	$scope.deselect = function() {
 		 $scope.contact = null;
	}


			
}]);