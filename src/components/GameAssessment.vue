<template>
<div class="background">
  <h1 class="h1"><span class="kidName"><!-- here goes the variable for the kid's name --></span>'s Game Playthrough Assessment</h1>
  
  <h2 class="h2">Your child's information</h2>
  <ul>
    <li class="listitem"><span class="kidDetail">Name :</span> <span class="kidName"><!-- here goes the variable for the kid's name --></span></li>
    <li class="listitem"><span class="kidDetail">Age:</span> <span class="kidyear"><!-- here goes the variable for the kid's year --></span> years <span class="kidmonth"><!-- here goes the variable for the kid's month --></span> <p>month</p></li>
  </ul>
  <h2 class="h2">Your child's assessment</h2>
  <h3 class="h3">1. Recognition skills</h3>
  <table class="table">
    <caption class="tableTitle">
      <h4 class="h4">Recognition skills: Words</h4>
      <p><span class="task">Task:</span> Classifying words into 3 categories: regular word, irregular word and none sence words</p>
    </caption>
    <tr>
      <th scope="col" class="colHeader"><span class="sr-only">Score types</span>
      </th>
      <th scope="col" class="colHeader">Regular word
      </th>
      <th scope="col" class="colHeader">Irregular word
      </th>
      <th scope="col" class="colHeader">None sence words
      </th>
    <tr>
    <tr>
      <th scope="row" class="rowHeader">% error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's Regular word error percentage --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's Irregular word error percentage --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's none sence words error percentage --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Norm
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the Regular word norm rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the Irregular word norm rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the none sence words norm rate --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Standard error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the Regular word Standard error rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the Regular word Standard error rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the Regular word Standard error rate --></span>
      </td>
    </tr>
  </table>
  <table class="table">
    <caption class="tableTitle">
      <h4 class="h4">Recognition skills: Syllables</h4>
      <p><span class="task">Task:</span> Classifying texts into 2 categories: monosyllabic words and syllables</p>
    </caption>
    <tr>
      <th scope="col" class="colHeader"><span class="sr-only">Score types</span>
      </th>
      <th scope="col" class="colHeader">Word
      </th>
      <th scope="col" class="colHeader">Syllables
      </th>
    <tr>
    <tr>
      <th scope="row" class="rowHeader">% error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's word error percentage --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's syllables error percentage --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Norm
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the word norm rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the syllables norm rate --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Standard error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the word Standard error rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the syllables Standard error rate --></span>
      </td>
    </tr>
  </table>
  <table class="table">
    <caption class="tableTitle">
      <h3 class="h3">2. Visual attention</h3>
      <p><span class="task">Task:</span> Matching two lines following their spatial orientation</p>
    </caption>
    <tr>
      <th scope="col" class="colHeader"><span class="sr-only">Score types</span>
      </th>
      <th scope="col" class="colHeader">Score
      </th>
    <tr>
    <tr>
      <th scope="row" class="rowHeader">% error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's error percentage's score --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Norm
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the norm's score --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Standard error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the Standard error's score --></span>
      </td>
    </tr>
  </table>
  <table class="table">
    <caption class="tableTitle">
      <h3 class="h3">3. Auditory comprehension</h3>
      <p><span class="task">Task:</span> Listening to a story and answering questions (if no answer, indicators)</p>
    </caption>
    <tr>
      <th scope="col" class="colHeader"><span class="sr-only">Score types</span>
      </th>
      <th scope="col" class="colHeader">Score
      </th>
    <tr>
    <tr>
      <th scope="row" class="rowHeader">% error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's error percentage's score --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Norm
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the norm's score --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Standard error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the Standard error's score --></span>
      </td>
    </tr>
  </table>
  <table class="table">
    <caption class="tableTitle">
      <h3 class="h3">4. Oral spelling</h3>
      <p><span class="task">Task:</span> Spelling heard word</p>
    </caption>
    <tr>
      <th scope="col" class="colHeader"><span class="sr-only">Score types</span>
      </th>
      <th scope="col" class="colHeader">Global
      </th>
      <th scope="col" class="colHeader">Phonetic 
      </th>
      <th scope="col" class="colHeader">Added / omitted (letter)
      </th>
      <th scope="col" class="colHeader">Total 
      </th>
    <tr>
    <tr>
      <th scope="row" class="rowHeader">Number of errors
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's Oral spelling Global number of errors --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's Oral spelling Phonetic number of errors --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's Oral spelling Added / omitted letter number of errors --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's Oral spelling Total number of errors --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Norm
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the Global norm rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the Phonetic norm rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the Added / omitted letter norm rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's Total norm rate --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Standard error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the Global Standard error rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the Phonetic Standard error rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the Added / omitted letter Standard error rate --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's Total Standard error rate --></span>
      </td>
    </tr>
  </table>
