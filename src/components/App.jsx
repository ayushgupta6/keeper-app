import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./create"; 

function App() {

    const [Items, setItems] = React.useState([]);
    
    function addItem(newItem) {
        setItems(prev => {return [...prev, newItem];});
    }

    function Deleting(props) {
        setItems( prev =>{
           return prev.filter(
                (item, index) => {
                    return props!==index
                }
           );
        });
    }

    return <div>
        <Header />
        <CreateArea onAdd={addItem}/>
        {Items.map((item, index)=> (
            <Note 
                key={index} 
                id= {index}
                title={item.title} 
                content={item.content} 
                onDelete={Deleting}
            />))}
        <Footer />
    </div>;
}

export default App;