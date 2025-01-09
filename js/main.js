document.addEventListener('DOMContentLoaded', function () {
var menuitems=[
{image: 'imags/food1.png',
name: 'lasal cheese',
price: '&18.00',
description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
},
{
image: 'imags/food2.png',
name: 'lasal cheese',
price: '&18.00',
description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum',
},
{
image: 'imags/food3.png',
name: 'lasal cheese',
price: '&18.00',
description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
},
{
    image: 'imags/food4.png',
    name: 'lasal cheese',
    price: '&18.00',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
},
{
image: 'imags/food5.png',
name: 'lasal cheese',
price: '&18.00',
description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
},
{
image: 'imags/food6.png',
name: 'lasal cheese',
price: '&18.00',
description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
}
]

var leftcontainer=document.getElementById ("menuitemsleft");
menuitems.forEach(function(items){
var menuitem=document.createElement('div');
menuitem.className='menu-items'
var img =document.createElement('img');
img.src=items.image;
img.alt-items.name;
var descriptiondiv=document.createElement('div');
var itemname=document.createElement('h3');
itemname.innerHTML=`${items.name}<span>${items.price}</span>`
var itemdescription=document.createElement('p');
itemdescription.textContent=items.description;
descriptiondiv.appendChild(itemname)
descriptiondiv.appendChild(itemdescription)
menuitem.appendChild(img)
menuitem.appendChild(descriptiondiv)
leftcontainer.appendChild(menuitem)


})

})

document.addEventListener('DOMContentLoaded', function () {
    var menuitems=[
    {image: 'imags/food7.jpeg',
    name: 'lasal cheese',
    price: '&18.00',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
    },
    {
    image: 'imags/food8.jpeg',
    name: 'lasal cheese',
    price: '&18.00',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum',
    },
    {
    image: 'imags/food9.jpeg',
    name: 'lasal cheese',
    price: '&18.00',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
    },
    {
        image: 'imags/food10.jpeg',
        name: 'lasal cheese',
        price: '&18.00',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
    },
    {
    image: 'imags/food11.jpeg',
    name: 'lasal cheese',
    price: '&18.00',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
    },
    {
    image: 'imags/food12.jpeg',
    name: 'lasal cheese',
    price: '&18.00',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.',
    }
    ]
    
    var rightcontainer=document.getElementById ("menuitemsright");
    menuitems.forEach(function(items){
    var menuitem=document.createElement('div');
    menuitem.className='menu-items'
    var img =document.createElement('img');
    img.src=items.image;
    img.alt-items.name;
    var descriptiondiv=document.createElement('div');
    var itemname=document.createElement('h3');
    itemname.innerHTML=`${items.name}<span>${items.price}</span>`
    var itemdescription=document.createElement('p');
    itemdescription.textContent=items.description;
    descriptiondiv.appendChild(itemname)
    descriptiondiv.appendChild(itemdescription)
    menuitem.appendChild(img)
    menuitem.appendChild(descriptiondiv)
    rightcontainer.appendChild(menuitem)
    
    
})
    
})