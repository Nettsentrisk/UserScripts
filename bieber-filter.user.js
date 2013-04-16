// ==UserScript==
// @name             Bieber-filter
// @author			George Gooding
// @namespace      	https://github.com/Nettsentrisk
// @include        	http://www.dagbladet.no/*
// @include        	http://www.vg.no/*
// @include        	http://www.nrk.no/*
// @include        	http://www.aftenposten.no/*
// @include        	http://www.nettavisen.no/*
// @match        	http://www.dagbladet.no/*
// @match        	http://www.vg.no/*
// @match        	http://www.nrk.no/*
// @match        	http://www.aftenposten.no/*
// @match        	http://www.nettavisen.no/*
// @match           http://www.bt.no/*
// @match           http://www.ba.no/*
// @description    	Klarer vi fjerne alle nyhetssaker om Justin Bieber? Vi prøver!
// ==/UserScript==

for (var a = document.evaluate("//*[contains(@href,'bieber') or contains(@href,'Bieber') or contains(@title,'Bieber') or contains(text(),'BIEBER') or contains(@title,'belieber') or contains(text(),'belieber') or contains(@title,'Telenor Arena') or contains(text(),'Bieber') or contains(text(),'Justin')]/ancestor::*[contains(@class,'ddCell') or contains(@class,'article-extract') or contains(@class,'gridUnit') or contains(@class,'article_small') or contains(@class,'art_medium')][1]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), b = a.snapshotLength - 1; b >= 0; b--) {
    var c = a.snapshotItem(b);
    c.parentNode.removeChild(c);	
} 
