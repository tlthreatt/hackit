<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- $Revision: 1.25 $ -->
<!-- MASTER BRAND VENDOR KIT - 1.x -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<!--  Suppress Javascript Errors -->
	<script type="text/javascript"> 
   	    window.onerror = function(message, url, lineNumber) {    
    	        // code to execute on an error    
    	        return true; // prevents browser error messages    
   	    };  
  	</script>  

  <!-- ***TITLE*** -->
  <title>WebEx Billing &amp; Usage Reports</title>
  <!-- ***END TITLE*** -->

  <!-- ***META INFO*** -->
  <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
  <meta name="accessLevel" content="Partner"/>
  <meta name="country" content="US"/>
  <meta name="locale" content="US"/>
  <meta name="language" content="en"/>
  <meta name="title" content="WebEx Billing and Usage Reports"/>
  <meta name="date" content="Thu Aug 21 12:56:35 PDT 2013"/>
  <meta name="myMeta" content="Search by WebEx URL and download usage reports by month."/>
  <!-- ***END META INFO*** -->

 
  <!-- begin: assets - framework -->
  <script type="text/javascript" src="//www.cisco.com/web/fw/j/painted.mb1.48.min.js"></script>
  <link rel="stylesheet" type="text/css" href="//www.cisco.com/web/fw/c/painted.mb1.45.min.css" />
  <link rel="stylesheet" type="text/css" href="//www.cisco.com/web/fw/w/cl/painted.cl.min.css" />
  <link rel="search" type="application/opensearchdescription+xml" title="Search Cisco.com" href="//www.cisco.com/web/tsweb/searchplugins/cdc_search.xml" />
  <!-- end: assets - framework -->

  <!-- ***BEGIN NON-FRAMEWORK ASSETS*** -->
  	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/js/vendor/jquery-ui-1.10.3.custom/css/partners-central-theme/jquery-ui-1.10.3.custom.min.css" />" />
  
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="<c:url value="/resources/js/vendor/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js" />" ></script>
					
	<script src="<c:url value="/resources/js/vendor/spin.min.js" />"></script>
	<script src="<c:url value="/resources/js/vendor/jquery.spin.js" />"></script>
	
	<script src="<c:url value="/resources/js/vendor/jquery.fileDownload.js" />"></script>
	
	
	
	<!-- Our JavaScript Code Starts Here -->
	<script src="<c:url value="/resources/js/main.js" />"></script>
  <!-- ***END NON-FRAMEWORK ASSETS*** -->

  <style type="text/css">
    /*this is a temporary fix until the prod framework can be updated.*/
    #fw-mb-w1 #framework-content-main { margin-top:0; }
    #fw-mb-w1 #framework-footer { margin-bottom:12px; }
  </style>
  <script>cdc.ut.config.set("send", {ntpagetag:true});</script>
  <script type="text/javascript">cdc.util.useBackpack=true;</script>
