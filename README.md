# EmPRISE Website

This repository contains the Jekyll template and content used for generating the EmPRISE Lab Website at [emprise.cs.cornell.edu](https://emprise.cs.cornell.edu/).

The `master` branch hosts the template and `yml` files used to generate the pages. `deploy-server` branch contains the rendered static pages to be hosted in the Cornell web container.

To edit the website, begin by [installing Jekyll](https://jekyllrb.com/docs/installation/) on your system. Once you have Jekyll installed, clone this repository and create your own branch.

## Locally hosting the website
You can run `bundle exec jekyll serve` to locally render the website on your machine. You should be able to view the website at `http://127.0.0.1:4000/`. This is especially useful for debugging when updating the website as the tool renders any changes made to the website without running the command again.

Right now, we have 8 different sections on our website including the homepage. The `html` pages for most of these are listed under `_pages`.

### Adding a new member
Update information about the new member by adding their details to `_data/team_members.yml`. Add their display image under `assets/img/team`. Please upload files <300KB. Make sure to test the changes by rendering the website locally.
### Updating publications/news/press/teaching
To update content for any of the above, go to `_data` folder and update the corresponding `yml` file.
### Updating the homepage
To update the homepage, you will have to directly edit the `index.html` file.

## Deploying the changes
TODO: Update this.