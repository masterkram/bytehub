# An easy guide for beginners on using GIT :call_me_hand:

## What is git?
Git is a version control software which allows you to save changes.
<br/> &rarr; You made a mistake in your code? You can undo it! 
<br/> Git is open source which means you can download this software online for free.
<br/> Check out: https://git-scm.com/ 
<br/> **_NOTE:_** When you downloaded git, type the command in your terminal to check whether you downloaded git successfully. 
>```  
> git 
>``` 

Github/Gitlab/Bitbucket are collaboration websites which interact with git and just help to make use of git. In this article we focus on github.

## What is the github workflow?
1. Branching
<br/> &rarr; The project in production is saved on a master branch 
<br/> &rarr; For every new change in work, make a new branch without effecting anything in production on master
2. Commits
<br/> &rarr; Whenever you make a change you commit it and your change is stored on the branch
3. Pull requests
<br/> &rarr; After making a commit for a set of changes, you make a pull request on github.com. You request the owner of the project to pull in your changes onto master.
4. Collaborate
<br/> &rarr; Here your collegues on the project can leave comments on your changes.
5. Merge
<br/> &rarr; Once the pull request is accepted by the owner of the master, you merge your branch containing the committed changes with the master branch. All changes are then included in the production branch!


## How to use git?
1. Make a github account
2. Generate an ssh key
3. Have your project under git control
4. Use git consistently

## Why do you need an ssh key?
When making use of github you need to be logged in into your account. In other words you need to be authenticated in order to let github know that you are the user who has access to the private, remote repository. 
When using an ssh key to authenticate yourself you do not need to use your username or password anymore. 

## How to make an ssh key?   

1. Go to your terminal and type **ssh-keygen**  
     **_NOTE:_** You do not need to be in any specific folder
     **Output**: 
     >``` 
     >Generating public/private rsa key pair.  
     >Enter file in which to save the key (/Users/dina/.ssh/id_rsa):
     >```
    **_NOTE:_** This means that by default the ssh key will be stored in:   
     **/Users/dina/.ssh/** with the default name  **id_rsa**.  

<br/>

2. You can change where the key will be saved by typing the path after the double dot :

    **Example**: 
    >```  
    >Generating public/private rsa key pair.  
    >Enter file in which to save the key (/Users/dina/.ssh/id_rsa): /Users/dina/.ssh/github
    >``` 
    **Output**: 
    >```  
    > Enter passphrase (empty for no passphrase):
    >``` 

<br/>

3. Press enter to keep an empty passphrase  

    **_NOTE:_** In order not to need a password to look at the ssh key  
    **Output**: 
    >```  
    >Enter same passphrase again:
    >```

<br/>

4. Press enter again

    > **Output**:
    >```  
    >Your identification has been saved in /Users/dina/.ssh/github
    >Your public key has been saved in /Users/dina/.ssh/github.pub
    >The key fingerprint is:
    >SHA256:9SaKGq08u+tK9uX+GXHUNCf7qqhlQ6jEGREnMBnoWfM dina@dinas-mbp.home
    >The key's randomart image is:  
    >+---[RSA 3072]----+  
    >| .+++..     + .  |  
    >|. .+ +     o =   |  
    >|. o +     o o    |  
    >| o . E . o . .   |  
    >|    + . S o o .  |  
    >|   . o o + o .   |  
    >|  o o + *   .    |
    >| o o.* o = .     |
    >|  .oX*+o+ .      |
    >+----[SHA256]-----+
    >```
    <br/>

    ### **Congrats! This is your generated key!** :smiley: 

<br/>

5. To see your generated ssh key you can continue in the same terminal window

<br/>

6. Go to the directory of the ssh key  

    **Example**: 
    >```
    > cd /Users/dina/.ssh
    >```
    **_NOTE:_** In this case the ssh key is under **/Users/dina/.ssh**  
    **_NOTE:_** Because the folder **.ssh** starts with a dot you cannot see it using the command **ls** in your terminal. Therefore use the command **ls -a**.

<br/>

