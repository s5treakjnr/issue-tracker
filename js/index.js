import injectToHTML from './ui'
fetch('https://api.github.com/search/issues?q=type:issue+org:dsc-jiit-128')
.then(res => res.json())
.then(data => injectToHTML(data.items))
