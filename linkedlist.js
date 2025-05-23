// class Node{
//     constructor(val){
//         this.value=val
//         this.next=null
//     }
// }

// class List{
//     constructor(){
//         this.head=null
//     }

//     print()
//     {
//         let curr=this.head
//         while(curr){
//             console.log(curr.value);
//             curr=curr.next
//         }
//     }

//     append(val){
//         const node = new Node(val)

//         if(!this.head)this.head=node
//         else{
//             let curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//     }

//     prepend(val){
//         const node=new Node(val)
//         if(!this.head)this.head=node
//         else{
//             node.next=this.head
//             this.head=node
//         }
//     }

//     middle(){
//         let slow = this.head
//         let fast = this.head

//         while(fast.next && fast.next.next){
//             slow=slow.next
//             fast=fast.next.next
//         }
//         if(fast.next){
//             slow=slow.next
//         }
//         console.log(slow.value,"ithu middle");
//     }
//     middleDelete(){
//         let prev=this.head
//         let slow = this.head
//         let fast = this.head

//         while(fast.next && fast.next.next){
//             prev=slow
//             slow=slow.next
//             fast=fast.next.next
//         }
//         if(fast.next){
//             prev=slow
//             slow=slow.next
//         }
//         prev.next=slow.next
//     }
//     middle(){
//         let slow = this.head
//         let fast = this.head

//         while(fast.next && fast.next.next){
//             slow=slow.next
//             fast=fast.next.next
//         }
//         if(fast.next){
//             slow=slow.next
//         }
//         console.log(slow.value,"ithu middle");
//     }

//     remove(val){
//         let prev=null
//         let curr=this.head
//         if(this.head.value===val)this.head=this.head.next
//         else{
//             while(curr){
//                 if(curr.value===val)prev.next=curr.next
//                 prev=curr
//                 curr=curr.next
//             }
//         }
//     }

//     deleteWithIndex(index){
//         if(index==0)this.head=this.head.next
//         else{
//             let curr=this.head
//             for(let i=0;i<index-1;i++){
//                 curr=curr.next
//             }
//             if(curr.next && curr.next.next){
//                 curr.next=curr.next.next
//             }else{
//                 curr.next=null
//             }
//         }
//     }


//     reverse(){
//         let prev = null
//         let curr =this.head
//         while(curr){
//             let next = curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }

// }


// const L=new List()

// L.append(5)
// L.append(4)
// L.append(3)
// L.append(2)
// L.append(1)
// L.prepend(6)
// L.prepend(7)
// L.remove(1)
// L.middle()
// // L.middleDelete()
// L.deleteWithIndex(3)
// L.reverse()
// L.print()



class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List{
    constructor(){
        this.head = null;
    }

    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }

    append(value){
        const node = new Node(value)

        if(!this.head){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next
            }
            curr.next = node           
        }
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }

    remove(target){
        let prev = this.head;
        let curr = this.head;

        while(curr){
            if(curr.value===target){
                prev.next=curr.next
            }
            prev=curr
            curr=curr.next
        }
    }

    reverse(){
        let prev = null;
        let curr = this.head;

        while(curr){
            let next=curr.next
            curr.next=prev
            prev =curr
            curr=next
        }
        this.head=prev
    }

    middle(){
        let slow = this.head;
        let fast = this.head;
        while(fast.next && fast.next.next){
            slow=slow.next
            fast=fast.next.next
        }
        if(fast.next){
            slow=slow.next
        }
        console.log(slow.value,"ithu midddle")
    }
    middleDelete(){
        let prev =this.head;
        let slow = this.head;
        let fast = this.head;
        while(fast.next && fast.next.next){
            prev = slow
            slow=slow.next
            fast=fast.next.next
        }
        if(fast.next){
            slow=slow.next
        }
        prev.next=slow.next
    }   
}

const L= new List()

L.append(5)
L.append(4)
L.append(3)
L.append(2)
L.append(1)
L.prepend(6)
L.prepend(7)
L.reverse()
L.middle()
L.middleDelete()
L.remove(6)
L.print()