
function Category({category}) {
    let contentList=[];
    category.cats.forEach((elem)=>{
        contentList.push( <div className="">{elem}</div>)
    })
    return (
      <div className="category">
        <h2>{category.title}</h2>
        <div>{contentList}</div>
      </div>
    );
  }
  
  export default Category;
  