'use strict';

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const accessToken = getUrlParameter('access_token')
const scope = getUrlParameter('scope');

function accessHarvest() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.harvestapp.com/v2/company?access_token=' + accessToken + '&account_id=' + scope.slice(8,14), true);
	xhr.onreadystatechange = function() {
	    if(xhr.readyState == 4 && xhr.status == 200) {
	    	console.log(xhr.status);
	        console.log(xhr.responseText);
	    }
	}
	xhr.send(null);

}