/**
 * Calculer le dû pour une personne sur une dépense à plusieurs
 *
 * @param {Number} options.partsUtilisateur - Parts de l'utilisateur en cours
 * @param {Number} options.prix - Prix total de la dépense
 * @param {Number} options.nombreDeParts - Nombre de parts total de la dépense
 * @return {Number|false} - false si division par 0 (au lieu de NaN)
 */
const calculDuDu = ( { partsUtilisateur, prix, nombreDeParts } ) => {
  // Il est anormal qu'il y ait 0 parts sur une dépense
  // on retourne false au lieu de NaN
  if ( !nombreDeParts ) {
    return 0;
  }

  return partsUtilisateur * prix / nombreDeParts;
};

const sum = ( accumulateur, valeur ) => accumulateur + valeur;

const sommeDesDus = ( tableau ) => {
  return tableau
    .map( calculDuDu )
    .reduce( sum );
};

const sommeDesDepenses = ( tableau, idPayeur ) => {
  return tableau
    .map( ( objet ) => {
      if ( objet.idPayeur === idPayeur ) {
        return objet.prix;
      }
      return 0;
    } )
    .reduce( sum );
};

export { calculDuDu, sommeDesDus, sommeDesDepenses };
