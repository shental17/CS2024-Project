function updatePrices() {
  // Get the quantity
  const qtyElements = document.querySelectorAll(".qty");
  let qty = parseInt(qtyElements[0].innerHTML) || 0;

  // Get the item price (assuming all items have the same price)
  const itemPriceElement = document.querySelector(".item-price");
  let itemPrice = parseFloat(itemPriceElement.innerText.replace("$", "")) || 0;

  // Calculate the total price
  let totalPrice = qty * itemPrice;

  // Calculate the GST (9% of total price)
  let gst = totalPrice * 0.09;

  // Calculate the subtotal (total price + GST)
  let subtotal = totalPrice + gst;

  // Shipping is fixed at $5.00
  let shipping = 5.0;

  // Calculate the grand total (subtotal + shipping)
  let grandTotal = subtotal + shipping;

  // Update all the displayed values
  document.querySelectorAll(".total-price").forEach((element) => {
    element.innerText = "$" + totalPrice.toFixed(2);
  });
  document.querySelectorAll(".subtotal").forEach((element) => {
    element.innerText = "$" + subtotal.toFixed(2);
  });
  document.querySelectorAll(".gst").forEach((element) => {
    element.innerText = "$" + gst.toFixed(2);
  });
  document.querySelectorAll(".shipping").forEach((element) => {
    element.innerText = "$" + shipping.toFixed(2);
  });
  document.querySelectorAll(".grand-total").forEach((element) => {
    element.innerText = "$" + grandTotal.toFixed(2);
  });
}

function decreaseValue() {
  const qtyElements = document.querySelectorAll(".qty");
  qtyElements.forEach((element) => {
    const currentValue = parseInt(element.innerHTML) || 0;
    if (currentValue > 1) {
      element.innerHTML = currentValue - 1;
    }
  });

  // Update prices
  updatePrices();
}

function increaseValue() {
  const qtyElements = document.querySelectorAll(".qty");
  qtyElements.forEach((element) => {
    const currentValue = parseInt(element.innerHTML) || 0;
    element.innerHTML = currentValue + 1;
  });

  // Update prices
  updatePrices();
}

function deleteItem() {
  // Get the tbody element where the cart items are displayed
  const cartBody = document.getElementById("cart-body");

  // Replace the content of tbody with the "No items" message
  cartBody.innerHTML =
    '<tr class="row"><td colspan="12"><p>There are no items in the shopping cart</p></td></tr>';

  // Calculate the total price
  let totalPrice = 0;

  // Calculate the GST (9% of total price)
  let gst = totalPrice * 0.09;

  // Calculate the subtotal (total price + GST)
  let subtotal = totalPrice + gst;

  // Shipping is fixed at $5.00
  let shipping = 0;

  // Calculate the grand total (subtotal + shipping)
  let grandTotal = subtotal + shipping;

  // Update all the displayed values
  document.querySelectorAll(".total-price").forEach((element) => {
    element.innerText = "$" + totalPrice.toFixed(2);
  });
  document.querySelectorAll(".subtotal").forEach((element) => {
    element.innerText = "$" + subtotal.toFixed(2);
  });
  document.querySelectorAll(".gst").forEach((element) => {
    element.innerText = "$" + gst.toFixed(2);
  });
  document.querySelectorAll(".shipping").forEach((element) => {
    element.innerText = "$" + shipping.toFixed(2);
  });
  document.querySelectorAll(".grand-total").forEach((element) => {
    element.innerText = "$" + grandTotal.toFixed(2);
  });
}
