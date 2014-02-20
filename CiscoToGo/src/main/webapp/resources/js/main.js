// Overriding Underscore to use templates with jsp
// Reference URL: http://stackoverflow.com/questions/5771742/underscore-js-templates-within-jsp
//_.templateSettings = {
//    interpolate: /\<\@\=(.+?)\@\>/gim,
//    evaluate: /\<\@(.+?)\@\>/gim,
//    escape: /\<\@\-(.+?)\@\>/gim
//};
//
//
//// starting backbone
//SearchView = Backbone.View.extend({
//	initialize : function() {
//		this.render();
//	},
//	render : function() {
//		var template = _.template($("#search_template").html(), {});
//		this.$el.html(template);
//	},
//	events : {
//		"click input[type=button]" : "doSearch"
//	},
//	doSearch : function(event) {
//		// Button clicked, you can access the element that was clicked with
//		// event.currentTarget
//		alert("Search for " + $("#search_input").val());
//	}
//});
//
//AccordionComponentView = Backbone.View.extend({
//	initialize : function() {
//		this.render();
//	},
//	render : function() {
//		var template = _.template($("#report_view").html(), {});
//		this.$el.html(template);
//	},
//	events : {
//		"click input[type=button]" : "doSearch"
//	},
//	doSearch : function(event) {
//		// Button clicked, you can access the element that was clicked with
//		// event.currentTarget
//		alert("Search for " + $("#search_input").val());
//	}
//});

//var search_view = new SearchView({
//	el : $("#search_container")
//});

// JQuery Setup is here
$(function() {
	// cache our accordion element within this closure
	var accordionElem = $( "#accordion" );
	var infoStatusContainer = $( "#info_status_container" );
	var contactLabel = $( "#contact" );
	var searchField = $( "#search_container" );
	
	function performAjaxRequest(reqType, url,dateType,callbackfunctionName,emptyMsg){
		ajaxRequest = $.ajax({
			type : reqType,
			url : url,
			dataType : dateType,
			beforeSend: function(){
				$('#loading').spin('small');
			},
			complete: function(){
				$('#loading').spin(false);
			},
			success : function (ajaxResponse) {
	            if (callbackfunctionName != null) {
	                if (ajaxResponse != "") {
	                    callbackfunctionName(ajaxResponse);
	                } else {
	                	infoStatusContainer.html(emptyMsg)
	                	.addClass( "ui-state-error" ).animate('shake');
	                }
	            }
	            
			},
			error : function(request){
				infoStatusContainer.html("<p>" + request.responseText + "</p>")
				.addClass( "ui-state-error" ).animate('shake');
			}
		});
	}
	performAjaxRequest(
			"GET",
			"getPartnerUrls/",
			"json",
			function(data) {
				searchField.show("fast");
				
				// convert data to proper format for accordion
				for(var c = 0; c < data.length; c++) 
				{ 
					data[c] = data[c].url;
				}


				// init autocomplete on the input box
				$("#autocomplete").autocomplete({
					source : data,
					minLength: 0,
					select : function(event, ui){

						function cleanUpAccordion(){
							if( accordionElem.children().length > 0 ){
								accordionElem.accordion( "destroy" );
								accordionElem.html( "" );
							}
						}
						
						if(	infoStatusContainer.hasClass("ui-state-error")){
							infoStatusContainer.removeClass("ui-state-error");
						}
						
						infoStatusContainer.html("<p>You are viewing reports for <strong>" + ui.item.value + "</strong> site.</p>")
							.addClass( "ui-state-highlight" ).effect('highlight');
									
						contactLabel.html("");	
						cleanUpAccordion();

						// Private function: setter for the reports urls
						// in: site url
						// out: server side url
						function setReportsUrl(siteURL){
							// first argument passed in is a ui var provided by autocmoplete select 
							return "getReports/" + siteURL + "/";
						};
						
						function clearInputSearchBox(){
							$('#search_container > input').val('');
						};
						
						
						performAjaxRequest("GET", setReportsUrl(ui.item.value), "json",		
							function(data) {
								clearInputSearchBox();
								
								// clean DOM and accordion object
								cleanUpAccordion();
								
								
								// build the elements
								var reportSkeleton = "";
								// check if there is returning objects
								if(data.length > 0){
									for(var c = 0; c < data.length; c++){
										reportSkeleton += "<h3>" + data[c].reportName +"</h3>";
										var linksSkeleton = "";
										for(var i = 0; i < data[c].reports.length; i++){
											linksSkeleton += "<a href=\"downloadFile" + "/" +
												data[c].reports[i].type + "/" +
												data[c].reports[i].site + "/" +
												data[c].reports[i].name + "/" +
												"\" class=\"downloadFileLink\">" + 
												data[c].reports[i].reportStartDate + 
												"&nbsp;-&nbsp;" + 
												data[c].reports[i].reportEndDate +
												"</a>";
											// add space between links if not last link
											if(i < data[c].reports.length - 1){
												linksSkeleton += "&nbsp;&nbsp;&nbsp;";
											}
										}
										
										reportSkeleton += "<div>" + linksSkeleton + "</div>";
									}
									
									accordionElem.append(reportSkeleton);
									accordionElem.accordion({
										event: "click hoverintent"
									});
									
									$(".downloadFileLink").on("click", function() {										
										$.fileDownload($(this).attr('href'), {
								            successCallback: function(url) {								            	
								            },
								            failCallback: function(responseHtml, url) {
								                $("#error-modal").dialog({ 
								                	buttons: [{ 
								                				text: "OK", 
								                				click: function() {
								                	        	  $(this).dialog( "close" ); 
								                	        	} 
								                	}], 
								                	modal: true 
								                });
								            }
								        });
										
										return false;
									});
								}
								
								contactLabel.html("<h4>To access reports that aren't provided by this application, please contact itds-cits-support@cisco.com.</h4>");
								
							},
							"<p>Sorry, your selected site is not associated with any reports. Please contact itds-cits-support@cisco.com. </p>"
						);
					}
			    });
			},
			"<p>Sorry, your username is not associated with any sites. Please contact itds-cits-support@cisco.com. </p>"
	);
		
	// hover enter event
	$.event.special.hoverintent = {
		setup : function() {
			$(this).bind("mouseover", jQuery.event.special.hoverintent.handler);
		},
		teardown : function() {
			$(this).unbind("mouseover", jQuery.event.special.hoverintent.handler);
		},
		handler : function(event) {
			var currentX, currentY, timeout, args = arguments, target = $(event.target), previousX = event.pageX, previousY = event.pageY;

			function track(event) {
				currentX = event.pageX;
				currentY = event.pageY;
			};

			function clear() {
				target.unbind("mousemove", track).unbind("mouseout", clear);
				clearTimeout(timeout);
			}

			function handler() {
				var prop, orig = event;

				if ((Math.abs(previousX - currentX) + Math
						.abs(previousY - currentY)) < 7) {
					clear();

					event = $.Event("hoverintent");
					for (prop in orig) {
						if (!(prop in event)) {
							event[prop] = orig[prop];
						}
					}
					// Prevent accessing the original event since the new event
					// is fired asynchronously and the old event is no longer
					// usable (#6028)
					delete event.originalEvent;

					target.trigger(event);
				} else {
					previousX = currentX;
					previousY = currentY;
					timeout = setTimeout(handler, 100);
				}
			}

			timeout = setTimeout(handler, 100);
			target.bind({
				mousemove : track,
				mouseout : clear
			});
		}
	};
	
});


