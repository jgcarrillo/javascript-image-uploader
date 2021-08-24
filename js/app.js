const imageInput = document.querySelector('#file-input');
const displayImg = document.querySelector('.display-image');
const imgLink = document.querySelector('.image-link');
let uploadedImage = '';

const downloadImage = async (imgSrc, { name }) => {
	const image = await fetch(imgSrc);
	const imageBlob = await image.blob();
	const imageURL = URL.createObjectURL(imageBlob);

	imgLink.classList.remove('is-disabled');
	imgLink.href = imageURL;
	imgLink.download = 'downloadedImage';
};

const createImage = (file) => {
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		localStorage.setItem('uploaded-image', reader.result);

		uploadedImage = reader.result;

		// displayImg.style.backgroundImage = `url(${uploadedImage})`;

		getLocalStorageImage();
	});

	reader.readAsDataURL(file);
};

const getLocalStorageImage = () => {
	const getImage = localStorage.getItem('uploaded-image');

	if (getImage) {
		displayImg.style.backgroundImage = `url(${getImage})`;
	} else {
		displayImg.style.backgroundColor = '';
	}
};

imageInput.addEventListener('change', function () {
	const file = this.files[0];
	const url = URL.createObjectURL(file);

	// CREATE PREVIEW IMAGE
	createImage(file);

	// DOWNLOAD THE PREVIOUS UPLOADED IMAGE
	downloadImage(url, file);

	getLocalStorageImage();
});

document.addEventListener('DOMContentLoaded', () => {
	getLocalStorageImage();
});
