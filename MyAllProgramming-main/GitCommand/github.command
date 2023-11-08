;kjjixcaljkjonouj

 what is git?
Ans::Git is a free and open source distributed version control system
designed to handle everything from small to very large project with
speed and  efficiencyq

2::Mangae small project and large size project

3::version control is a sustem that recored changes to file or set
of files over time so that you can recall specific versions later

..local version control system
..centralized version control system
..distributed version control system --> gitHub



Ans:small project can be done by github,large project can be done by bitbucket.


1::Command First simplaes
echo "# PythonFile" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jugalNoob/PythonFile.git
git push -u origin main

////Start Command ////

pwd --> this command check file loacl 

git config user.name "jugalNoob" -->set your name
git config user.email  "sjugal126@gmail" --> set your name


git config --global user.name ""

git config --global user.email

git config --list -->check all user information

git init -->create folder add all information

git status -->check file status

git log  -->check status and check commint

git rm <file_name> -->remove File

////|||Three -- stage -- architecture |||///||||

1::working directory 

2::staging  are

3::git directory (Repository)



||||||||||GitClone Folder |||||||||
git clone https://github.com/jugalNoob/PythonFile.git -->clone your website

git clone https://github.com/user/repo.git my-local-directory

ls -->check files

clear

git commit -m "PythonFile"


|||||||Git gitignore ||||||||||||||||||

.gitignore

# This is a comment, Git will ignore it

demo/ -->folder ignore



|||||||||||File status File Cycle GIt|||||||||||||||||||||

Here's how the commands you mentioned relate to these statuses:

git init:::: Initializes a new Git repository in the current directory.
 Initially, all files are untracked.

git status:::: Shows you the status of files in your repository,
 including untracked, modified, staged, and committed files.

git add:::: Stages modifications made to a file, changing its 
status from modified to staged.

git commit:::: Records the staged changes, changing the status of those
 files to committed.




|||||||||||||||||Commits  staging area & working directory difference||||||||||||


git diff

git diff --staged -->changes in git show  all changes
git add py.py // single file 

git restore --staged py.py  --> command  convert to modified


git restore py.py -->restore your code 


git checkpout -f  --> restore your add in your file

git checkpout file.txt -->single file 


||||||||||||Renaming and Moving  Files in Git||||||||||||

git mv py.py jugal.py --chnages Your file file_name

git rm jugal.py --> remove files

git push origin <branch_name> -->Update 

git rm --cached jugal.py -->remove file 

touch newfile.txt --> linux command

echo.>newfile.txt

git push origin <branch_name>



||||||||||||||Working on Reopitory Remotely||||||||||||||||||||||

git remote add origin https://github.com/jugal-chanda/python_practice.git

//Update Files 

git commit -m "first commit" 

git push origin main



||||||||||||||Crate and Margin Branches  in GIT|||||||||||||||||


git checkout -b Deva --> branche master to  converet  Deva

git commint -m "jugal"

git branch  --> check which 

git  checkout master -->switch to devea to master

git push origin Deva


||||||||||||||||||Branching And merging a project |||||||||||||||||

git checkout  master--> first go master

git merge Deva -->merge in master

git pull origin master


