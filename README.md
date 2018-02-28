# lightning-toast

A lightning component that can be used instead of e.force:showToast, as it is not available in LightningOut

<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce" src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

![lightningtoasterror](https://user-images.githubusercontent.com/12348998/36779957-ef8875cc-1c71-11e8-97a7-cb98b97680f2.PNG)

# How to use it

Put in your lightning component the container:

```
<c:MessageContainer aura:id="messageContainer"/>
```

Then, when needed, call its method displayMessage:

```
var toastEvent = $A.get("e.force:showToast");
if(!toastEvent){
    //If the toastEvent is not there, it's because we are working with Lightning Out.
    //So use a custom message container
    var severity = 'error'; //it could be 'confirm' or null
    var title = 'An error has occurred';
    var message = 'Please try again later';
    var messageContainer = component.find("messageContainer");
    messageContainer.displayMessage(severity,title,message);
    return;
}
```

The message will close automatically after 5 seconds.

# To do

1. Make the automatically close as an option with set time
