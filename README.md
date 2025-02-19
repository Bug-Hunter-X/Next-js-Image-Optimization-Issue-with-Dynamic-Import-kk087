# Next.js Image Optimization Issue with Dynamic Import

This repository demonstrates a bug related to Next.js image optimization when using dynamic `import()` statements.  The issue causes images to not be optimized and potentially fail to load correctly.

## Bug Description

The provided `pages/index.js` file includes an image using a relative path. When running the Next.js application, the image is not properly optimized by Next.js's image optimization features. This results in a larger image size and potential loading performance issues.

## Solution

The solution involves using the `Image` component from Next.js and specifying the image source correctly within that component, even within dynamically imported components. This ensures that Next.js handles optimization. 

## Steps to reproduce
1. Clone the repository.
2. Navigate to the repository directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Observe that the image is not optimized.
