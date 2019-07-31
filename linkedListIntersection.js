class LinkedList {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  getLength() {
    let count = 1;
    let nextEle = this.next;
    while (nextEle.next != null) {
      count++;
      nextEle = nextEle.next;
    }
    return count + 1;
  }

  getNthNode(n) {
    let list = new LinkedList(this.data, this.next);
    while (n) {
      list = list.next;
      n--;
    }
    return list;
  }
}

const linkedListIntersection = function() {
  let linkedList1 = new LinkedList(
    1,
    new LinkedList(2, new LinkedList(3, new LinkedList(4)))
  );
  let linkedList2 = new LinkedList(7, new LinkedList(6, new LinkedList(4)));

  let len1 = linkedList1.getLength();
  console.log("len1", len1);
  let len2 = linkedList2.getLength();
  console.log("len2", len2);

  if (len1 != len2) {
    let diff = len1 - len2;
    linkedList1 = linkedList1.getNthNode(diff);
    console.log("linkedList Nth node:", linkedList1.data);
    console.log("1:", linkedList1);
    console.log("2:", linkedList2);
  }

  while (linkedList1.next != null) {
    if (linkedList1.data == linkedList2.data) {
      console.log("data");
      console.log(linkedList1.data, linkedList2.data);
      return true;
    }
    linkedList1 = linkedList1.next;
    console.log(linkedList1);
    linkedList2 = linkedList2.next;
    console.log(linkedList2);
  }
  if (linkedList1.data == linkedList2.data) {
    return true;
  }
  return false;
};
