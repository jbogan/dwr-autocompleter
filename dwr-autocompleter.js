/**
 * This is a script.aculo.us autocompleter that interfaces with
 * the DWR AJAX library.
 */
Autocompleter.DWR = Class.create(Autocompleter.Base, {
    /**
     * Initializes the autocompleter. All args expect for dwrCall
     * work the same as the Ajax.Autocompleter (http://wiki.github.com/madrobby/scriptaculous/ajax-autocompleter)
     *
     * @dwrCall the DWR function to call (e.g. AjaxBean.getDataAsHtmlList)
     * this function must accept one argument (the "search text") and
     * return data in the format <ul><li id=""></li></ul> as
     * described in the "Server Return" section of
     * http://wiki.github.com/madrobby/scriptaculous/ajax-autocompleter
     */
    initialize: function(element, update, dwrCall, options) {
        this.baseInitialize(element, update, options);
        this.dwrCall = dwrCall;
    },

    getUpdatedChoices: function() {
        this.dwrCall(this.getToken(), this.onComplete.bind(this));
    },

    onComplete: function(responseText) {
        this.updateChoices(responseText);
    }
});