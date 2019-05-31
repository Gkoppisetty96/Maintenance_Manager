# Maintenance Manager

-----------------
TECHNOLOGIES USED
-----------------

jQuery, JavaScript, Bootstrap, node.js, Express, Sequelize, & MySQL

---------------
GENERAL OVERVIEW
---------------

The concept for maintenance manager was derived from scenarios many companies encounter on a daily basis.  This app is simple in its intention, as well as functional in its execution.  Its purpose is to log various, building-wide maintenance issues in a rapid, but detailed manner.  Maintenance manager is capable of tracking the specific location of the issue, the type of issue, a short description, and the time and date when said issue is logged.  Upon completion of the task, only the administrator has the capability to move each issue from pending to completed.  The entire streamlined process takes less than a minute to complete and is designed to add as little work as possible to an already busy workplace.

All buttons are created dynamically through jQuery and JavaScript.  Onclick events and functions render or remove buttons, as well as update data.  The data entered by the user is sent via POST request to a MYSQL database.  A GET request is then used to gather the data and display it to the page in either the pending or completed sections.  A PUT request is used to update tasks from pending to completed.


---------------
USER EXPERIENCE
---------------

    -STANDARD USER
        Anyone with access to Maintenance Manager has the ability to create a new task.  Upon opening of the app, 
        the user can see all pending and completed issues before adding a new one.  This level of visibility was 
        intended to reduce duplicate entries.  If the user wishes to create a new task, they click the "New Task" 
        button located at the bottom of the page.  The proceeding task creation process is as follows:
            
            -Enters name in input field and clicks "Confirm Your Name"
                -(If no name is entered an error message is displayed)
            -Selects wing of building the issue is in
            -Selects department location of the issue
            -Selects which room the issue is in
            -Selects the problem of the issue
            -Selects severity of the issue
                -On a scale of 1-5 (5 being the most severe)
            -Types a brief note regarding the issue
                -(Max 250 characters)
            -Clicks "Submit Notes"
    
        After the user clicks "Submit Notes" the issue is created and appears in the "pending" area.  The user also 
        has the ability to move back to a previous step in the issue creation process, if they believe they made 
        an error by re-clicking the correct button.  The use of a breadcrumb text system (located above issue creation area) 
        updates after each selection and was intended to log the issue as the user works their way through creation.  
        Adding any additional issues completed by repeating the same steps as mentioned above.

    -ADMINISTRATOR
        To access the administrator page of the application, click the "Admin" button on the Navbar.  This will open 
        username and password input fields.  If the username and password are incorrect, an error alert will appear.  
        If correct credentials are inserted, pressing the Enter key will relocate to the administrator page.  The 
        administrator has all of the same functionality as the standard user, with the addition of moving issues to 
        "completed", once the physical issue is resolved.  This is accomplished by using "drag and drop" functionality, 
        grabbing the desired issue and moving the issue to the "completed" section, and dropping it in.  Upon entry to 
        the completed section, the issue will change from red to green, also signifying its completion.  If the Administrator 
        grabbed the wrong issue, it can easily be dragged back to the pending section.


-----------------------------------
MAJOR CHALLENGES DURING DEVELOPMENT
-----------------------------------
    - Creating the original JavaScript object for each task.  Getting the data from each button click, and using that to 
    create an object was our first real challenge.

    -POSTing the data to MYSQL and GETting it to display correctly on the DOM

    - Add or remove things DOM elements freely.  "Hiding" and "Showing" already existing HTML elements, was not the 
    best way to do this. Creating everything dynamically seemed like our best option, due to constantly changing data.

    - Switching to a fully dynamic app was a challenge in itself.  Issues included duplication of buttons on multiple 
    clicks, breadcrumb duplication, necessity to double click buttons before event firing, etc.  After these issues 
    were resolved, dynamic elements provide a more robust user experience.

    -Drag and drop functionality


--------------------------------------------
VISION FOR THE FUTUER OF MAINTENANCE MANAGER
--------------------------------------------
  Coming soon to maintenance manager:

    -Make the app customizable to any office/workplace layout

    -Update "time of completion" when issues are moved from pending to completed

    -Add an error message if an identical issue is created

    -Add a delete issue option

    -On more sever issues (4 or 5 on severity scale), auto-send email to desired recipient

    -Sort all issues by time added/time completed

-------
AUTHORS
-------

Geethika Koppisetty (https://github.com/gkoppisetty96)  
Josh Eshleman (https://github.com/Joshleman10)  
Paige Lieske (https://github.com/paigelieske)  
Taylor McGlothlin (https://github.com/tayler176)