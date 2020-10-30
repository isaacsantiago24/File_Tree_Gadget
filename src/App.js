import React , {useState} from 'react';


function App() {
  return <div>

    <Folder name="Desktop">
      <Folder name="Music">
        <File name="all_star.mp4"/>
        <File name="express_file.mp4"/>
      </Folder>


      <File name="dogs.jpg" />
      <File name="cats.png" />

    </Folder>


    <Folder name="Applications"/> 



    {/* calling the folder function to show on page */}
 
  </div>
}


// Folder
const Folder = (props) =>{
  const[ isOpen, setIsOpen]=useState(true);
  const { name, children} = props;
  const direction = isOpen ? 'down': 'right';
  const handleClick = ()=> setIsOpen(!isOpen);
  ;

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      
      
      </span>
    {name}

    <div style={{ marginLeft: '17px'}}>
      { isOpen ? children : null}
    </div>
  </div>
//use the curly places to activate the value of the variable name
};

const File = (props) =>{
  const { name } =props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpg:  'file image',
    png: 'file image outline'
  };

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
}




export default App;
