function GetAddedItem()
{
  //window.alert("hi");
  /*if(document.getElementById("Non Veg Starters").getElementsByTagName("input")[0].checked == true)
  {
    window.alert("hi");
  }
  else {
    window.alert("bye");
  }*/
  var y=document.getElementById("Non Veg Starters");
  var inputElems = y.getElementsByTagName("input");
  var count = 0; var flag=false;
        for (var i=0; i<inputElems.length; i++)
         {
           if (inputElems[i].type == "checkbox" && inputElems[i].checked == true)
           {
              count++; // counting the number of checked checbox
              var price= document.getElementById("Non Veg Starters").rows[i+2].cells.item(1).innerHTML; //var to store price
              var foodItem= document.getElementById("Non Veg Starters").rows[i+2].cells.item(0).innerHTML;// var to store fooditem
              //alert(foodItem + price);
              AddToOrder(foodItem, price);
            }
            inputElems[i].checked = false;
        }
        //alert(count);

  var y1=document.getElementById("Veg Starters");
  var inputElems1 = y1.getElementsByTagName("input");
  var count1 = 0;
      for (var i=0; i<inputElems1.length; i++)
     {
       if (inputElems1[i].type == "checkbox" && inputElems1[i].checked == true)
       {
            count1++;
            var price= document.getElementById("Veg Starters").rows[i+2].cells.item(1).innerHTML; //var to store price
            var foodItem= document.getElementById("Veg Starters").rows[i+2].cells.item(0).innerHTML;// var to store fooditem
            AddToOrder(foodItem, price);
        }
        inputElems1[i].checked = false;
     }
    //alert(count1+count);

    if((count+count1)==0 )
    {
      alert("no food item added");
    }
    else {
      //alert("hi");
      DisplayAddedItems();
    }
}

function AddToOrder(foodItem, price)
{
  var table = document.getElementById("OrderViewTable").getElementsByTagName('tbody')[0];
  var newRow= table.insertRow(table.length);
  //alert(newRow);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML= foodItem;
  cell2 =newRow.insertCell(1);
  cell2.innerHTML= price;
  cell3 =newRow.insertCell(2);
  cell3.innerHTML= '1';
  cell4 =newRow.insertCell(3);
  cell4.innerHTML= '<input type="button" value="add" onclick="AddQuantity(this)"></input>';
  cell5= newRow.insertCell(4);
  cell5.innerHTML=`<a onclick="onDelete(this)">Delete</a>` //<a onclick="onEdit(this)">Edit </a>
}

function onDelete(td)
{
  alert("in delete");
  selectedRow= td.parentElement.parentElement;
  document.getElementById("OrderViewTable").deleteRow(selectedRow.rowIndex);
}

function AddQuantity(td)
{
  selectedRow= td.parentElement.parentElement;
  selectedRow.cells[2].innerHTML= selectedRow.item(2) +1;
  alert(selectedRow);
}

function DisplayAddedItems()
{
  var x= document.getElementById("Non Veg Starters").rows[4].cells.length;
  //alert(x);
  //alert(document.getElementById("Non Veg Starters").rows[3].cells.item(1).innerHTML);
}
