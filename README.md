# Drupal Annotation Modules
This repository contains modules that allow Drupal to support annotations.
The modules do not all need to be installed, but there are dependencies, so they are packaged together.

## A Note on Style
If you would like to change the style (the highlight color for instance) you should NOT edit the css included in the module. Instead, you should copy the CSS block you wish to edit into your theme CSS and override the style that way.

## Dependencies
To use "annotationViewer" you need to make sure Drupal has jQuery 1.5+:
- [Install Drupal JQuery Upgrade](https://www.drupal.org/project/jquery_update)

To use "annotationFilter" you need to make sure Drupal has bootstrap, ~~library and select2~~ installed first:

- [Install Drupal Bootstrap](https://www.drupal.org/project/bootstrap/releases/7.x-3.15)
https://www.drupal.org/project/libraries

NOTE: 10/26/17 The correct thing is to use the Drupal Select2 module, but it appears broken, so for now we ship with Select2 embedded. For now do NOT install these:
- ~~[Install Drupal API Library](https://www.drupal.org/project/libraries)~~
- ~~[Install Drupal Select2](https://www.drupal.org/project/select2)~~

## To install Modules
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
