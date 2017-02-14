## Website Performance Optimization Portfolio Project

Website optimized for the Udacity Front-End Developer Nanodegree. The website has been optimized to achieve a Google PageSpeed score of over 90 for desktop and mobile and runs animations at 60 fps.

## Getting Started
You can test these results on your local machine.

#### Prerequisites
* [Npm](https://nodejs.org/en/): NodeJS package manager.
* [Gulp](http://gulpjs.com/): Web development toolkit.
* [Python](https://www.python.org/): For running local servers.

#### Installing
**Part 1: Using Gulp**
1. Install gulp dependencies
```
npm install
```
2. Run gulp
```
gulp
```


**Part 2: Setting up local server**

1. Check out the repository
2. Run a local server

  ```bash
  # Navigate to your directory
  $> cd /path/to/project-folder/dist

  # python 2
  $> python -m SimpleHTTPServer 8080

  # python 3
  $> python -m http.server 8080
  ```
3. Open the browser and visit [localhost:8080](http://localhost:8080).
4. Download and install [ngrok](https://ngrok.com/) to the dist directory to make your local server available remotely.

  ```bash
  # Navigate to your directory
  $> cd /path/to/project-folder/

  # Start the remote server
  $> ngrok http 8080
  ```

5. Copy the public URL ngrok gives you and run it through [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

## Optimizations

#### Website Optimizations
A PageSpeed score of over 90 was achieved with the following techniques:
* Inlining critical CSS to index.html
* Using `media` param for CSS tags.
* Moved javascript to the bottom of the page.
* Added `async` to non-critical javascript such as google analytics to prevent the page from being blocked.
* Asynchronously loaded fonts using WebFontLoader
* Reduced file size by minifying text files and compressing images.

#### Browser Rendering Optimizations
60fps rendering speeds were achieved with the following techniques:
* Using `requestAnimationFrame()` to allow the browser to run any necessary javascript before a frame is compiled.
* Removing cases where expensive layout property calls were called multiple times in a loop unnecessarily.
