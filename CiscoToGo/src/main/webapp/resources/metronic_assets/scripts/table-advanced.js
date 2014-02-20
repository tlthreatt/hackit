var TableAdvanced = function () {

  var initServiceTable = function() {
	
	        /* Formatting function for row details */
	        function fnFormatDetails ( oTable, nTr )
	        {
	            var aData = oTable.fnGetData( nTr );
//	            var sOut = "<table>";
//	            sOut += '<tr><td>SID:</td><td>'+aData[22]+'</td></tr>';
//	            sOut += '<tr><td>BID:</td><td>'+aData[21]+'</td></tr>';
//	            sOut += '<tr><td>Activation Date:</td><td>'+aData[7]+'</td></tr>';
//	            sOut += '<tr><td>TP Model:</td><td>'+aData[19]+'</td></tr>';
//	            sOut += '<tr><td>ZIP:</td><td>'+aData[8]+'</td></tr>';
//	            sOut += '<tr><td>City:</td><td>'+aData[9]+'</td></tr>';
//	            sOut += "<tr><td>Room Name:</td><td>"+aData[10]+'</td></tr>';
//	            sOut += '<tr><td>Mail Code (EC1):</td><td>'+aData[11]+'</td></tr>';
//	            sOut += '<tr><td>UserID:</td><td>'+aData[12]+'</td></tr>';
//	            sOut += '<tr><td>CID:</td><td>'+aData[20]+'</td></tr>';
//	            sOut += '<tr><td>Cisco Sales Order:</td><td>'+aData[13]+'</td></tr>';
//	            sOut += '<tr><td>Country:</td><td>'+aData[14]+'</td></tr>';
//	            sOut += "<tr><td>State:</td><td>"+aData[15]+'</td></tr>';
//	            sOut += '<tr><td>Street:</td><td>'+aData[16]+'</td></tr>';
//	            sOut += '<tr><td>Department:</td><td>'+aData[17]+'</td></tr>';
//	            sOut += '<tr><td>CustomerID:</td><td>'+aData[18]+'</td></tr>';
//	            sOut += '</table>';
	             
	            var sOut = "<table>";
	            sOut += '<tr><td>SID:</td><td>'+aData[22]+'</td><td>Room Name:</td><td>'+aData[10]+'</td><td>State:</td><td>'+aData[15]+'</td></tr>';
	            sOut += '<tr><td>BID:</td><td>'+aData[21]+'</td><td>Mail Code (EC1):</td><td>'+aData[11]+'</td><td>Street:</td><td>'+aData[16]+'</td></tr>';
	            sOut += '<tr><td>Activation Date:</td><td>'+aData[7]+'</td><td>UserID:</td><td>'+aData[12]+'</td><td>Department:</td><td>'+aData[17]+'</td></tr>';
	            sOut += '<tr><td>TP Model:</td><td>'+aData[19]+'</td><td>CID:</td><td>'+aData[20]+'</td><td>CustomerID:</td><td>'+aData[18]+'</td></tr>';
	            sOut += '<tr><td>ZIP:</td><td>'+aData[8]+'</td><td>Cisco Sales Order:</td><td>'+aData[13]+'</td></tr>';
	            sOut += '<tr><td>City:</td><td>'+aData[9]+'</td><td>Country:</td><td>'+aData[14]+'</td></tr>';
	            sOut += '</table>';
	            
	            return sOut;
	        }
	
	
	         
	        /*
	         * Initialize DataTables, with no sorting on the 'details' column
	         */
	        var oTable = $('#sample_1').dataTable( {
	        	"aaData": [],
	        	"aoColumns": [
	        	              { "sTitle": "Row No" },
	        	              { "sTitle": "Region ID" },
	        	              { "sTitle": "Legal Entity" },
	        	              { "sTitle": "Delete Date" },
	        	              { "sTitle": "CaaS Update Date" },
	        	              { "sTitle": "Bundle Code" }        	             
	        	              ],
	            "aoColumnDefs": [
	                {"bSortable": false, "aTargets": [ 0 ] }
	            ],
	            "aaSorting": [[1, 'asc']],
	             "aLengthMenu": [
	                [10, 20, -1],
	                [10, 20, "All"] // change per page values here
	            ],
	             //set the initial value
	            "iDisplayLength": 10,
	            "fnDrawCallback": function( oSettings ) {          		            	
	            	$('#sample_1 tbody tr').each(function() {           
	            		if ($(this).children().length == 6) {
		        	        var nCloneTd = document.createElement( 'td' );
		        	        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';
		        	        
		    	            var disputeTd = document.createElement('td');
		    	            var disputeTdCheckbox = document.createElement('input');
		    	            disputeTdCheckbox.setAttribute("type", "checkbox");
		        	        disputeTd.appendChild(disputeTdCheckbox);
		        	        
		        	        this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
	        	            this.appendChild(disputeTd.cloneNode(true));		        	
	            		}
	            	
	            	});
	            	
	            	App.initUniform();	            
		         }
	        });
	
	        var nCloneTh = document.createElement( 'th' );
            var disputeTh = document.createElement('th');
            
            disputeTh.innerHTML = 'Dispute';
	        $('#sample_1 thead tr').each( function () {
	            this.insertBefore( nCloneTh, this.childNodes[0] );
	            this.appendChild(disputeTh);
	        } );
	        
	        jQuery('#sample_1_wrapper .dataTables_filter input').addClass("form-control input-small"); // modify table search input
	        jQuery('#sample_1_wrapper .dataTables_length select').addClass("form-control input-small"); // modify table per page dropdown
	        jQuery('#sample_1_wrapper .dataTables_length select').select2(); // initialize select2 dropdown
	         
	       
	        
	        /* Add event listener for opening and closing details
	         * Note that the indicator for showing which row is open is not controlled by DataTables,
	         * rather it is done here
	         */
	        $('#sample_1').on('click', ' tbody td .row-details', function () {
	            var nTr = $(this).parents('tr')[0];
	            if ( oTable.fnIsOpen(nTr) )
	            {
	                /* This row is already open - close it */
	                $(this).addClass("row-details-close").removeClass("row-details-open");
	                oTable.fnClose( nTr );
	            }
	            else
	            {
	                /* Open this row */                
	                $(this).addClass("row-details-open").removeClass("row-details-close");
	                oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
	                
	                $(nTr).next().find('.details').attr('colspan', '8');
	            }
	        });
	    };


    return {

        //main function to initiate the module
        init: function () {
            
            if (!jQuery().dataTable) {
                return;
            }

            initServiceTable();
        }

    };

}();