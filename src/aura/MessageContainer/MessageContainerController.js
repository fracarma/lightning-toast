({
	displayMessage : function(component, event, helper) {
		var params = event.getParam('arguments');
		if(!params){
			return;
		}
		var severity = params.severity;
		var title = params.title;
		var message = params.message;

		var toastClass = (severity === 'confirm') 	? 'slds-notify slds-notify--toast slds-theme--success' :
						 (severity === 'error') 	? 'slds-notify slds-notify--toast slds-theme--error' :
						 'slds-notify slds-notify--toast';

		component.set("v.severity",severity);
		component.set("v.title",title);
		component.set("v.message",message);
		component.set("v.toastClass",toastClass);
		helper.showMessage(component,event);

		setTimeout(function(){ 
			helper.hideMessage(component,event); 
		}, 5000);
	},
	hideMessage : function(component,event,helper){
		helper.hideMessage(component,event);
	}


})