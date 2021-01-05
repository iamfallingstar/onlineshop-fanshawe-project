//Global Variables
var storeItemsList = [];
var cartItemsList = [];
var categoryList=["Games","Books","Gadgets","Skin Care", "Shoes"];
var currencyList = [
	{
		name: "CAD",
		multiplier: 1,
		prefix:"$",
		suffix:'(CAD)'
	},
	{
		name: "YEN",
		multiplier: 76,
		prefix:"¥",
		suffix:"(YEN)"
	}
];
var TAX=0.13;


//Constructors
function StoreItem(props) {
	this.id = props.id;
	this.name = props.name;
	this.price = props.price;
	this.qty = props.qty;
    this.max = props.max;
    this.category = props.category;
	this.shipCost = props.shipCost;
	this.reviews = props.reviews;
	this.desc = props.desc;
	this.img = props.img;
}

function CartItem(props) {
	this.id = props.id;
	this.qty = props.qty;
}


//Initialize Functions
function initialize() {
	//set date
	document.getElementById("js-time-date").innerHTML = new Date();

	initStoreItems();
	displayCurrency();
	displayCategories();
	displayStoreItems();
	displayCartItems();
}

// Store Items
function initStoreItems(){
    storeItemsList.push(new StoreItem({
        id: "DUGZTSK",
        name: "Heartstone",
        price: 6.25,
        qty: 50,
        max: 4,
        category: "Games",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment. Originally subtitled Heroes of Warcraft, Hearthstone builds upon the existing lore of the Warcraft series by using the same elements, characters, and relics. It was first released for Microsoft Windows and macOS in March 2014, with ports for iOS and Android releasing later that year. The game features cross-platform play, allowing players on any supported device to compete with one another, restricted only by geographical region account limits.",
        img: "img/heartstone.jpg"
   })
);

    storeItemsList.push(new StoreItem({
        id: "HORDE",
        name: "World of Warcraft",
        price: 54.99,
        qty: 15,
        max: 5,
        category: "Games",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"World of Warcraft: Shadowlands is the eighth expansion pack for the massively multiplayer online role-playing game (MMORPG) World of Warcraft, following Battle for Azeroth. It was announced and made available for preorder at BlizzCon on November 1, 2019. It is scheduled for a 2020 release.",
        img: "img/wow.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "PLUEPLUE",
        name: "Animal Crossing",
        price: 59.99,
        qty: 40,
        max: 3,
        category: "Games",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"Animal Crossing is a social simulation video game series developed and published by Nintendo and created by Katsuya Eguchi. In Animal Crossing, the player character is a human who lives in a village inhabited by various anthropomorphic animals, carrying out various activities such as fishing, bug catching, and fossil hunting. The series is notable for its open-ended gameplay and extensive use of the video game console's internal clock and calendar to simulate real passage of time.",
        img: "img/animalcrossing.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "DIESOON",
        name: "Dont Starve Together",
        price: 16.99,
        qty: 10,
        max: 3,
        category: "Games",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"Don't Starve is a survival video game developed by the Canadian indie video game developer Klei Entertainment. The game was initially released for Microsoft Windows, OS X, and Linux on April 23, 2013.[1] A PlayStation 4 port, renamed Don't Starve: Giant Edition, became available the following year (with PlayStation Vita and PlayStation 3 versions released on September 2014 and June 2015 respectively, and an Xbox One version released in August 2015).",
        img: "img/dontstarvetogether.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "GAARNER",
        name: "Sophies World",
        price: 21.78,
        qty: 30,
        max: 5,
        category: "Books",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"Sophie Amundsen is a 14-year-old girl who lives in Norway. The book begins with Sophie receiving two messages in her mailbox and a postcard addressed to Hilde Møller Knag. Afterwards, she receives a packet of papers, part of a course in philosophy. Sophie, without the knowledge of her mother, becomes the student of an old philosopher, Alberto Knox. Alberto teaches her about the history of philosophy. She gets a substantive and understandable review from the Pre-Socratics to Jean-Paul Sartre.",
        img: "img/sophiesworld.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "VONNEGUT",
        name: "SLAPSTICK",
        price: 8.74,
        qty: 6,
        max: 2,
        category: "Books",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"The novel is in the form of an autobiography of Dr. Wilbur Daffodil-11 Swain. Dr. Swain tells us that he lives in the ruins of the Empire State Building with his pregnant granddaughter, Melody Oriole-2 von Peterswald, and her lover, Isadore Raspberry-19 Cohen. Dr. Swain is a hideous man whose ugliness, along with that of his twin sister Eliza, led their parents to cut them off from modern society. The siblings came to realize that, when in close physical contact, they form a vastly powerful and creative intelligence.",
        img: "img/slapstick.jpeg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "PALAHNUICK",
        name: "Invisible Monster",
        price: 25.41,
        qty: 14,
        max: 2,
        category: "Books",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"Invisible Monsters is a work of fiction by best selling novelist by Chuck Palahniuk. Invisible Monsters is a narrative on the search for one's identity. Shannon McFarland is a model who has been shot in the face, leaving her with a hideous disfigurement that will change her life forever.",
        img: "img/invisiblemonster.jpeg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "TECHNICA",
        name: "Audio Technica",
        price: 249.00,
        qty: 20,
        max: 6,
        category: "Gadgets",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"Exclusively designed 45 mm drivers are capable of Hi-Res Audio reproduction with a wired connection, 1.2 m (3.9') cable provides a wired connection for times when wireless operation is not available, when battery power is low, or when Hi-Res Audio is desired and Switchable quick hear-through function allows voices (conversations, announcements at airports and transit stations, etc.) to be heard through the headphones.",
        img: "img/audioTechnica.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "NINSWI",
        name: "Nintendo Switch Lite",
        price: 259.00,
        qty: 21,
        max: 4,
        category: "Gadgets",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"The Nintendo Switch Lite is a handheld game console by Nintendo. It was released on September 20, 2019, as a handheld-only version of the Nintendo Switch. It plays most of the same games as the standard Nintendo Switch, and comes in 4 colors.",
        img: "img/nintendolite.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "CM100",
        name: "Canon M100 Mirrorless Camera",
        price: 394.00,
        qty: 25,
        max: 5,
        category: "Gadgets",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"The Canon EOS M100 is a digital mirrorless interchangeable-lens camera first announced by Canon Inc. on August 29, 2017. Canon EOS M100 incorporates the proprietary image processor that allows the camera to capture still images up to 6.1 fps using the fixed focus and 4 fps burst mode. The EOS M100 can be connected to all EF, EF-S and TS-E lenses with an available adapter.",
        img: "img/eosm100.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "KAOWASH",
        name: "Biore Facial Wash",
        price: 20.00,
        qty: 18,
        max: 3,
        category: "Skin Care",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"This daily Acne Care Facial Wash  deep cleans and gently exfoliates for clearer skin. Rich foam does not over-cleanse, strip, damage or deplete. Vegan Friendly and cruelty free product. Made in Japan.",
        img: "img/biorefw.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "HANASTRIP",
        name: "Biore Nose Strip",
        price: 19.45,
        qty: 22,
        max: 2,
        category: "Skin Care",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"Biore Nose Strips reduce the appearance of pores with regular use, removes oil and blackheads from your nose, deep cleansing nose strips, refines your skin. Enriched with a special fruit acids, develop a fresh scent. Biore Nose Strips reduce the appearance of pores with regular use. Made in Japan",
        img: "img/biorestrip.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "NOTAN",
        name: "Anessa Sun Screen",
        price: 17.40,
        qty: 5,
        max: 1,
        category: "Skin Care",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"Super water proof sunscreen / SPF50+ PA++++ / For face and body /Moisturizing ingredients: Hyaluronic acid, royal jelly extract, citrus mix / Allergy tested (Formulated to minimize the risk of allergy) / Fresh fruit aroma / Contents:50g / Made in Japan",
        img:"img/anessa.jpg"
    })
);
    storeItemsList.push(new StoreItem({
        id: "OLDSKOOL",
        name: "VANS",
        price: 60.00,
        qty: 20,
        max: 3,
        category: "Shoes",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"The Old Skool is a classic skate shoe and the first to bare Vans, iconic side stripe.",
        img:"img/vans.jpg"
        }));
    storeItemsList.push(new StoreItem({
        id: "SK8NIKE",
        name: "Nike SB",
        price: 360.00,
        qty: 10,
        max: 2,
        category: "Shoes",
        shipCost: Math.floor(Math.random() * 100),
        reviews: [],
        desc:"This SB Dunk Low features and black suede upper with an orange tumbled leather toa box. “Trick” and “Treat” are embroidered on each heel tab. A padded tongue, green and orange accents, and a glow in the dark outsole completes the design.",
        img: "img/nikesb.jpg"
    })
);
};


