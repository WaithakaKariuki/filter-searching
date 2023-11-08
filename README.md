## Assesment challenge Description

The assessment requires that using React, the candidate should creaate a search system for books stored as json, using different parameters. As the candidate, I used the useReducer hook to change the states of the displayed books, changing what books to diplay as I input the search query.
The candidate is also required to use basic css to style the displayed books.

## React Testing Library

Stylesheets and other assets can be imported. See jest.config.js and the __mocks__ directory to see what is loaded in their place. By default, these imports have no impact on tests, only the web preview environment.

# Candidate Written Response

Outline briefly some of the techniques or technologies you might employ to improve performance in the search app if the inventory contained millions of titles. Where would the data be stored as the app runs, and how can it be retrieved quickly? Are there any tradeoffs you might take into account in weighing various design decisions?

- It would be efficient to store the app's data(the inventory ) in an external database which would act as an API. This could be called using a fetch request and set into state.
- The use of advanced react-hooks eg useContext and useReducer would be important in managing global app's states. In order to retrive the data quickly and manage complex state, use of Context API would be handy to manage global state.
- Also, a reducer pure function would be necessary to store the bookReducer function in a seperate file. It would then be imported in the Context file and passed down as bookState and bookDispatch to {children} components through Context API.
- The tradeoffs of using props is that it has too much code that's passed down to child compponentsThis could cause unncessary rerenders and make it hard to find bugs. This could be redesigned by using Context API to pass down values.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
