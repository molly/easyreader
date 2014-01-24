// Add Easyreader button
$( document ).ready( function () {
	var erLink = mw.util.addPortletLink( 'p-personal', '#', 'Easyreader', 'pt-easyreader',
		'Reformat this page so it\'s easier to read', null, '#pt-logout' );
	$( erLink ).click( function ( e ) {
		e.preventDefault();
		$( 'html' ).toggleClass( 'easyreader' );
	});
	$(document).keydown( function e ) {
		if ( e.keyCode==69 && e.ctrlKey ) {
			$( 'html' ).toggleClass( 'easyreader' );
		}
	});
});
