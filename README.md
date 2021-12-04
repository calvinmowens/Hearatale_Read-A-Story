# Hearatale_Read-A-Story

This is the repository for Hearatale's Read-A-Story Application. This app was built by Georgia Tech Junior Design Team 1111 and completed December 2021. 📖🐝  

## 🚨 Release Notes
v1.0 - The Launch!
* Homescreen, with Links to Future Hearatale App Suite
* Large Keyboard Login (Mouse Operated)
* Bookshelf with 10 Unique Stories
* Reading Pages for all 10 Stories (Featuring: audio, auto-scroll and auto-highlighting, images, and play/pause)
* "Clickable" Targert Words, displaying Popup with Definition, Image, Pronounciation an
* Quizzes for Target Words
* Quizzes for ALL Target Words in a Story

## 🐞 Known Bugs and Missing Features:
* **User Based Rewards**  
Rewards are currently stored using `localStorage` to track rewards locally and is working across quiz instances and broswer session, but they are not linked to the currently signed-in user.  
* **DAP Connection**  
Data from Read-A-Story is not stored in any way for statistics like stories read, quiz questions answered, and correct first-attempt answers. These values will need to have a counter in their respective locations within the React components then these values linked to the user. Then you can link the user database (MySQL) to the exisitng DAP.
* **Gold Star Rewards**  
No gold stars have been added for correct first-attempt and this data is not tracked. Both logic and front-end implementation will need to be added in order to launch this feature.
* **Store**  
Apart of Read-A-Story, there is no place to spend rewards. We see potential for Hearatale as a platform to share a unified rewards system (connected to the DAP) and a single store to use across all applicaitons. In our implementation, a `localStorage` rewards value is updated and would need to be stored to the user, then to the DAP and from there allow that user to access a future build of a store page.
* **Target Words Missing Data**  
Some target words are missing image/audio data and thus that is not populated in the Target Words popups. This is a simple fix by adding an audio file to `Hearatale_Read-A-Story/public/audio` in the manner of `WORD.mp3` (replacing WORD with the target word). Or likewise, adding an image file to `Hearatale_Read-A-Story/public/img` in the manner of `WORD.png` (replacing WORD with the target word).

## ⬇️ Install Guide

**📚 Application**  
**Pre-requisites:**  
Almost all hardware running a modern operating system link Windows or MacOS should be able to both run and develope in React. Coming out in 2013, there should be few instances of hardware/operating system related issues -- if you run into this case try updating your operating system.  

**Dependencies:**  
You are going to need NPM (or Yarn, alternatively). Let's use NPM for this example.  
  
If you don't have it installed on your system, then you need to head to the [official Node.js website](https://nodejs.org/en/) to download and install Node, which also includes NPM (Node Package Manager). Download the install that is "Reccommended for Most Users".  
  
User `node -v` and `npm -v` to check versions of note and npm (Node Package Manager) respectively.  
That's all you need to get this thing rolling!  
  
**Download instructions:**  
This project currently does not have an executable to run or hosting site to access, so to download:  
  
Download the github repository by clicking the green "Code" button and then "Download ZIP". Download this in a location farmiliar to you and one you will be able to `cd` to easily.  
  
**Run instructions:**  
Now that node is installed, to run the application `cd` into the main project directory (Hearatale_Read-A-Story).
Next run `npm install` to install the node modules needed to run the React application, let that install, this could take a few minutes depending on internet speed and your device.  
  
Lastly, run `npm start` to start the Node server. Your default browser window should open to `http://localhost:3000`, and if it doesn't happen automaticall please go to that URL into your browser of choice to lead the application.  
  
To stop running, user `Control + C` or `Alt + C` on Windows.  
  
**Troubleshooting:**  
Common isues are likely related to `npm` and `node_modules` errors. To fix these:  
Run `rm Rf- node_modules` when in the main directory.
Then run, `npm install` to reinstall node modules.
Then run, `npm start` to restart the server.

---

**👥 Server**  
  
**Pre-requisites:**  
Almost all hardware running a modern operating system link Windows or MacOS should be able to both run and develope in React. Coming out in 2013, there should be few instances of hardware/operating system related issues -- if you run into this case try updating your operating system.  
  
**Dependencies:**  
Alright, you're going to need a few more things compared to the application...  
  
First, you'll need to [install MySQL](https://dev.mysql.com/downloads/mysql/), select your operating system and version number, latest recommended and install that by instructions.  
  
Next you'll need to have `pip` to install the next packages. To do this, `cd` into the directory you want the `pip` install file stored in, then run `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`. Now download pip by running `python3 get-pip.py`.  
You can test this install worked by running `pip3 --version` and you should get a version number in return.  
  
Next, you need to install the following packages using `pip3` (it is recommended you do this inside the Hearatale_Read-A-Story) project directory. The structure for these install statements will be `pip3 install PACKAGE-NAME` by replacing PACKAGE-NAME with the packge you are installing. These are as follows:  
* flask
* flask-login
* flask-mysqldb
* flask-sqlalchemy
* bcrypt
  
This concludes the dependencies needed to run the MySQL server using flask.  
  
**Run instructions:**  
Now that you've installed all that, to run the server...  
TODO  
  
---
  
This project was made with love ♥️ by Team 1111 and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
  
**TEAM 1111:**  
Sungeun (Harry) Bae  
Selena Do  
Kush Dabhi  
Robbie McCormick  
Calvin Owens  
Luke LaScala  
  
Lastly, here are some [Figma](https://www.figma.com/file/4TOYQrMV8yfeuMj9gfahlJ/Prototype?node-id=0%3A1) screens for your viewing pleasure.
