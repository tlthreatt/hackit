package com.cisco.fcm.mvc.controller;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FCMController {
	@Autowired
    @Qualifier("FCMiservicesConsumerServiceImpl")

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		return "login_fcm.html";
	}
	
	@RequestMapping(value = "/dashboard_fcm.html", method = RequestMethod.POST)
//	@RequestMapping(value = "/dashboard_fcm.html", method = RequestMethod.GET)
	public String dashboard(HttpServletRequest request, HttpServletResponse response) {		
		request.getSession().setAttribute("accountID", request.getParameter("accountID"));
		
		return "dashboard_fcm.html";
	}
	
	@RequestMapping(value="/getFoodDetails", method = RequestMethod.GET)
	public @ResponseBody String getUnbilledEvents(HttpServletRequest request, HttpServletResponse response){
		return "success";
	}
	
	
}
