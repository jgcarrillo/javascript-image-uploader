const imageInput = document.querySelector('#file-input');
const displayImg = document.querySelector('.display-image');
const imgLink = document.querySelector('.image-link');
let uploadedImage = '';

const downloadImage = async (imgSrc, { name }) => {
	const image = await fetch(imgSrc);
	const imageBlob = await image.blob();
	const imageURL = URL.createObjectURL(imageBlob);

	createLink(imgLink, imageURL);
};

const createLink = (link, url) => {
	link.classList.remove('is-disabled');
	link.href = url;
	link.download = 'downloadedImage';
};

const createImageElement = (imageURL) => {
	const $image = document.createElement('img');

	$image.src = imageURL;
	$image.classList.add('canvas__img');

	return $image;
};

const displayImage = (file) => {
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		uploadedImage = reader.result;

		displayImg.style.backgroundImage = `url(${uploadedImage})`;
	});

	reader.readAsDataURL(file);
};

const getImg = async (url, imgElem) => {
	const ctx = displayImg.getContext('2d');

	const res = await fetch(url);
	const b = await res.blob();
	const imageUrl = URL.createObjectURL(b);
	console.log(imageUrl);

	imgElem.addEventListener('load', () => {
		URL.revokeObjectURL(imageUrl);
	});
	ctx.drawImage(imgElem, 0, 0);
	imgElem.src = imageUrl;
};

imageInput.addEventListener('change', (e) => {
	const file = e.target.files[0];
	const url = URL.createObjectURL(file);
	const ctx = displayImg.getContext('2d');

	imageElem = createImageElement(url);
	// getImg(url, imageElem);

	imageElem.addEventListener('load', () => {
		ctx.drawImage(imageElem, displayImg.width / 2 - imageElem.width / 2, displayImg.height / 2 - imageElem.height / 2);

		const link = document.createElement('a');
		link.download = 'canvas';
		link.href = displayImg.toDataURL();
		console.log(link);
		link.click();
	});

	displayImg.width = 1000;
	displayImg.height = 1000;
	// ctx.fillStyle = 'red';
	// ctx.fillRect(0, 0, displayImg.width, displayImg.height);

	// CREATE PREVIEW IMAGE
	// displayImage(file);

	// DOWNLOAD THE PREVIOUS UPLOADED IMAGE
	// downloadImage(url, file);
});
