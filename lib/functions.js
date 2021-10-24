const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const spit = require('spinnies')
const Crypto = require('crypto')


const simih = async (text) => {
	try {
		const sami = await fetch(`https://secureapp.simsimi.com/v1/simsimi/talkset?uid=297971048&av=6.9.3.4&lc=id&cc=ID&tz=Asia%2FJakarta&os=a&ak=quS%2FxiW%2Bb8ys5agzpljUdoPdLH8%3D&message_sentence=${text}&normalProb=8&isFilter=1&talkCnt=1&talkCntTotal=1&reqFilter=1&session=nSt8PSSmKRbcR7quUkfhXYpmDYgErtBefVbkkri9CrGSVjm4Cj2e2zBFjvdxSijp56WjyK6g2EWTj3KxKz65DL22&triggerKeywords=%5B%5D`, {method: 'GET'})
		const res = await sami.json()
		return res.simsimi_talk_set.answers[0].sentence
	} catch {
		return 'Simi ga tau kak'
	}
}
const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 150,
  "frames": [
	"R",
	"RE",
	"REC",
	"RECO",
	"RECOD",
	"RECODE",
    "RECODE B",
    "RECODE BY",
    "RECODE BY B",
    "RECODE BY BG",
    "RECODE BY BGH",
    "RECODE BY BGHA",
	"RECODE BY BGHAM", 
	"RECODE BY BGHAM G", 
	"RECODE BY BGHAM GA", 
	"RECODE BY BGHAM GAN",
	"RECODE BY BGHAM GANT",
	"RECODE BY BGHAM GANTE",
	"RECODE BY BGHAM GANTEN",
	"RECODE BY BGHAM GANTENG",
	"RECODE BY BGHAM GANTENG U",
	"RECODE BY BGHAM GANTENG UW",
	"RECODE BY BGHAM GANTENG UWU",
	"RECODE BY BGHAM GANTENG UWUW",
	"RECODE BY BGHAM GANTENG UWUW :",
	"RECODE BY BGHAM GANTENG UWUW :)"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }
 
const banner = cfonts.render((`© BOT WHATSAPP`), {
    font: 'chrome',
    color: 'candy',
    align: 'center',
    gradient: ["red","magenta"],
    lineHeight: 3
  });
const CFonts  = require('cfonts')
CFonts.say(`HamBotz`, {
  font: 'block',
  align: 'center',
  gradient: ['red', 'blue']
})


module.exports = { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }
