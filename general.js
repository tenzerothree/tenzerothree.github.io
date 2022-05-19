const logos = [
	{ imgSrc: "accenture", modalCopy: "Designed and developed national and international graduate recruitment microsites, emails and ad banners", modalLink: "https://www.accenture.com/", name: "Accenture" },
	{ imgSrc: "aeg", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.aeg.co.uk/", name: "AEG" },
	{ imgSrc: "andra", modalCopy: "Complete e&#8209;commerce site design and frontend build", modalLink: "http://shop.andrajewels.com/", name: "Andra" },
	{ imgSrc: "angloamerican", modalCopy: "Designed and built online corporate report", modalLink: "https://www.angloamerican.com/", name: "Anglo American" },
	{ imgSrc: "argos", modalCopy: "Designed microsites for Chinese expansion", modalLink: "https://www.argos.co.uk/", name: "Argos" },
	{ imgSrc: "armypainter", modalCopy: "Designed packaging, displays and booklets", modalLink: "https://www.thearmypainter.com/", name: "The Army Painter" },
	{ imgSrc: "asda", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.asda.com/", name: "Asda" },
	{ imgSrc: "autoglass", modalCopy: "Designed microsites and corporate reports", modalLink: "https://www.autoglass.co.uk/", name: "Autoglass" },
	{ imgSrc: "bae", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.baesystems.com/en/home/", name: "BAE Systems" },
	{ imgSrc: "bastyan", modalCopy: "Designed and developed their global site", modalLink: "http://www.bastyan.co.uk/", name: "Bastyan" },
	{ imgSrc: "barclays", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.barclays.co.uk/", name: "Barclays" },
	{ imgSrc: "bcs", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.bcs.org/", name: "BCS" },
	{ imgSrc: "bluestrust", modalCopy: "Logo design", modalLink: "https://www.bluestrust.org/", name: "Blues Trust" },
	{ imgSrc: "boots", modalCopy: "Designed, developed and managed premium microsites", modalLink: "https://www.boots.com/", name: "Boots" },
	{ imgSrc: "cartenoire", modalCopy: "Designed and developed ad banners", modalLink: "http://www.cartenoire.co.uk/", name: "Carte Noire" },
	{ imgSrc: "chase", modalCopy: "Designed and developed national and international graduate recruitment microsites", modalLink: "https://www.chase.com/", name: "Chase" },
	{ imgSrc: "citibank", modalCopy: "Designed and developed national and international graduate recruitment microsites", modalLink: "https://www.citibank.co.uk/", name: "CitiBank" },
	{ imgSrc: "coast", modalCopy: "Designed and developed their global site", modalLink: "https://www.coast-stores.com/", name: "Coast" },
	{ imgSrc: "co-op", modalCopy: "Designed and developed a series of microsites and ad banners", modalLink: "https://www.coop.co.uk/", name: "Co-Op" },
	{ imgSrc: "disney", modalCopy: "Designed a series of Mickey Mouse prints for kids wear", modalLink: "https://disney.co.uk/", name: "Disney" },
	{ imgSrc: "easyjet", modalCopy: "Designed and developed a series of microsites and HTML 5 ad banners", modalLink: "https://www.easyjet.com/en/", name: "EasyJet" },
	{ imgSrc: "elastoplast", modalCopy: "Designed and developed a series of microsites and emails", modalLink: "https://www.elastoplast.co.uk/", name: "Elastoplast" },
	{ imgSrc: "elctricitynw", modalCopy: "Designed ad banners", modalLink: "https://www.enwl.co.uk/", name: "Electricity North West" },
	{ imgSrc: "fandf", modalCopy: "Designed and developed their global site", modalLink: "https://www.tesco.com/clothing/", name: "Tesco F&amp;F" },
	{ imgSrc: "freeflow", modalCopy: "Designed and developed a series of microsites", modalLink: "http://www.freeflow.com/", name: "FreeFlow" },
	{ imgSrc: "gamesworkshop", modalCopy: "Designed and developed international e&#8209;commerce site, designing and laying out a wide range of packaging, books and magazines, including the flagship product the Warhammer 40,000 Rule Book and White Dwarf monthly magazine", modalLink: "https://www.games-workshop.com/", name: "Games Workshop" },
	{ imgSrc: "grace", modalCopy: "Designed and built site", modalLink: "https://gracesilverjewellery.com/", name: "Grace" },
	{ imgSrc: "grey", modalCopy: "Designed and developed global intranet with Box integration", modalLink: "http://grey.com/london/", name: "Grey" },
	{ imgSrc: "hotels", modalCopy: "Designed an ad banner campaign", modalLink: "https://www.hotels.com/", name: "Hotels.com" },
	{ imgSrc: "ihg", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.ihg.com/", name: "IHG" },
	{ imgSrc: "johnlewis", modalCopy: "Lead replatforming and system integration project", modalLink: "https://www.johnlewis.com/", name: "John Lewis" },
	{ imgSrc: "jones", modalCopy: "Redesign and build site navigation", modalLink: "https://www.jonesbootmaker.com/", name: "Jones Bootmaker" },
	{ imgSrc: "jpmorgan", modalCopy: "Designed and developed national and international graduate recruitment microsites", modalLink: "https://www.jpmorgan.com/", name: "JP Morgan" },
	{ imgSrc: "karenmillen", modalCopy: "Designed and developed their global site and led an Internationalization program", modalLink: "https://www.karenmillen.com/", name: "Karen Millen" },
	{ imgSrc: "kingsmill", modalCopy: "Designed and developed a microsite and a series of ad banners", modalLink: "http://www.kingsmillbakery.co.uk/", name: "Kingsmill" },
	{ imgSrc: "laredoute", modalCopy: "Designed and developed a series of newsletters", modalLink: "https://www.laredoute.co.uk/", name: "LaRedoute" },
	{ imgSrc: "logitech", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.logitech.com/", name: "Logitech" },
	{ imgSrc: "longines", modalCopy: "Designed international microsites", modalLink: "https://www.longines.com/", name: "Longines" },
	{ imgSrc: "mars", modalCopy: "Designed and developed a print and email ad campaign", modalLink: "https://www.mars.com/", name: "Mars" },
	{ imgSrc: "marvel", modalCopy: "Designed a series of Avengers prints for kids wear", modalLink: "https://www.marvel.com/", name: "Marvel" },
	{ imgSrc: "mentermon", modalCopy: "Designed and developed a series of microsites and ad banners", modalLink: "https://www.mentermon.com/", name: "Menter Mon" },
	{ imgSrc: "nandos", modalCopy: "Designed and developed ad banners", modalLink: "https://www.nandos.com.au/", name: "Nandos Australia" },
	{ imgSrc: "newlook", modalCopy: "Designed and developed their global site", modalLink: "https://www.newlook.com/", name: "New Look" },
	{ imgSrc: "ncc", modalCopy: "Designed and developed interactive map microsite", modalLink: "https://www.nottinghamcity.gov.uk/", name: "Nottingham City Council" },
	{ imgSrc: "networkrail", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.networkrail.co.uk/", name: "Network Rail" },
	{ imgSrc: "o2", modalCopy: "Designed and developed HTML 5 ad banners", modalLink: "https://www.o2.co.uk/", name: "O2" },
	{ imgSrc: "oasis", modalCopy: "Designed and developed their global site", modalLink: "http://www.oasis-stores.com/", name: "Oasis" },
	{ imgSrc: "orange", modalCopy: "Designed and developed microsite and HTML 5 ad banners", modalLink: "https://ee.co.uk/", name: "Orange" },
	{ imgSrc: "peugeot", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.peugeot.co.uk/", name: "Peugeot" },
	{ imgSrc: "royalmail", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.royalmail.com/", name: "Royal Mail" },
	{ imgSrc: "selfridges", modalCopy: "Designed and developed their global site", modalLink: "https://www.selfridges.com/", name: "Selfridges" },
	{ imgSrc: "servis", modalCopy: "Designed and developed a series of microsites and ad banners", modalLink: "http://servis.co.uk/", name: "Servis" },
	{ imgSrc: "stafford", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.sarh.co.uk/", name: "Stafford" },
	{ imgSrc: "stella", modalCopy: "Designed and developed Cannes microsite", modalLink: "https://www.stellaartois.com/", name: "Stella Artois" },
	{ imgSrc: "subsea7", modalCopy: "Designed and developed a series of microsites", modalLink: "https://www.subsea7.com/", name: "Subsea 7" },
	{ imgSrc: "subside", modalCopy: "Designed and built microsites and site content", modalLink: "https://www.subsidesports.com/", name: "Subside Sports" },
	{ imgSrc: "tata", modalCopy: "Designed a series of infographics", modalLink: "http://www.tata.com/", name: "TaTa" },
	{ imgSrc: "tech21", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.tech21.com/", name: "Tech 21" },
	{ imgSrc: "tesco", modalCopy: "Designed and developed online newsletter", modalLink: "https://www.tesco.com/", name: "Tesco" },
	{ imgSrc: "tictrac", modalCopy: "Designed and developed site", modalLink: "https://tictrac.com/", name: "Tic Trac" },
	{ imgSrc: "trendmicro", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.trendmicro.com/", name: "TrendMicro" },
	{ imgSrc: "tui", modalCopy: "Designed microsites and corporate reports", modalLink: "https://www.tui.co.uk/", name: "Tui" },
	{ imgSrc: "virgin", modalCopy: "Designed and developed subscriber specific content", modalLink: "https://www.virginmedia.com/", name: "Virgin Media" },
	{ imgSrc: "warehouse", modalCopy: "Designed and developed their global site", modalLink: "https://www.warehouse.co.uk/", name: "Warehouse" },
	{ imgSrc: "which", modalCopy: "Designed and developed a series of microsites, emails and ad banners", modalLink: "https://www.which.co.uk/", name: "Which" },
	{ imgSrc: "webfusion", modalCopy: "Designed and developed their global site", modalLink: "http://www.webfusion.co.uk/", name: "Webfusion" },
	{ imgSrc: "york", modalCopy: "Designed and developed a series of microsites and ad banners", modalLink: "https://www.york.ac.uk/", name: "University of York" },
	{ imgSrc: "yotel", modalCopy: "Designed and developed main site", modalLink: "https://www.yotel.com/", name: "Yotel" },
	{ imgSrc: "123-reg", modalCopy: "Designed and developed their global site", modalLink: "https://www.123-reg.co.uk/", name: "123-Reg" }
]
function callModal( i ) {
	const logo = logos[i]
	const colors = ['pink', 'blue', 'yellow']
	const randColor = colors[ (Math.random() * colors.length) << 0 ]
	document.body.classList='stop'
	document.getElementById('modal').innerHTML += `<div class="modalback" onClick="this.outerHTML='';document.body.classList='';">
		<div class="modal ${randColor}">
			<h5>${logo.name}<img src="imgs/cross.svg" alt="close button" /></h5>
			<img src="imgs/logo/${logo.imgSrc}.gif" alt="${logo.name}" />
			<p>${logo.modalCopy}</p>
			<a href="${logo.modalLink}" target="_blank">${logo.modalLink}</a>
		</div>
	</div>`
}
logos.forEach( ( logo, index ) => {
	document.getElementById('logos').innerHTML += `<img
		src="imgs/logo/${logo.imgSrc}.gif"
		alt="${logo.name}"
		onClick="callModal('${index}')"
	></img>`
} )