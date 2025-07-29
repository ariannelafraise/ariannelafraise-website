[![publish-to-github-pages](https://github.com/ariannelafraise/ariannelafraise-website/actions/workflows/publish.yml/badge.svg)](https://github.com/ariannelafraise/ariannelafraise-website/actions/workflows/publish.yml)

# Personal website

Access it here: https://arianne.paintilya.dev

[Github repository](https://github.com/ariannelafraise/ariannelafraise-website)↗

<img class="small-img" alt="Github Actions status badge" src="https://github.com/ariannelafraise/ariannelafraise-website/actions/workflows/publish.yml/badge.svg" />

A website to showcase my projects.

## Technical details
This is a Next.js website that I’m building as a static site, hosted on GitHub Pages.
It features Continuous Deployment (CD) using GitHub Actions, so any updates pushed to the main branch are automatically built and deployed!

I also added a feature to generate pages (like this one) from Markdown files for each of my projects.

All I need to do is to make a Markdown file like this:

**very-cool-project.mdx**
```mdx
---
id: "very-cool-project" // This is the same as the name of the file
name: "Very cool project"
description: "My very cool project!!"
priority: 10 // To determine its position in the projects list
---
# Very cool project
this is my very cool project :D

<img src="https://paintilya.dev/very-cool-image.png" alt="a very cool image"/>

## Example
- Hey 1
- Hey 2
- Hey 3
```

Aaaannnd it will automatically become a page!
