const languages = {
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

export default language => {
  const lang = phrase => {
    if ( phrase in lang.dictionnary ) {
	  return lang.dictionnary[ phrase ];
    } else {
	  return phrase;
	}
  };
  
  lang.switchTo = language => {
    if ( language in languages ) {
	  lang.dictionnary = languages[ language ];
	} else {
	  lang.dictionnary = languages[ "en-US" ];
	}
	
	return lang;
  };

  return lang.switchTo( language );
};
