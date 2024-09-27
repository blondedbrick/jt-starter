# Jekyll/Tailwind Starter

Jekyll + Tailwind Starter template. Comes with Material Icons (rounded) by default. Currently working on setting this up with Github Pages.

## Installing prerequisites

Once you've cloned and opened this in VS Code, open your terminal and the following commands in order:

```
bundler install
npm install
bundle exec jekyll build
bundle exec jekyll serve
```

Afterwards open a second terminal and input the following commands, also in order:

```
npm run build:css
npm run watch:css
```

## How how to make your own Jekyll + Tailwind starter

### 0: Create your Jekyll project

Directions on how to install Ruby and Jekyll [here](https://jekyllrb.com/).

### 1: Initialize your Jekyll project

Open your Jekyll project folder in VSCode. Open your terminal and run:

```
bundle install
bundle exec jekyll serve
```

### 2: Install Node.js & npm

You'll need Node.js and npm installed to set up Tailwind CSS. You can download them from [Node.js](https://nodejs.org/en). Check if you have them installed:

```
node -v
npm -v
```

### 3: Initialize npm in your project

Navigate to your project folder and initialize an npm package:

```
npm init -y
```

This will create a `package.json` file

### 4: Install Tailwind CSS

Install Tailwind CSS and its peer dependencies by running:

```
npm install -D tailwindcss postcss autoprefixer
```

### 5: Create Tailwind CSS Configuration

Generate a basic `tailwind.config.js` file using:

```
npx tailwindcss init
```

### 6: Configure the Tailwind CSS File

In your project, create a new CSS file, for example `assets/css/tailwind.css`. In this file, include the Tailwind directives:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 7: Update the tailwind.config.js file

```
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/*.html',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

This tells Tailwind to scan your Jekyll files for classes.

### 8: Add a PostCSS configuration

In your project root, create a file called `postcss.config.js` and add the following configuration:

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 9: Build Tailwind CSS

Modify your `package.json` scripts to build the Tailwind CSS file. Add the following to the "scripts" section:

```
"scripts": {
  "build:css": "npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/main.css --minify"
}
```

This script compiles and minifies your Tailwind CSS into main.css.

### 10: Link Tailwind in your Jekyll project

Update your Jekyll layouts to use the compiled Tailwind CSS. In your default layout (like `_layouts/default.html`), add this line inside the `<head>`:

```
<link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
```

### 11: Build and Serve the Site

Now build the Tailwind CSS and run your Jekyll site:

```
npm run build:css
bundle exec jekyll serve
```

### 12: Automate the Build Process (Optional)

To automatically build Tailwind CSS when working on your site, you can add a watch command. Modify the scripts in `package.json`:

```
"scripts": {
  "build:css": "npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/main.css --minify",
  "watch:css": "npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/main.css --watch"
}
```

Now run the following command to automatically build your CSS as you make changes:

```
npm run watch:css
```

## Making this work with Github Pages

WIP
