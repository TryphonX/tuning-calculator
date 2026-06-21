<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<h1><a name="readme-top"></a></h1>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)][semantic-release-url]
[![Contributors](https://img.shields.io/github/contributors/tryphonx/tuning-calculator)](https://github.com/tryphonx/tuning-calculator/graphs/contributors)
[![Github Issues](https://img.shields.io/github/issues/tryphonx/tuning-calculator)](https://github.com/tryphonx/tuning-calculator/issues)
[![GNU GPL v3 License](https://img.shields.io/github/license/tryphonx/tuning-calculator)](https://github.com/tryphonx/tuning-calculator/blob/main/COPYING.txt)
[![Deployment Status](https://github.com/tryphonx/tuning-calculator/actions/workflows/prod-deploy.yml/badge.svg?branch=main)](https://github.com/tryphonx/tuning-calculator/actions/workflows/prod-deploy.yml)
[![CI Dev](https://github.com/tryphonx/tuning-calculator/actions/workflows/ci.yml/badge.svg?branch=dev)](https://github.com/tryphonx/tuning-calculator/actions/workflows/ci.yml)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tryphonx/tuning-calculator">
    <img src="images/logo.png" alt="Logo" width="250" height="250">
  </a>

<h3 align="center">CMS Tuning Calculator</h3>

  <p align="center">
    Tune efficiently using this calculator to determine the optimal setups with the best cost to boost ratio for your job!
    <br />
    <!--
		<a href="https://github.com/tryphonx/tuning-calculator/docs/"><strong>Explore the docs »</strong></a>
		-->
    <br />
    <br />
    <a href="https://tryphonx.github.io/tuning-calculator/">Visit App</a>
    ·
    <a href="https://github.com/tryphonx/tuning-calculator/issues">Report Bug</a>
    ·
    <a href="https://github.com/tryphonx/tuning-calculator/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
- [About The Project](#about-the-project)
- [User Manual](#user-manual)
  - [First step](#first-step)
  - [Second Step](#second-step)
    - [Auto-generate](#auto-generate)
    - [Manual](#manual)
      - [Available Parts Card](#available-parts-card)
  - [Third Step](#third-step)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contributors ✨](#contributors-)

<!-- ABOUT THE PROJECT -->
## About The Project

> I update the app too often to keep the README up to date, but it should be close enough.

This web app tool is useful for tuning cars in the game (Car Mechanic Simulator 21). Provides a lot of functionalities that make tuning considerably easier as well as allowing you to explore the most efficient way of tuning the car to the desired boost percentage. All tuning combinations by this tool will always be "symmetrical" - it will not allow you to switch some of the same part with tuned parts, it's either all or nothing. This tool can also suggest the optimal setup if you want, or you can make your own informed decision.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE INSTRUCTIONS -->
## User Manual

The use of this app is relatively easy. The process is split into 2-3 steps, depending on your choices. You can always go back to the previous step and change your choices, but keep in mind that changing your engine will clear all your previous choices.

### First step

First step is to pick an engine from the dropdown menu in the **_Engine Card_**. To make things easier, the engines can also be filtered by configurations (I4, V6, V8, V12). When you pick an engine, the Engine Card is immediately updated and you are allowed to proceed to the next step. The dropdown menu is searchable, so you can type the name of the engine you want to find.

> **⚠️ Note:** When you pick a new engine, all the choices you make in the other components will be cleared.

After making your choice, an **image of the engine** is shown along with its **specifications**. Engine specifications include _power_, _torque_ and _gearbox_.

### Second Step

Second step is where the two methods split up. You choose between **_Auto-generate_** and **_Manual_**.

#### Auto-generate

If you choose to auto-generate the optimal setup, you will be prompted to enter the desired target boost increase. Optionally, if there are damaged parts that you will have to replace, you can let the algorithm know. This way you might get a better deal if the damaged part is worth tuning instead of replacing with a stock one.

On the right side, you will see the **_Overview_** card, which will show you the target boost increase, whether you're including replacement parts and which ones. You then click proceed to move to the next and final step.

#### Manual

If you choose the manual appraoach, you will have to check the _**Available Parts Card**_ and choose which parts to tune. The card will have a table with all compatible parts for that engine along with their boost increase, cost and cost/boost ratio. You can sort the table by any of the columns to make your decision easier.

On the right side, you will see the _**Cart**_ card, which will be updating in real time with the total boost increase, total cost and total cost/boost ratio of the parts you have selected. When you're happy with your selections, you can use the build on the game. There is no third step for the manual approach, as you can see the results in real time.

##### Available Parts Card

This card will be now displaying a table with all (known) available parts for that engine. For each part, important info will be displayed in order to make the best decision about which parts to tune or not.

Specifically, for each part you receive this information:

The first column (checkbox column) is where you can choose the parts you want to tune. Simply click the checkbox of the part you want to tune and the part will be used in the calculation. Clicking the first checkbox will select (or deselect) all parts.

| Information          | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Part (2)             | The part's name and how many times it appears on that engine |
| Boost\* (3)          | How much boost the tuned version of the part will produce    |
| Cost\* (4)           | How much it costs to tune                                    |
| Cost / Boost\*\* (5) | How many CR it takes to produce +1% of boost                 |

> \* total, if the part appears multiple times in the engine  
> \*\* not visible on small screens

> **⚠️  Note:** When choosing a part that appears multiple times in an engine, keep in mind all of them will be added as selected parts. You can not add 1 of a part that has 2 on an engine.

### Third Step

Third step -and final- step for the auto-generate approach is to check the _**Cart Card**_. It includes a list of all the parts you've selected along with their info (boost, cost, etc.) and their total values. If some of the replacement parts specified are used in the setup, you will also see them highlighted on the table and you will see their effect on the total cost.

_[Visit the app now to try it »](https://tryphonx.github.io/tuning-calculator/)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
<!-- ## Roadmap

- [x] Add suggested setups based on required boost
- [x] Add sorting functionality to the tables

See the [open issues](https://github.com/tryphonx/tuning-calculator/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch from `dev` branch (`git checkout -b feat/amazingFeature`)
3. Commit your Changes
4. Push to the Branch (`git push origin feat/amazingFeature`)
5. Open a Pull Request to `dev`
6. Pull requests will be reviewed and squashed into `dev` branch

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the GNU GPL v3 License. See [COPYING.txt](/COPYING.txt) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

- [TailwindCSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [Img Shields](https://shields.io)
- [React Icons](https://react-icons.github.io/react-icons)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [Favicon.io](https://favicon.io/)
- [semantic-release][semantic-release-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[semantic-release-url]: https://github.com/semantic-release/semantic-release

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://tryphonx.github.io/"><img src="https://avatars.githubusercontent.com/u/32367640?v=4?s=100" width="100px;" alt="Tryfon Xydas"/><br /><sub><b>Tryfon Xydas</b></sub></a><br /><a href="https://github.com/tryphonx/tuning-calculator/commits?author=TryphonX" title="Code">💻</a> <a href="#data-TryphonX" title="Data">🔣</a> <a href="https://github.com/tryphonx/tuning-calculator/commits?author=TryphonX" title="Documentation">📖</a> <a href="#a11y-TryphonX" title="Accessibility">️️️️♿️</a> <a href="#design-TryphonX" title="Design">🎨</a> <a href="#infra-TryphonX" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-TryphonX" title="Maintenance">🚧</a> <a href="https://github.com/tryphonx/tuning-calculator/pulls?q=is%3Apr+reviewed-by%3ATryphonX" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://barrass.dev/"><img src="https://avatars.githubusercontent.com/u/20770871?v=4?s=100" width="100px;" alt="Joshua Barrass"/><br /><sub><b>Joshua Barrass</b></sub></a><br /><a href="https://github.com/tryphonx/tuning-calculator/commits?author=joshbarrass" title="Code">💻</a> <a href="#data-joshbarrass" title="Data">🔣</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
