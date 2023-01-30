## data_jobs_project_3

## Collaborators
Jeremy Tallant, Liberty Heise, Kaylie Aguilera, Mychele Larson, Eric Martinez

## Description
The goal of our website is to allow students of certification programs to query and review specific entry-level job information such as location, company, job description in order to do specific searches for potential jobs.  The website uses up-to-date information which then creates a map allowing the user to interact and search with ease.  The target jobs are all entry-level, so the user doesn't have to be overwhelmed with options that are outside their skill level.  The hope of this website is to create a dynamic, interactive informational which allows new graduates to get excited and become knowledgable about their career opportunities.

## API Keys
In order to run the code within this project, you will need to create an API key from the following website:  https://us-states.p.rapidapi.com/all


## Table of Contents
1.  Overview of Data
2.  Research Questions
3.  Difficulties, Data Retrieval and Cleansing
4.  Website Creation
5.  Results
6.  Where to Next

## Overview of Data

The website uses API data from Rapid API regarding the United States Job Market, last updated in 2023.  The specific data pulled for our project included job postings for data scientist, data analyst, Python developer and full-stack developer, as well as state data and information that gives users a better idea of states they may find work in but haven't visited and want to know more.  

## Data Retrieval and Cleansing

Eventually, we settled on using a purchased API from Rapid API called....  the data was then written to a JSON file and then created a Pandas data frame.  The data was cleaned for nulls and other columns that we deamed unneccessary for the website.  

![data cleaning](/images/Screenshot%202023-01-30%20at%2010.55.36%20AM.png?version%3D1675097879368)

The data was then queried for: entry level data scientist, data analyst, full stack developer and Python developer.  Once these were returned, the tables were then merged into one file in order to appy this information to our map.  The data was then imported into MongoDB. 

## Website Creation

A logic.js file was created with specific code to load the map and the markers.  These markers denoted the location, job title, job website link and other important information needed.  
![java script for map](/images/Screenshot%202023-01-30%20at%2011.02.51%20AM.png?version%3D1675098369877)

## Results



## Where to Next

Our hope in creating this data website is to ensure recent graduates of a certification program are able to locate entry level jobs in which they are qualified and also highlight specific skills aquired during the certification program.  Recent graduates or soon to be graduates are then able to prepare for resume presentation and interviews with a clear understanding of their strengths and the asks of the specific job type.  



