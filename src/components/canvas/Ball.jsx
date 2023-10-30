

const BallCanvas = ({ icon,name }) => {
  return (
    
      <div className="bg-[#0c4a6e]  rounded-xl ring-offset ring-2 ring-white  ">
        
        <img src={icon} className="w-[30px] mx-auto"/>
        <p className="text-center">{name}</p>
      </div>
  );
};

export default BallCanvas;
