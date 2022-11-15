let inorderTraversal = function(root){
  let data = [];

  let traverse = function(node){
    if(!node) return;
    if(node.left) traverse(node.left);
    data.push(node.left)
    if(node.right) traverse(node.right);
  }
  traverse(root)
  return data
}
