// ==UserScript==
// @name            Politico.com Unlimited Access
// @author			George Gooding
// @namespace      	https://github.com/Nettsentrisk
// @include        	http://www.politico.com/story/*
// @match        	http://www.politico.com/story/*
// @description    	A script that removes the worthless lightbox "blocking" access to articles on politico.com
// ==/UserScript==

var wallScript = document.querySelector("script[src='http://s.ppjol.net/pp.js']");
wallScript.parentNode.removeChild(wallScript);
