const input = document.querySelector('.btn-input');
const canvas = document.querySelector('.canvas');
const link = document.querySelector('.link');
let uploadedImage = '';

/*
const downloadImage = async (imgSrc, { name }) => {
	const image = await fetch(imgSrc);
	const imageBlob = await image.blob();
	const imageURL = URL.createObjectURL(imageBlob);

	createLink(link, imageURL);
};
*/

/*
const createLink = (link, url) => {
	link.classList.remove('link--disabled');
	link.href = url;
	link.download = 'downloadedImage';
};
*/

/*
const displayImage = (file) => {
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		uploadedImage = reader.result;

		canvas.style.backgroundImage = `url(${uploadedImage})`;
	});

	reader.readAsDataURL(file);
};
*/

/*
const getImg = async (url, imgElem) => {
	const ctx = canvas.getContext('2d');

	const res = await fetch(url);
	const b = await res.blob();
	const imageUrl = URL.createObjectURL(b);

	imgElem.addEventListener('load', () => {
		URL.revokeObjectURL(imageUrl);
	});
	ctx.drawImage(imgElem, 0, 0);
	imgElem.src = imageUrl;
};
*/

const createImageElement = (imageURL) => {
	const $image = document.createElement('img');

	$image.src = imageURL;
	$image.classList.add('canvas__img');

	return $image;
};

input.addEventListener('change', (e) => {
	const file = e.target.files[0];
	const url = URL.createObjectURL(file);
	const ctx = canvas.getContext('2d');

	imageElem = createImageElement(url);

	canvas.width = 1500;
	canvas.height = 900;
	ctx.fillStyle = 'red';

	ctx.fillRect(0, 0, canvas.width, canvas.height);
	imageElem.addEventListener('load', () => {
		ctx.drawImage(
			imageElem,
			0,
			0,
			imageElem.width,
			imageElem.height,
			// canvas.width / 2 - imageElem.width / 2,
			// canvas.height / 2 - imageElem.height / 2,
			0,
			0,
			400,
			300
		);

		link.download = 'canvas';
		link.classList.remove('link--disabled');
		link.href = canvas.toDataURL();
	});
});
