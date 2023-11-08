



// class Link {
//     constructor(data) {
//       this.head = {
//         value: data,
//         next: null,
//       };
//       this.tail = this.head;
//       this.size = 1;
//     }
  
//     appendnode(newData) {
//       let newNode = {
//         value: newData,
//         next: null,
//       };
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.size++;
//     }
  
//     unshiftall(datas) {
//       const newNode = {
//         value: datas,
//         next: null,
//       };
//       newNode.next = this.head;
//       this.head = newNode;
//       this.size++;
//     }
  
//     traversing(index) {
//       if (index < 0 || index >= this.size) {
//         return null;
//       }
//       let counterNode = this.head;
//       for (let i = 0; i < index; i++) {
//         counterNode = counterNode.next;
//       }
//       return counterNode;
//     }
  
//     insert(index, data) {
//       const newNode = {
//         value: data,
//         next: null,
//       };
//       const leaderNode = this.traversing(index - 1);
//       const nextNode = leaderNode.next;
//       leaderNode.next = newNode;
//       newNode.next = nextNode;
//       this.size++;
//     }
  
//     delete(index) {
//       const leaderNode = this.traversing(index - 1);
//       const unwantedNode = leaderNode.next;
//       const nextNode = unwantedNode.next;
//       leaderNode.next = nextNode;
//       this.size--;
//     }
//   }
  
//   const link = new Link(10);
//   link.appendnode(16);
//   link.appendnode(20);
//   link.appendnode(2);
// //   link.appendnode(40);
// //   link.appendnode(50);
// //   link.unshiftall(5);
// //   link.unshiftall(4);
 
// //   link.insert(1, 89);
// // link.delete(2);
//   const one = link.traversing();
//   console.log(link);
  
//   console.log(one);
  


// // toArray() {
// //     const result = [];
// //     let current = this.head;
// //     while (current) {
// //       result.push(current.data);
// //       current = current.next;
// //     }
// //     return result;
// //   }

// // console.log(list.toArray()); /