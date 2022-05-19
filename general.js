const logos = [
	{ imgSrc: "accenture", modalCopy: "Designed and developed national and international graduate recruitment microsites, emails and ad banners", modalLink: "https://www.accenture.com/", imgAlt: "Accenture" },
	{ imgSrc: "aeg", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.aeg.co.uk/", imgAlt: "AEG" },
	{ imgSrc: "andra", modalCopy: "Complete e&#8209;commerce site design and frontend build", modalLink: "http://shop.andrajewels.com/", imgAlt: "Andra" },
	{ imgSrc: "angloamerican", modalCopy: "Designed and built online corporate report", modalLink: "https://www.angloamerican.com/", imgAlt: "Anglo American" },
	{ imgSrc: "argos", modalCopy: "Designed microsites for Chinese expansion", modalLink: "https://www.argos.co.uk/", imgAlt: "Argos" },
	{ imgSrc: "armypainter", modalCopy: "Designed packaging, displays and booklets", modalLink: "https://www.thearmypainter.com/", imgAlt: "The Army Painter" },
	{ imgSrc: "asda", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.asda.com/", imgAlt: "Asda" },
	{ imgSrc: "autoglass", modalCopy: "Designed microsites and corporate reports", modalLink: "https://www.autoglass.co.uk/", imgAlt: "Autoglass" },
	{ imgSrc: "bae", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.baesystems.com/en/home/", imgAlt: "BAE Systems" },
	{ imgSrc: "bastyan", modalCopy: "Designed and developed their global site", modalLink: "http://www.bastyan.co.uk/", imgAlt: "Bastyan" },
	{ imgSrc: "barclays", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.barclays.co.uk/", imgAlt: "Barclays" },
	{ imgSrc: "bcs", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.bcs.org/", imgAlt: "BCS" },
	{ imgSrc: "bluestrust", modalCopy: "Logo design", modalLink: "https://www.bluestrust.org/", imgAlt: "Blues Trust" },
	{ imgSrc: "boots", modalCopy: "Designed, developed and managed premium microsites", modalLink: "https://www.boots.com/", imgAlt: "Boots" },
	{ imgSrc: "cartenoire", modalCopy: "Designed and developed ad banners", modalLink: "http://www.cartenoire.co.uk/", imgAlt: "Carte Noire" },
	{ imgSrc: "chase", modalCopy: "Designed and developed national and international graduate recruitment microsites", modalLink: "https://www.chase.com/", imgAlt: "Chase" },
	{ imgSrc: "citibank", modalCopy: "Designed and developed national and international graduate recruitment microsites", modalLink: "https://www.citibank.co.uk/", imgAlt: "CitiBank" },
	{ imgSrc: "coast", modalCopy: "Designed and developed their global site", modalLink: "https://www.coast-stores.com/", imgAlt: "Coast" },
	{ imgSrc: "co-op", modalCopy: "Designed and developed a series of microsites and ad banners", modalLink: "https://www.coop.co.uk/", imgAlt: "Co-Op" },
	{ imgSrc: "disney", modalCopy: "Designed a series of Mickey Mouse prints for kids wear", modalLink: "https://disney.co.uk/", imgAlt: "Disney" },
	{ imgSrc: "easyjet", modalCopy: "Designed and developed a series of microsites and HTML 5 ad banners", modalLink: "https://www.easyjet.com/en/", imgAlt: "EasyJet" },
	{ imgSrc: "elastoplast", modalCopy: "Designed and developed a series of microsites and emails", modalLink: "https://www.elastoplast.co.uk/", imgAlt: "Elastoplast" },
	{ imgSrc: "elctricitynw", modalCopy: "Designed ad banners", modalLink: "https://www.enwl.co.uk/", imgAlt: "Electricity North West" },
	{ imgSrc: "fandf", modalCopy: "Designed and developed their global site", modalLink: "https://www.tesco.com/clothing/", imgAlt: "Tesco F&amp;F" },
	{ imgSrc: "freeflow", modalCopy: "Designed and developed a series of microsites", modalLink: "http://www.freeflow.com/", imgAlt: "FreeFlow" },
	{ imgSrc: "gamesworkshop", modalCopy: "Designed and developed international e&#8209;commerce site, designing and laying out a wide range of packaging, books and magazines, including the flagship product the Warhammer 40,000 Rule Book and White Dwarf monthly magazine", modalLink: "https://www.games-workshop.com/", imgAlt: "Games Workshop" },
	{ imgSrc: "grace", modalCopy: "Designed and built site", modalLink: "https://gracesilverjewellery.com/", imgAlt: "Grace" },
	{ imgSrc: "grey", modalCopy: "Designed and developed global intranet with Box integration", modalLink: "http://grey.com/london/", imgAlt: "Grey" },
	{ imgSrc: "hotels", modalCopy: "Designed an ad banner campaign", modalLink: "https://www.hotels.com/", imgAlt: "Hotels.com" },
	{ imgSrc: "ihg", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.ihg.com/", imgAlt: "IHG" },
	{ imgSrc: "johnlewis", modalCopy: "Lead replatforming and system integration project", modalLink: "https://www.johnlewis.com/", imgAlt: "John Lewis" },
	{ imgSrc: "jones", modalCopy: "Redesign and build site navigation", modalLink: "https://www.jonesbootmaker.com/", imgAlt: "Jones Bootmaker" },
	{ imgSrc: "jpmorgan", modalCopy: "Designed and developed national and international graduate recruitment microsites", modalLink: "https://www.jpmorgan.com/", imgAlt: "JP Morgan" },
	{ imgSrc: "karenmillen", modalCopy: "Designed and developed their global site and led an Internationalization program", modalLink: "https://www.karenmillen.com/", imgAlt: "Karen Millen" },
	{ imgSrc: "kingsmill", modalCopy: "Designed and developed a microsite and a series of ad banners", modalLink: "http://www.kingsmillbakery.co.uk/", imgAlt: "Kingsmill" },
	{ imgSrc: "laredoute", modalCopy: "Designed and developed a series of newsletters", modalLink: "https://www.laredoute.co.uk/", imgAlt: "LaRedoute" },
	{ imgSrc: "logitech", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.logitech.com/", imgAlt: "Logitech" },
	{ imgSrc: "longines", modalCopy: "Designed international microsites", modalLink: "https://www.longines.com/", imgAlt: "Longines" },
	{ imgSrc: "mars", modalCopy: "Designed and developed a print and email ad campaign", modalLink: "https://www.mars.com/", imgAlt: "Mars" },
	{ imgSrc: "marvel", modalCopy: "Designed a series of Avengers prints for kids wear", modalLink: "https://www.marvel.com/", imgAlt: "Marvel" },
	{ imgSrc: "mentermon", modalCopy: "Designed and developed a series of microsites and ad banners", modalLink: "https://www.mentermon.com/", imgAlt: "Menter Mon" },
	{ imgSrc: "nandos", modalCopy: "Designed and developed ad banners", modalLink: "https://www.nandos.com.au/", imgAlt: "Nandos Australia" },
	{ imgSrc: "newlook", modalCopy: "Designed and developed their global site", modalLink: "https://www.newlook.com/", imgAlt: "New Look" },
	{ imgSrc: "ncc", modalCopy: "Designed and developed interactive map microsite", modalLink: "https://www.nottinghamcity.gov.uk/", imgAlt: "Nottingham City Council" },
	{ imgSrc: "networkrail", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.networkrail.co.uk/", imgAlt: "Network Rail" },
	{ imgSrc: "o2", modalCopy: "Designed and developed HTML 5 ad banners", modalLink: "https://www.o2.co.uk/", imgAlt: "O2" },
	{ imgSrc: "oasis", modalCopy: "Designed and developed their global site", modalLink: "http://www.oasis-stores.com/", imgAlt: "Oasis" },
	{ imgSrc: "orange", modalCopy: "Designed and developed microsite and HTML 5 ad banners", modalLink: "https://ee.co.uk/", imgAlt: "Orange" },
	{ imgSrc: "peugeot", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.peugeot.co.uk/", imgAlt: "Peugeot" },
	{ imgSrc: "royalmail", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.royalmail.com/", imgAlt: "Royal Mail" },
	{ imgSrc: "selfridges", modalCopy: "Designed and developed their global site", modalLink: "https://www.selfridges.com/", imgAlt: "Selfridges" },
	{ imgSrc: "servis", modalCopy: "Designed and developed a series of microsites and ad banners", modalLink: "http://servis.co.uk/", imgAlt: "Servis" },
	{ imgSrc: "stafford", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.sarh.co.uk/", imgAlt: "Stafford" },
	{ imgSrc: "stella", modalCopy: "Designed and developed Cannes microsite", modalLink: "https://www.stellaartois.com/", imgAlt: "Stella Artois" },
	{ imgSrc: "subsea7", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.subsea7.com/", imgAlt: "Subsea 7" },
	{ imgSrc: "subside", modalCopy: "Designed and built microsites and site content", modalLink: "https://www.subsidesports.com/", imgAlt: "Subside Sports" },
	{ imgSrc: "tata", modalCopy: "Designed a series of infographics", modalLink: "http://www.tata.com/", imgAlt: "TaTa" },
	{ imgSrc: "tech21", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.tech21.com/", imgAlt: "Tech 21" },
	{ imgSrc: "tesco", modalCopy: "Designed and developed online newsletter", modalLink: "https://www.tesco.com/", imgAlt: "Tesco" },
	{ imgSrc: "tictrac", modalCopy: "Designed and developed site", modalLink: "https://tictrac.com/", imgAlt: "Tic Trac" },
	{ imgSrc: "trendmicro", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.trendmicro.com/", imgAlt: "TrendMicro" },
	{ imgSrc: "tui", modalCopy: "Designed microsites and corporate reports", modalLink: "https://www.tui.co.uk/", imgAlt: "Tui" },
	{ imgSrc: "virgin", modalCopy: "Designed and developed subscriber specific content", modalLink: "https://www.virginmedia.com/", imgAlt: "Virgin Media" },
	{ imgSrc: "warehouse", modalCopy: "Designed and developed their global site", modalLink: "https://www.warehouse.co.uk/", imgAlt: "Warehouse" },
	{ imgSrc: "which", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.which.co.uk/", imgAlt: "Which" },
	{ imgSrc: "webfusion", modalCopy: "Designed and developed their global site", modalLink: "http://www.webfusion.co.uk/", imgAlt: "Webfusion" },
	{ imgSrc: "york", modalCopy: "Designed and developed a series of microsites and ad banners", modalLink: "https://www.york.ac.uk/", imgAlt: "University of York" },
	{ imgSrc: "yotel", modalCopy: "Designed and developed main site", modalLink: "https://www.yotel.com/", imgAlt: "Yotel" },
	{ imgSrc: "123-reg", modalCopy: "Designed and developed their global site", modalLink: "https://www.123-reg.co.uk/", imgAlt: "123-Reg" }
]
function callModal( i ) {
	const logo = logos[i]
	const colors = ['pink', 'blue', 'yellow']
	const randColor = colors[ (Math.random() * colors.length) << 0 ]
	document.body.classList='stop'
	document.getElementById('modal').innerHTML += `<div class="modalback" onClick="this.outerHTML='';document.body.classList='';">
		<div class="modal ${randColor}">
			<h5>${logo.imgAlt}<img src="imgs/cross.svg" alt="close button" /></h5>
			<img src="imgs/logo/${logo.imgSrc}.gif" alt="${logo.imgAlt}" />
			<p>${logo.modalCopy}</p>
			<a href="${logo.modalLink}" target="_blank">${logo.modalLink}</a>
		</div>
	</div>`
}
logos.forEach( ( logo, index ) => {
	document.getElementById('logos').innerHTML += `<img
		src="imgs/logo/${logo.imgSrc}.gif"
		alt="${logo.imgAlt}"
		onClick="callModal('${index}')"
	></img>`
} )