let binaryTreePreorder = function(root){
  let data = [];

  const traverse = function(node){
    if(!node) return;
    data.push(node.val)
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
  }
  traverse(root)
  return data
}
