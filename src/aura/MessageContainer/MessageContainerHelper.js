({
	showMessage : function(component, event) {
		var messageCmp = component.find("message");
		$A.util.addClass(messageCmp, 'slds-show');
        $A.util.removeClass(messageCmp, 'slds-hide');
	},
	hideMessage : function(component,event){
		var messageCmp = component.find("message");
		$A.util.addClass(messageCmp, 'slds-hide');
        $A.util.removeClass(messageCmp, 'slds-show');

        component.set("v.title",null);
        component.set("v.message",null);
        component.set("v.severity",null);
	},
	writeMessage: function(component, severity, title, body) {
        var messageCmp = component.find("message");

        if (!messageCmp) {
            return;
        }

        $A.createComponents(
            [
                ["ui:outputText", {
                    "value": body
                }]

            ],
            function(newComponent, status, errorMessage) {
                if (status === "ERROR") {
                    console.error(errorMessage);
                    // Show error message
                }
                messageCmp.set("v.severity", severity);
                messageCmp.set("v.title", title);
                messageCmp.set("v.body", newComponent);
            }
        );
    }
})