// 查找权限菜单
const sel_auth_menus_sql = `
  SELECT
    menu_id AS menuId,
    menu_parent_id AS menuParentId,
    menu_name AS menuName,
    menu_i18n_name AS menuI18nName,
    menu_order_id AS menuOrderId,
    menu_icon AS menuIcon,
    menu_type AS menuType,
    path,
    name,
    parent_name AS parentName,
    full_path AS fullPath,
    parent_path AS parentPath,
    parent_full_path AS parentFullPath,
    component AS component,
    redirect
  FROM 
    menus
`
module.exports = {
  sel_auth_menus_sql
}