<a name="readme-top"></a>
<!-- Start of README -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ChiefMigz/ecommerce-website">
    <img src="client/public/logo512.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">React Ecommerce Website</h3>

  <p align="center">
    Initially, I made the design with my peers as a project for UI Design course at Douglas College. I decided to create an actual website implementation of it using MERN web stack with the help of some friends who are also interested in web development.
    <br />
    <a href="https://github.com/ChiefMigz/ecommerce-website"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.figma.com/proto/erB0se5rsmsF70gkHk9S1Z/Final-Design---Toronto-Cupcakes?page-id=0%3A1&node-id=183%3A506&viewport=223%2C318%2C0.16&scaling=scale-down-width&starting-point-node-id=183%3A506">Prototype</a>
    ·
    <a href="https://github.com/ChiefMigz/ecommerce-website/issues">Report Bug</a>
    ·
    <a href="https://github.com/ChiefMigz/ecommerce-website/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

TODO
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![MongoDB][MongoDB]][MongoDB-url]
* [![Express][Express]][Express-url]
* [![React][React.js]][React-url]
* [![NodeJS][NodeJS.io]][NodeJS-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/ChiefMigz/ecommerce-website.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Generate .env file by typing the command `touch .env` in bash or by just manually creating the file, type the following and then configure the parameters. Please be advised that a Cloudinary and MongoDB account is required
    ```env
    ACCESS_TOKEN_SECRET = 
    REFRESH_TOKEN_SECRET = 
    CLOUD_NAME =
    CLOUD_API_KEY =
    CLOUD_API_SECRET =
    ```
5. In <b>client/package.json</b>, set up the port to link frontend to backend
   ```json
   "proxy": "http://localhost:PORT/"
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Miguel Shelwyn Pe Benito - [LinkedIn Profile](https://www.linkedin.com/in/miguel-shelwyn-pe-benito/) - pebenitomiguel@gmail.com
Sebastian Acosta - [Github Profile](https://github.com/SebastianAc02) - sacostamolin@gmail.com

Project Link: [https://github.com/ChiefMigz/ecommerce-website](https://github.com/ChiefMigz/ecommerce-website)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/chiefmigz/ecommerce-website.svg?style=for-the-badge
[contributors-url]: https://github.com/chiefmigz/ecommerce-website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ChiefMigz/ecommerce-website.svg?style=for-the-badge
[forks-url]: https://github.com/ChiefMigz/ecommerce-website/network/members
[stars-shield]: https://img.shields.io/github/stars/ChiefMigz/ecommerce-website.svg?style=for-the-badge
[stars-url]: https://github.com/ChiefMigz/ecommerce-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/ChiefMigz/ecommerce-website.svg?style=for-the-badge
[issues-url]: https://github.com/ChiefMigz/ecommerce-website/issues
[license-shield]: https://img.shields.io/github/license/ChiefMigz/ecommerce-website.svg?style=for-the-badge
[license-url]: https://github.com/ChiefMigz/ecommerce-website/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/miguel-shelwyn-pe-benito
[product-screenshot]: images/screenshot.png
[Express]: https://img.shields.io/badge/ExpressJS-ff0015?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-red?style=for-the-badge&logo=mongodb&logoColor=green
[MongoDB-url]: https://www.mongodb.com
[NodeJS.io]: https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=nodedotjs&logoColor=white
[NodeJS-url]: https://nodejs.org/en/
