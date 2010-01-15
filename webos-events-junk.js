
//REFERENCE:

// Create "bubbling" focus and blur events
/*
if ( document.addEventListener ) {
  jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
    jQuery.event.special[ fix ] = {
      setup: function() {
        this.addEventListener( orig, handler, true );
      }, 
      teardown: function() { 
        this.removeEventListener( orig, handler, true );
      }
    };

    function handler( e ) { 
      e = jQuery.event.fix( e );
      e.type = fix;
      return jQuery.event.handle.call( this, e );
    }
  });
}
*/


/*
COMBINE WITH SPECIAL EVENT DATA PROPS

http://developer.palm.com/index.php?option=com_content&view=article&id=1859&Itemid=43

var _webOsEvents   = { 
      orientationchange:  [ 'roll', 'pitch', 'position' ],
      acceleration:       [ 'accelX', 'accelY', 'accelZ'],
      shakestart:         [ 'magnitude' ],
      shaking:            [ 'magnitude' ],
      shakeend:           [ 'magnitude' ]      
      };

jQuery.each( ('aboutToActivate activate back command commandEnable dragEnd dragging dragStart filter filterImmediate flick forward hold holdEnd imageViewChanged keydown keypress keyup listAdd listChange listDelete listReorder listTap progressComplete progressIconTap propertyChange scrollStarting singleTap sliderDragEnd sliderDragStart stageActivate stageDeactivate tap webViewImageSaved').split(' '), function (i, name) {
  _webOsEvents[ name ] = [];
});
      
      
jQuery.each( _webOsEvents, function (name, props) {
  jQuery.fn[ name ] = function( fn ) {
    return fn ? this.bind( name, fn ) : this.trigger( name );
  };
  
  if ( props.length ) {
    for( var i = 0, _len = props.length; i< _len; i++ ) {
      if ( jQuery.event.props.indexOf(props[i])  == -1 ) {
        jQuery.event.props.push(props[i]);
      }
    }
  }
});
*/


/*
var _webOsEvents   = { 
      orientationchange:  [ 'roll', 'pitch', 'position' ],
      acceleration:       [ 'accelX', 'accelY', 'accelZ'],
      shakestart:         [ 'magnitude' ],
      shaking:            [ 'magnitude' ],
      shakeend:           [ 'magnitude' ],
      
      };

jQuery.each( ('aboutToActivate activate back command commandEnable dragEnd dragging dragStart filter filterImmediate flick forward hold holdEnd imageViewChanged keydown keypress keyup listAdd listChange listDelete listReorder listTap progressComplete progressIconTap propertyChange scrollStarting singleTap sliderDragEnd sliderDragStart stageActivate stageDeactivate tap webViewImageSaved').split(' '), function (i, name) {
  _webOsEvents[ name ] = [];
});
      
      
jQuery.each( _webOsEvents, function (name, props) {
  jQuery.fn[ name ] = function( fn ) {
    return fn ? this.bind( name, fn ) : this.trigger( name );
  };
  
  if ( props.length ) {
    for( var i = 0, _len = props.length; i< _len; i++ ) {
      if ( jQuery.event.props.indexOf(props[i])  == -1 ) {
        jQuery.event.props.push(props[i]);
      }
    }
  }
});
*/

 
(function (jQuery) {      
  jQuery.each( { 
                orientationchange:  [ 'roll', 'pitch', 'position' ],
                acceleration:       [ 'accelX', 'accelY', 'accelZ'],
                shakestart:         [ 'magnitude' ],
                shaking:            [ 'magnitude' ],
                shakeend:           [ 'magnitude' ]      
                }, function (name, props) {
    jQuery.fn[ name ] = function( fn ) {
      return fn ? this.bind( name, fn ) : this.trigger( name );
    };

    if ( props.length ) {
      for( var i = 0, _len = props.length; i< _len; i++ ) {
        if ( jQuery.event.props.indexOf(props[i])  == -1 ) {
          jQuery.event.props.push(props[i]);
        }
      }
    }
  });
})(jQuery);