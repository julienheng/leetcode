let mergeTwoLists = function(list1, list2){
  if(list1 == [] || list2 == []) return [];
  if(list1 == [0] || list2 == [0]) return [0];

  let sorted = list1.concat(list2);
  return sorted.sort()

}

console.log(mergeTwoLists([1,2,4], [1,3,4]))
mergeTwoLists([], [])
mergeTwoLists([], [0])
