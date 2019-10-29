import React, { PureComponent } from 'react'

class App extends PureComponent {

  state = {
    // Feel free to change values to test
    q1: null,
    q2: 60,
    q3: [{
      a: 5,
      b: 6,
      c: 7,
    }],
    q4: [5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4]
  }

  // Question 1
  isNullOrEmpty = (input) => {
    !input ? alert('Falsy value') : alert('Truthy value')  
  }

  // Question 2
  getDivisorsCount = (n) => {
    if (n < 0) {
      alert('Please use a positive number')
    } else {
      const arr = [];
      for (var i = 0; i <= n; i++) { if (n%i === 0) arr.push(i); } 
      alert((arr.length === 0) ? n + ' is prime' : arr)
    }
  }

  // Question 3
  getAreaOfTriangle = (side1, side2, side3) => {
    if (side1 < 0 || side2 < 0 || side3 < 0) {
      alert('Please use all positive numbers')
    } else if (side1 + side2 <= side3 || side1 + side2 <= side3 || side2 + side2 <= side3) {
      alert('Please use a valid triangle')
    } else {
    const s = (side1 + side2 + side3)/2;
    const area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    alert('Area of the triangle is: ' + area);
    }
  }

  getMostCommon = (array) => {
    let arr1 = array
    let counts = arr1.reduce((a, b) => {
      a[b] = (a[b] || 0) + 1;
      return a;
    }, {});
    let maxCount = Math.max(...Object.values(counts));
    let mostCommon = Object.keys(counts).filter(c => counts[c] === maxCount);
    alert(mostCommon);
  }

  render() {
    const {
      q1,
      q2,
      q3,
      q4,
    } = this.state

    return (
      <>
      <h3>Q1</h3>
      <button onClick={() => { this.isNullOrEmpty(q1)}}>Run code</button>

      <h3>Q2</h3>
      <button onClick={() => { this.getDivisorsCount(q2)}}>Run code</button>

      <h3>Q3</h3>
      <button onClick={() => { this.getAreaOfTriangle(q3[0].a, q3[0].b, q3[0].c)}}>Run code</button>

      <h3>Q4</h3>
      <button onClick={() => { this.getMostCommon(q4)}}>Run code</button>
      </>
    )
  }
}

export default App