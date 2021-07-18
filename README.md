# Market App

This app iswritten with React library and uses Redux package as a global state management.

[![Netlify Status](https://api.netlify.com/api/v1/badges/314efc17-9ad2-41c5-9f06-ef9886ffaacf/deploy-status)](https://app.netlify.com/sites/getir-market-app/deploys)

Netlify Link: https://getir-market-app.netlify.app/ \
Vercel Link: https://market-app-qhyv2jbqn-berat-tetik.vercel.app/ \
Heroku Link: https://getir-market-app.herokuapp.com/ 

## Available npm Commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:


### `npm run startAll`

Runs react app and mock server at the same time with the help of the `concurrently` package 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run mock`

Prepares the mock endpoints be ready. It runs on the PORT=3001 as default.


## Folder Structure

    app
    └── mock (It runs json-server with given companies and products json files) 
    └── src 
        └── App
            ├── assets
            │     ├── fonts (It stores fonts)
            │     └── icons (It stores static icons)
            │        
            ├── components  (It stores UI components here, and components have their sub-components if necessary)
            └── shared
                   ├── components (It stores common using basic(atomic) components here)
                   ├── store (Redux Store) - [Each store has types, actions, handlers and reducer]
                   |     ├── cart 
                   |     ├── manufacturer
                   |     └── product
                   |
                   ├── styles (This folder has general styles of the app and common colors and typos as json files)
                   └── utils (This folder has helper methods in order to avoid code complexity other parts of the app)


### Deploys

This repository connected to `Vercel` & `Netlify` & `Heroku` CI's, it automatically deploys after any updates on the `main` branch. 


<hr />
*Notes: I don't have time for the mobile styling. I only completed tablet and desktop designs.
