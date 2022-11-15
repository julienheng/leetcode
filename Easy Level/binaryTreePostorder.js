let binaryTreePostorder = function(root){
  let data = [];

  let traverse = function(node){
    if(!node) return null;
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
    data.push(node.val)
  }
  traverse(root)
  return data
}
