// Add Easyreader functionality
$( document ).ready( function () {

	// Clicking "Easyreader" in the bar in the top left toggles Easyreader
	var erLink = mw.util.addPortletLink( 'p-personal', '#', 'Easyreader', 'pt-easyreader',
		'Reformat this page so it\'s easier to read', null, '#pt-logout' );
	$( erLink ).click( function ( e ) {
		e.preventDefault();
		$( 'html' ).toggleClass( 'easyreader' );
	});

	// Ctrl-Y toggles Eas[y]reader
	$(document).keydown( function e ) {
		if ( e.keyCode==89 && e.ctrlKey ) {
			$( 'html' ).toggleClass( 'easyreader' );
		}
	});
});
