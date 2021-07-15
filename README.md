# Alchemy Dev 101 Template

## Making a plan!
## STATE
* Show 3 pokemon 10 times.
* Pokemon displayed cannot repeat in one turn.
* Pick one pokemon each time.


## DATA
* A list of pokemon displaying only the image.
* On results page, pull information saved to local storage and go through each item to list the image that was shown, how many times it was captured(selected), and how many times the viewer viewed the image.

## EVENTS
* Submit button to select preferred pokemon, update preferred via getPokedex function.
* Submit button also increments total plays to 10.
* Generate new pokemon after clicked, via renderPokemon function.

## FUNCTIONS
* RenderPokemon to create random draws that are nonduplicating per draw, matching the random number to the pokemon's id.
* setPokedex to store the information on local storage.
* getPokedex to remove the stored information from local storage.
* encounterPokemon to create an object for our results page and upload to local storage.
* capturePokemon to increment the preferred pokemon at each button click.

### HTML
* 3 label elements to hold both the input and image tags within.
* label elements wrapped in a div for semantic html.
* div with a button added for selection submission.
* results page section tag to hold a div tag containing an image and 3 p tags for the name of the pokemon, encounter, and capture.


