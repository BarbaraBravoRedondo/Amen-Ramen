import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe("Home",()=>{
 
 
    test ("Test titule of Home",()=>{

//preparacion
const texto="Home";
//actuacion
render (<Home/>) ;
//asercion
screen.getByRole("heading", {name: texto});


    })  ;


    test("'Login' en el documento",()=>{
        render(<Home/>);
        const logins = screen.getAllByText(/Login/i);
        expect(logins.length).toBe(2)
    })
    
});
