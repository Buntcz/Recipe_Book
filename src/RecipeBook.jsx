import { useState } from "react"

 const recipeList = [
    {
        title: "Spaghetti",
        ingredients: "meatballs,raw spaghetting,water,salt,tomato sauce",
        wayToMake: 'idk',
        id: 1
        
    }
]
let nextId = 1;

function RecipeBook() {
    
    const [formVisible, setFormVisible] = useState(false)
    const[title,setTitle] =  useState("")
    const[ingredients,setIngredients] = useState("")
    const[wayToMake,setWayToMake] = useState("")
    const[recipes, setRecipes] = useState(recipeList);

    function changeVisible() {
        if(formVisible === false) {
            setFormVisible(true)
        } else if(formVisible === true) {
            setFormVisible(false)
        }
    }

    function handleDelete(index) {
       const filtered = recipes.filter((_,i) => i !== index)
       setRecipes(filtered);
    }

    function handleSubmit(event) {
        event.preventDefault()
       const insertAt = 0;
       const nextRecipes = [ 
        ...recipes.slice(0,insertAt),
        {title: title, ingredients:ingredients, wayToMake:wayToMake, id:nextId + 1},
        ...recipes.slice(insertAt)
       ];
       setRecipes(nextRecipes)
        setFormVisible(false)
        setTitle("")
        setIngredients("")
        setWayToMake("")
      }

    return(
        <div className="mainContainer">
            <button className="addRecipe" onClick={() => changeVisible()}>Add Recipe</button>
            <div className="formContainer">
            <form className={`visible ${formVisible ? " active" : ""}`} onSubmit={handleSubmit}>
            <h1>Add Recipe</h1>
            <p>please fill up the fields under with the appropriate information.</p>
            <label className="title">
               Title: <input type="text" id="title" value={title}  onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="ingredients">
                Ingredients: <input type="text" id="ingredients" value={ingredients}  onChange={(e) => setIngredients(e.target.value)}/>
            </label>
            <label className="wayToMake">
                Way to make : <input type="text" id="wayToMake" value={wayToMake}  onChange={(e) => setWayToMake(e.target.value)} />
            </label>
            <button type="submit">Submit Recipe</button>
        </form>
            </div>
            <div className="recipesContainer">
                {recipes.map((value,index) => {
                    return  <div key={value.id} className="recipeContainer">
                    <h1>{value.title}</h1>
                    <p>{value.ingredients}</p>
                    <p>{value.wayToMake}</p>
                    <button className="deleteButton" onClick={() => handleDelete(index)}>delete</button>
                </div>
                })}
            </div>
        </div>
    )
}

export{RecipeBook}