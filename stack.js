class Stack{
   constructor() {
    this.stack = []
   }

   pop() {
     this.stack.pop()
   }

   push(item){
    this.stack.push(item)
   }


}

console.log("Hello, I am here");

const stack = new Stack()

stack.push("1")
stack.push("2")

console.log("stack values", stack)