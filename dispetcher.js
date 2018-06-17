function dicpatcher () {
this.listeners = {};
}

dispatcher ={
 on: function(eventName,func) {
     if (typeof this.listeners[eventName] === "undefined") {
this.listeners[eventName] = [];
}
// this.listeners.click ===[]//
 
this.listeners[eventName].push(function);

trigger : 
function(eventName,data) {
    if (typeof this.listeners[eventName]==="undefined")return;
    this.listeners[eventName].forEach(function(hendler) {
        handler(data);
    });

    }

};