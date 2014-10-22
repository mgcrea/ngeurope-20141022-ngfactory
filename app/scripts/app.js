'use strict';
/* global Reveal, hljs */

// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: 'none', //Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
  // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',

  // Optional libraries used to extend on reveal.js
  dependencies: [{
      src: 'lib/js/classList.js',
      condition: function() {
        return !document.body.classList;
      }
    }, {
      src: 'bower_components/reveal.js/plugin/markdown/marked.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'bower_components/reveal.js/plugin/markdown/markdown.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      // src: 'bower_components/reveal.js/plugin/highlight/highlight.js',
      src: 'bower_components/highlightjs/highlight.pack.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }, {
      src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js',
      async: true,
      condition: function() {
        return !!document.body.classList;
      }
    }, {
      src: 'bower_components/reveal.js/plugin/notes/notes.js',
      async: true,
      condition: function() {
        return !!document.body.classList;
      }
    }
  ]
});
