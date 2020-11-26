# d3js

- Reference
  - https://www.tutorialsteacher.com/d3js
  - https://github.com/d3/d3/wiki

---

## 목차

1. D3.js란
   - Method Chaining
2. 환경설정
3. DOM Selection
4. DOM Manipulation
5. Function of Data
6. Event Handling
7. Animation
8. Data Binding
9. Data Loading
10. Scales
11. Axes
12. Bar Chart
13. Pie Chart
14. Line Chart
15. Map

---

## 1. D3.js란

---

## 2. 환경설정

1. D3 library Download
   - npm i d3
2. CDN의 D3 libray 포함
   ```html
   <script src="https://d3js.org/d3.v5.js"></script>
   <script src="https://d3js.org/d3.v5.min.js"></script>
   <script src="https://d3js.org/d3-selection.v1.min.js"></script>
   ```
3. Web Browser

- D3는 IE8 이하를 제외한 모든 브라우저에서 동작함.

---

## 3. DOM Selection

- D3는 HTML 문서에서 DOM 요소를 조작할 수 있으며 특정 요소, 특정 요소 그룹을 선택한 다음 다양한 D3 메서드를 사용해 해당 요소를 조작합니다.
- D3 라이브러리를 포함하게 되면 전역 객체 d3를 정의하게 됩니다.
- **d3.select(css-selector)**
  - css-selector에 해당하는 첫번째 일치 요소를 반환
    ```javascript
    d3.select('p').style('color', 'red');
    ```
- **d3.selectAll(css-selector)**
  - css-selector에 해당하는 모든 요소를 반환
    ```javascript
    d3.select('p').style('color', 'blue');
    ```

---

## 4. DOM Manipulation

- **text("content")**
  - 선택한 요소의 텍스트를 가져오거나 설정
- **append("element name")**
  - 선택한 요보 내부에서 선택한 요소 끝 바로 앞에 요소를 추가
- **insert("element name)**
  - 선택한 요소에 새 요소를 삽입
- **remove()**
  - DOM에서 지정된 요소 제거
- **html("content")**
  - 선택한 요소의 내부 HTML을 가져오거나 설정
- **attr("name","value")**
  - 선택한 요소의 속성을 가져오거나 설정
- **property("name","value")**
  - 선택한 요소의 속성을 가져오거나 설정
- **style("name","value")**
  - 선택한 요소의 스타일을 가져오거나 설정
- **classed("css class", bool)**
  - 선택한 요소의 css 클래스를 가져오거나 설정

---

## 5. Function Of Data

    ```javascript
    const data = [10, 20, 30, 40];
    const paragraph = d3.select('body')
                        .selectAll('p')
                        .data(data)
                        .text(function(d, i){
                            console.log("d: " + d);
                            console.log("i: " + i);
                            console.log("this: " + this);

                            return d;
                        })
    ```

---

## 6. Event Handling

    ```javascript
    d3.selection.on(type[, listener[, capture]])
    ```

- on 메서드는 선택한 모든 DOM 요소에 이벤트 리스너를 추가함
  - 첫번째 매개변수는 이벤트 유형
  - 두번째 매개변수는 이벤트 발생시 실행되는 콜백함수
  - 세번째 선택적 매개변수는 매개변수 캡처 플래그
    - https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration
- **selection.on()** :
- **selection.dispatch()**
- **d3.event**
- **d3.mouse(container)**
- **d3.touch()**

  ```javascript
  d3.selectAll('div')
    .on('mouseover', function () {
      d3.select(this).style('background-color', 'orange');

      // Get current event info
      console.log(d3.event);

      // Get x & y co-ordinates
      console.log(d3.mouse(this));
    })
    .on('mouseout', function () {
      d3.select(this).style('background-color', 'steelblue');
    });
  ```

---

## 7. Animation

- **selection.transition()** : 선택한 요소에 대한 transition 예약
- **transition.duration()** : duration은 각 요소의 애니메이션 기간을 밀리초 단위로 지정
- **transition.ease()** : ease는 easing function을 지정
- **transition.delay()** : 각 요소에 대한 animation delay를 밀리초단위로 지정

  ```javascript
  d3.select('#container')
    .transition()
    .duration(1000)
    .style('background-color', 'red');
  ```

  ```javascript
  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);

  const bar1 = svg
    .append('rect')
    .attr('fill', 'blue')
    .attr('x', 100)
    .attr('y', 20)
    .attr('height', 20)
    .attr('width', 10);

  const bar2 = svg
    .append('rect')
    .attr('fill', 'blue')
    .attr('x', 120)
    .attr('y', 20)
    .attr('height', 20)
    .attr('width', 10);

  update();

  function update() {
    bar1.transition().ease(d3.easeLinear).duration(2000).attr('height', 100);

    bar2
      .transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .delay(2000)
      .attr('height', 100);
  }
  ```

---

## 8. Data Binding

- 데이터를 DOM에 바인딩하고 데이터리를 기반으로 새 요소를 만듬.
- **data()** : 선택한 요소에 데이터 결합
- **enter()** : 누락된 요소에 대한 자리표시자 참조를 사용해 선택을 만듬.
- **exit()** : 노드를 제거하고 나중에 DOM에서 제거할 수 있는 이탈 선택에 추가.
- **datum()** : 조인을 계산하지 않고 선택한 요소에 데이터를 삽입.

---

## 9. Data Loading

- **d3.csv()**
- **d3.json()**
- **d3.tsv()**
- **d3.xml()**

---

## 10. Scales

- **Domain**
- **Range**

1. Continuous
   - **d3.scaleLinear()**
   - **d3.scaleIdentity()**
   - **d3.scaleTime()**
   - **d3.scaleLog()**
   - **d3.scaleSqrt()**
   - **d3.scalePow()**
2. Sequential
   - **d3.scaleSequential()**
3. Quantize
   - **d3.scaleQuantize()**
4. Quantile
   - **d3.scaleQuantile()**
5. Threshold
   - **d3.scaleThreshold()**
6. Band
   - **d3.scaleBand()**
7. Point
   - **d3.scalePoint()**
8. Ordinal
   - **d3.scaleOrdinal()**

---

## 11. Axes

- **d3.axisTop()**
- **d3.axisRight()**
- **d3.axisBottom()**
- **d3.axisLeft()**

---

## 12. Bar Chart

---

## 13. Pie Chart

---

## 14. Line Chart

---

## 15. Map

---