<table class="table">
    <caption class="tableTitle">
      <h3 class="h3">5. Writting</h3>
      <p><span class="task">Task:</span> Free writing about an imaginary story, landscape description</p>
    </caption>
    <tr>
      <th scope="col" class="colHeader"><span class="sr-only">Score types</span>
      </th>
      <th scope="col" class="colHeader">Global
      </th>
      <th scope="col" class="colHeader">Phonetic 
      </th>
      <th scope="col" class="colHeader">Added / omitted (letter)
      </th>
      <th scope="col" class="colHeader">Total 
      </th>
    <tr>
    <tr>
      <th scope="row" class="rowHeader">Number of errors
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's writting Global number of errors --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's writting Phonetic number of errors --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's writting Added / omitted letter number of errors --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's writting Total number of errors --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Norm
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the writting Global norm --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the writting Phonetic norm --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the writting Added / omitted letter norm --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's writting Total norm --></span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="rowHeader">Standard error
      </th>
      <td class="row"><span class="result"><!-- here goes the variable for the writting Global Standard error --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the writting Phonetic Standard error --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the writting Added / omitted letter Standard error --></span>
      </td>
      <td class="row"><span class="result"><!-- here goes the variable for the kid's writting Total Standard error --></span>
      </td>
    </tr>
  </table>
  <h3 class="h3">6. Memory span</h3>
  <ul>
    <li class="listitem"><span class="task">Task:</span> Remembering and repeating a string of digits</li>
    <li class="listitem"><span class="task">Results:</span> <span class="kidyear"><!-- here goes the variable for the kid's Memory span result (number) --></span> years <span class="kidmonth"><!-- here goes the variable for the kid's month --></span> <p>month</p></li>
  </ul>
  <h3 class="h3">General conclusion</h3>
  <p><span class="emphase">As a reminder, this game is only a test, not a diagnosis.</span> <br>
  For more precise results, see a healthcare professional.</p>
  <p>Your results suggest that:</p>
  <span class="diagnostic">
  <!-- here goes the variable for the kid's diagnostic - (one of the below)
    - Everything seems good
    - You may take a speech therapist appointment -->
  </span>
</div>
</template>

<script>
export default {
  name: 'GameAssessment'
}
</script>

<style>
.background {
 background-color: #B3DF8D;
}
.TxtBox {
  border-color: #ECECEC;
  border-width: 2px;
  border-radius: 30px;
  padding: 30px;
  background-color: #FFFFFF;
}
.ProfilePanel {
  background-color: #FFFFFF;
  opacity: 70%;
}
.link {
    color: #143250;
    cursor: pointer;
    text-decoration: underline;
}
.h1 {
  font-size: 24px;
  font-weight: bold;
  color: #3C3D40;
}
.h2 {
  font-size: 18px;
  font-weight: bold;
  color: #9D078D;
}
.h3 {
  font-size: 16px;
  font-weight: bold;
  color: #2E3AE1;
}
.listitem {

}
</style>