</head>
<body id="w1x" class="cdc-fw cdc-vkit"><!--googleoff: index--><!--googleoff: snippet -->
  <!--[if gte IE 9]><div id="gte-ie9" class="ie"><![endif]-->
  <!--[if IE 8]><div id="ie8" class="ie"><![endif]-->
  <!--[if IE 7]><div id="ie7" class="ie ie67"><![endif]-->
  <!--[if lte IE 6]><div id="ie6" class="ie ie67"><![endif]--> 
  <div id="fw-mb">
    <div id="fw-mb-w1">

      <!-- begin: masterbrand banner -->
      <div id="fw-banner">
        <div id="fw-banner-w1">

          <!-- skiplinks -->
          <div id="fw-mbsk">
            <p><a href="http://www.cisco.com" tabindex="3">Home</a> <a href="#content">Skip to content</a> <a href="#hinav">Skip to navigation</a> <a href="#pagefooter">Skip to footer</a></p>
          </div>

          <!-- logo -->
          <div id="fw-mbl">
            <p><a href="http://www.cisco.com">Cisco.com Worldwide Home</a></p>
          </div>

          <!-- megamenus -->
          <div id="fw-mm">
            <table class="mm-items" cellspacing="0" summary="">
              <tr>
                <td class="mm-item" id="products-mm-item"><a href="http://www.cisco.com/en/US/products/index.html" class="mm-link">Products &amp; Services</a> <a href="//www.cisco.com/web/fw/co/painted-menu-content.html#products-mm-menu" class="mm-reflink">(menu)</a> </td>
                <td class="mm-item" id="support-mm-item"><a href="http://www.cisco.com/cisco/web/support/index.html" class="mm-link">Support</a> <a href="//www.cisco.com/web/fw/co/painted-menu-content.html#support-mm-menu" class="mm-reflink">(menu)</a> </td>
                <td class="mm-item" id="ordering-mm-item"><a href="http://www.cisco.com/en/US/ordering/index.shtml" class="mm-link">How to Buy</a> <a href="//www.cisco.com/web/fw/co/painted-menu-content.html#ordering-mm-menu" class="mm-reflink">(menu)</a> </td>
                <td class="mm-item" id="training-mm-item"><a href="http://www.cisco.com/en/US/learning/index.html" class="mm-link">Training &amp; Events</a> <a href="//www.cisco.com/web/fw/co/painted-menu-content.html#training-mm-menu" class="mm-reflink">(menu)</a> </td>
                <td class="mm-item" id="partner-mm-item"><a href="http://www.cisco.com/en/US/partners/index.html" class="mm-link">Partners</a> <a href="//www.cisco.com/web/fw/co/painted-menu-content.html#partner-mm-menu" class="mm-reflink">(menu)</a> </td>
              </tr>
            </table>
          </div>
          <!-- end #fw-mm -->

          <!-- search -->
          <span class="search-entitlement">Guest</span> 
          <div id="fw-mbs">
            <form name="sitewidesearch" action="http://tools.cisco.com/search/JSP/search-results.get" method="get" id="sitewidesearch"><label for="searchPhrase" name="search" id="search">Search</label> 
            <p class="field-button"><input type="text" tabindex="1" name="strQueryText" class="field-button-field" id="searchPhrase" value="" autocomplete="off"> <input type="submit" tabindex="2" value="Search" class="field-button-button" id="go"></p>
            <input type="hidden" value="cisco.com" name="Search All cisco.com"> <input type="hidden" value="en" name="language"> <input type="hidden" value="US" name="country"> <input type="hidden" value="f" name="thissection"> <input type="hidden" value="Guest" name="accessLevel"></form>
          </div><!-- end #fw-mbs -->
          <script type="text/javascript">
            if ((typeof cdc.search) == "undefined"){
               cdc.search = new Object();
            }
            cdc.search.country = "US";
            cdc.search.language = "en";
          </script>
          <!-- end search -->

          <!-- toolbar -->
			<div id="fw-ft-basic">
				<div class="ft-toolbar">
					<div class="ft-group ft-country-lang-group">
						<div class="ft-sect ft-country"><a href="http://cisco.com/en/US/swassets/sw274/sitewide_country_language_selector.html" class="ft-label"><span class="ft-country-name">Worldwide</span> <span class="ft-country-change">[change]</span></a></div>
					</div>
			
					<div class="ft-group ft-entitled-group">
