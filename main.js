menu_list_array = ["- Margherita Pizza", "- The Nubo Pizza", "- Asilomar Pizza", "- The Classic ~ Cheese Pizza", "- Paneer Pizza", "- Veggie Pizza", "- Hawaiian Style... Never really understood that one", "- Cheese-filled Crust Combo (You can NEVER have enough cheese)", "- Make your own - don't forget the cheese... or else"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
