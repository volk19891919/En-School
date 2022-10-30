document.addEventListener('DOMContentLoaded', () => {

	const calcNav = document.querySelector('.calc-nav')

	calcNav.addEventListener('click', (e) => {
		const btns = document.querySelectorAll('.calc-btn')

		const target = e.target
		const targetLoc = target.dataset.loc
		const targetNative = target.dataset.native

		const locCalc = document.querySelector('.loc-calc')
		const nativeCalc = document.querySelector('.native-calc')


		Array.from(btns).forEach(btn => {
			btn.classList.remove('active')
		})
		target.classList.add('active')

		locCalc.innerHTML = targetLoc
		nativeCalc.innerHTML = targetNative
	})

	const car4 = new Swiper('.car-4', {
		loop: false,
		navigation: {
			nextEl: '.car-4-next',
			prevEl: '.car-4-prev',
		},
		spaceBetween: 0,
		breakpoints: {
			320: {
				slidesPerView: 1.2,
			},
			768: {
				slidesPerView: 2.2,
			},
			993: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			}
		}
	});

	const car2 = new Swiper('.car-2', {
		loop: false,
		navigation: {
			nextEl: '.car-2-next',
			prevEl: '.car-2-prev',
		},
		spaceBetween: 0,
		breakpoints: {
			320: {
				slidesPerView: 1.2,
			},
			993: {
				slidesPerView: 2,
			}
		}
	});

	const car6 = new Swiper('.car-6', {
		loop: false,
		navigation: {
			nextEl: '.car-6-next',
			prevEl: '.car-6-prev',
		},
		spaceBetween: 0,
		breakpoints: {
			320: {
				slidesPerView: 2.4,
			},
			578: {
				slidesPerView: 3.4,
			},
			768: {
				slidesPerView: 3.2,
			},
			993: {
				slidesPerView: 6,
			}
		}
	});

	const modalBtns = document.querySelectorAll('.modal-btn')
	const modalCloseBtns = document.querySelectorAll('.modal-close')
	const body = document.querySelector('body')
	
	for (let modalBtn of modalBtns) {
		modalBtn.addEventListener('click', () => {
			body.classList.add('bodi-modal-active')
		})
	}

	for (let modalCloseBtn of modalCloseBtns) {
		modalCloseBtn.addEventListener('click', () => {
			body.classList.remove('bodi-modal-active')
		})
	}

})
