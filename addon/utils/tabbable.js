/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

import Ember from 'ember';

var jQuery = Ember.$;

function focusable( element, isTabIndexNotNaN ) {
  var nodeName = element.nodeName.toLowerCase();
  return ( /input|select|textarea|button|object/.test( nodeName ) ?
    !element.disabled :
    "a" === nodeName ?
      element.href || isTabIndexNotNaN :
      isTabIndexNotNaN) && visible( element );
}

function visible(element) {
  var $el = jQuery(element);
  return jQuery.expr.filters.visible(element) &&
    !jQuery($el, $el.parents()).filter(function() {
      return jQuery.css( this, "visibility" ) === "hidden";
    }).length;
}

if (!jQuery.expr[':'].tabbable) {
  jQuery.expr[':'].tabbable = function( element ) {
    var tabIndex = jQuery.attr( element, "tabindex" ),
      isTabIndexNaN = isNaN( tabIndex );
    return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
  };
}
