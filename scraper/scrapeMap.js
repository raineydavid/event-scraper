var scrapeMap = {
	"scrapers": {
		"facebook": {
			"version": "0.1.0",
			"routes": {
				"/events/" : {
					"method": "patch",
					"fbpath": ["/events"],
					"expanders": [ ],
					"fields": {
							"eid": {		window: { "propchain": ["location","pathname"] }, match:"(?:/?events/)(\\d+)" },
						 	"tit": { selecters: [ "//*[@id=\"event_header\"]/div/div[2]/div[1]/div/div/span" ] },
				 			"img": { selecters: [ "//*[@id=\"event_header\"]/div/div[1]/a/div/img/@src"] },
							"ini": { selecters: [ "//*[@id=\"event_summary\"]/div/ul/li[1]/div/table/tbody/tr/td[2]/div/div/div[2]/div[1]/@content"] },
							"end": { selecters: [ "//*[@id=\"event_summary\"]/div/ul/li[1]/div/table/tbody/tr/td[2]/div/div/div[2]/div[1]/@content"] },
						 	"ref": { 		window: { "propchain": ["location", "href"]}},
							"lng": { selecters: [ "//*[@id=\"reaction_units\"]/div/div[1]/div[2]/span" ] },
							"adr": { selecters: [ "//*[@id=\"event_summary\"]/div/ul/li[2]" ] },
					}
				}
			}
		},
		"meetup": {
			"version": "0.1.0",
			"routes": {
				"/es-ES/":{
					"method": "patch",
					"fbpath": ["/es-ES"],
					"expanders": [ ],
					"fields": {
						 "eid": {	window: { "propchain": ["location","pathname"] }, match:"(?:/?events/)(\\d+)" },
						 "tag": { selecters: [ "/html/head/meta[6]/@content" ], split: "," },
						 "tit": { selecters: [ "//*[@id=\"event-title\"]/h1"] },
						 "sht": { selecters: [ "/html/head/meta[7]/@content" ] },
						 "img": { selecters: [ "/html/head/meta[29]/@content" ] },
						 "cty": { selecters: [ "/html/head/meta[25]/@content"] },
						 "lat": { selecters: [ "/html/head/meta[27]/@content" ] },
						 "log": { selecters: [ "/html/head/meta[28]/@content" ] },
						 "ini": { selecters: [ "//*[@id=\"event-start-time\"]/@datetime"] },
						 "ref": { 		window: { "propchain": ["location", "href"] } },
						 "lng": { selecters: [ "//*[@id=\"event-description-wrap\"]"] },
					}
				}
			}
		},
		"eventbride" : {
			"version": "0.1.0",
			"routes": {
				"/e/":{
					"method": "patch",
					"fbpath": ["/e"],
					"expanders": [ ],
					"fields": {
						 "eid": {	selecters: [ "//*[@id=\"event-page\"]/@data-event-id"] },
						 "sht": { selecters: [ "/html/head/meta[4]/@content" ] },
						 "tit": { selecters: [ "/html/head/meta[29]/@content"] },
						 "lng": { selecters: [ "/html/head/meta[30]/@content"] },
						 "img": { selecters: [ "/html/head/meta[28]/@content"] },
						 "lcl": { selecters: [ "/html/head/meta[34]/@content"] },
						 "ref": { selecters: [ "/html/head/meta[31]/@content"] },
						 "lat": { selecters: [ "/html/head/meta[35]/@content"] },
						 "log": { selecters: [ "/html/head/meta[36]/@content"] },
						 "ini": { selecters: [ "//*[@id=\"event-page\"]/main/div[1]/div[2]/div/section[1]/div[1]/div/div/div[2]/div/div[1]/meta[1]/@content"] },
						 "end": { selecters: [ "//*[@id=\"event-page\"]/main/div[1]/div[2]/div/section[1]/div[1]/div/div/div[2]/div/div[1]/meta[2]/@content"] },
						 "prc": { selecters: [ "//*[@id=\"event-page\"]/main/div[1]/div[2]/div/div[1]/div/div[2]/div/div[3]/div"] },
						 "tag": {
							 "base": "//*[@id=\"event-page\"]/main/div[1]/div[2]/div/section[1]/div[1]/div/div/div[1]/div[2]/div[2]/section/span[{{i}}]",
							 "fields": {
									"tag": { selecters: ["/a/span"] } /*,{ "name": "endorsed", selecters: ["/span/a"]}*/
								}
					 	 }
					}
				}
			}
		}
	}
};
