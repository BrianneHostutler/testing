import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

fixture `Look North Inc.`// declare the fixture
    .page `https://looknorthinc.com/contact-us`;  // specify the start page


//then create a test and place your code there
test('Contact Us Submission', async t => {
    const getLocation = ClientFunction(() => document.location.href.toString());
    await t
        .typeText('#first_name', 'Brianne')
        .typeText('#last_name', 'Hostutler')
        .typeText('#email', 'brianne@looknorthinc.com')
        .typeText('#phone', '123-456-7899')
        .click('#upcoming_project-yes')
        .typeText('#project_description', 'this is the project description')
        .typeText('#role_in_project', 'web developer')
        .typeText('#project_budget', 'some number for a budget')
        // .click('#submit-modal')
        // .expect(getLocation()).contains('thanks', 'thank you page shown') 
});