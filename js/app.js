const imageInput = document.querySelector('#file-input');
const displayImg = document.querySelector('.display-image');
const imgLink = document.querySelector('.image-link');
let uploadedImage = '';

imageInput.addEventListener('change', function () {
	const reader = new FileReader();

	const file = imageInput.files[0];
	const url = URL.createObjectURL(file);

	reader.addEventListener('load', () => {
		uploadedImage = reader.result;

		displayImg.style.backgroundImage = `url(${uploadedImage})`;
	});

	reader.readAsDataURL(this.files[0]);

	downloadImage(url, this.files[0]);
});

const downloadImage = async (imgSrc, { name }) => {
	const image = await fetch(imgSrc);
	const imageBlob = await image.blob();
	const imageURL = URL.createObjectURL(imageBlob);

	imgLink.href = imageURL;
	imgLink.download = name || 'download';
};
