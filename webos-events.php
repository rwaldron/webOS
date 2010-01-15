<html>
<head>
    <script src="jquery-1.4rc1.js"></script>
    <script src="webos-events-junk.js"></script>
    <script>
      
      $(document).ready(function () {
        
        
        console.log(jQuery.fn);
        
        $(document)
          .bind('shaking', function (e) {
            
            console.log(e);
          
          });
      
        $('input')
          .click(function () {
            
            $(document).trigger('shaking');
          
          });
        
        
      });
    
    
    </script>
  </head>
  <body>
    <input type=button value="test">
  </body>
</html>