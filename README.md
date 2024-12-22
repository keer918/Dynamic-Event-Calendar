# Dynamic Event Calendar Application
The Dynamic Event Calendar Application is a feature-rich and user-friendly calendar built with React.js. It allows users to add, delete, and reschedule events using drag-and-drop functionality. Events are persistent across sessions.
## Features
### Calendar View:
###### Displays a calendar grid for the current month with proper alignment.
###### Navigate between months using "Previous" and "Next" buttons.
###### Highlights the current day for better usability.
### Event Management:
###### Add events by clicking on any day in the calendar.
###### Delete events with a single click.
###### Reschedule events by drag and drop
### Events include:
###### Event name (required)
###### Start time and end time (required)
###### Description (optional).
### Event List:
###### View all events for a selected day in a modal
###### Export events for the current month as a JSON or CSV file.
## Technologies Used
### React.js 
### Tailwind CSS
### LocalStorage
# How to Use the Application
## Step 1: View the Calendar
###### Open the app to see the current month’s calendar grid.
###### Use the "Previous" and "Next" buttons to navigate between months.
## Step 2: Add an Event
###### Click on any day in the calendar.
###### A modal will open where you can enter:
###### Event name
###### Start time and end time
###### Optional description
###### Click "Save" to add the event to the selected day.
## Step 3:Delete Events
###### Click on a day with existing events.
###### The modal will display all events for that day.
###### Use "Delete" to remove the event.
## Step 4: Drag-and-Drop to Reschedule Events
###### Drag an event from one day and drop it onto another to reschedule it.
###### Changes are automatically saved to local storage.
###### Export events for the current month as a JSON file by selecting the export option.
## Running the Application Locally
### Prerequisites
###### Node.js (v14 or above)
###### npm or yarn
### Steps
#### Clone the repository:
###### git clone https://github.com/keer918/Dynamic-Event-Calendar/
###### Navigate to the project directory:
###### cd dynamic-event-calendar
### Install dependencies:
###### npm install
### Start the application:
###### npm start
###### Open http://localhost:3000 in your browser.
### Deployment
###### The project has been deployed on Vercel.
###### Access the live application here: https://dynamic-event-calendar-plum.vercel.app/

