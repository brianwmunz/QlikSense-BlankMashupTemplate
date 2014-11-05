/*global require, alert*/
/*
 * 
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for QlikView engine
 */
var config = {
	host: window.location.hostname,
	prefix: "/",
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		alert( error.message );
	} );

	//callbacks
	//open app and get objects
	var app = qlik.openApp("${docid}", config);
	$(".qvobject").each(function() {
		var qvid = $(this).data("qvid");
		app.getObject(this, qvid);
	});
	/*AUTOGEN START*/
	/*AUTOGEN END*/

} );