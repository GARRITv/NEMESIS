const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JSW3PdNQ6cw2NNlK603Flj";
global.website=process.env.GURL || "https://chat.whatsapp.com/JSW3PdNQ6cw2NNlK603Flj" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "NEMESIS_Md" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162195613";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_16_09_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDg0LFxuICAgICAgICA3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMenJ6M24rN0hScGZxWVg3T09lVUE5V1ByZVU5bGlXTDJrWDhqZWFiM0g4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjIxOTU2MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE3MjM4M0Y0NjAzNzVENDIxNUY1OTkxOUQ1ODZGRTlCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTk2MzQxM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqaUZYeEZFMlJiQ1QzSE8tV0pRT2xRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM0MzE4Y2NhLWZlZGItNGY3Yi05YjY2LTk5Nzc5Y2M2MDAwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAxOTIsXG4gICAgICAyMjEsXG4gICAgICAxMjQsXG4gICAgICAzOCxcbiAgICAgIDIzMSxcbiAgICAgIDIwMCxcbiAgICAgIDEyMSxcbiAgICAgIDU1LFxuICAgICAgMTc1LFxuICAgICAgMTI2LFxuICAgICAgMjU1LFxuICAgICAgMjExLFxuICAgICAgMTc2LFxuICAgICAgNyxcbiAgICAgIDIzNixcbiAgICAgIDE3NSxcbiAgICAgIDExMyxcbiAgICAgIDE2OSxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICA3OCxcbiAgICAgIDEwMSxcbiAgICAgIDE3NyxcbiAgICAgIDE1NSxcbiAgICAgIDE4NixcbiAgICAgIDI5LFxuICAgICAgMTQ3LFxuICAgICAgMTAxLFxuICAgICAgNzcsXG4gICAgICA0NCxcbiAgICAgIDc1LFxuICAgICAgOTMsXG4gICAgICA0NixcbiAgICAgIDE1MyxcbiAgICAgIDE1NyxcbiAgICAgIDU2LFxuICAgICAgMTIyLFxuICAgICAgMjQyLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1BUWkc3SEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjIxOTU2MTM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl6HwnZeY8J2XoPCdl5jwnZem8J2XnPCdl6YgKPCdk7DwnZOq8J2Tu/Cdk7vwnZOyIC3wnZO98J2TvylcIixcbiAgICBcImxpZFwiOiBcIjI0NDE5OTU0Mjc2Mzc2MDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDWTl2d0ZFSXU1Z0xjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib1Z2TnZLT3lPblFwN3haNjZDWlVRcllKdnl3cllSZHV5RWlKWGlKYlN5UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxK25xNW9VM0lUV1d0SHRXS0Y4cmlLdDhvZVlpVGprK3pFd2U2VmZNT0tvaHBJK2E4cmRKYVNHTmthYUlneE9VMkRmS0diaFpUKzNyWi9UUDdwZ3JCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZUU91Y3NORExxb3A2Mzd5a3lRdTNOZ05GdklLa1NnZi9XZUV6VDkzSFdVbXpzMldFdjVnODIrZFU5MzMwM0o5bGg3cFVSSjFZRC9lWlhNS1Y3cGZoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYyMTk1NjEzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTk2MzQwN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇NEMESIS]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "NEMESIS_Md",
  ownername:process.env.OWNER_NAME|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇 NEMESIS]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
