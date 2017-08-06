# mock-json
Provides Mock JSON response for helping Front End Dev

##Steps to use locally in project
1. Update the Urls array in the config.js file and include new URLs (path after localhost) to which GET or POST is required
2. Create corresponding folder structure in the json folder 
   e.g for a relative url of '/users' -> make a folder users inside the json folder
3. Add GETindex.js or POSTindex.js files in the related folder and update the expected JSON response in it.


##Issues:
1. Ensure that the folder structure is followed properly
2. There is no check on the request data, so the response will be sent irrespective of incorrect input request as well.

