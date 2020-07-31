function shoppingList (){
    $('#submit').submit(function(e) {
     e.preventDefault(); 
      const foodInput = $('#shopping-list-entry').val();
      ('#shopping-list-entry').val('');
      ('.container').append('<li>${foodInput}');
      });
    
    $('.shopping-item-delete').on('click','button',function(e){
      e.preventDefault();
      $(e.target).parent.remove();
      )};
      
    $('.shopping-item-toggle').on('click','button',function(e){
      e.preventDefault();
      $(e.target).toggleClass();
      });
      
    }
   
    $(shoppingList);
    
