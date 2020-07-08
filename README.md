# Music Mania

Music is a wonderful resource for visually impaired children.Exposure to it enhances a child’s natural ability to decode sounds and words.**Music Mania** is a simple game where kids can play music using the keyboard keys.Pressing any key produces a musical sound giving a sense of accomplishment and instilling happiness in the child. This will not only improve their motor skills but is also a fundamentsl step towards digital literacy.The initial step of understanding the location of different keys on the keyboard will be accomplished by this game.

**This game is being developed as a [Google Summer of Code 2018](https://summerofcode.withgoogle.com/) project under the [Inclusive Design Institute](https://inclusivedesign.ca/).**

Play game [here](https://build-odeglceahu.now.sh/)


## To run
*You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.*

- Clone the project
`git clone https://github.com/riabhatia24/Music-Mania.git`

- Then install the dependencies
`npm install`

- Run development server
`npm start`

Open the web browser to `http://localhost:3000/`

## Running Locally with Docker

You can serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start a container:

* Build the image: `docker build -t musicmania .`
* Run the container: `docker run --name musicmania -p 8000:80 musicmania`

The website will be available at [http://localhost:8000](http://localhost:8000)

* To stop and remove the container: `docker rm -f musicmania`

If you make changes to the code, repeat the steps to build the image and start a new container.


## Technical Details

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find some information on how to perform common tasks [here](https://github.com/riabhatia24/Music-Mania/blob/master/Create_React_App.md)