//Display Functions
function displayCurrency(){
	var currencyHTML = "";
	for (var i = 0; i < currencyList.length; i++) {
		currencyHTML += "<option>" + currencyList[i].name + "</option>";
	}
	document.getElementById("js-currency").innerHTML = currencyHTML;
}

function displayCategories(){
	var categoryHTML="<option>All</option>";
	for(var i=0; i < categoryList.length; i++){
		categoryHTML+="<option>" + categoryList[i] + "</option>"
	}
	document.getElementById("js-category-list").innerHTML=categoryHTML;
}

function displayStoreItems() {
	var category=document.getElementById("js-category-list").value.toLowerCase();
	var itemHTML = "";
	for (var i = 0; i < storeItemsList.length; i++) {
		var storeItem = storeItemsList[i];
		if(storeItem.category.toLowerCase() == category || category == "all"){
            itemHTML += '<li class="store-item">';
            itemHTML += '<article class="item" id="js-item-'+ i +'">';
            itemHTML += '<div class="item-image" style="background-image:url(' + storeItem.img + ');"></div>';
            itemHTML += '<h3 class="item-name">' + storeItem.name + '</h3>';
            itemHTML += '<p class="item-id">Item ID: ' + storeItem.id + '</p>';
            itemHTML += '<p class="item-price">Price: ' + getCurrencyDisplay(storeItem.price) + '</p>';
            itemHTML += '<p class="item-qty-on-hand">Quantity On Hand: <span class="js-item-quantity-on-hand">' + storeItem.qty + '</span></p>';
            itemHTML += '<p class="item-max">Max Per Customer: ' + storeItem.max + '</p>';
            itemHTML += '<p class="item-name">Category: ' + storeItem.category + '</p>';
            itemHTML += '<p class="item-name">Shipping: ' + storeItem.shipCost + '</p>';
            itemHTML += '<input class="item-show-details-button" type="button" value="Show Details" onclick="showItemDetails('+ i +');">';
            itemHTML += '<p class="item-qty-in-cart">Qty In Cart: <span class="js-item-quantity-in-cart">0</span></p>';
            itemHTML += '<div class="item-qty-counter">';
            itemHTML += '<input type="button" value="-" onclick="updateQtyCounter('+ i +', \'-\');">';
            itemHTML += '<input class="js-item-qty-counter" type="text" value="0" readonly>';
            itemHTML += '<input type="button" value="+" onclick="updateQtyCounter('+ i +', \'+\');">';
            itemHTML += '</div>';
            itemHTML += '<div class="item-qty-cart-buttons">';
            itemHTML += '<input type="button" value="Add" onclick="addToCart('+ i +');">';
            itemHTML += '<input type="button" value="Remove" onclick="removeFromCart('+ i +');"></div>';
            itemHTML += '<p class="status js-status"></p>';
			itemHTML += '</article>';
			itemHTML += '</li>';
		}
	}
	document.getElementById("js-store-list").innerHTML = itemHTML;
}
function displayCartItems() {
	var cartItemsHTML=" ";
	for(var i=0; i < cartItemsList.length; i++){
		var cartItem=cartItemsList[i];
		var item=getItemById(cartItem.id);
		if(cartItem.qty > 0){
			cartItemsHTML+='<li class="cart-item">';
				cartItemsHTML+="<p>"+ cartItem.id +"</p>";
				cartItemsHTML+="<p>"+ getCurrencyDisplay(item.price) +"</p>";
				cartItemsHTML+="<p>"+ cartItem.qty +"</p>";
				cartItemsHTML+="<p>" + getCurrencyDisplay(cartItem.qty * item.price) +"</p>";
			cartItemsHTML+='</li>';
		}
	}
	
	document.getElementById("js-cart-list").innerHTML=cartItemsHTML;
	
	//update card calculations
	calculateCart();
}
function displayReviews(item){
	var reviewText='';
	for(var i=0; i < item.reviews.length; i++){
		reviewText+='- ' + item.reviews[i] + '\n\n';
	}
	document.getElementById("js-review-text").value=reviewText;
}


