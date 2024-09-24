# Jekyll/Tailwind Starter

Jekyll with tailwind built in. This also has material icons linked so theres that. I still have to setup the proper github actions for this to work with github pages, which is the end goal. You may use this template however you like, im not very good with coding so i would appreciate any suggestions on how to improve this starter template.

## Installing prerequisites

Once you've cloned and opened this in VS Code, open your terminal and the following commands in order:

`bundler install`
`npm install`
`bundle exec jekyll build`
`bundle exec jekyll serve`

Afterwards open a second terminal and input the following commands, also in order:

`npm run build:css`
`npm run watch:css`

## How how to make your own Jekyll + Tailwind starter

### 0: Create your Jekyll project

Directions on how to install Ruby and Jekyll [here](https://jekyllrb.com/).

### 1: Initialize your Jekyll project

Ensure your Jekyll project is set up and running with the Just-the-Docs theme.

    1.Go to your Jekyll project folder.
    2.Open your terminal and run:

`bundle install` `bundle exec jekyll serve`

### 2: Install Node.js & npm

You'll need Node.js and npm installed to set up Tailwind CSS. You can download them from [Node.js](https://nodejs.org/en). Check if you have them installed:

`node -v` `npm -v`

### 3: Initialize npm in your project

Navigate to your project folder and initialize an npm package:

`npm init -y`

This will create a package.json file

### 4: Install Tailwind CSS

Install Tailwind CSS and its peer dependencies by running:

`npm install -D tailwindcss postcss autoprefixer`

### 5: Create Tailwind CSS Configuration

Generate a basic tailwind.config.js file using:

`npx tailwindcss init`
