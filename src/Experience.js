
function Experience({experience}) {
    let contentList=[];
    experience.content.forEach((elem)=>{
        contentList.push( <div className="subContent">{elem}</div>)
    })
    return (
      <div className="experience">
        <h2>{experience.title}</h2>
        <code>{experience.date}</code>
        <div>{contentList}</div>
      </div>
    );
  }
  
  export default Experience;
  