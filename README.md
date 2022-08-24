Task Manager – Nitin Sayshe
### Summary
This Project is a Task Management App created using React, React Hooks, React Router and Context API. The Routes were setup for two pages home and a about page. User can create the task and specify the name and date of the task. The added task can highlighted to set it as reminder. The color of highlighted task gets changed when double clicked. After completion of the task user can delete the task and it get removed from the list.
<<<<<<< HEAD
 
### Functionality
We used multiple functional components ex. Header to hold the input field and add button, Tasks filed to show the list of task. And footer component. As we using the functional components we use Hooks to manage the state.
-	Header includes the Button to add the task.
-	Two input field is used to get the input from user, first for the Name of the Task and second is a date and time picker to select the date and time from calendar.
-	Check box is given to specify the reminder is on or off, (optional)
-	Save button is used to save the task in backend. 
### Built With
-	React .js  - Library for building user interface
-	React Router – to navigate to the about page
-	React Hooks –to manage the data
-	React Router Dom -
-	React server –to make local server.

### Start the Setup
-	use `npx create-react-app taskmanagement` to create the structure of project.
-	run the project using `npm start`
-	Navigate to http://localhost:3000 your browser to see the app is running.
-	`npm run build`  create optimize the production build, static data data.json
-	`npm i –g serve` to install the server
-	Now run `npm run server`.

### Components
Root Components is App.js so all the components is placed inside App.js
We use multiple components and Stored in `src/components`
Header Component
Used function component to and return the header included the heading title , and a button component having an on Click function and style component.
<Button color={showAdd ? 'red' : 'green'} text={showAdd ? "Close" : "Add"} onClick={onAdd} />







### Add Task Component
It returns form with  Input field to add the task name, and datetimepicker to select the date and time,
We use `npm i @syncfusion/ej2-react-calenders` package to add the date picker
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";

### Tasks Component
Use the useState() to hook the data of the tasks components. It include all the task from the data we fetch from react server. We used map her get the single object from array and give data to `task component`



### Task Component
This component include the task fields, name in <h3> and <p> tag specify the time, and  react icon –FaTimes having event listener onClick to delete the task.




### Hooks 
 const [text, setText] = useState('')
 let  [day, setDay] = useState('')
 const [reminder, setReminder] = useState(false)

For saving the values, we are using the React useState( ) hook Inside the AddTask.js, Next, to save the values in the state, we need to give reference to each input, so that on changing the input values, we can store the data for each input field. So for each input field, we will give reference to the onChange handler. Also make an onSubmit function to call onAdd function with values as argument.
<input
   value={text}
   onChange={(e) => setText(e.target.value.toString())}
   type="text"
   placeholder='Add Task' />

### App.js
All the components are placed inside the app components and passed the required props as per components requirement, multiple functions is created like  addTask, deletTask, fetchTask to perform curd operations.
About and Footer Component.
Footer component is embedded below the Tasks components, and redirect to the about component. Here we use the “React-router-dom” to navigate to the new component. 
import { Link } from 'react-router-dom'
and link About it to “About Route” 
<Link to='/about'>About</Link>


=======

 ![image](https://user-images.githubusercontent.com/24646213/186428905-7c496169-6088-4fe3-815b-80922cc2c5e4.png)

### Functionality
We used multiple functional components ex. Header to hold the input field and add button, Tasks filed to show the list of task. And footer component. As we using the functional components we use Hooks to manage the state.
-	Header includes the Button to add the task.
-	Two input field is used to get the input from user, first for the Name of the Task and second is a date and time picker to select the date and time from calendar.
-	Check box is given to specify the reminder is on or off, (optional)
-	Save button is used to save the task in backend. 

### Built With
-	React .js  - Library for building user interface
-	React Router – to navigate to the about page
-	React Hooks –to manage the data
-	React Router Dom -
-	React server –to make local server.

### Used Dependencies. 
-	"@syncfusion/ej2-react-calendars": "^20.2.45",
-	"json-server": "^0.17.0",
-	"react": "^18.2.0",
-	"react-dom": "^18.2.0",
-	"react-icons": "^4.4.0",
-	"react-router-dom": "^6.3.0",


### Start the Setup
-	use `npx create-react-app taskmanagement` to create the structure of project.
-	run the project using `npm start`
-	Navigate to http://localhost:3000 your browser to see the app is running.
-	`npm run build`  create optimize the production build, static data data.json
-	`npm i –g serve` to install the server
-	Now run `npm run server`.

### Components
Root Components is App.js so all the components is placed inside App.js
We use multiple components and Stored in `src/components`
Header Component
Used function component to and return the header included the heading title , and a button component having an on Click function and style component.
<Button color={showAdd ? 'red' : 'green'} text={showAdd ? "Close" : "Add"} onClick={onAdd} />







Add Task Component
It returns form with  Input field to add the task name, and datetimepicker to select the date and time,
We use `npm i @syncfusion/ej2-react-calenders` package to add the date picker
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";

Tasks Component
Use the useState() to hook the data of the tasks components. It include all the task from the data we fetch from react server. We used map her get the single object from array and give data to `task component`



Task Component
This component include the task fields, name in <h3> and <p> tag specify the time, and  react icon –FaTimes having event listener onClick to delete the task.




Hooks 
 const [text, setText] = useState('')
 let  [day, setDay] = useState('')
 const [reminder, setReminder] = useState(false)

For saving the values, we are using the React useState( ) hook Inside the AddTask.js, Next, to save the values in the state, we need to give reference to each input, so that on changing the input values, we can store the data for each input field. So for each input field, we will give reference to the onChange handler. Also make an onSubmit function to call onAdd function with values as argument.
<input
   value={text}
   onChange={(e) => setText(e.target.value.toString())}
   type="text"
   placeholder='Add Task' />

App.js
All the components are placed inside the app components and passed the required props as per components requirement, multiple functions is created like  addTask, deletTask, fetchTask to perform curd operations.
About and Footer Component.
Footer component is embedded below the Tasks components, and redirect to the about component. Here we use the “React-router-dom” to navigate to the new component. 
import { Link } from 'react-router-dom'
and link About it to “About Route” 
<Link to='/about'>About</Link>




>>>>>>> e024009430cae1b74aeb9f276af7320b4c4ec43b
