@echo off
if %1.==. goto begin

:install
git --version >> git-version.txt
find /c "version" git-version.txt
del /F /Q /A git-version.txt
if %errorlevel% equ 1 (
	echo you must intall git befor run this app.
	pause
	exit %errorlevel%
)
git clone master 
pause
goto :eof

:begin
set /p pj=Enter your project name : 
echo installing dependencies...
node -v >> node-version.txt
for %%i in (node-version.txt) do @set c=%%~zi
del /F /Q /A node-version.txt
if %c% gtr 15 (
	echo you must install node.js befor run this app.
	pause &&exit 0
)
npm install express --save
start express-app.bat 1 %pj%
goto :eof