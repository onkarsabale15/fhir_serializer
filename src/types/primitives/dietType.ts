/**
 * 
Code	Display	Definition
vegetarian	Vegetarian	Food without meat, poultry or seafood.
dairy-free	Dairy Free	Excludes dairy products.
nut-free	Nut Free	Excludes ingredients containing nuts.
gluten-free	Gluten Free	Excludes ingredients containing gluten.
vegan	Vegan	Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.
halal	Halal	Foods that conform to Islamic law.
kosher	Kosher	Foods that conform to Jewish dietary law.
 */

enum EDietType{
    VEGETARIAN = "vegetarian",
    DAIRY_FREE = "dairy-free",
    NUT_FREE = "nut-free",
    GLUTEN_FREE = "gluten-free",
    VEGAN = "vegan",
    HALAL = "halal",
    KOSHER = "kosher"
}

type TDietType = `${EDietType}`;

export { EDietType };
export type { TDietType}