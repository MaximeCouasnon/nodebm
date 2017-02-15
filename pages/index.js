import React from "react";

import acceptLanguage from "accept-language";
acceptLanguage.languages( [ "en-US", "fr-FR" ] );

import languagesFactory from "../source/shared/i18n";

import createWelcome from "../source/shared/components/Welcome";
const Welcome = createWelcome( React );

import Head from "next/head";
import Link from "next/link";

class Machin extends React.Component {
	static async getInitialProps ( { req, query } ) {
	  let lang;

	  if ( query.lang ) {
	    lang = query.lang;
	  } else {
	    lang = acceptLanguage.get( req.headers[ "accept-language" ] );
	  }
	  
	  return { lang, truc: "fr-FR" };
    }

	render () {
	  const lang = languagesFactory( this.props.lang );

	  return (
		<div>
		  <Head>
		    <title>Billme</title>
		  </Head>
		  <Welcome lang={ lang } />
		  <Link href="/testPage">{ lang( "Test page" ) }</Link>
		</div>
	  );
	}
};

const Chouette = React.createClass( {
  render: function () {
	  const lang = languagesFactory( this.props.lang );

	  return (
		<div>
		  <Head>
		    <title>Billme</title>
		  </Head>
		  <Welcome lang={ lang } />
		  <Link href="/testPage">{ lang( "Test page" ) }</Link>
		</div>
	  );
	}
} );

Chouette.getInitialProps = async function ( { req, query } ) {
  let lang;

  if ( query.lang ) {
	lang = query.lang;
  } else {
	lang = acceptLanguage.get( req.headers[ "accept-language" ] );
  }
  
  return { lang };
};

export default Chouette;