//Cart Functions
function addToCart(itemIndex){
	var item=storeItemsList[itemIndex];
	var cartItem=getItemFromCart(item.id);
	var qtyCounterInput=document.querySelectorAll("#js-item-"+ itemIndex +' .js-item-qty-counter')[0];
	var qtyCounter=parseInt(qtyCounterInput.value);
	
	//check if qtyCounter is valid
	if(qtyCounter <= 0){
		updateItemStatus(itemIndex, '0 items added!', 'error');
		return;
	};
	
	//check qty on hand
	if(qtyCounter > item.qty){
		updateItemStatus(itemIndex, "The number of items to add is more than the quantity on hand!", "error");
		return;
	}
	
	//check max per customer
	var itemQtyFromCart=getItemQtyFromCart(item.id);
	if(itemQtyFromCart >= item.max){
		updateItemStatus(itemIndex, "The maximum number of items per customer is "+ item.max +"!","error");
		return;
	}
	
	//if qtyCounter + cartItemQuantity is more than max per customer
	if(qtyCounter + itemQtyFromCart > item.max){
		//update qtyCounter input field with what is remaining
		qtyCounter=item.max - itemQtyFromCart;
		qtyCounterInput.value=qtyCounter;
	}
	
	//check if item exists in cart
	if(cartItem == null){
		//create cart item object
		cartItem=new CartItem({
			id:item.id,
			qty:qtyCounter
		});
		//add to cart array
		cartItemsList.push(cartItem);
	}else{
		//item already exists in cart and update quantity
		cartItem.qty=cartItem.qty + qtyCounter;
	}
	
	//update qty in cart display
	document.querySelectorAll('#js-item-'+ itemIndex +' .js-item-quantity-in-cart')[0].innerText=cartItem.qty;
	
	//update quantity on hand
	item.qty=item.qty - qtyCounter;
	
	//update quantity on hand display
	document.querySelectorAll('#js-item-'+ itemIndex +' .js-item-quantity-on-hand')[0].innerText=item.qty;
	
	//update cart display
	displayCartItems();
	
	//update success status
	updateItemStatus(itemIndex, "Successfully added " + qtyCounter + " item/s to cart!","success");
}
function removeFromCart(itemIndex){
	var item=storeItemsList[itemIndex];
	var cartItem=getItemFromCart(item.id);
	var qtyCounterInput=document.querySelectorAll('#js-item-'+ itemIndex +' .js-item-qty-counter')[0];
	var qtyCounter=parseInt(qtyCounterInput.value);
	
	//check if qtyCounter is valid
	if(qtyCounter <= 0){
		updateItemStatus(itemIndex, "0 items removed!", "error");
		return;
	};
	
	//check quantity in cart
	if(cartItem.qty <= 0){
		updateItemStatus(itemIndex, "No more items from cart to be removed!", "error");
		return;
	}
	
	//if quantity in cart - qtyCounter results to a negative number, then update qtyCounter to the remaining items to remove
	if(cartItem.qty - qtyCounter < 0){
		qtyCounter = cartItem.qty;
		qtyCounterInput.value=qtyCounter;
	}
	
	//update cartItem quantity
	cartItem.qty=cartItem.qty - qtyCounter;
	
	//update qty in cart display
	document.querySelectorAll('#js-item-'+ itemIndex +' .js-item-quantity-in-cart')[0].innerText=cartItem.qty;
	
	//update qty on hand
	item.qty=item.qty + qtyCounter;
	
	//update qty on hand display
	document.querySelectorAll('#js-item-'+ itemIndex +' .js-item-quantity-on-hand')[0].innerText=item.qty;
	
	//update cart display
	displayCartItems();
	
	//update success status
	updateItemStatus(itemIndex, "Successfully removed "+ qtyCounter + " item/s from cart!","success");
}
function calculateCart(){
	var itemsSubtotal=0;
	var estimatedShipping=0;
	
	for(var i=0; i < cartItemsList.length; i++){
		var item=getItemById(cartItemsList[i].id);
        
        if(cartItemsList[i].qty > 0)
        {
            //compute items subtotal
		itemsSubtotal+=cartItemsList[i].qty * item.price;
		
		//compute shipping
		estimatedShipping+=item.shipCost;

        }
	
	}
	
	//compute subtotal
	var subtotal=itemsSubtotal + estimatedShipping;
	
	//compute tax
	var estimatedTax=subtotal * TAX;

	//compute order total
	var orderTotal=subtotal + estimatedTax;
	
	console.log(orderTotal);
	//update totals display
	document.getElementById("js-items-subtotal").innerHTML=getCurrencyDisplay(itemsSubtotal);
	document.getElementById("js-items-estimated-shipping").innerHTML=getCurrencyDisplay(estimatedShipping);
	document.getElementById("js-subtotal").innerHTML=getCurrencyDisplay(subtotal);
	document.getElementById("js-estimated-tax").innerHTML=getCurrencyDisplay(estimatedTax);
	document.getElementById("js-order-total").innerHTML=getCurrencyDisplay(orderTotal);
}


