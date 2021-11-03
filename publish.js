const gh = require('gh-pages');

gh.publish('dist', {
    branch: 'main',
    repo: 'https://github.com/bloiko/bohdan.github.io'
}, () => console.log('done'))
