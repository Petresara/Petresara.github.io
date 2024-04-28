const inputElement = document.getElementById('ingredientInput');
const listElement = document.getElementById('recipeList');


const apiKey = '600b94796472475898ca881f9db73aab';

    async function searchRecipes() {
        const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${inputElement.value}`;
        let data;
        try {
            const response = await fetch(url);
            data = await response.json();
        } catch(error) {
            console.log(error);
        }
        
        listElement.innerHTML = '';
        inputElement.value = '';
        
        for (let recipe of data ) {
            const recipeItem = document.createElement('div');
            recipeItem.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" />
                <h2>Missing ingredients: ${recipe.missedIngredientCount}</h2>
            `;
            const missingIngredients = document.createElement('ul');
            /*recipe.missedIngredients.forEach(ingredient => {*/
            for (let ingredient of recipe.missedIngredients) {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient.original;
                missingIngredients.appendChild(ingredientItem);
            }/*);*/
            recipeItem.appendChild(missingIngredients);
            listElement.appendChild(recipeItem);
        }
    }
