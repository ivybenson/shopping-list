function shoppingList (){
    $('#submit').submit(function(e) {
     e.preventDefault(); 
      const foodInput = $('#shopping-list-entry').val();
      ('#shopping-list-entry').val('');

      ('.shopping-list').append('<li>
        <span class="shopping-item">${foodInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      ');
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
    