//Item Details Functions
function showItemDetails(itemIndex) {
    var item=storeItemsList[itemIndex];
    
	
    //update item details popup 
    document.getElementById("js-review-status").innerHTML="";
	document.getElementById("js-item-details-img").innerHTML='<img src="'+ item.img +'" alt="">';
	document.getElementById("js-item-details-name").innerHTML=item.name;
	document.getElementById("js-item-details-id").innerHTML=item.id;
	document.getElementById("js-item-details-price").innerHTML=getCurrencyDisplay(item.price);
	document.getElementById("js-item-details-qty").innerHTML=item.qty;
	document.getElementById("js-item-details-max").innerHTML=item.max;
	document.getElementById("js-item-details-ship-cost").innerHTML=getCurrencyDisplay(item.shipCost);
	document.getElementById("js-item-details-desc").innerHTML=item.desc;
	
	//update review display
	displayReviews(item);
	
	//show item details popup
	document.getElementById("js-item-details").classList.remove("hide");
}
function closeItemDetails() {
	//hide item details popup
	document.getElementById("js-item-details").classList.add("hide");
}


//Review Functions
function addReview(){
	var itemId=document.getElementById("js-item-details-id").innerText;
	var item=getItemById(itemId);
	var reviewInput=document.getElementById("js-review-input");
	var reviewText=reviewInput.value.trim();
	
	if(reviewText.length == 0){
		reviewInput.focus();
		updateReviewStatus("Review text must not be empty!", "error");
		return;
	}
	
	//add to item reviews object
	item.reviews.push(reviewText);
	
	//clear review input
	reviewInput.value='';
	reviewInput.focus();
	
	//update review display
	displayReviews(item);
	
	//update review succes status
	updateReviewStatus("Successfully added review!", "success");
}


