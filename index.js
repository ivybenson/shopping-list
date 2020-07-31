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

    
   $('.shopping-list').on('click','shopping-item-delete',function(e){
  e.preventDefault();
  $(e.target).parent.remove();
  });
  
$('.shopping-list').on('click','shopping-item-toggle',function(e){
  e.preventDefault();
  $(e.target).toggleClass();
  });
      
    }
   
    $(shoppingList);
    
