jQuery(document).ready(function($) {
	$(window).on("load", function() {

		// If there are annotations on this page
		if ($('.field-name-body').find('.lineno').length !== 0) {
			console.log('AnnotationViewer: Annotations found! Injecting sidebar...');

			// Grab handle to annotator object (this is ugly)
			var annotator = $('.field-name-body').annotator().annotator().data('annotator');

			// Load the annotations (the var 'annotations' is part of the snapshot)
			annotator.loadAnnotations(annotations);

			// Add the annotation sidebar plugin
			annotator.addPlugin('AnnotatorViewer');
			annotator.plugins.AnnotatorViewer.addToPage();


			// Load the localizations
			$.i18n.load(i18n_dict);

			// This is weird...
			var allowedUser = 'anon';
			annotator.addPlugin('Permissions', {
				user: allowedUser,
				permissions: {
					'read': [allowedUser],
					'update': [],
					'delete': [],
					'admin': []
				},
				showViewPermissionsCheckbox: false,
				showEditPermissionsCheckbox: false
			});

			// Add rich editor (do we need this?)
			annotator.addPlugin('RichEditor');

			// Add Categories and define their classes
			annotator.addPlugin('Categories', {
				Historical: 'annotator-hl-5',
				Textual: 'annotator-hl-6',
				Cultural: 'annotator-hl-3',
				Interpretative: 'annotator-hl-4',
				Linguistic: 'annotator-hl-7'
			});

			// Allow the annotation panel to be scrollable
			$('#anotacions-uoc-panel').slimscroll({
				height: '100%'
			});

		}
	})
});
