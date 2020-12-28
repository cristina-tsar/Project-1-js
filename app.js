//add to cart
let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl)
let addToCart = document.querySelectorAll(".card")
console.log(addToCart)

for(let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click",function() {
        productsCountEl.textContent = +productsCountEl.textContent + +quantityValue[i].value;
        quantityValue[i].value = 1;
    })
}
// like
let likeBtns = document.querySelectorAll(".like")
/*
likeBtns.forEach((item) => {
    item.addEventListener("click", function() {
        if(item.classList.contains("liked")) {
            item.classList.remove("liked")
        } else {
            item.classList.add("liked")
        }
    })
})*/
likeBtns.forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        item.classList.toggle("liked")
    })
})
//form

let moreDetaillsBtns = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close")

function closeModal() {
    modal.classList.remove("showe");
    modal.classList.add("hide")
}
function openModal() {
    modal.classList.add("showe");
    modal.classList.remove("hide")
}

moreDetaillsBtns.forEach((btn) => {
    btn.addEventListener("click", function() {
        openModal()
    })
})

btnClose.addEventListener("click", closeModal)
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        closeModal()
    }
})

function showModalByScroll() {
    if (window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal();
        window.addEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll, {
    
})

// change product quantity урок 25

let decrementButtons = document.querySelectorAll(".decrement-button");
let incrementButtons = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");
/*let minCount = 1;
let maxCount = 5;

quantityValue.forEach((item,i) => {
    let currentCount = +quantityValue[i].value;
    toggleButtonState(currentCount,decrementButtons[i],incrementButtons[i]);
})

function toggleButtonState(count,decrementButton,incrementButton) {
    decrementButton.disabled = count <= minCount;        
    incrementButton.disabled = count >= maxCount;
}

quantityValue.forEach((item,i) => {
    incrementButtons[i].addEventListener("click",function() {
        let currentCount = +quantityValue[i].value;
        let nextCount = currentCount + 1;
        quantityValue[i].value = nextCount; 
        toggleButtonState(nextCount,decrementButtons[i],incrementButtons[i])  
    })
})

quantityValue.forEach((item,i) => {
    decrementButtons[i].addEventListener("click",function() {
        let currentCount = +quantityValue[i].value;
        let nextCount = currentCount - 1;
        quantityValue[i].value = nextCount;  
        toggleButtonState(nextCount,decrementButtons[i],incrementButtons[i])
    
    })
})*/

// фукція калкулятора урок 25 1:30:00

/*function Calculator (a,b) {
    this.a = a;
    this.b = b;

    this.sum = function() {
        return this.a + this.b
    }
    this.mul = function() {
        return this.a * this.b
    }
}
const calc = new Calculator(2,15)
console.log(calc)*/
//OOP

function Counter(incrementButton,decrementButton,inputField,minCount,maxCount) {
    
    this.domRefs[i] = {
        incrementButton,
        decrementButton,
        inputField,
    }

    this.toggleButtonState = function() {
        let count = +this.domRefs.inputField.value[i];
        this.domRefs.decrementButton.disabled[i] = count <= minCount;
        this.domRefs.incrementButton.disabled[i] = count >= maxCount;
    }
    this.toggleButtonState()

    this.increment = function() {
        let currentCount = +this.domRefs.inputField.value[i];
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value[i] = nextCount; 

        this.toggleButtonState()      
    }
    this.decrement = function() {
        let currentCount = +this.domRefs.inputField.value[i];
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value[i] = nextCount; 

        this.toggleButtonState()      
    }
    
    this.domRefs[i].incrementButton.addEventListener("click",this.increment.bind(this))
    this.domRefs[i].decrementButton.addEventListener("click",this.decrement.bind(this))

}

const counter = new Counter(incrementButtons[i],decrementButtons[i],quantityValue[i],1,5)



