# Iconic Movie Quotes: Mean Girls Quiz

With the Mean Girls movie debuting in cinemas in 2004, it became one of most quoted films of all time! However, with the incredible movie script delivering so many fan-favourite quotes, the aim of the quiz is to see if fans can guess who said which quote correctly.

The quiz is built with ten questions, with each question showing four answers, where only one answer is correct. The quiz aims to test the fan’s knowledge of the film, while also reminding them some great quotes that made the film what it is today.

![mean-girls-quiz-lip-print-mockup](https://user-images.githubusercontent.com/81588887/128765473-4338f841-55a6-402d-a766-1d1d518e82de.jpg)

# Features

## Existing Features
* The Mean Girls Logo
  * The Mean Girls logo was included in this quiz, so users who come across it, instantly know what the content would be related to.

![mean-girls-logo-png-v3](https://user-images.githubusercontent.com/81588887/128765641-0bcf52d3-e21e-49ee-b724-f3500ec38279.png)

* The Mean Girls Makeup Photo
  * This image does three jobs for the visual appearance of the quiz. Firstly, it reminds users who the main characters were for the film, which can help put them in the right frame of mind, when recalling who said which quote correctly. 
  * Secondly, the image depicts four girls who have makeup on and three of them are applying makeup to “Cady” (the girl in the centre). This fed in well with the chosen background image, which is an animated collection of lip print impressions in various shades. Which was chosen to mimic the lip print impressions from the girls in the photo.
  * Finally, the image helps set the colour palette for the quiz, to keep the quiz looking well put-together and consistent.

![mean-girls-makeup](https://user-images.githubusercontent.com/81588887/128765799-42b2ddac-fea1-46b4-a8da-d2fbc8815f15.png)

* Background Image
  * As mentioned previously, this image was chosen to align well with the theme of makeup and the colours within the background image are a match for the colours within the group photo.
  * Additionally, the background image has been resized to accommodate various screen sizes, so that the scale of the screen’s device does not distort or distract the user from playing the quiz.
  * A 50% transparency filter was applied to the background image so that it wasn't distracting to the user's game play.

![lip-print-colour-1440x1080](https://user-images.githubusercontent.com/81588887/128766140-78667f96-d6ee-4d84-b388-042b9605769c.png)

* Start Game: “Begin Quiz”
  * When the user first loads the quiz, they will see an introduction title, “Can you guess who said which quote?” and a “Begin Quiz” button.
  * The introduction title is there to provide context to the user on what is expected from them. I.e., The quiz is a compilation of quotes, and the user needs to guess which character said which quote.
  * The “Begin Quiz” button acts as call-to-action button, prompting the user to click on the button in order to start the quiz.
  * The quiz was built in this way, so that the user can decide if they want to participate in the quiz before being launched into it. From a user research study that I conducted, 80% of participants wanted to be given a choice to start the quiz, as they felt leading with question one came across a little intense, as they felt they were not mentally ready to begin. 
  * Even though there is no timer appended to the quiz, this seemed to be the preference for the users, hence the structure of the quiz.

![image](https://user-images.githubusercontent.com/81588887/128766618-a6a74290-4a7a-4d66-ba85-6d840b3d68aa.png)

* In-Game Play
  * Once the user has clicked the “Begin Quiz” button, a new frame appears, where the user is asked who said a specific quote and a list of four potential answers, where only one is correct.
  * When the user hovers over a particular answer on desktop or where a mouse is connected to a device, the button cell changes from a neutral state (white button, purple border and text) to the hovered state (purple button and white text).
  * If the option they select is correct, the button will change from the hovered state to the correct state (green button and border with purple text). Additionally, the score will increase by one and it will be noted in the middle of the frame. As there are a maximum of ten questions, the score will be out of ten.
  * *(The first three images represent the above three points)*
  * If the option they chose was incorrect, the hovered state cell will turn to the wrong state (red button and border with white text) and their score will not increase. Moreover, the user will receive an alert stating the option they chose was incorrect and the correct answer is highlighted in green.
  * *(The last two images represent the last point)*

![image](https://user-images.githubusercontent.com/81588887/128768081-566d7ea1-c7b0-4b97-b547-f7304d0d12bd.png)
![image](https://user-images.githubusercontent.com/81588887/128768426-bdec0018-7f5a-4bf3-8f24-2e142eb2af2e.png)

* The “Next” Button
  * The “Next” button allows the user to progress throughout the game. They can only do this once they have clicked on an answer button, whether that’s correct or incorrect.
  * If the user has not chosen an answer, the “Next” button will not appear.

* In-Game Alerts
  * As the user progresses through the quiz, they will experience at least one alert.
  * If they choose an incorrect answer, an alert will flag telling them the answer they chose is wrong and the correct answer is highlighted in green.
  * If they choose the correct answer, no alerts will be shown. This was done to minimise the disruption to the game. Additionally, if the user taking part in the quiz is a Mean Girls movie fan, it’s likely they will get quite a few correct. Therefore, this was done to encourage a positive user experience.
  * Furthermore, when the user has completed the game, a final alert will pop up with a message either congratulating the user on their score or encouraging them to try again or watch the film to improve their movie quotes knowledge.

![image](https://user-images.githubusercontent.com/81588887/128769124-d11d2bcf-8374-44c8-a339-4c4ea7b94ec7.png)
![image](https://user-images.githubusercontent.com/81588887/128769212-67d5fcc8-b58d-4421-a1e1-2f1660df5302.png)

* The “Restart Quiz” Button
  * This button appears when the user has come to end of the game. It will bring the user back to the first question.
  * It’s an opportunity for users to try the quiz again to improve their previous score or pass over to a friend/family/household member to see if they can get a higher score.

![image](https://user-images.githubusercontent.com/81588887/128769408-b2a20a63-db14-4210-a769-750664e5c96b.png)

## Features Left to Implement
* Soon, it would be great to add more questions and use a shuffle feature. Where the quiz will randomly choose 10 questions from the bank of questions, so users can’t memorise the answers so well for a high score.

# Testing

This quiz was tested on the following devices and browsers:
* Mobile devices
    * iPhone x5
    * Motorola x2
    * Google Pixel x1
* Browsers
    * Google Chrome
    * Mozilla Firefox
    * Safari
    * Microsoft Edge

Quiz works perfectly across all devices and browsers, except for iPhone, where the known bugs are listed shortly.

## Validator Testing
* HTML5
    * No errors were returned when passing through the official W3C validator
* CSS3
    * No errors were found when passing through the official (Jigsaw) validator
* JavaScript
    * No errors were found when passing through the official Jshint validator
    * The following metrics were returned:
    * There are 12 functions in this file.
    * Function with the largest signature takes 2 arguments, while the median is 1.
    * Largest function has 17 statements in it, while the median is 4.
    * The most complex function has a cyclomatic complexity value of 4 while the median is 1.5.

## Known Bugs
* On iOS devices, the user can repeatedly click on the same correct answer for a higher score, despite not completing the full quiz or initially getting the answer wrong. After research and guidance from tutor support, this bug seems to be isolated to iOS devices. The ‘disabled’ syntax appears to work for non-iOS devices and browsers.
* On iOS devices, the text colour of the answer buttons is different to non-iOS devices and browsers. For example, on non-iOS devices and browsers, the correct answer is in dark purple text and the wrong answer is in white text. However, on iOS devices, the correct answer, if chosen correctly first, is in white text and the wrong answers are in dark purple text. Although, if the user selects the wrong answer first, the wrong answer chosen is in white text, and the remaining answer buttons are in dark purple text.
* See below an example of a user clicking on the wrong answer on two different software mobile devices (iPhone and Motorola):

<img width="654" alt="ios-versus-non-ios" src="https://user-images.githubusercontent.com/81588887/128928812-bdca56b2-a8e7-475c-8a6c-ee4eeb4bf98e.png">

## User Stories
* Visitor A (A Mean Girls movie fan)
    * They wanted a quiz that tested their knowledge of the film’s iconic quotes. With this user receiving full marks, helped validate that they truly know the film inside and out.

![IMG_6C6703EA367E-1](https://user-images.githubusercontent.com/81588887/128929874-01f15307-3bb6-4ca3-b5db-e68e7591552e.jpeg)

* Visitor B (They have watched the film, but not familiar with the iconic quotes)
    * They found the quiz quite challenging, as they had watched the film in the past, but more for the storyline than remembering who said what. This led to the user receiving a mid-range score. However, the prompt encourages them to try again so they are more familiar with the quotes and the quiz becomes more fun for them to enjoy on the second round.

![IMG_73E2E379570E-1](https://user-images.githubusercontent.com/81588887/128930072-b7659145-d1ce-482e-b673-22a3272c6b9d.jpeg)

* Visitor C (They have never watched the film)
    * They also found the quiz quite challenging, as they had no context of the film, but found the quiz easy to navigate through and learnt some iconic quotes along the way, even if they don’t remember who said the quote. This quiz encouraged them to watch the film, which they happened to enjoy.

![IMG_56F507AE215F-1](https://user-images.githubusercontent.com/81588887/128930224-9dd16d24-90bc-4353-8470-7f3c0e48ce84.jpeg)

## Deployment
* The website was deployed to GitHub. The steps to deploy are as follows:
* In the GitHub repository, navigate to the Settings tab
* Scroll down to GitHub pages and click "Check it out here!"
* Under "Source" ensure you select "main"
* Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here -  [Mean Girls Quiz](https://leannecodes.github.io/mean-girls-quiz/)

# Design
* Colour Scheme
  * The colour choices for the quiz were in line with the Mean Girls movie theme of purples and pinks and the group photo of the 4 main cast members.
* Typography
  * There were two main Google fonts used for the quiz, “Indie Flower” for the cursive text and “Lato”.
  * “Indie Flower” was chosen due to an integral prop in the Mean Girls movie, which was the “burn book”. The burn book included unkind messages the mean girls would write about other people. Given they would write these messages by hand, it was important for the quiz to replicate that style.

![burn-book](https://user-images.githubusercontent.com/81588887/128934777-692b009f-8e77-4556-8c01-9b8e7222972f.jpeg)

  * The “Lato” font was chosen to add some balance to the style of the quiz, so the user playing could separate between what was an instruction, e.g., “Can you guess who said which quote?” and what needed to be answered in the “Indie Flower” font.
* Background Image
  * The background image was sourced from Shutterstock and was chosen due to its complimentary colours to the quiz.

# Technologies Used
* HTML5
* CSS3
* JavaScript

# Credits
* Content
  * Quiz questions came from the Mean Girls movie
  * Answers are based on characters from the Mean Girls movie
  * All other written content was written by the developer
  * Tab icon was created using favicon.io, converting an image into an icon
* Media
  * The Mean Girls logo came from Google Images (Logos Discovery Engine)
  * The Mean Girls group photo came from Google Images (Fanpop)
  * Background image came from Shutterstock
* Code
  * YouTube tutorials on structuring the quiz
  * StackOverflow for disabling the buttons and the event listener code
* Acknowledgements
  * My Mentor Rahul for his ongoing support and feedback
  * The Code Institute's Tutor Support
  * The Slack community
