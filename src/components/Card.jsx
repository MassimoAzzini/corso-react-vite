function Card () {

  return (
    <div className="rounded-md">
      <img src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="flex flex-col p-4">
        <h2 className="text-2x1">Titolo</h2>
        <p className="text-gray-500px">Lorem ipsum, dolor sit amet consecstetur adipisicing elit. Cupiditate suscipit nulla, beatae sapiente quibusdam mollitia.</p>
        
      </div>
      Ciao sono una card! 
    </div>
    );

}

export default Card;