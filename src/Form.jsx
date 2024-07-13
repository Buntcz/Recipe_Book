function Form({cl,condition}) {
    return (
        <form className={condition ? cl + " active": cl} noValidate>
            <h1>Add Recipe</h1>
            <p>please fill up the fields under with the appropriate information.</p>
            <label className="title">
               Title: <input type="text" id="title" />
            </label>
            <label className="ingredients">
                Ingredients: <input type="text" id="ingredients"/>
            </label>
            <label className="wayToMake">
                Way to make : <input type="text" id="wayToMake" />
            </label>
            <button type="submit">Submit Recipe</button>
        </form>
    )
}

export {Form}