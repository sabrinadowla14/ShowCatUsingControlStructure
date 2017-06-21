var Cat = function() {
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
	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10){
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else if (clicks < 100) {
			title = 'Child';
		} else if (clicks < 200) {
			title = 'Teen';
		} else if (clicks < 500) {
			title = 'Adult';
		} else {
			title = 'Ninja';
		}
		return title;
	
	}, this);

}




//Make a ViewModel function.

var ViewModel = function() {
    var self = this;
	this.currentCat = ko.observable(new Cat());
	// we don't need to say this.currentCat().clickCount anymore, because we are already
	// we are already in the current cat binding context.
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
		
	};
}
//tell knockout to apply our bindings to this ViewModel. knockout will handle view to model and
//model to view.
//Need to write ViewModel methods when we need to change something ourselves.
ko.applyBindings(new ViewModel())  