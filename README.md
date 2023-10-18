Product Management System

1. npm create vite@latest >> project name >> package name >> React >> JavaScript
2. npm install react-router-dom
3. create new folder under src>>pages>>Home
4. Home.jsx, Home.css
// class to className
// img tag should be self closing
5. add routes in App.jsx
    <BrowserRouter>
    <Routes>
      <Route>
    </Routes>
    </BrowserRouter>
    import {BrowserRouter,Routes,Route} from 'react-router-dom'
6. add in App.jsx
      <Route path="/" element={<Home/>}/>
7. create new folder under src>>components>>Navbar // since Navbar will be used in all pages so folder name is components
8. Navbar.jsx, Navbar.css
9. add 
<Navbar/> in Home.jsx
10.
https://mockapi.io/
JSON for data store, transport, readable by any language so json format used.
11. npm install axios //3rd party
12. Home.jsx
a.useEffect() // do something
b. fetchProducts arrow function asynchronous
c. use axios to get data from api made in mockapi.io
d. useState
// data array ma ako xa so [] in useState // object ma ako vaye {} hunthyo
e. data in products array now use .map to loop in products array and show data
added key in the div
f. 
