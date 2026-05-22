"use strict";

document.addEventListener('DOMContentLoaded', function () {

	const container = document.querySelector('.used-technologies-section');
	if (!container) return;

	const techItems = Array.from(container.querySelectorAll('.tech-item'));
	if (!techItems.length) return;

	techItems.forEach((item, idx) => {
		if (idx === 0) item.classList.add('active');
		else item.classList.remove('active');
		item.style.cursor = 'pointer';
	});

	techItems.forEach(item => {
		item.addEventListener('click', () => {
			techItems.forEach(i => i.classList.remove('active'));
			item.classList.add('active');
		});
	});
});