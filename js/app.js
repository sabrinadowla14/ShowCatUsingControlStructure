//Make a ViewModel function.

var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');	
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');
	this.nickNames = ko.observableArray([
		 'Tabtab',
		  'T-Bone', 
		  'Mr. T', 
		  'Tabitha Tab Tabby Catty Cat'
		
		])
	
	
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		
	};
}
//tell knockout to apply our bindings to this ViewModel. knockout will handle view to model and
//model to view.
//Need to write ViewModel methods when we need to change something ourselves.
ko.applyBindings(new ViewModel())  