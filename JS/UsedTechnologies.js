"use strict";

document.addEventListener('DOMContentLoaded', function() {
	let section = document.querySelector('.used-technologies-section');
	if (!section) {
		return;
	}

	let items = document.querySelectorAll('.tech-item');
	let iconBox = document.querySelector('.tech-icon-box');
	
	if (items.length > 0) {
		setActiveItem(items[0]);
	}

	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		item.style.cursor = 'pointer';
		
		item.addEventListener('click', function(event) {
			event.preventDefault();
			setActiveItem(this);
		});
	}

	function setActiveItem(selectedItem) {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove('active');
			let textLabel = items[i].querySelector('.tech-label');
			if (textLabel) {
				textLabel.style.fontSize = '1rem';
			}
		}

		selectedItem.classList.add('active');
		let activeLabel = selectedItem.querySelector('.tech-label');
		if (activeLabel) {
			activeLabel.style.fontSize = 'calc(1rem * 1.2)';
		}

		if (iconBox) {
			let iconAlreadyInItem = selectedItem.querySelector('.tech-icon-box');
			if (!iconAlreadyInItem) {
				selectedItem.appendChild(iconBox);
			}
		}
	}
});