let inputData = {
    username: 'burner@burner.burner',
    password: 'burner'
}

let FlashCard = {}
module.exports = {
    before: browser => {
        FlashCard = browser.page.FlashCard()
        FlashCard.navigate()
    },
    after: browser => {
        browser.end()
    },
    // https://dmutah.atlassian.net/browse/QA6B-26, https://dmutah.atlassian.net/browse/QA6B-27
    // https://dmutah.atlassian.net/browse/QA6B-28, https://dmutah.atlassian.net/browse/QA6B-29
    'Sign In': browser => {
        FlashCard
        .waitForElementVisible('@emailInput', 10000)
        //QA6B-26
        .setValue('@emailInput', inputData.username)
        .setValue('@passwordInput', inputData.password)
        .click('@loginButton')
        .waitForElementVisible('@decksIcon', 5000)
        //QA6B-27
        .click('@decksIcon')
        .waitForElementVisible('@studyButton', 5000)
        .click('@deck1')
        .waitForElementVisible('@card1', 5000)
        .waitForElementVisible('@card2', 5000)
        .click('@back')
        .waitForElementVisible('@studyButton', 5000)
        .click('@back')
        .waitForElementVisible('@decksIcon', 5000)
        //QA6B-28
        .click('@settingsIcon')
        .waitForElementVisible('@legalStuff', 5000)
        .click('@termsOfUse')
        .waitForElementVisible('@back', 5000)
        .assert.urlEquals('https://cards.devclock.com/termsofuse')
        .click('@back')
        .waitForElementVisible('@privacyPolicy', 5000)
        .click('@privacyPolicy')
        .waitForElementVisible('@back', 5000)
        .assert.urlEquals('https://cards.devclock.com/privacypolicy')
        .click('@back')
        .waitForElementVisible('@back', 5000)
        .click('@back')
        .waitForElementVisible('@decksIcon', 5000)
        //QA6B-29
        .click('@logoutIcon')
        .waitForElementVisible('@emailInput', 5000)
        .assert.urlEquals('https://cards.devclock.com/login')
    }
}