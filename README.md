 

## Installation  
to install react project open the terminal and run this code :<br>


``` npm install ```



## Run the Project with npm <br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Run the Project with Docker <br>

```docker run -p 8090:80 arasemami/react-enuygyn```

### Run at the background

```docker run -d -p 8090:80 arasemami/react-enuygyn```


## Schema of Graphql Faker Query <br>

```
type Employee {
  id: ID
  firstName: String! @fake(type: firstName, locale:tr)
  lastName: String! @fake(type: lastName, locale:tr)
  jobTitle: String! @fake(type:jobTitle, locale:tr)
  avatar: String! @fake(type:avatarUrl)
  vote: Int! @fake(type:number,options:{minNumber:1,maxNumber:10})
  mobile:String! @fake(type:phoneNumber)
  email:String! @fake(type:email)
  address:String! @fake(type:streetAddress)
  summary:String! @fake(type:lorem, options:{loremSize:paragraphs})
  
}


type Query {
  employee:[Employee] @listLength(min:10,max:50)
  getByEmployeeId(id: ID): Employee
  
}
```



## Build the Project <br>


### `npm run build`



# What I have done.

- Create employees page and view details of employee.
- Initialized DOCKER configuration.
- Used Scss for styling.
- Used React Router for navigate between the pages.
- Responsive Design
 - [x] Safari is fixed.
 - [x] Google Chrome Is fixed.
 - [x] Firefox is fixed.
 - [x] Mobile Responsive is fixed.
 - [ ] Internet explorer ( note: I don't have this web browsers :D ).




  
