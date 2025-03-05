class Node{
    constructor(val){
        this.value=val
        this.next=null
    }
}

class List{
    constructor(){
        this.head=null
    }

    print()
    {
        let curr=this.head
        while(curr){
            console.log(curr.value);
            curr=curr.next
        }
    }

    append(val){
        const node = new Node(val)

        if(!this.head)this.head=node
        else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
    }

    prepend(val){
        const node=new Node(val)
        if(!this.head)this.head=node
        else{
            node.next=this.head
            this.head=node
        }
    }

    middle(){
        let slow = this.head
        let fast = this.head

        while(fast.next && fast.next.next){
            slow=slow.next
            fast=fast.next.next
        }
        if(fast.next){
            slow=slow.next
        }
        console.log(slow.value,"ithu middle");
    }
    middleDelete(){
        let prev=this.head
        let slow = this.head
        let fast = this.head

        while(fast.next && fast.next.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        if(fast.next){
            prev=slow
            slow=slow.next
        }
        prev.next=slow.next
    }
    middle(){
        let slow = this.head
        let fast = this.head

        while(fast.next && fast.next.next){
            slow=slow.next
            fast=fast.next.next
        }
        if(fast.next){
            slow=slow.next
        }
        console.log(slow.value,"ithu middle");
    }

    remove(val){
        let prev=null
        let curr=this.head
        if(this.head.value===val)this.head=this.head.next
        else{
            while(curr){
                if(curr.value===val)prev.next=curr.next
                prev=curr
                curr=curr.next
            }
        }
    }

}


const L=new List()

L.append(5)
L.append(4)
L.append(3)
L.append(2)
L.append(1)
L.prepend(6)
L.prepend(7)
L.remove(1)
L.middle()
L.middleDelete()
L.print()