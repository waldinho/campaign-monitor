import React, { PureComponent } from 'react'
import './index.css';

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
    q4: [5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4],
    q7: [{
      id: 1,
      name: 'bob',
    },
      {
      id: 2,
      name: 'sally',
    },
      {
      id: 3,
      name: 'bob',
      age: 30,
    }]
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

  // Question 4
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

  // Question 7
  combineArrays = (array, key) => {
    let arrangeByName = array.reduce((r, a) => {
      r[a.name] = [...r[a.name] || [], a];
      return r;
     }, {});
    console.log('arrangeByName: ', arrangeByName);
  };

  render() {
    const {
      q1,
      q2,
      q3,
      q4,
      q7,
    } = this.state

    return (
      <>
      <h2>Campaign Monitor Take Home - James Waller</h2>
      <p>Change values in state to test functions with different arguments.</p>

      <h3>Q1</h3>
      <p>Using the most appropriate means, implement an "isNullOrEmpty" check on the standard String type. It should be functionally equivalent without calling any "isNullOrEmpty" built in function.</p>
      <button onClick={() => { this.isNullOrEmpty(q1)}}>Run code</button>
  
      <h3>Q2</h3>
      <p>Write a function that takes a single positive integer, and returns a collection / sequence (e.g. array) of integers. The return value should contain those integers that are positive divisors of the input integer.</p>
      <button onClick={() => { this.getDivisorsCount(q2)}}>Run code</button>

      <h3>Q3</h3>
      <p>Write a function that takes three integer inputs and returns a single output. The inputs are the lengths of the sides of a triangle. The output is the area of that triangle.</p>
      <button onClick={() => { this.getAreaOfTriangle(q3[0].a, q3[0].b, q3[0].c)}}>Run code</button>

      <h3>Q4</h3>
      <p>Write a function that takes an array of integers, and returns an array of integers. The return value should contain those integers which are most common in the input array.</p>
      <button onClick={() => { this.getMostCommon(q4)}}>Run code</button>

      <h3>Q5</h3>
      <p>See SQL.txt</p>

      <h3>Q6</h3>
      <p>See SQL.txt</p>

      <h3>Q7</h3>
      <p>Write a function which combines an array of objects, grouped by a key you provide (this key will correspond to a key found in the objects. The function will index the new object with the value of those keys..</p>
      <p>Check console for new object!</p>
      <button onClick={() => { this.combineArrays(q7, 'name')}}>Run code</button>

      <h3>Q8</h3>
      <p>Unable to compete.</p>
      </>
    )
  }
}

export default App