<!--  						<div class="ft-sect ft-welcome ft-active"><span class="ft-label">Logged In</span></div>  -->
			
						<div class="ft-sect ft-account"><a href="http://www.cisco.com/web/siteassets/account/index.html" class="ft-label">Account</a></div>
						<div class="ft-sect ft-logout"><a href="https://www.cisco.com/autho/logout.html?ReturnUrl=http://www.cisco.com/web/fw/lo/logout.html" class="ft-label">Log Out</a></div>
							<div class="ft-sect"><a href="http://www.cisco.com/cisco/psn/web/workspace" class="ft-label">My Cisco</a></div>
					</div>
				</div>
			</div>
          <!-- end toolbar -->


        </div><!-- end #fw-banner-w1 -->
      </div><!-- end #fw-banner -->
      <!-- end: masterbrand banner -->


      <!-- ***PAGE CONTENT HEADER -->
      <div id="mb-title-nav-bar" class="clearfix">
        <div id="framework-content-titles"><!--googleon: index--><!--googleon: snippet-->
          <h1 class="title-section">WebEx Billing &amp; Usage Reports</h1><!--googleoff: index--><!--googleoff: snippet-->
        </div>
      </div>
      <!-- ***END PAGE CONTENT HEADER -->


      <table id="framework-base-main" cellspacing="0" cellpadding="0" border="0" summary="">
        <tr>
          <td id="framework-column-left" valign="top"><a name="hinav"></a>

            <!-- ***HI-NAV CONTENT*** -->
            <div class="hinav">
                <h3>Hierarchical Navigation</h3>
                <ul class="outer">
                <li><a href="http://www.cisco.com/en/US/hmpgs/index.html" class="parent">HOME</a>
                    <ul>
                    <li><a href="http://www.cisco.com/web/partners/" class="parent">PARTNER CENTRAL</a>
                        <ul>
                        <li><a href="http://www.cisco.com/web/partners/tools/" class="parent">Partner Tools</a>
                            <ul>
                            <li><strong><a href="" class="selected">WebEx Billing &amp; Usage Reports</a></strong></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                </ul>
                
            </div>
            <!-- ***END HI-NAV CONTENT*** -->
				
          </td>
          
          <!-- end #framework-column-left -->
          
          <td id="framework-column-center">
            <table cellspacing="0" id="framework-base-content">
              <tr>
                <td id="framework-column-main"><a name="content"></a><!--googleon: index--><!--googleon: snippet-->
                  <div id="framework-content-main">


                    <!-- ***MAIN CONTENT SAMPLE*** -->
					<div style="width: 540px; margin-bottom: 20px;">
						<div style="color:#000000;font-family:Arial,Helvetica,sans-serif;font-size:1.333em; font-weight:normal; width:100%; padding:3px 4px 10px 4px;">Search using WebEx site name, then download monthly usage reports.</div>
						<div id="appContent">
	
							<div id="search_container" style="display: none;">
								<label>Please start typing the URL to your site	here: </label> 
								<input style="width:291px; border-radius: 4px;"	id="autocomplete" title="Start typing &quot;your.site.com&quot;" />
							</div>
							
							<div id="info_status_container" class="ui-corner-all" style="padding-bottom: 15px; margin-bottom: 25px; margin-top: 10px; padding: 0 .7em;">
							</div>
							
							<div id="loading">
							</div>
							
							<div id="accordion">
							</div>
							
							<div id="contact">
							</div>
							 
							<div id="error-modal" title="Error" style="display: none;"> 
							    There was a problem generating your report, please contact itds-cits-support@cisco.com for assistance.
							</div>
						</div>
					</div>
					                   
                    <!-- ***END MAIN CONTENT SAMPLE*** -->

                    <!-- End of the actual text content --><!--googleoff: index--><!--googleoff: snippet-->
                  </div> <!-- end #framework-content-main -->
                </td> <!-- end #framework-column-main -->

                <td id="framework-column-right">
                  <div id="framework-content-right">
                  		<div id="img" style="padding: 20px; margin-top: 30px; margin-bottom: 100px">
							<img src="<c:url value="/resources/images/stacked_reports.png" />" />
						</div>
                  </div><!-- end #framework-content-right -->
                </td><!-- end #framework-column-right -->
              </tr>
            </table><!-- end #framework-base-content -->

          </td><!-- end #framework-column-center -->
        </tr>
      </table><!-- end #framework-base-main -->

      <!-- begin: masterbrand fatfooter -->
      <div id="ff"></div>
      <script type="text/javascript">
        cdc.ff.setMarker("//www.cisco.com/web/fw/co/painted-fatfooter-content.html"); // fatfooter location
        cdc.ff.init();
      </script>
      <!-- end: masterbrand fatfooter -->

      <!-- begin: legal footer-->
      <a name="pagefooter"></a>
      <div id="framework-footer">
        <div id="footer-nav">
          <a href="http://www.cisco.com/web/siteassets/contacts/index.html">Contacts</a> | 
          <a href="http://tools.cisco.com/cdc/feedbk/public/FeedbackAction.cdcfdb">Feedback</a> | 
          <a href="http://www.cisco.com/web/help/index.html">Help</a> | 
          <a href="http://www.cisco.com/web/siteassets/sitemap/index.html">Site Map</a> | 
        </div>
        <div id="footer-legal"><a href="http://www.cisco.com/web/siteassets/legal/terms_condition.html">Terms &amp; Conditions</a> |
           <a href="http://www.cisco.com/web/siteassets/legal/privacy.html">Privacy Statement</a> |
           <a href="http://www.cisco.com/web/siteassets/legal/privacy.html#cookies">Cookie Policy</a> |
           <a href="http://www.cisco.com/web/siteassets/legal/trademark.html">Trademarks</a></div>
      </div>
      <!-- end: legal footer-->

    </div><!-- end #fw-mb-w1 -->
  </div><!-- end #fw-mb -->
    
  <!--[if IE]></div><![endif]-->

  </body>
</html>
