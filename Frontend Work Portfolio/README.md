# Frontend Work Portfolio: Evan Jenkins 

This is a brief portfolio containing a bit of the work that I've done using the Angular framework, specifically the work that I did at 
my internship last summer, with a company called Computer Aid, Inc. (CAI). In this role, I worked alongside a team that was developing 
a modernized Electronic Death Registry System for the State of New Jersey (pretty much a way to accurately and smoothly track the 
demographic metadata surrounding an individual's death). I built out a few of the cosmetic portions of the frontend, as well as configured
some routes that allow for multiple page applications. 

## Running the Code

There are three folders in the main folder. Screenshots, ConfigTable, and CommunicDisease. 

The two latter folders, ConfigTable and CommunicDisease, are each separate Angualr projects. 
They can each be run by first running 'npm install' in the terminal to install the 
necessary node_modules folder (I had to remove this large folder in order to send the code over successfully), then by running npm start in the terminal. Once compiled, the app can be visited at the localhost link provided by the terminal message. 

## ConfigTable

This folder consists of a small frontend application I made that was ultimately used as a "settings" table of sorts for system administrators to change certain constants/values within the system. I have masked some of the proprietary information that was originally 
in this table, but the idea is the same: system administrators would be able to go in, edit the values they wanted to edit, and save the 
changes. No changes are actually made/persisted in this version as it did not get wired into the backend during my time with the company,
and it is more of a cosmetic proof-of-concept. However, the pages still switch back and forth, which was a proud accomplisment for me as an (at the time) new Angular user. 

## CommunicDisease

This folder is an application that I made whose main functionality in the larger system was to allow the certifying physician filling 
out the death certificate forms to indicate if the decedent had any of a list of "communicable" diseases upon their death, which would 
then mark the patient's file with a special indicator that extra precautions needed to be taken while handling the decedent. The app
displays a list of (somewhat) gruesome diseases, along with check boxes next to each disease that could be electronically checked off. 
Once filled out, the button at the bottom could be pressed to generate a special piece of paperwork that would then become part of 
the decedent's records. I actually also coded the backend portion of this functionality that persists this data into a word document 
and (ultimately) a .pdf, but the two were never wired together during my short summer stay with the company. 

## Screenshots

This folder contains some screenshots of the frontend applications, in case there are issues running the code. 

Thank you so much for taking a look at my work! Please email me at eaj224@lehigh.edu with any questions!  