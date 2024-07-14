import { useState } from "react"
import { Form } from "./Form"

function RecipeBook() {
    const [formVisible, setFormVisible] = useState(false)
    const[recipes, setRecipes] = useState([{
        title: '',
        ingredients: '',
        wayToMake: ''
    }]);

    function changeVisible() {
        if(formVisible === false) {
            setFormVisible(true)
        } else if(formVisible === true) {
            setFormVisible(false)
        }
    }

    return(
        <div className="mainContainer">
            <button className="addRecipe" onClick={() => changeVisible()}>Add Recipe</button>
            <div className="formContainer">
                <Form 
                cl={"visible"}
                condition={formVisible}
                setCondition={setFormVisible}
                />
            </div>
        </div>
    )
}

export{RecipeBook}