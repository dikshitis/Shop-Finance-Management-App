@echo off
net start MySQL80

start cmd /k "cd /d C:\Users\Dikshit Bhattara\Documents\Documents\Dikshit Programs\DokanKoHisabApp\backend && node connection.js"

start cmd /k "cd /d C:\Users\Dikshit Bhattara\Documents\Documents\Dikshit Programs\DokanKoHisabApp\frontend && npm run dev"

timeout /t 3
start http://localhost:5173/dashboard