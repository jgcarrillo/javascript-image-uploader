![image](assets/canvas.png)

<div align="center">
    <b>🍀🌱 A simple JavaScript Vanilla app that allows you to upload a photo and download it again with a custom background.</b>
</div>

## Table of contents 👇

-   [✨ Explanation](#-explanation)
-   [🎨 Customization and features](#-customization-and-features)
-   [🚀 Usage](#-usage)
-   [🚩 Issues](#-issues)
-   [💛 Contact](#-contact)

### ✨ Explanation

This project was created with the aim of improve my **JavaScript vanilla** skills and also to try the possibility of upload an image and download it again with some changes without any server.

The usage is quite simple: you only need to upload a photo and the web set a **custom background by default** as well as some styles such as border or shadows within the canvas.

Once the image has been uploaded, a preview of the resulting image will appears. The final step is to click on the _Download image_ button.

### 🎨 Customization and features

Due to this is a personal project and a little MVP to show the capabilities of JavaScript, there are **some features** that hasn't been added such as:

-   Select a custom background.
-   Select between different border options.
-   Choose a transparent background.
-   Explore the possiblities of different image extensions (jpeg, png, etc.).

At the moment, you only are able to upload an image and download it again with a custom background by default.

### 🚀 Usage

The app works by reading the content of the files array in the index 0. It's important to say that that file need to be converted into al URL throught the `URL.createObjectURL()` metod.

The next step is create the image with that URL and paint it into the canvas when the image is loaded.

Finally, the image is painted into the canvas thanks to the `drawImage()` method. [You can see here further information about this method](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage).

The rest of the code invoques different arrow functions that apply styles within the image canvas.

### 🚩 Issues

During the development I found such a different issues related with works with canvas in JavaScript. Some are the following:

-   You cannot **render CSS** within the canvas, so you only are able to set styles by applying the canvas properties such as strokes, shadows or paths. For this reason, the possibilities are limitated.

-   I haven't been able to set a **proportional image** size for the resulting image, so I had to set manually the image size by myself.

-   The **image doesn't scale proportionally** to the final image, so in some images the result image will probably be quite distorsionated.

-   I have tried to set the uploaded image into the **Local Storage** but I couldn't.

If I have some time, most of those problems would be resolved.

### 💛 Contact

If you have some doubts or need to ask something about the project, feel free to reach me here:

-   Twitter: [https://twitter.com/jgcarrillo](https://twitter.com/jgcarrillo_)
-   LinkedIn: [https://es.linkedin.com/in/jgcarrilloweb](https://es.linkedin.com/in/jgcarrilloweb)
-   Website: [https://jgcarrillo.com/](https://jgcarrillo.com/)