7. View the ssh key within the current directory via entering **ls**

    > **Output**:
    >```
    > github          github.pub   
    >```
    <br/>  

    **_NOTE:_** When we create the **ssh** key a private/public key pair is created. We are not going in depth on how these are used internally.  
    <br/>
    **github.pub**: <br/>
    This is the public ssh key. We need to upload this key once to github in order to be able to always to authenticate to Github when making a clone, push, pull etc request without having to give a username or password. This public key is only used when connecting to a remote github repository.

    **github**: <br/>
    This is the private ssh key. You do not show this key to anyone. Whenever you make a push, pull, clone etc. you will be able to do so due to having uploaded the public key which uses the private key behind the scenes. This private key is only used when connecting to a remote github repository. 

8. Go to **your github account**. Under profile, go to **seetings**. Under settings, go to **SSH and GPG keys**. Here you can upload your **ssh key**.

    View the to be uploaded public key from the **github.pub** file:

    > **Example**:
    >```
    > cat github.pub 
    >```
    <br/>   

    > **Output**:
    >```
    > 3jdhAZZZZ.....  etc.  
    >```
    <br/> 

    Upload the output as the **public ssh key** to your github account.

    Choose **Authentication Key** as the Key type.

### You  successfully uploaded the ssh key to github! :smiley:

## How to delete an **ssh** key?

In case you have created to many ssh keys or you are not using a certain ssh key anymore, you may want to delete these keys.

1. In your command line, navigate to your home directory.   
This is where the ssh keys are always saved. 

You can view all your **ssh** keys via the command **ls** in the home directory.

> **Example**:
>```
>  github       github.pub      id_rsa      id_rsa.pub
>```
<br/>

You can delete the private **github** key and the public **github.pub** key.

> **Example**:
>```
 > rm github* 
>```
<br/>   

> **Output**:
>```
> id_rsa          id_rsa.pub      known_hosts     known_hosts.old
>```
<br/>


## Let's start using GIT! :sunglasses:

There are two ways how you can start using git. 

#

Option 1: You make a project yourself.  

Option 2: You work on an already created project.

#

### Option 1: You make a project yourself.

1. In your command line, navigate to the directory in which your project is located. We have to put this project under **git control**. 

    **Example**:
    >```
    > git init
    >```

    Now your project is under git control!

2. Now we need to push our project to github to share the project with other users. Go to your github account and create a new repository.

3. Once you created the new repository a link is created on your github account, showing you the commands to enter such as the command to connect to the **remote** (remote github server).
    **Example**:
    >```
    > git remote add origin git@github.com:dinaaa25/useful_articles.git
    >```

Ready! Now you can skip Option 2 and continue using git! 

### Option 2: You work on an already created project.

1. Clone the project.  

**_NOTE:_** This means that you create a copy of the current project to your laptop.  
You clone a project only once in the beginning. 

**_NOTE:_** Go to your command line and navigate to the directory where you wish to clone your project to. Then go to your github account and copy the **SSH URL**. You can find it under Code in your github repository.

**Example**:
>```
> git@github.com:dinaaa25/ml_cloud_coverage_prediction.git
>```

In your command line clone the project.
**Example**:
>```
> git clone git@github.com:dinaaa25/ml_cloud_coverage_prediction.git
>```

<div style="border: solid 2px #4287f5;border-radius: 5px;padding:10px">
<b><i>NOTE:</i></b>
For Macbook users: Failed cloning of the project?

You may get the following output:

**Output**:
>```
> Cloning into 'satellite-cloud-mask-nowcasting'...
> git@github.com: Permission denied (publickey).
> fatal: Could not read from remote repository.
> Please make sure you have the correct access rights
> and the repository exists.
>```

In this case your just created **ssh** key is not recognized by git. 
You can enter the following debug command in your command line to see wether this is the case: 

**Example**:
>```
> ssh -v -T bitbucket.org
>```

**Output**:
>```
> .... debug1: Authentications that can continue: publickey
> debug1: Trying private key: /Users/dina/.ssh/id_dsa
> debug1: Trying private key: /Users/dina/.ssh/id_ecdsa
> debug1: Trying private key: /Users/dina/.ssh/id_ecdsa_sk
> debug1: Trying private key: /Users/dina/.ssh/id_ed25519
> debug1: Trying private key: /Users/dina/.ssh/id_ed25519_sk
> debug1: Trying private key: /Users/dina/.ssh/id_xmss
>```

You can see that when trying to clone the project github does not search for your public key named **github** but goes through a number of default names such as **id_dsa**, **id_ecdsa**, etc. Therefore, we need to create a file called **config** to the **.ssh** directory. In this **config** file we are going to store the path to our github key. 

