 

## Installation
to install react project open the terminal and run this code :<br>


``` npm install ```


## Run the Project <br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Graphql Faker Query <br>

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
  summery:String! @fake(type:lorem, options:{loremSize:paragraphs})
  
}


type Query {
  employee:[Employee] @listLength(min:10,max:50)
  getByEmployeeId(id: ID): Employee
  
}
```



## Build the Project <br>


### `npm run build`



 ## What i use in this project <br>

 ### - react js
 ### - graphql
 ### - Docker




  
