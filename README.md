<p align="center"><img src="https://i.4da.ms/4445f0c.png"></p>

<p align="center">A standalone utility for staying under the radar while playing League of Legends.</p>

<p align="center"><img src="https://i.4da.ms/1302c6b.png"></p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Installing

In order to use the this tool, all you have to download is the latest release [here](https://github.com/4dams/LeagueOffline/releases).

Normal users just have to run the `LeagueOffline.exe` file in the zip folder with administrator privileges and should be good to go.

## Working with the code

If you want to build your own version of the program, feel free to do so by downloading the `source-code.zip` package on the latest release page [here](https://github.com/4dams/LeagueOffline/releases).

After that, all you have to do is to open a command prompt, enter the directory of the unpacked zip archive and type `npm i`.

If you're completely new to Electron and node, all you have to do is to open the main.js file in a text editor of your choice (preferably Atom) and start editing stuff.

## Building your own release

For building your own release, you will have to do the following:

Enter directory of `main.js` and `package.json` in a command prompt and type
```
npm run package-win
```

This script will then package your own build into a folder called `release-builds` next to the main file of the project.

### Design aspects

The design of the app was really important and the goal was to keep the look of the app as "clean" as possible. 
That's why there are only 4 major colors used in the design of the app:

```
#ffffff   White   // For texts
#e94132   Red     // For offline mode
#7fc07d   Green   // For online mode
#e59246   Orange  // For errors
```


## Deployment

This program was built for the use on windows machines. Support for other operating system will probably follow soon, as soon as I have the time for testing on MacOS.

## Built With

* [Electron](https://electronjs.org/) - The framework used
* [Atom](https://atom.io/) - Coding environment
* [GitHub Desktop](https://desktop.github.com/) - For a better workflow and faster commits

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details how to contribute to this project and maybe even open a pull request.

## Authors

* **Juri Adams** - *Initial work* - [4da.ms](https://4da.ms/)

See also the list of [contributors](https://github.com/4dams/LeagueOffline/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Patterns provided by [SubtlePatterns](https://www.toptal.com/designers/subtlepatterns/)
* Inspired by Redditor [Malcomikia](https://www.reddit.com/user/Malcomikia/)
* Material icons provided by [Material.io](https://material.io/icons/)
* Made possible thank [Electron](https://electronjs.org/)
* Great color choices by [Coolors.co](https://coolors.co/)