//Currency Functions
function currencyChange(){	
	displayStoreItems();
	displayCartItems();
}
function getCurrencyDisplay(amount){
	var currency=document.getElementById("js-currency").value.toLowerCase();
	
	//get currency index
	for(var i=0; i < currencyList.length; i++){
		if(currency == currencyList[i].name.toLowerCase()){
			break;
		}
	}
	//get currency object
	var currencyItem=currencyList[i];
	var newAmount=parseFloat(amount) * currencyItem.multiplier;
	
	return currencyItem.prefix + newAmount.toFixed(2) + ' ' + currencyItem.suffix;
}


//Search Functions
function getItemById(itemID){
	for(var i=0; i < storeItemsList.length; i++){
		if(storeItemsList[i].id.toLowerCase() == itemID.toLowerCase()){
			return storeItemsList[i];
		}
	}
	return null;
}
function getItemQtyFromCart(itemID){
	var cartItem=getItemFromCart(itemID);
	
	if(cartItem == null) return 0;
	
	return cartItem.qty;
}
function getItemFromCart(itemID){
	for(var i=0; i < cartItemsList.length; i++){
		if(cartItemsList[i].id == itemID){
			return cartItemsList[i];
		}
	}
	
	return null;
}


//Others
function updateQtyCounter(itemIndex, updateType){
	var item = storeItemsList[itemIndex];
	var qtyCounterInput=document.querySelectorAll('#js-item-'+ itemIndex +' .js-item-qty-counter')[0];
	var qtyCounter=parseInt(qtyCounterInput.value);
	
	//increase or decrease counter
	if(updateType == '+'){
		qtyCounter++;
	}else if(updateType == '-'){
		qtyCounter--;
	}
	
	//check qtyCounter value
	if(qtyCounter < 0) return;
	
	//update counter input
	qtyCounterInput.value=qtyCounter;
}

function updateItemStatus(itemIndex, text, statusType){
	var statusElement=document.querySelectorAll('#js-item-'+ itemIndex +' .js-status')[0];
	
	//reset status classes
	statusElement.classList.remove("success");
	statusElement.classList.remove("error");
	
	if(statusType == "success"){
		statusElement.classList.add("success");
	}else if(statusType == "error"){
		statusElement.classList.add("error");
	}
	
	statusElement.innerText=text;
}
function updateReviewStatus(text, statusType){
	var reviewInput=document.getElementById('js-review-status');
	
	//reset status classes
	reviewInput.classList.remove("success");
	reviewInput.classList.remove("error");
	
	if(statusType == "success"){
		reviewInput.classList.add("success");
	}else if(statusType == "error"){
		reviewInput.classList.add("error");
    }
	
    reviewInput.innerText=text;
}

