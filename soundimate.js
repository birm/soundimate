/** A thematic sound and animation manager object
 * @constructor
 * @param {String} theme - the name of the theme to use for sound effects
 */
class soundimate {
    constuctor(theme) {
        //validate the theme from the list
        this.themes = ['cafe', 'fluid', 'mechanical', 'minimalist', 'paper', 'wood'];
        this.noises = ['error', 'success', 'minor', 'major', 'soft'];
        if (!(this.themes.includes(theme))) {
            throw new Error("Unrecognized theme used for Soundimate.")
        }
        this.theme = theme;
    }

    /** play a sound in the theme
     * @param {String} noise - the noise type to play on the theme.
     */
    play(noise) {
        if (!(this.noises.includes(noise.toLowerCase()))) {
            throw new Error("Unrecognized noise type used for Soundimate.play().")
        }
        var filename = 'sounds/' + this.theme.toLowerCase() + '/' + noise.toLowerCase();
        var sound = new Audio(filename);
        sound.play();
    }
}

module.exports = soundimate;
