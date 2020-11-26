# DataStructure

- Reference
  - Learning JavaScript DataStructures and Algorithms
  - https://github.com/trekhleb/javascript-algorithms

---

##

1. Linked List
2. Doubly Linked List
3. Queue
4. Stack
5. Hash Table
6. Heap - max and min heap versions
7. Priority Queue
8. Trie
9. Tree
   - Binary Search Tree
   - AVL Tree
   - Red-Black Tree
   - Segment Tree - with min/max/sum range queries examples
   - Fenwick Tree (Binary Indexed Tree)
10. Graph (both directed and undirected)
11. Disjoint Set
12. Bloom Filter

---

## 1. Linked List

1. 정의
   - 각 노드는 데이터와 시퀸스의 다음 노드에 대한 참조(링크)로 구성됨
   - 이 구조를 사용해 모든 위치에서 요소를 효율적으로 삽입, 제거 할 수 있음.
   - LinkedList의 단점은 액세스 시간이 선형적이며 파이프 라인이 어려움. 랜덤 엑세스와 같은 더 빠른 액세스는 가능하지 않음. 배열은 LinkedList에 비해 캐시 위치가 더 좋음.
2. Complexities
   - **Time Complexity**
     - Access : O(n)
     - Search : O(n)
     - Insertion : O(1)
     - Deletion : O(1)
   - **Space Complexity**
     - O(n)
3. 필요 구성요소
   - **LinkedListNode**
     - **Variable**
       - value
       - next
     - **Method**
       - toString
   - **LinkedList**
     - **Variable**
       - head
       - tail
     - **Method**
       - prepend
       - append
       - delete
       - find
       - deleteTail
       - deleteHead
       - fromArray
       - toArray
       - toString
       - reverse
4. 구현

   ```javascript

   ```

## 2. Doubly Linked List

1. 정의
   - 각 노드에는 노드 시퀀스에서 이전 및 다음 노드에 대한 참조인 링크라는 두개의 필드가 있음.
   - 시작 및 종료 노드의 이전 및 다음 링크는 각각 목록의 순회를 용이하게 하기위해 일반적으로 null을 가리킴.
   - 양방향으로 목록을 순회할 수 있음.
   - 노드를 추가,제거 하려면 단일 LinkedList보다 더 많은 링크를 변경해야하나 추적할 필요가 없기 때문에 작업이 더 간단하고 더 효율적일 수 있음.
   - 순회 중 이전 노드 또는 이전 노드를 찾기 위해 목록을 순회할 필요가 없으므로 링크를 수정할 수 있음.
2. 복잡성
   - **시간 복잡성**
     - Access : O(n)
     - Search : O(n)
     - Insertion : O(1)
     - Deletion : O(n)
   - **공간 복잡성**
     - O(n)
3. 필요 구성요소
   - **DoublyLinkedListNode**
     - **Variable**
       - value
       - next
       - previous
     - **Method**
       - toString
   - **DoublyLinkedList**
     - **Variable**
       - head
       - tail
     - **Method**
       - prepend
       - append
       - delete
       - find
       - deleteTail
       - deleteHead
       - toArray
       - toString
       - reverse
4. 구현

## 3. Queue

1. 정의
   - FIFO(First-In-First-Out) 선입선출
2. 구성요소
   - **Variable**
     - linkedList
   - **Method**
     - isEmpty
     - peek
     - enqueue
     - dequeue
     - toString
3. 구현

   ```javascript
   import LinkedList from '../linked-list/LinkedList';

   class Queue {
     constructor() {}

     isEmpty() {}

     peek() {}

     enqueue(value) {}

     dequeue() {}

     toString(callback) {}
   }
   ```

## 4. Stack

1. 정의
   - LIFO(Last In, First Out)
   - push, pop 으로 추가 및 제거
2. 필요 구성요소
   - **LinkedList**
   - **Stack**
     - **Variable**
       - linkedList
     - **Method**
       - isEmpty
       - peek
       - push
       - pop
       - toArray
       - toString
3. 구현

## 5. Hash Table

1. 정의
   - 해시테이블은 해시 함수를 사용해 원하는 값을 찾을 수 있는 버킷 또는 슬롯의 배열로 인덱스를 계산함.
   - 이상적으로는 해시 함수가 각 키를 고유한 버킷에 할당하지만 대부분 해시 테이블 디자인은 해시 함수가 둘 이상의 키에 대해 동일한 인덱스를 생성하는 해시 충돌을 일으킬 수 있는 불완전한 해시 함수를 사용함
2. 필요 구성요소
   - **LinkedList**
   - **defaultHashTableSize**
   - **HashTable**
     - **Variable**
       - buckets
       - keys
     - **Method**
       - hash
       - set
       - delete
       - get
       - has
       - getKeys
3. 구현

## 6. Heap - max and min heap versions

1. 정의
   - 최소힙
   - 최대힙
2. 필요 구성요소
   - **Comparator**
     - **Variable**
       - compare
     - **Method**
       - defaultCompareFunction
       - equal
       - lessThan
       - greaterThan
       - lessThanOrEqual
       - greaterThanOrEqual
       - reverse
   - **Heap**
     - **Variable**
       - heapContainer
       - compare
     - **Method**
       - getLeftChildIndex
       - getRightChildIndex
       - getParentIndex
       - hasParent
       - hasLeftChild
       - hasRightChild
       - leftChild
       - rightChild
       - parent
       - wap
       - peek
       - poll
       - add
       - remove
       - find
       - isEmpty
       - toString
       - heapifyUp
       - heapifyDown
       - pairIsInCorrectOrder
   - **Max Heap**
     - **Method**
       - pairIsInCorrectOrder
   - **Min Heap**
     - **Method**
       - pairIsInCorrectOrder
3. 구현

## 7. Priority Queue

1. 정의
   - 각 요소에는 우선순위가 있으며 우선순위가 높은 요소가 낮은 요소보다 먼저 제공됨. 두 요소의 우선순위가 동일할 경우 대기열 순서에 따라 제공됨.
   - 힙 또는 정렬되지 않은 배열과 같은 다양한 다른 방법으로 구현할 수 있음.
2. 필수 구성요소
   - **MinHeap**
   - **Comparator**
   - **PriorityQueue**
     - **Variable**
       - priorities
       - compare
     - **Method**
       - add
       - remove
       - changePriority
       - findByValue
       - hasValue
       - comparePriority
       - compareValue
3. 구현

## 8. Trie

1. 정의
2. 필수 구성요소
3. 구현

## 9. Tree

1. 정의
2. 필수 구성요소
3. 구현

### 9-1. Binary Search Tree

1. 정의
2. 필수 구성요소
3. 구현

### 9-2. AVL Tree

1. 정의
2. 필수 구성요소
3. 구현

### 9-3. Red-Black Tree

1. 정의
2. 필수 구성요소
3. 구현

### 9-4. Segment Tree - with min/max/sum range queries examples

1. 정의
2. 필수 구성요소
3. 구현

### 9-5. Fenwick Tree (Binary Indexed Tree)

1. 정의
2. 필수 구성요소
3. 구현

## 10. Graph (both directed and undirected)

1. 정의
2. 필수 구성요소
3. 구현

## 11. Disjoint Set

1. 정의
2. 필수 구성요소
3. 구현

## 12. Bloom Filter

1. 정의
2. 필수 구성요소
3. 구현
