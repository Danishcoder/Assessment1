/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is a version control system. It is used in order to have multiple screenshots or saves of the same file or project. It allows you to revert whatever files you selected back to one of the previous saves you have, or see when exactly someone introduced an issue to the project."
console.log(gitDefinition)
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = 'Github is an online hosting platform where you can post your git repositories and keep them on the cloud so you dont have to worry about your project being lost due to someones computer crashing. It also makes it convenient for people to work together from anywhere and allows you to make changes collaboratively'

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let problem3 = { Description: " The 'Init' command initalizes a git repository within whichever directory you're working in", code: "git init" }
console.log(problem3.Description, problem3.code)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let problem4 = {Description: "the git clone command is used to clone an existing repository into a newly created directory.", code: "'git clone' followed by the URL" }
console.log(problem4.Description, problem4.code)


//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let problem5 = {Description: "This command shows you the current state of the working directory and the staging area. It lets you know which files are being tracked and which ones arent, and if those files have been modified.", code: "git status"}
console.log(problem5.Description, problem5.code)



//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let problem6 = {Description: "This command adds all of the files in the current working directory to the staging area, It tells Git that you want to include updates to these files in your next commit, Git add doesn't really do anything until you commit the changes though", code: "Git add . (file name or leave empty to add all files in current directory"}
console.log(problem6.Description, problem6.code)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let problem7 = {Description: "This command captures a snapshot of the current changes that have been staged, kind of like a save that you make in a video game", code: "git commit -m 'message contained in here' "}
console.log(problem7.Description, problem7.code)


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let problem8 = {Description: "This command takes the save that you made with git commit and it uploads it your remote repository", code: "git push"}
console.log(problem8.Description, problem8.code)