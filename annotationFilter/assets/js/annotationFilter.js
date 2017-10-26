jQuery(document).ready(function($) {
	$(window).on("load", function() {
		console.log('AnnotationFilter Module: Looking for annotations...');
		if ($('.field-name-body').find('.lineno').length !== 0) {
			console.log('AnnotationFilter Module: Found! Injecting filters.');
		}
	})
});
