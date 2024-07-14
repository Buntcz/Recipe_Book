import { useState } from "react"

function Form({cl,condition,setCondition}) {
   const[title,setTitle] =  useState("")
   const[ingredients,setIngredients] = useState("")
   const[wayToMake,setWayToMake] = useState("")

   function handleSubmit(event) {
     event.preventDefault()
     console.log({
        'title': title,
        'ingredients': ingredients,
        'Way to make': wayToMake
     })
     setCondition(false)
     setTitle("")
     setIngredients("")
     setWayToMake("")
   }

    return (
        <form className={condition ? cl + " active": cl} onSubmit={handleSubmit}>
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
    )
}

export {Form}