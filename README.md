# Finding Waves
<h4 align="center"> 
	 Project Finding Waves
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EliezerGarbin/FindingWaves">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliezerGarbin/FindingWaves">
	
  <a href="https://www.linkedin.com/in/eliezergarbin/">
    <img alt="Made by eliezergarbin" src="https://img.shields.io/badge/made%20by-eliezergarbin-%2304D361">
  </a>

  <a href="https://github.com/EliezerGarbin/FindingWaves/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliezerGarbin/FindingWaves">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/EliezerGarbin/FindingWaves/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/EliezerGarbin/FindingWaves?style=social">
  </a>
</p>
<p align="center">
<img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
<p align="center">
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Documentation">Documentation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>


## Project
Surf forecast API that allows you to register the beaches you want, and classify which one is the most suitable for surfing in time.


The project was created with its Node.js, Typescript, React and MongoDB technologies, you can register on the beaches and after registering, the system will inform the scheduled time for each beach at certain times and also containing important information for surfing such as: wind direction, wind speed, wave speed, wave duration, wave height, swell direction and swell height. Finally, based on all this data, the classification of the best beaches ever registered for surfing will be delivered.

<p align="center">
    <img alt="Example" title="Example" src="https://user-images.githubusercontent.com/59988262/192548340-0b7e45ec-0f82-4174-9c61-3d6720807318.png" width="800px" />

</p>

## Technologies
This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [MongoDB][mongodb]
- [Jest][jest]

## How To Use

As stated above, this API uses MongoDB as it's database, and requires it to be running before starting the server. You can create a free database using MongoDB Atlas or run a local instance using MongoDB Compass. Your MongoDB instance will be running at localhost:27017.

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] and [MongoDBCompass][mongodbcompass] installed on your computer. Other than that you will need to have a stormglass private key, to get the forecasts requests. Go to [stormglass][stormglass] website and register yourself to get your private key.

From your command line:

### Install Back-end

```bash
# Clone this repository
$ git clone https://github.com/EliezerGarbin/FindingWaves.git

# Install dependencies
$ yarn install --frozen-lockfile

# Run Build
$ yarn build

# Start server local
$ yarn start:local

# running on port 3000
```

### Install Front-end

```bash
# Clone this repository
$ git clone https://github.com/EliezerGarbin/FindingWaves.git

# Go into the repository
$ cd FindingWaves/web

# Run
$ yarn start

# running on port 3001
```

### Run Tests
```bash 
# Run unit test
$ yarn test:unit

# Run functional test
$ yarn test:functional

# Run all tests
$ yarn test
```

## Documentation
The documentation uses the OpenAPI 3.0 standard. You can access the API documentation using the ``` /docs ``` endpoint after running the project.

## How to contribute

- Make a fork;
- Create a branck with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## License

This project is under the MIT license. See the [LICENSE](https://github.com/EliezerGarbin/FindingWaves/blob/master/LICENSE.md) for details.


Made with by Eliézer Garbin :wave: [Get in touch!](https://www.linkedin.com/in/eliezergarbin/)

[nodejs]: https://nodejs.org/
[reactjs]: https://reactjs.org
[typescript]: https://www.typescriptlang.org/
[yarn]: https://yarnpkg.com/
[mongodbcompass]: https://www.mongodb.com/products/compass
[stormglass]: https://stormglass.io/
[mongodb]: https://www.mongodb.com/
[jest]: https://jestjs.io/
