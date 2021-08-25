const input = document.querySelector('.btn-input');
const canvas = document.querySelector('.canvas');
const link = document.querySelector('.link');

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

const setGradient = (ctx) => {
	// https://briangrinstead.com/gradient/
	const gradient = ctx.createLinearGradient(0, 0, 0, 300);

	gradient.addColorStop(0, 'rgb(95, 119, 237)');
	gradient.addColorStop(1, 'rgb(203, 224, 104)');

	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 300, 300);

	ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const setBlur = (ctx, colour, size) => {
	ctx.shadowColor = colour;
	ctx.shadowBlur = size;
};

const setStroke = (ctx) => {
	ctx.strokeStyle = 'white';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 6;
	ctx.strokeRect(300, 200, 800, 500);
};

const drawImage = (ctx, image, canvas) => {
	ctx.drawImage(
		image,
		0,
		0,
		image.width,
		image.height,
		// canvas.width / 2 - imageElem.width / 2,
		// canvas.height / 2 - imageElem.height / 2,
		300,
		200,
		800,
		500
	);
};

input.addEventListener('change', (e) => {
	const file = e.target.files[0];
	const url = URL.createObjectURL(file);
	const ctx = canvas.getContext('2d');

	const imageElem = createImageElement(url);

	/***********************
	SET HERE THE CANVAS SIZE
	***********************/
	canvas.width = 1500;
	canvas.height = 900;

	/******************
	BACKGROUND GRADIENT
	*******************/
	setGradient(ctx);

	imageElem.addEventListener('load', () => {
		/*******************
		DRAW IMAGE ON CANVAS
		*******************/
		drawImage(ctx, imageElem, canvas);

		/*********
		IMAGE BLUR
		**********/
		setBlur(ctx, 'black', 15);

		/****************
		IMAGE STROLE PATH
		****************/
		setStroke(ctx);

		/*********************************
		CREATE AND ENABLED DOWNLOAD BUTTON
		*********************************/
		link.download = 'canvas';
		link.classList.remove('link--disabled');
		link.href = canvas.toDataURL();
	});
});
