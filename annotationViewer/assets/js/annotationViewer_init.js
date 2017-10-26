jQuery(document).ready(function($) {
	$(window).on("load", function() {
   console.log('AnnotationViewer Module: Looking for annotations...');
   if($('.field-name-body').find('.lineno').length !== 0){
	   console.log('AnnotationViewer Module: Found! Injecting sidebar.');
	   $.i18n.load(i18n_dict);
	    var annotator = $('.field-name-body').annotator().annotator().data('annotator');
	    var propietary = 'anon';
	    annotator.addPlugin('Permissions', {
	        user: propietary,
	        permissions: {
	            'read': [propietary],
	            'update': [],
	            'delete': [],
	            'admin': []
	     },
	     showViewPermissionsCheckbox: false,
	     showEditPermissionsCheckbox: false
	    });
	  $('.field-name-body').annotator().annotator('addPlugin', 'RichEditor');
	  $('.field-name-body').annotator().annotator('addPlugin', 'Categories',{
			Historical: 'annotator-hl-5',
			Textual: 'annotator-hl-6',
			Cultural: 'annotator-hl-3',
			Interpretative: 'annotator-hl-4',
			Linguistic: 'annotator-hl-7'
	  });
	  $('.field-name-body').annotator().annotator('addPlugin', 'AnnotatorViewer');
	  //Annotation scroll
	  $('#anotacions-uoc-panel').slimscroll({height: '100%'});
  }else{
	 console.log('AnnotationViewer Module: No annotations found, leaving quietly.');
  }
  })
});