1. Go to the directory of your **.ssh** folder in your command line.

2. Enter the command **vim config** in your command line
**_NOTE:_** **vim** is a text editor you can use within your command line which allows you to create the **config** file. 

3. Now in the new opened field press **i** to be able to **insert** at the top in your **vim** editor.

4. Enter the following data: 
>```
> Host github.com
>       User git
>       Port 22
>       Hostname github.com
>       IdentityFile ~/.ssh/bitbucket
>```

**_NOTE:_** The amount spaces before and at the end of each line is very important.

5. Press enter
6. Enter **vim** in your command line to view that the **config** file has been created.

**Output**:
>```
> github   github.pub   config    id_rsa  id_rsa.pub
>```

7. You should be able to clone your project now 

</div>

<br/>

## For both Options:
<br/>
<div style="border: solid 2px #4287f5;border-radius: 5px;padding:10px">
<b><i>NOTE:</i></b>  
On a new computer you always need to configure your email in git config to show from whom you get the git message (your account does not matter basically)

**Example**:  
**_NOTE:_** This command assigns this email to your profile for all of your projects.
>```
> git config --global user.email "yourName@example.com"
>```

**Example**:  
**_NOTE:_** This command assigns this email to the project you are currently at. Therefore, you need to navigate in your command line to the project firstly.
>```
> git config --local user.email "yourName@example.com"
>```

</div>

<br/>

1. Make a **gitignore** file  
    **_NOTE:_** Here you store all files you do not want in your git repository. This means these files of your project will not be under git control.  
    **_NOTE:_** This command means that you write the  **tmp_extracted** file name via echo to the **gitignore** file
    **_NOTE:_** You can also open **gitignore** and edit it with text 

    >```
    > echo tmp_extracted/ >> .gitignore
    >```
    <br/>

2. You can print the **gitignore** file to view its content
    >```
    >  cat .gitignore
    >```
    <br/>

3. Add all files to **Staging** via:   
    **_NOTE:_** Staging is the step when you prepare your files for a commit.   
    **_NOTE:_** Do this for each file.
    >```
    >  git add .gitignore
    >```
    <br/>

4. Perform a commit.  
    **_NOTE:_** A commit is a nicely packaged change which has been done to one or more files.  
    **_NOTE:_** You have to put a logical message within " " .   
    >```
    >  git commit -m "my commit message"
    >```
    <br/>

    **Example**:  
    **_NOTE:_** For the first commit of a project.
    >```
    > git commit -m "initial commit"
    >```

5. Push your changes to the github. This means that you update the current project for **everyone** on github. This is the final command for a change.
    >**_NOTE:_** Do not worry! In case you pushed a change accidently, other users of the project can still see the previous projects in the history.

    **Example**:  
    **_NOTE:_** For the first commit of a project.
    >```
    > git push 
    >```

## Create a readme file :sunglasses:
Every project contains a readme file. This can be a .txt file or a .md file for instance where you write down the purpose, goals and key features of the project. It helps users to understand the project quickly. 

**_NOTE:_** It is always the best option to navigate your project via the command line because from this level you have full control of your project. 

**Example**:
1. Create a readme.md file
    >```
    > vim readme.md 
    >```
2. Press i to get into the insert state 
3. Type your text 
4. Press control c or escape to get out of insert mode and back to vim mode
5. Press wq to write and quit which saves your changes to the file and exit the vim mode
6. To see what is written in the readme file 
    >```
    > cat readme.md 
    >```

## Summary of useful commands :sunglasses:

1. This command displays all previously inputted git commands in the git project you are currently located.
    >```
    > git grep | history 
    >```

2. This command lets you search for a search patter in this git project.

    **Example**:  
    **_NOTE:_** Here the search pattern is zenml and every path, command, etc. containing zenml will appear.
    >```
    > git grep zenml
    >```

3. Make a new branch
    **Example**:  
    **_NOTE:_** In this case the new branch is called m1-macbook-fix-issue.
    <br/> Now you are on the new branch. You do not need to create a  gitignore file, because you only create it once since it is applied to the whole project. Just add commit and push files here to the new branch.

    >```
    > git checkout -b m1-macbook-fix-issue 
    >```

4. Make a merge request

    **_NOTE:_**  Go to the project, go to the branches you want to be added to the master branch

