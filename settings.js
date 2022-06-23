/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasGanz',
}

//—————「 Setting Owner 」—————//
global.owner = ['6285641476033','6285641476033','6285641476033'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6285641476033'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6285641476033' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'X-ZC' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'X-ZC' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'X-ZC' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://instagram.com/hai_om.qw'
global.ig = 'https://instagram.com/hai_om.qw'
global.mygc = 'http://tiny.cc/X-ZC'
global.myweb = 'https://instagram.com/hai_om.qw'
global.email = 'xcomunityx77@gmail.com'
global.region = 'Mars'

//—————「 Set Wm 」—————//
global.packname = 'X-ZC' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'IG @hai_om.qw' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
/*global.veloriy = fs.readFileSync('./image/chika.mp4')*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: 'Done Deckk',
admin: 'Bukan Admin Ngatur Lagi!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu Deckk!',
owner: 'Ga Usah Ngatur Deckk!',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Sedang Di Proses Deckk...',
error: 'Fitur Sedang Error!',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
