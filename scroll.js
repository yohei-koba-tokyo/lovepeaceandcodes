
window.onload = function(){
  function Scroller( target, speed, interval) {
  const   _MAX_POSITION   = target.scrollHeight - target.clientHeight;
  let     _timeoutId      = null;
  function _scrollByPosition( position ) {
      if ( _timeoutId !== null ) return;
      let currentPosition = target.scrollTop;
      var BOX1 = document.getElementById( 'box1' );
      var BOX2 = document.getElementById( 'box2' );
      var height1 = BOX1.scrollHeight;
      var height2 = BOX2.scrollHeight;
      console.log(height1);
      if ( position > (_MAX_POSITION + height1 + height2) ) position = (_MAX_POSITION + height1 + height2);
      const   DIRECTION   = position < currentPosition ? -1 : 1;
      const   MOVEMENT    = speed * DIRECTION;
      const onScroll = function() {
          currentPosition += MOVEMENT;
          const IS_COMPLETED =
              ( DIRECTION ===  1 && currentPosition >= position ) ||
              ( DIRECTION === -1 && currentPosition <= position )
          ;
          if ( IS_COMPLETED ) {
              target.scrollTop = position - 50;
              _timeoutId = null;
              return;
          }
          target.scrollTop = currentPosition;
          _timeoutId = setTimeout( onScroll, interval );
      };
      onScroll();
  };
  function _scrollByElement( element ) {
      const POSITION = element.offsetTop;
      _scrollByPosition( POSITION );
  }
  return {
      scrollByPosition: _scrollByPosition,
      scrollByElement : _scrollByElement,
  };
};
  const SCROLLER  = new Scroller( document.documentElement, 70, 15);

  const BUTTON_1  = document.getElementById( 'button1' );
  const BUTTON_2  = document.getElementById( 'button2' );
  const BUTTON_3  = document.getElementById( 'button3' );
  const BUTTON_4  = document.getElementById( 'button4' ); 

  const HEADING_1 = document.getElementById( 'heading1' );
  const HEADING_2 = document.getElementById( 'heading2' );
  const HEADING_3 = document.getElementById( 'heading3' );
  const HEADING_4 = document.getElementById( 'heading4' );
    
  BUTTON_1.addEventListener( 'click', function() {
      SCROLLER.scrollByElement( HEADING_1 );
  } );

  BUTTON_2.addEventListener( 'click', function() {
      SCROLLER.scrollByElement( HEADING_2 );
  } );

  BUTTON_3.addEventListener( 'click', function() {
      SCROLLER.scrollByElement( HEADING_3 );
  } );

  BUTTON_4.addEventListener( 'click', function() {
      SCROLLER.scrollByElement( HEADING_4 );
  } );
};
