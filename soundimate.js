
/** A thematic sound and animation manager object
 * @constructor
 * @param {String} theme - the name of the theme to use
 * @param {String} [sound_theme] - the name of the sound theme to use to replace theme sounds (optional)
 */
class Soundimate{
    constuctor(theme, sound_theme=0){
        //validate the theme from the list
        this.themes = themes = ['cafe', 'fluid', 'mechanical', 'minimalist', 'paper'];
        if (!(this.themes.includes(theme))){
            throw new Error("Unrecognized theme used for Soundimate.")
        }
        this.theme = theme;
        this.animation_theme = theme;
        this.sound_theme = theme;
        // if sound_theme is defined, we need a special sound theme instead
        if (sound_theme){
            if (!(this.themes.includes(sound_theme))){
                throw new Error("Unrecognized theme used for Soundimate.")
            }
            this.sound_theme = sound_theme;
        }
    }
}