5. Fork a project

    **_NOTE:_** You make an exact copy of an open source project under your account.
    This means if you push new changes to master, you push them to the forked master only visible on your account. If you actually would like to contribute with your changes to the original project, send the original owner a pull request. 

6. Clone a repository down to your local machine
     **_NOTE:_** Get the path from github
    >```
    > git clone <path>
    >```

7. Update your local project with new changes your collegues might have made
    **_NOTE:_** Not to confuse with a pull request which is the opposite because that is where you request your changes to be added to the master.
    >```
    > git pull 
    >```

8. View made changes by collegues
    **_NOTE:_** Just view made changes without pulling them to your local project yet.
    >```
    > git fetch
    >```

    **_NOTE:_**  In case you decide, that you want to pull them after inputting fetch, you can type the following command (git fetch + git merge = git pull)

    >```
    > git merge 
    >```

9 . Checkout the status of your git project. This command should be used constantly! After every line you type, you should check if what you intended to add, delete, etc. was executed correctly. You can see it via the git status command.

**_NOTE:_** The shortcut command for git status is gst
>```
> git status 
>```

### What is a two step commit? 
When we want to add changes to the project we are working on we need to execute the commands add, commit, push in the respective order. Personally, I suggest to execute the commands git add, git status, git commit, git status, git push, git status in the respective order to be sure the changes were done correctly after each step. 

10. Add changes to the staging area
**_NOTE:_** Once you have made changes, you execute the add command.

**Example**: Here we add one file manually. Only the changes from that file are added.
>```
> git add dina22.txt 
>```

**_NOTE:_** To add all changes, type the following command

>```
> git add -A
>```

**_NOTE:_** After you added all changes, type the git status command to check if your changes were added as expected.

11. Add the changes from the staging area to the repository locally permanantly.
When you make a commit a commit ID is created which stored the commit in the history of all commits ever made within this project.

>```
> git commit -m "update git guide"
>```

**_NOTE:_** After you added all changes, type the git status command to check if your changes were added as expected.

12. Send the changes from your local repository to the remote repository

>```
> git push 
>```

**_NOTE:_** After you added all changes, type the git status command to check if your changes were added as expected.

13. Remove an added file
**_NOTE:_** Here names.txt is the file we accidentally added to the staging phase via the add command and wish to remove from the staging phase now.
>```
> git restore --staged names.txt
>```
**_NOTE:_** Do not forget to type git status, to check if your file has been removed from the staging stage successfully!

14. View history of all commits
**_NOTE:_** To exit this log, type the letter q
>```
> git log 
>```

Example of a part of a possible Ouput:
```
    commit fccd056d626a9261b6651ab8b1b482aa7753cd19
    Author: dinaaa25 <dina.lazorenko@gmail.com>
    Date:   Mon Feb 20 22:50:25 2023 +0100

        update git article

    commit a96372affce4e7026aa65385ce9422da813e71bd
    Author: dinaaa25 <dina.lazorenko@gmail.com>
    Date:   Mon Feb 20 22:48:21 2023 +0100

        initial commit
```
15. Change the commit history
**_NOTE:_** Let's assume you want to delete every commit before a certain commit.
Whatever commit you copy, all commits above it will be removed.
Then compy the commit id of that commit and enter the follwoing command:
>```
> git reset a96372affce4e7026aa65385ce9422da813e71bd
>```
**_NOTE:_** Now type command git log and see if your commits got deleted
**_NOTE:_** All the files from the previous commits are now in the unstaged area. 

13. Changing history. Use this command carefully!

>```
> git rebase
>```

14. Undo commits
Best way to go is git revert.

Also git reset, git commit-amend, git cherry-pick

Always check that you are on the local and not remote repository


**_NOTE:_** After you added all changes, type the git status command to check if your changes were added as expected.

### Merge conflicts

Merge conflicts occur when there has been made a change in the same file, in the same line, on the two branches you are trying to merge together

**Example**: 
<br/> &rarr; You have an index.html file on master
<br/> &rarr; You have an index.html file on myBranch
<br/> &rarr; You made changes in the same file in the same line on the two branches you are trying to merge together

--> But isn t it the one same file??? 

1. Run git status to see which files have the conflict 
2. Search for merge conflict markers and changes the lines or delete them
3. Commit changes and git will know conflict has been resolved 



## Sources:

https://www.youtube.com/watch?v=apGV9Kg7ics
https://www.youtube.com/watch?v=KmagW60Li-o












