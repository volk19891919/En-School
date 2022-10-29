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
			600: {
				slidesPerView: 2.2,
			},
			993: {
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

})
