module.exports = {
    url: 'https://cards.devclock.com',
    elements: {
        //Login
        emailInput: 'input[type="email"]',
        passwordInput: 'input[type="password"]',
        loginButton: 'button[class="primary"]',
        deleteAccountButton: 'button[class="destructive"]',
        //Buttons
        studyButton: 'button[class="primary study"]',
        back: 'button[class="left"]',
        //Decks Page
        deck1: {
            selector: '(//label[@data-bind="text: name"])[1]',
            locateStrategy: 'xpath',
        },
        //Confirm Cards
        card1: {
            selector: '(//i[@class="fa fa-2x fa-pencil-square-o"])[1]',
            locateStrategy: 'xpath',
        },
        card2: {
            selector: '(//i[@class="fa fa-2x fa-pencil-square-o"])[2]',
            locateStrategy: 'xpath',
        },
        //Icons
        decksIcon: 'label[data-bind="text: strings.decks"]',
        subscriptionIcon: 'label[data-bind="text: strings.subscription"]',
        contactIcon: 'label[data-bind="text: strings.contact"]',
        settingsIcon: 'label[data-bind="text: strings.settings"]',
        logoutIcon: 'label[data-bind="text: strings.logout"]',
        topLabel: {
            selector: '(//label[@data-bind="text: strings.title"])',
            locateStrategy: 'xpath',
        },
        //Labels
        legalStuff: 'label[data-bind="text: strings.legalStuff"]',
        termsOfUse: 'label[data-bind="text: strings.termsOfUse"]',
        privacyPolicy: 'label[data-bind="text: strings.privacyPolicy"]'

    }
}