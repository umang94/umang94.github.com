var getQuote = function(){
	var quotes = [
    	["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    	["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    	["Argue with idiots, and you become an idiot.", "Paul Graham"],
    	["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    	["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  	];
	return quotes[Math.floor((Math.random() * 3) + 1)];
};

