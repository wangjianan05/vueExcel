/*
 * @module: 工具类 - 提示语
 * @fileName: tip.js
 * @Description: 用于存放项目中所有的提示语
 * @Author: LiSuwan
 * @Date: 2019-04-01 10:57:42
 */

export default {
  /* ================= 公共模块 start ============= */
  deleteOk: '删除成功！',
  editOk: '编辑成功！',
  addOk: '添加成功！',
  relateOk: '关联成功！',
  success: '成功！',
  saveOk: '保存成功！',
  titleName: '提示',
  assignOk: '分配成功',
  unAssignOk: '已取消分配',
  operateOk: '操作成功',
  networkError: '网络错误请稍后再试！',
  noNuthority: '暂无权限，请退出重新登录！',
  LogonFailure: '登录失效，请退出重新登录',
  tableTipText: '加载中...',
  confirmDelete: '确认要删除这条信息吗？',
  createSuccess: '恭喜你创建成功！',
  searchContent: '请输入搜索条件',
  titleEdit: (name) => `编辑${name}`,
  titleAdd: (name) => `新增${name}`,
  titleAssign: '分配',
  /* ================= 公共模块 end ============= */

  /* ================= 登录注册模块 start ============= */
  userNameDefault: '英文或数字或下划线均可，20个字符以内',
  userNameTip: '请输入用户名',
  emailDefault: '请输入正确的邮箱地址',
  emailTip: '请输入正确的邮箱地址,40个字符内',
  passwordDefault: '请设置登录密码，10个字符以内',
  passwordTip: '请输入密码',
  confirmPasswordDefault: '请确认登录密码',
  confirmPasswordTip: '密码输入不相同',
  codeDefault: '请输入发送到邮箱里的验证码',
  codeTip: '验证码错误',
  /* ================= 登录注册模块 end ============= */

  /* ================= 设备管理${equipment} start ============= */
  equipmentAddMPNameTips: '支持中/英文、数字，长度限制1~50个字符',
  equipmentAddDatypeTips: '请输入数据类型，长度限制1~20个字符',
  equipmentAddUnitTips: '请输入测点单位，长度限制1~10个字符',
  equipmentAddAttrTips: '请输入测点属性，长度限制1~50个字符',
  // equipmentAddNameTips: '请输入设备名称，长度限制4~30个字符',
  equipmentAddDescTips: '请输入描述信息，文字限长100个字符',
  equipmentUsing: '当前产品已在使用中，请先删除相关的设备后再删除此产品。',
  equipmentHasExist: '测点名已存在，请重新设置！',
  equipmentTypeNameEmpty: '产品名称不能为空',
  equipmentSelectProductName: '请选择所属产品',
  equipmentNameEmpty: '设备名称不能为空！',
  equipmentSNEmpty: '设备SN不能为空！',
  // equipmentProductAccessType: '请选择产品接入类型',
  equipmentTypeNameRule: '只能包含中/英文、数字和下划线',
  equipmentTypeNameExited: '产品名称已存在',
  equipmentNameExited: '设备名称已存在',
  equipmentAssetNameLength: '长度限制1-50个字符',
  equipmentTypeNameLength: '长度限制1-30个字符',
  equipmentTypeSNLength: '长度限制1-32位',
  equipmentTypeNamePlaceholder: '支持中/英文，数字和下划线，长度限制4-30个字符',
  equipmentTypePointsEmpty: '测点不能为空',
  equipmentTypeDescLength: '长度限制200个字符',
  equipmentTypeDescExceed: '字数超出',
  equipmentTypeLocationLength: '长度限制100个字符',
  equipmentTypeDescPlaceholder: '请输入描述信息，文字限长200个字符',
  equipmentTypeAddedSuccess: '成功添加产品！',
  equipmentTypeUpdatedSuccess: '成功修改产品！',
  fileType: '上传的文件格式不正确！',
  fileSize: '文件大小不能超过10M!',
  fileUploading: '文件上传中，请耐心等待！',
  fileSuccess: '上传成功！',
  equipmentNamePlaceholder: '请输入设备名称',
  equipmentSNPlaceholder: '请输入设备SN',
  equipmentNameRepeat: '设备名称重复，请重新输入',
  equipmentLocationPlaceholder: '请输入所在位置',
  confirmDeleteEquipment: (name) => `确认删除设备 '${name}' 吗?`,
  confirmDeleteRelation: (name) => `确定要与实体 '${name}' 删除关联吗?`,
  confirmDeleteRelationContent: (name) => `确定删除后，当前实体与 '${name}' 取消关联`,
  confirmPublicDevieTitle: (name) => `您确定要将设备 '${name}' 设为公开吗？`,
  confirmPrivateDevieTitle: (name) => `您确定要将设备 '${name}' 设为私有吗？`,
  confirmPublicDevieContent: '确认后，设备及其所有数据将被设为公开并可被其他人访问。',
  confirmPrivateDevieContent: '确认后，设备及其所有数据将被设为私有，不被其他人访问。',
  searchPointName: '请输入测点名称',
  webSocketTips: '您的浏览器不支持webSocket!!!',
  noProductTips: '您还没有产品，请先创建产品',
  noDevicesCreatedTips: '您还没有添加任何设备',
  /* ================= 设备管理${equipment} end ============= */

  /* ================= 资产管理 start ============= */
  assetsNameExited: '资产名称已注册',
  assetsNameEmpty: '资产名称不能为空',
  assetsTypeEmpty: '资产类型不能为空',
  isDeleteAsset: (name) => `确认删除资产 '${name}'吗?`,
  regionalAsset: '资产下有区域存在,删除失败',
  invalidAssetID: '无效的资产ID',
  assetNamePlaceholder: '请输入资产名称',
  assetDescPlaceholder: '请输入描述信息...',
  selectAssetPlaceholder: '请选择资产',
  assetTypePlaceholder: '请输入资产类型',
  datePlaceholder: '选择日期',
  relationPlaceholder: '请选择关联类型',
  relationSelectEntityPh: '请选择实体',
  selectAllocateUser: '请选择要分配的用户！',
  selectUnAllocateUser: '请选择要取消分配的用户！',
  noAssetsCreatedTips: '您还没有创建任何资产,',
  /* ================= 资产管理 end ============= */

  /* ================= 底部配置start ============= */
  maxLensLimit: (len) => `长度限制${len}个字符`,
  bottomTitlePlaceholder: '请输入标题',
  bottomContentPlaceholder: '请输入内容...',
  addressErrorTip: '请输入准确的地理位置',
  /* ================= 底部配置start ============= */

  /* ================= 用户管理start ============= */
  userMangeUserName: '请输入用户名',
  userMangePassword: '请输入正确的密码,不支持空格',
  userMangePasswordPholder: '请输入密码',
  userMangeDisaccord: '密码不一致',
  userMangePasswordLenPholder: '请输入6-30位的密码,不支持空格',
  userMangeOldPasswordPholder: '请输入原密码',
  userMangeNewPasswordPholder: '请输入新密码',
  userMangeRepeatNewPasswordPholder: '请确认新密码',
  userMangeContactError: '联系方式格式有误',
  userMangeUserNameDefault: '请输入用户名',
  userMangeUserSelectDefault: '请选择所属部门',
  userMangeRealName: '请输入真实姓名',
  userMangeEmail: '请输入邮箱',
  userMangeContact: '请输入联系方式',
  userMangeSelectRole: '请选择角色',
  userMangeTheme: '请选择主题',
  userMangeSelectStatus: '请选择状态',
  userMangeAssignRole: '预置角色不可以删除！',
  /* ================= 用户管理end ============= */

  /* ================= 角色管理start ============= */
  roleMangeRoleNameTip: '请输入角色名称',
  roleMangeRoleNoteTip: '请输入备注信息',
  roleMangeRoleName: '长度限制1-40个字符',
  roleMangeRoleNameRule: '支持中/英文、数字',
  roleMangeRoleNote: '长度限制1-100个字符',
  roleMangeRoleAssignMenu: '请选择菜单权限',
  /* ================= 角色管理end ============= */

  /* ================= 菜单管理start ============= */
  menuManageNavNameTip: '请输入名称',
  menuManageSelectParentTip: '请选择上级菜单',
  menuManageSelectIconTip: '请选择图标',
  menuManagepermTip: '请输入标识',
  menuManageRouteTip: '请输入路由',
  menuManageSelectTenantPholder: '请选择租户',
  menuManageSelectProjectPholder: '请选择项目',
  menuManageAddPlatformPholder: '请选择平台',
  menuManageAddPlatformSearch: '请输入平台名称',
  menuManageMenuNameLimit: '长度限制1-32个字符',
  menuManageMenuRouteLimit: '请输入相对地址,限长200个字符',
  menuManageMenuRouteWholeURL: '请输入完整的URL地址,限长200个字符',
  menuManageDeleProjectTip: '确定要删除该项目吗？',
  menuManageInputTenantPholder: '请输入租户名称',
  menuManageSortPholder: '最大允许两位数',
  menuManageSortMinPholder: '请输入最小值',
  menuManageSortIntegerPholder: '只能输入整数',
  menuManagePermissionTip: '支持字母、数字',
  menuManageFirstParentNoBtn: '菜单为按钮时，上级菜单不能为一级菜单！',
  /* ================= 菜单管理end ============= */

  imgType: '只支持 gif | jpg | jpeg | png!',
  imgSize: '图片大小不能超过5M!',
  imgName: '图片名称只能是英文数字和下划线的组合!',
  selectPics: '请选择图片！',
  /* ================= 资源分配start ============= */
  allotSuccess: '分配成功!',
  unAllotSuccess: '已取消分配!',
  /* ================= 资源分配start ============= */

  /* ================= Dashboard start ============= */
  dashboardNamePlaceholder: '请输入仪表板的名称',
  /* ================= Dashboard end ============= */

  /* ================= 巡检管理 start ============= */
  patrolManageColumnName: '巡检记录详情',
  patrolManageBtnAddRecord: '新增巡检记录',
  patrolManageBtnSubmitRecord: '提交巡检记录',
  patrolManageSearchTypeTip: '请选择类型',
  patrolManageSelectNameTip: '请选择名称',
  patrolManageSearchNameTip: '请输入内容名称',
  patrolManageSelectPointNameTip: '请选择巡检点',
  patrolManageSelectContentTip: '请选择巡检内容',
  patrolManageInputPointNameTip: '请输入巡检点名称',
  patrolManageLineNameTip: '请输入线路名称',
  patrolManagePlanNameTip: '请输入计划名称',
  patrolManageSearchOrgTip: '请选择组织机构',
  patrolManageSearchNumberTip: '请输入编号',
  patrolManageContentDesTip: '请输入内容描述',
  patrolManageContentRemarkTip: '请输入备注',
  patrolManageContentErr: (num) => `不支持特殊字符,长度${num}个字符内`,
  confirmDeletePoint: (name) => `确定要删除巡检${name}吗？`,
  patrolManageStartTimeTip: '选择开始时间',
  patrolManageEndTimeTip: '选择结束时间',
  patrolManageSelectLineTip: '选择线路',
  patrolManageSelectreviewerNameTip: '请选择审核人',
  patrolManageSelectprincipalNameTip: '请选择负责人',
  patrolManageSelecStatusTip: '请选择计划状态',
  patrolManageSelectAuditStatusTip: '请选择审核状态',
  patrolManageEndTimeSmallStartTimeTip: '结束时间必须晚于开始时间',
  patrolManageStartTimeSmallCurrTimeTip: '开始时间必须晚于当前时间',
  patrolManageSelectSourceTip: '请选择来源',
  patrolManageInputNoNormalTip: '请描述异常信息',
  patrolSamePersonTip: '审核人与负责人不能为同一个人!',
  patrolSameSenderChargeTip: '派单员与负责人不能为同一个人!',
  patrolAuditOptionTip: '请输入你的意见...',
  patrolManageCheckResult: '巡查记录不能为空！',
  patrolManageIsReceive: '是否接收此单？',
  patrolManageNoModify: '提交后将不能再修改!',
  patrolManageIsSubmit: '是否提交审核?',
  patrolManageReflauseReason: '若您选择拒单请填写拒单原因',
  patrolManageReasonsRefusal: '请输入拒单的原因,限长50个字符',
  patrolManageSelectNoDataTextTip: '没有查询到巡检内容！',
  patrolManageSelectNoDataTextPointTip: '没有查询到巡检点！',
  /* ================= 巡检管理 end ============= */
  notNull: '不能为空',
}
