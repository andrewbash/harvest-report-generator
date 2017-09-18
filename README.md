# harvest-report-generator
Returns data from Harvest API v2 into the DOM.

## Getting Started
Click the "Authenticate" link and authorize the app to access your Harvest account. Then type an API command into the input field, and hit submit. 
If everything is working as expected, you should see a status of 200, and your returned data in the API Results box.

## How To Run On Your Own Server
First, create a new OAuth2 Application on the [Harvest website](https://id.getharvest.com/developers). Make sure that your Redirect URL and Origin URL are correct. Note that in my experience, your Origin URL should be your domain name root, and it should not have a trailing slash.
Next, open index.html and change the client_id parameter inside .authButton to the Client ID that Harvest gave you.
If everything is working as expected, you should be able to run on your server. The most likely reasons for not working are authentication errors, which should be reported in the console.
