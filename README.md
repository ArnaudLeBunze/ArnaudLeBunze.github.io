# ArnaudLeBunze.github.io

My personnal github page to use as a sandbox, to try a multiple of things.

## How to deploy

Commit & push changes to main then run

```
npm run build
```

Once the build is done run those git command

```bash
git add dist && git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages
```
