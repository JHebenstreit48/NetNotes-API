# Reviewing Cards and How Scheduling Works

<hr class="dividerSection" />

### Starting a Study Session

<hr class="dividerSection" />

To review the cards in a deck, click on the deck's name, then click <span class="emphasis">Study Now</span>.

<hr class="dividerSection" />

### Reading a Card

<hr class="dividerSection" />

Anki separates a card into a <span class="emphasis">Front</span> template (the question) and a <span class="emphasis">Back</span> template (the answer), defined using field placeholders such as <span class="codeSnip">{{Field Name}}</span> in the card design editor.

By default, clicking <span class="emphasis">Show Answer</span> reveals the Back template while keeping the original question visible.

Some card creators choose to write ellipses inside square brackets, <span class="codeSnip">[...]</span>, directly within the question text itself, as a visual way to mark where the missing information belongs. This is a stylistic choice within the card's content, not a built-in Anki feature, the actual question/answer separation is always handled by the Front/Back templates, not by any special bracket syntax.

<hr class="dividerSection" />

### Rating Your Answer

<hr class="dividerSection" />

After seeing the answer, you rate how well you knew it. This rating determines how soon Anki will show you that card again:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Rating</th>
      <th class="tableCellHeader">When the Card Reappears</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Again</td>
      <td class="tableCell">Less than 1 minute (you got it wrong)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Hard</td>
      <td class="tableCell">Less than 6 minutes (correct, but difficult to recall)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Good</td>
      <td class="tableCell">Around 10 minutes (the normal, expected option)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Easy</td>
      <td class="tableCell">4 days (correct and easy to recall)</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### How Spaced Repetition Adjusts Over Time

<hr class="dividerSection" />

With SRS apps like Anki, the flashcard interval increases with the number of times you answer correctly.

As you answer correctly more and more times, the interval increases, spacing reviews further and further apart the better you know the material.

<hr class="dividerSection" />

### Card Status Colors

<hr class="dividerSection" />

Anki uses color to indicate what stage a card is in:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">New cards</span> are indicated in <span class="secondEmphasis">blue</span>.</li>
    <li><span class="emphasis">Learning cards</span> are indicated in <span class="secondEmphasis">red</span>.</li>
    <li><span class="emphasis">Review cards</span> are indicated in <span class="secondEmphasis">green</span>.</li>
  </ul>
</div>

A new card starts out blue, moves to red while it is still being learned, then moves to green once it graduates and is shown again for future review.

<hr class="dividerSection" />

### Learning Steps and Graduation

<hr class="dividerSection" />

By default, a new card must be answered correctly (Good) twice before it graduates into a review card.

For example, with Anki's default learning steps, the first correct answer schedules the card again in a short delay, and the second correct answer graduates the card into review status.

Once a card graduates, if Good is selected, the interval before it is shown again moves to <span class="emphasis">1 day</span> by default. This is known as the <span class="emphasis">graduating interval</span>.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/certifications/cisco/ccna/basics/resources/anki/introduction">← Back</a>
    <div class="xrefTitle">Resources - Anki - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/certifications/cisco/ccna/basics/resources/anki/decks-and-settings">Next →</a>
    <div class="xrefTitle">Resources - Anki - Decks & Review Settings</div>
  </div>
</div>