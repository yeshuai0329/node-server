/**
 * @description 菜单数组转化树状结构
 * @param {*} authMenuArr 刚从数据库拉出来的菜单数组
 */
const authMenuToTree = (authMenuArr, menuParentId) => {
  const treeData = []
  authMenuArr.forEach(item => {
    if (item.menuParentId === menuParentId) {
      const children = authMenuToTree(authMenuArr, item.menuId)
      if (children.length) {
        item.children = children
      }
      treeData.push(item)
    }
  })
  return treeData
} 

module.exports={
  authMenuToTree
}