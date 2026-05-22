"use strict";

document.addEventListener('DOMContentLoaded', function () {

	const container = document.querySelector('.used-technologies-section');
	if (!container) return;

	const techItems = Array.from(container.querySelectorAll('.tech-item'));
	if (!techItems.length) return;

	const iconBox = container.querySelector('.tech-icon-box');
	
	const updateActiveState = (activeItem) => {
		techItems.forEach(item => {
			const label = item.querySelector('.tech-label');
			if (item === activeItem) {
				item.classList.add('active');
				if (label) label.style.fontSize = 'calc(1rem * 1.2)';
				
				if (iconBox) {
					activeItem.appendChild(iconBox);
				}
			} else {
				item.classList.remove('active');
				if (label) label.style.fontSize = '1rem';
			}
		});
	};

	techItems.forEach((item, idx) => {
		item.style.cursor = 'pointer';
	});
	updateActiveState(techItems[0]);

	techItems.forEach(item => {
		item.addEventListener('click', () => {
			updateActiveState(item);
		});
	});
});