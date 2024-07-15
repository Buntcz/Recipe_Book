function Recipe({title,ingredients,wayToMake,id,deleteFunc}) {
    return (
        <div key={id} className="recipeContainer">
            <h1>{title}</h1>
            <p>{ingredients}</p>
            <p>{wayToMake}</p>
            <button className="deleteButton" onClick={deleteFunc}>delete</button>
        </div>
    )
}

export {Recipe}