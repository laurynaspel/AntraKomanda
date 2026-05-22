"use strict";

document.addEventListener('DOMContentLoaded', function() {
	var section = document.querySelector('.used-technologies-section');
	if (!section) {
		return;
	}

	var items = document.querySelectorAll('.tech-item');
	var iconBox = document.querySelector('.tech-icon-box');
	
	if (items.length > 0) {
		setActiveItem(items[0]);
	}

	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		item.style.cursor = 'pointer';
		
		item.addEventListener('click', function(event) {
			event.preventDefault();
			setActiveItem(this);
		});
	}

	function setActiveItem(selectedItem) {
		for (var i = 0; i < items.length; i++) {
			items[i].classList.remove('active');
			var textLabel = items[i].querySelector('.tech-label');
			if (textLabel) {
				textLabel.style.fontSize = '1rem';
			}
		}

		selectedItem.classList.add('active');
		var activeLabel = selectedItem.querySelector('.tech-label');
		if (activeLabel) {
			activeLabel.style.fontSize = 'calc(1rem * 1.2)';
		}

		if (iconBox) {
			var iconAlreadyInItem = selectedItem.querySelector('.tech-icon-box');
			if (!iconAlreadyInItem) {
				selectedItem.appendChild(iconBox);
			}
		}
	}
});