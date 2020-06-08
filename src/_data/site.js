module.exports = function () {
  const pathPrefix = process.env.ELEVENTY_ENV === 'staging' || process.env.ELEVENTY_ENV === 'development' ? '' : '11ty-test'
  
  const url = process.env.ELEVENTY_ENV === 'staging' || process.env.ELEVENTY_ENV === 'development' ? 'http://localhost:8080' : 'https://lexoyo.me/11ty-test'

  return {
    url,
    pathPrefix,
    "items": [
      {
        "text": "Home",
        "url": "/" + pathPrefix,
        "external": false
      },
      {
        "text": "GitHub",
        "url": "https://github.com/hankchizljaw/hylia",
        "external": true
      },
      {
        "text": "Twitter",
        "url": "https://twitter.com/hankchizljaw",
        "external": true
      }
    ]
  }
}
