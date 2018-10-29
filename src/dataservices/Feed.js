
import lodash from 'lodash';

export default function() {
  let all = []
  let added = []
  let removed = []

  let load = function(items) { 
    added = lodash.filter(items, (item) => {
      return !lodash.find(all, (e) => e.id === item.id)
    })
    removed = lodash.filter(all, (currentItem) => {
      return !lodash.find(items, (i) => i.id === currentItem.id)
    })
    all = items
  }

  let getAll = () => { 
    return Array.from(all)
  }
  
  let getAdded = () => { 
    return Array.from(added) 
  }

  let getRemoved = () => { 
    return Array.from(removed) 
  }

  let isEmpty = () => {
    return lodash.isEmpty(all)
  }

  return { load, getAll, getAdded, getRemoved, isEmpty }
}