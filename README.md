# Drupal Annotation Modules
This repository contains modules that allow Drupal to support annotations.
The modules do not all need to be installed, but there are dependencies, so they are packaged together.

## A Note on Style
If you would like to change the style (the highlight color for instance) you should NOT edit the css included in the module. Instead, you should copy the CSS block you wish to edit into your theme CSS and override the style that way.

## To install 
you have two options:


1.Clone the repo and move them into place, should be the standard Drupal module directory.

```
/sites/all/modules
```


2.Create a directory which is apart from the Drupal directory and soft-link the modules into Drupal. This has the advantage of allowing you to more easily maintain a link to the repository.

Something like:
```
ln -s ./performantModules/annotationViewer ./sites/all/modules/annotationViewer

ln -s ./performantModules/annotationFilter ./sites/all/modules/annotationFilter
```
