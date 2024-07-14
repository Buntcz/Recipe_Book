import { recipesData } from "./recipesData"

function Recipe() {
    return (
        <div className="recipeContainer">
            {recipesData.map((value,index) => {
                return <h1 key={index}>{value.title}</h1>
            })}
        </div>
    )
}