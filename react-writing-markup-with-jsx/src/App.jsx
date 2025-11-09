//this will not work because there are rules to follow 

export default function TodoList() {
  return (
    //missing opening fragment tag <> or <div>
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo" //class should be className
    > //missing closing tag
    <ul>
      <li>Invent new traffic lights        //missing closing </li> tag
      <li>Rehearse a movie scene           //missing closing </li> tag
      <li>Improve the spectrum technology  //missing closing </li> tag
    </ul>
    //missing closing fragment tag </> or </div>
  );
}
