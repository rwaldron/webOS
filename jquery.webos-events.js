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