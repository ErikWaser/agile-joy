
# agile-joy

## Whos who: 

**a12l** - Albin Otterhäll                                                      
                                                                                
**Erikwaser** - Erik Waser                                                      
                                                                                
**Filiplindset** - Filip Lindset                                                
                                                                                
**kimpaws/kimpawsible** - Michael Hägg                                          
                                                                                
**Knogds** - Kresimir Popovic                                                   
                                                                                
**maxvalter** - Max Adolfsson 

## Kanban Board

Trello: https://trello.com/invite/b/HtnTx0tS/47a934255dc7b8294ad22a78c059c892/kanban-board

## Install and startup instructions

To start the application you need to first download the source code in some way.
The easiest way is to clone it using `git` with the command

```
https://github.com/a12l/agile-joy.git
```

After you've finished downloading the source code you need to enter the directory with `cd agile-joy`.
Now you need to download the project's dependencies.
Before you run the commands you need to have `npm` installed.
Consult the documentaiton for your operative system for instructions on how to install `npm`.
To do that you need to run the commandny

```
npm install
```

After downloading the dependencies you only need to run the command

```
npm start
```

and go to https://localhost:3000 to begin using the application.

## Where you can find the different components

In /static you will find all the code. From there index.htm is the main html file, with relevant CSS and JavaScript files in separate folders.

Team Joy's repository for the course Agile software project management DAT257 /
DIT543. The course was given at The Department of Computer Science and
Engineering, shared between Chalmers and University of Gothenburg, Autumn term
2021.

Some data have "per capita" value more than 100%, for more information why that
could be possible, please search for "Have more than 100% of older people been
vaccinated?" written 2021 by David Spiegelhalter and Anthony Masters for The
Guardian.

This example is using D3 library

https://d3js.org https://github.com/d3

and some modified example code from https://www.d3indepth.com

All staticial data used in the application is from The Public Health Agency of
Sweden / Folkhälsomyndigheten.

The map ./static/data/lan_7.0.geojson is converted using qgis, layer import,
then export layer as GeoJSON with option RFC7946 enabled. The original file
used was ./resources/tab_svenska_210505.zip owned by Lantmäteriet.

![drawing](https://raw.githubusercontent.com/a12l/agile-joy/main/resources/screenshot_joy.png)
