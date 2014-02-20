/**
Custom module for you to write your own javascript functions
**/

var disputedItems = [];


var Custom = function () {
	
	//gets the contact info for the contact info file
	
	function fillBuildingTiles(){
		var index,tileColor;
		for(index = 0; index < 4; index++){
			switch(index % 4){
			case 0:
				tileColor = "bg-dark";
				break;
			case 1:
				tileColor = "bg-blue";
				break;
			case 2:
				tileColor = "bg-purple";
				break;
			case 3:
				tileColor = "bg-green";
				break;
			}
			$(".planTiles").find('ul').append(
					'<li>'+
					'<div class="tileContainer">'+
						'<div class="tileCard">'+
							'<div class="tile '+ tileColor +' frontFlip faceFlip">' +
								'<div id="testTile" class="tile-body">'+
									'<h4>Building __</h4>'+
									'<div class="tile-object">'+
										'<div class="infoFlip">'+
											'<i class="fa fa-info-circle clickFlip"></i>'+
										'</div>'+
									'</div>'+
									
									
								'</div>'+
							'</div>'+
							'<div class="tile '+ tileColor +' backFlip faceFlip">' +
								'<div class="tile-body">'+
									'<div class="closeFlip">'+
										'<i class="fa fa-times clickFlip"></i>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</li>'
				);
			
			//Fill in front of tile
			$('.planTiles .frontFlip').each(function(index) {
				var tileObject = $(this);
				tileObject.find('.tile-body').fadeIn();
				tileObject.find('.tile-object').fadeIn();        				
			});
			
			//Fill in back of tile
			$('.planTiles .backFlip').each(function(index) {
				var tileObject = $(this);
				tileObject.find('.tile-body').fadeIn();
				tileObject.find('.tile-object').fadeIn();        				
			});
		}
	}
	
	
    // public functions
    return {

        //main function
        init: function () {     
            
        },
                
        getFoodData: function(){
        	//GET FOOD INFO
        	var FoodDetails = {
        		getFoodDetails: function() {
        			var promise = $.ajax({
        				url: 'getFoodDetails/'
        			});
        			
        			return promise;
        		}
        	};
        	
        	$('#invoiceLoadImage').fadeIn();
        	$.when(FoodDetails.getFoodDetails())
        	.then(function(foodResults) {
    			$("#invoiceLoadImage").fadeOut();    			
    			$('.title-section').fadeIn();

    			//populate contact tile
    			$('#contactTile').fadeIn();
    			
    			//populate big blue tile
    			$('#invoiceSummaryTile').fadeIn(); 
    			
    			//populate top tiles
    			fillBuildingTiles();
    			//initialize bxslider
				$('.bxslider').show();
	            $('.bxslider').bxSlider({
	                minSlides: 1,
	                maxSlides: 3,
	                slideWidth: 227,
	                slideMargin: 10,
	                moveSlides: 1,
	                responsive: true,
	                infiniteLoop: false,
	                hideControlOnEnd: true
	            });
	            
	            //click event for tile flipping
	            $('.clickFlip').on('click', function() {    	            	
	        	    $(this).closest('.tileContainer').toggleClass('active');
	        	});

    			
        	});
        },
        
       

    };

}();
