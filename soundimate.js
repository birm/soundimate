
/** A thematic sound and animation manager object
 * @constructor
 * @param {String} theme - the name of the theme to use for sound effects
 */
class Soundimate{
    constuctor(theme){
        //validate the theme from the list
        this.themes = themes = ['cafe', 'fluid', 'mechanical', 'minimalist', 'paper', 'wood'];
        if (!(this.themes.includes(theme))){
            throw new Error("Unrecognized theme used for Soundimate.")
        }
        this.theme = theme;
        }
    }
    //sounds

    // Error
    // Success
    // Minor
    // Major
    // Soft
}
