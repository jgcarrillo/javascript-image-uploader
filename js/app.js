const input = document.querySelector('.btn-input');
const canvas = document.querySelector('.canvas');
const link = document.querySelector('.link');

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

const setStroke = (ctx, px, py, imX, imY) => {
	ctx.strokeStyle = 'white';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 6;
	ctx.strokeRect(px, py, imX, imY);
};

const drawImage = (ctx, image, px, py, imX, imY) => {
	ctx.drawImage(image, 0, 0, image.width, image.height, px, py, imX, imY);
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

	/**********************
	SET HERE THE IMAGE SIZE
	**********************/
	const imX = 1050;
	const imY = 750;

	/*******************************************
	SET HERE THE POSITION OF THE IMAGE IN CANVAS
	*******************************************/
	const px = 230;
	const py = 80;

	/******************
	BACKGROUND GRADIENT
	*******************/
	setGradient(ctx);

	imageElem.addEventListener('load', () => {
		/*******************
		DRAW IMAGE ON CANVAS
		*******************/
		drawImage(ctx, imageElem, px, py, imX, imY);

		/*********
		IMAGE BLUR
		**********/
		setBlur(ctx, 'black', 15);

		/****************
		IMAGE STROLE PATH
		****************/
		setStroke(ctx, px, py, imX, imY);

		/*********************************
		CREATE AND ENABLED DOWNLOAD BUTTON
		*********************************/
		link.download = 'canvas';
		link.classList.remove('link--disabled');
		link.href = canvas.toDataURL();
	});
});
