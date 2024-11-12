// Console Tags
document.addEventListener("DOMContentLoaded", () => {
  const consoleTags = Array.from(document.getElementsByClassName('case-tag'));

  function handleSelect(event) {
    consoleTags.forEach(element => {
      element.classList.remove('selected');
    })

    event.currentTarget.classList.add('selected');

    const caseType = event.currentTarget.dataset.case
    const choosePdt = Array.from(document.getElementsByClassName('choose-pdt-card'));
    const mainPdt = document.getElementById('main-pdt');

    choosePdt.forEach(element => {
      element.classList.remove('selected');
    })

    choosePdt.forEach(element => {
      if (element.id === caseType) {
        element.classList.add('selected');
      };
    })

    // Fade out current image
    mainPdt.style.opacity = '0';

    setTimeout(() => {
      mainPdt.src = `../assets/buy-now-assets/${caseType}.png`; // Change image src
      mainPdt.style.opacity = '1'; // Fade in with the new image
    }, 400); // Delay should match the CSS transition duration
  };

  consoleTags.forEach(element => {
    element.addEventListener('click', handleSelect);
  });
  
});

// Storage Tags
document.addEventListener("DOMContentLoaded", () => {
  const storageTags = Array.from(document.getElementsByClassName('storage-tag'));
  const product = document.getElementsByClassName('shopping-header')[0].innerHTML;

  function handleSelect(event) {
    storageTags.forEach(element => {
      element.classList.remove('selected');
    })

    event.currentTarget.classList.add('selected');

    const originalPrice = document.getElementById('originalPrice');
    const discountedPrice = document.getElementById('discountedPrice');
    const qty = parseInt(document.getElementById('qty').innerHTML);

    if (product === 'Lumio 64') {
      if (event.currentTarget.dataset.size === '128') {
        var totalPrice = 88.90 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
      if (event.currentTarget.dataset.size === '256') {
        var totalPrice = 103.90 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
      if (event.currentTarget.dataset.size === '512') {
        var totalPrice = 133.90 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
    } else {
      if (event.currentTarget.dataset.size === '128') {
        var totalPrice = 63.50 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
      if (event.currentTarget.dataset.size === '256') {
        var totalPrice = 78.50 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
      if (event.currentTarget.dataset.size === '512') {
        var totalPrice = 108.50 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
    }
  };

  storageTags.forEach(element => {
    element.addEventListener('click', handleSelect);
  });

});

// Product cards
document.addEventListener("DOMContentLoaded", () => {
  const choosePdt = Array.from(document.getElementsByClassName('choose-pdt-card'));
  const mainPdt = document.getElementById('main-pdt');

  function handleSelect(event) {
    choosePdt.forEach(element => {
      element.classList.remove('selected');
    })

    event.currentTarget.classList.add('selected');

    const pdtName = event.currentTarget.id;

    // Fade out current image
    mainPdt.style.opacity = '0';

    // Use a timeout to allow the fade-out effect to complete before changing the src
    setTimeout(() => {
      mainPdt.src = `../assets/buy-now-assets/${pdtName}.png`; // Change image src
      mainPdt.style.opacity = '1'; // Fade in with the new image
    }, 400); // Delay should match the CSS transition duration
  };

  choosePdt.forEach(element => {
    element.addEventListener('click', handleSelect);
  });

});

// Quantity buttons
function decreaseValue(field_id) {
	const numberField = document.getElementById(field_id);
	const currentValue = parseInt(numberField.innerHTML) || 0;
	if (currentValue > 1) {
    numberField.innerHTML = currentValue - 1;

    const originalPrice = document.getElementById('originalPrice');
    const discountedPrice = document.getElementById('discountedPrice');
    const qty = currentValue - 1;
    const storage = document.getElementsByClassName('storage-tag selected')[0];
    const product = document.getElementsByClassName('shopping-header')[0].innerHTML;
    
    if (product === 'Lumio 64') {
      if (storage.dataset.size === '128') {
        var totalPrice = 88.90 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
      if (storage.dataset.size === '256') {
        var totalPrice = 103.90 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
      if (storage.dataset.size === '512') {
        var totalPrice = 133.90 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
    } else {
      if (storage.dataset.size === '128') {
        var totalPrice = 63.50 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
      if (storage.dataset.size === '256') {
        var totalPrice = 78.50 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
      if (storage.dataset.size === '512') {
        var totalPrice = 108.50 * qty;
        var offPrice = 0.8 * totalPrice;
        originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
        discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
      }
    }
	}
}

function increaseValue(field_id) {
	const numberField = document.getElementById(field_id);
	const currentValue = parseInt(numberField.innerHTML) || 0;
	numberField.innerHTML = currentValue + 1;

  const originalPrice = document.getElementById('originalPrice');
  const discountedPrice = document.getElementById('discountedPrice');
  const qty = currentValue + 1;
  const storage = document.getElementsByClassName('storage-tag selected')[0];
  const product = document.getElementsByClassName('shopping-header')[0].innerHTML;

  if (product === 'Lumio 64') {
    if (storage.dataset.size === '128') {
      var totalPrice = 88.90 * qty;
      var offPrice = 0.8 * totalPrice;
      originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
      discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
    }
    if (storage.dataset.size === '256') {
      var totalPrice = 103.90 * qty;
      var offPrice = 0.8 * totalPrice;
      originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
      discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
    }
    if (storage.dataset.size === '512') {
      var totalPrice = 133.90 * qty;
      var offPrice = 0.8 * totalPrice;
      originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
      discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
    }
  } else {
    if (storage.dataset.size === '128') {
      var totalPrice = 63.50 * qty;
      var offPrice = 0.8 * totalPrice;
      originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
      discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
    }
    if (storage.dataset.size === '256') {
      var totalPrice = 78.50 * qty;
      var offPrice = 0.8 * totalPrice;
      originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
      discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
    }
    if (storage.dataset.size === '512') {
      var totalPrice = 108.50 * qty;
      var offPrice = 0.8 * totalPrice;
      originalPrice.innerHTML = 'S$' + totalPrice.toFixed(2);
      discountedPrice.innerHTML = 'S$' + offPrice.toFixed(2);
    }
  }

}
