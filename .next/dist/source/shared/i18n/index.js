"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});
var languages = {
		"en-US": {
				"Date": "Date",
				"del.": "del.",
				"Expenses": "Expenses",
				"Label": "Label",
				"Paid by": "Paid by",
				"Price": "Price",
				"Welcome to Billme!": "Welcome to Billme!"
		},
		"fr-FR": {
				"Date": "Date",
				"del.": "suppr.",
				"Expenses": "Dépenses",
				"Label": "Motif",
				"Paid by": "Payé par",
				"Price": "Montant",
				"Welcome to Billme!": "Bienvenue sur Billme !"
		}
};

exports.default = function (language) {
		var lang = function lang(phrase) {
				if (phrase in lang.dictionnary) {
						return lang.dictionnary[phrase];
				} else {
						return phrase;
				}
		};

		lang.switchTo = function (language) {
				if (language in languages) {
						lang.dictionnary = languages[language];
				} else {
						lang.dictionnary = languages["en-US"];
				}

				return lang;
		};

		return lang.switchTo(language);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXHdvcmtzcGFjZVxcbm9kZWJtXFxzb3VyY2VcXHNoYXJlZFxcaTE4blxcaW5kZXguanMiXSwibmFtZXMiOlsibGFuZ3VhZ2VzIiwibGFuZyIsInBocmFzZSIsImRpY3Rpb25uYXJ5Iiwic3dpdGNoVG8iLCJsYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxZQUFZO0FBQ2hCLFdBQVM7QUFDVixZQUFRLE1BREU7QUFFVixZQUFRLE1BRkU7QUFHVixnQkFBWSxVQUhGO0FBSVYsYUFBUyxPQUpDO0FBS1YsZUFBVyxTQUxEO0FBTVYsYUFBUyxPQU5DO0FBT1AsMEJBQXNCO0FBUGYsR0FETztBQVVoQixXQUFTO0FBQ1YsWUFBUSxNQURFO0FBRVYsWUFBUSxRQUZFO0FBR1YsZ0JBQVksVUFIRjtBQUlWLGFBQVMsT0FKQztBQUtWLGVBQVcsVUFMRDtBQU1WLGFBQVMsU0FOQztBQU9WLDBCQUFzQjtBQVBaO0FBVk8sQ0FBbEI7O2tCQXFCZSxvQkFBWTtBQUN6QixNQUFNQyxPQUFPLFNBQVBBLElBQU8sU0FBVTtBQUNyQixRQUFLQyxVQUFVRCxLQUFLRSxXQUFwQixFQUFrQztBQUNuQyxhQUFPRixLQUFLRSxXQUFMLENBQWtCRCxNQUFsQixDQUFQO0FBQ0UsS0FGRCxNQUVPO0FBQ1IsYUFBT0EsTUFBUDtBQUNEO0FBQ0MsR0FORDs7QUFRQUQsT0FBS0csUUFBTCxHQUFnQixvQkFBWTtBQUMxQixRQUFLQyxZQUFZTCxTQUFqQixFQUE2QjtBQUM5QkMsV0FBS0UsV0FBTCxHQUFtQkgsVUFBV0ssUUFBWCxDQUFuQjtBQUNELEtBRkUsTUFFSTtBQUNMSixXQUFLRSxXQUFMLEdBQW1CSCxVQUFXLE9BQVgsQ0FBbkI7QUFDRDs7QUFFRCxXQUFPQyxJQUFQO0FBQ0UsR0FSRDs7QUFVQSxTQUFPQSxLQUFLRyxRQUFMLENBQWVDLFFBQWYsQ0FBUDtBQUNELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovZGV2L3dvcmtzcGFjZS9ub2RlYm0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsYW5ndWFnZXMgPSB7XG4gIFwiZW4tVVNcIjoge1xuXHRcIkRhdGVcIjogXCJEYXRlXCIsXG5cdFwiZGVsLlwiOiBcImRlbC5cIixcblx0XCJFeHBlbnNlc1wiOiBcIkV4cGVuc2VzXCIsXG5cdFwiTGFiZWxcIjogXCJMYWJlbFwiLFxuXHRcIlBhaWQgYnlcIjogXCJQYWlkIGJ5XCIsXG5cdFwiUHJpY2VcIjogXCJQcmljZVwiLFxuICAgIFwiV2VsY29tZSB0byBCaWxsbWUhXCI6IFwiV2VsY29tZSB0byBCaWxsbWUhXCJcbiAgfSxcbiAgXCJmci1GUlwiOiB7XG5cdFwiRGF0ZVwiOiBcIkRhdGVcIixcblx0XCJkZWwuXCI6IFwic3VwcHIuXCIsXG5cdFwiRXhwZW5zZXNcIjogXCJEw6lwZW5zZXNcIixcblx0XCJMYWJlbFwiOiBcIk1vdGlmXCIsXG5cdFwiUGFpZCBieVwiOiBcIlBhecOpIHBhclwiLFxuXHRcIlByaWNlXCI6IFwiTW9udGFudFwiLFxuXHRcIldlbGNvbWUgdG8gQmlsbG1lIVwiOiBcIkJpZW52ZW51ZSBzdXIgQmlsbG1lICFcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsYW5ndWFnZSA9PiB7XG4gIGNvbnN0IGxhbmcgPSBwaHJhc2UgPT4ge1xuICAgIGlmICggcGhyYXNlIGluIGxhbmcuZGljdGlvbm5hcnkgKSB7XG5cdCAgcmV0dXJuIGxhbmcuZGljdGlvbm5hcnlbIHBocmFzZSBdO1xuICAgIH0gZWxzZSB7XG5cdCAgcmV0dXJuIHBocmFzZTtcblx0fVxuICB9O1xuICBcbiAgbGFuZy5zd2l0Y2hUbyA9IGxhbmd1YWdlID0+IHtcbiAgICBpZiAoIGxhbmd1YWdlIGluIGxhbmd1YWdlcyApIHtcblx0ICBsYW5nLmRpY3Rpb25uYXJ5ID0gbGFuZ3VhZ2VzWyBsYW5ndWFnZSBdO1xuXHR9IGVsc2Uge1xuXHQgIGxhbmcuZGljdGlvbm5hcnkgPSBsYW5ndWFnZXNbIFwiZW4tVVNcIiBdO1xuXHR9XG5cdFxuXHRyZXR1cm4gbGFuZztcbiAgfTtcblxuICByZXR1cm4gbGFuZy5zd2l0Y2hUbyggbGFuZ3VhZ2UgKTtcbn07XG4iXX0=