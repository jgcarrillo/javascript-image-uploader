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
	imgLink.download = name || 'download';
};

const createImage = (file) => {
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		uploadedImage = reader.result;
		displayImg.style.opacity = '0.5';
		displayImg.style.backgroundImage = `url(${uploadedImage})`;
	});

	reader.readAsDataURL(file);
};

imageInput.addEventListener('change', function () {
	const file = this.files[0];
	const url = URL.createObjectURL(file);

	createImage(file);

	downloadImage(url, file);
});
