// 查找权限菜单
const sel_auth_menus_sql = `
  SELECT
    menu_id AS menuId,
    menu_parent_id AS menuParentId,
    menu_name AS menuName,
    is_sub_menu AS isSubMenu,
    is_detail_menu AS isDetailMenu,
    name,
    component_name AS componentName,
    component_parent_name AS componentParentName,
    path,
    full_path AS fullPath,
    redirect
  FROM 
    menus
`
module.exports = {
  sel_auth_menus_sql
}