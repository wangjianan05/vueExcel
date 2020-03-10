<!--
 * @Description: 登录页
 * @Author: wangjn
 * @Date: 2019-07-16 10:55:30
 * @LastEditTime: 2020-03-10 15:29:15
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="body">
     <table id="outTable" border="1">    
       <tbody>
         <tr>
           <td colspan="5" style="text-align:center;height:50px;font-size:18px;">
             杭州利牧贞家禽饲料经营部(普通合伙)发货通知单
           </td>
         </tr>
         <tr>
           <td width="100">
             客户名称：
           </td>
           <td  width="200">
             <el-input type="text" v-model="costomName" placeholder="请输入公司名称"></el-input>
             <span style="display:none;">{{costomName}}</span>
           </td>
           <td  width="150">
             提货日期：
           </td>
           <td  width="100">
             <el-date-picker
              v-model="foodTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            <span style="display:none;">{{foodTime}}</span>
           </td>
           <td width="100">存根联</td>
         </tr>
         <tr style="height:40px;">
           <td>序号</td>
           <td>物品名称</td>
           <td>包数/包</td>
           <td>重量/KG</td>
           <td>备注</td>
         </tr>
         <tr v-for="(item, index) in tableData" :key="index">
           <td>
             {{index+1}}
              <el-button type="danger" icon="el-icon-delete" circle @click="deleteCow(index)"></el-button>
              <el-button type="primary" icon="el-icon-plus" circle @click="add()" v-if="index===tableData.length-1"></el-button>
           </td>
           <td>
             <el-input type="text" v-model="item.label" placeholder="请输入物品名称"></el-input>
             <span style="display:none;">{{item.label}}</span>
           </td>
            <td>
             <el-input type="text" v-model="item.count"></el-input>
             <span style="display:none;">{{item.count}}</span>
           </td>
           <td>
             <el-input type="text" v-model="item.kg"></el-input>
             <span style="display:none;">{{item.kg}}</span>
           </td>
           <td>
             <el-input type="text" v-model="item.note"></el-input>
             <span style="display:none;">{{item.note}}</span>
           </td>
         </tr>
         <tr  style="height:40px;">
            <td colspan="2">总计:</td>
            <td>{{totalCount}}</td>
            <td>{{totalKg}}</td>
            <td></td>
         </tr>
         <tr>
           <td>车号：</td>
           <td>
              <el-input type="text" v-model="carNumber"></el-input>
              <span style="display:none;">{{carNumber}}</span>
           </td>
           <td>驾驶员签字：</td>
           <td colspan="2">
              <el-input type="text" v-model="driverName"></el-input>
              <span style="display:none;">{{driverName}}</span>
           </td>
         </tr>
          <tr>
           <td>指定签收客户：</td>
           <td>
              <el-input type="text" v-model="customName"></el-input>
              <span style="display:none;">{{customName}}</span>
           </td>
           <td>客户签收：</td>
           <td colspan="2">
              <el-input type="text" v-model="writeName"></el-input>
              <span style="display:none;">{{writeName}}</span>
           </td>
         </tr>
         <tr>
           <td colspan="5">
             注:请按实际收货数量签收，如有不符，请立即与本单位联系。
           </td>
         </tr>
         <tr>
           <td colspan="4">
           </td>
           <td>
              <el-input type="text" v-model="id" placeholder="请输入编号"></el-input>
              <span style="display:none;">{{id}}</span>
           </td>
         </tr>
         <tr>
           <td colspan="5" style="height:20px;"></td>
         </tr>
         <tr><td colspan="5" style="height:20px;"></td></tr>
         <tr><td colspan="5" style="height:20px;"></td></tr>
         <tr><td colspan="5" style="height:20px;"></td></tr>
          <tr>
           <td colspan="5" style="text-align:center;height:50px;font-size:18px;">
             浙江科盛饲料股份有限公司发货通知单
           </td>
         </tr>
         <tr>
           <td width="100">
             客户名称：
           </td>
           <td  width="200">
             <el-input type="text" v-model="costomName" placeholder="请输入公司名称"></el-input>
             <span style="display:none;">{{costomName}}</span>
           </td>
           <td  width="150">
             提货日期：
           </td>
           <td  width="100">
             <el-date-picker
              v-model="foodTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            <span style="display:none;">{{foodTime}}</span>
           </td>
           <td width="100">回收联</td>
         </tr>
         <tr style="height:40px;">
           <td>序号</td>
           <td>物品名称</td>
           <td>包数/包</td>
           <td>重量/KG</td>
           <td>元/包</td>
         </tr>
         <tr v-for="(item, index) in tableData" :key="index+999">
           <td>
             {{index+1}}
              <el-button type="danger" icon="el-icon-delete" circle @click="deleteCow(index)"></el-button>
              <el-button type="primary" icon="el-icon-plus" circle @click="add2()" v-if="index===tableData.length-1"></el-button>
           </td>
           <td>
             <el-input type="text" v-model="item.label" placeholder="请输入物品名称"></el-input>
             <span style="display:none;">{{item.label}}</span>
           </td>
            <td>
             <el-input type="text" v-model="item.count"></el-input>
             <span style="display:none;">{{item.count}}</span>
           </td>
           <td>
             <el-input type="text" v-model="item.kg"></el-input>
             <span style="display:none;">{{item.kg}}</span>
           </td>
           <td>
             <el-input type="text" v-model="item.pay"></el-input>
             <span style="display:none;">{{item.pay}}</span>
           </td>
         </tr>
         <tr  style="height:40px;">
            <td colspan="2">总计:</td>
            <td>{{totalCount}}</td>
            <td>{{totalKg}}</td>
            <td>{{totalPay}}</td>
         </tr>
         <tr>
           <td>车号：</td>
           <td>
              <el-input type="text" v-model="carNumber"></el-input>
              <span style="display:none;">{{carNumber}}</span>
           </td>
           <td>驾驶员签字：</td>
           <td colspan="2">
              <el-input type="text" v-model="driverName"></el-input>
              <span style="display:none;">{{driverName}}</span>
           </td>
         </tr>
          <tr>
           <td>指定签收客户：</td>
           <td>
              <el-input type="text" v-model="customName"></el-input>
              <span style="display:none;">{{customName}}</span>
           </td>
           <td>客户签收：</td>
           <td colspan="2">
              <el-input type="text" v-model="writeName"></el-input>
              <span style="display:none;">{{writeName}}</span>
           </td>
         </tr>
         <tr>
           <td colspan="5">
             注:请按实际收货数量签收，如有不符，请立即与本单位联系。
           </td>
         </tr>
         <tr>
           <td colspan="4">
           </td>
           <td>
              <el-input type="text" v-model="id" placeholder="请输入编号"></el-input>
              <span style="display:none;">{{id}}</span>
           </td>
         </tr>
         <tr>
           <td colspan="5" style="height:20px;"></td>
         </tr>
         <tr><td colspan="5" style="height:20px;"></td></tr>
         <tr><td colspan="5" style="height:20px;"></td></tr>
         <tr><td colspan="5" style="height:20px;"></td></tr>
          <tr>
           <td colspan="5" style="text-align:center;height:50px;font-size:18px;">
             浙江科盛饲料股份有限公司发货通知单
           </td>
         </tr>
         <tr>
           <td width="100">
             客户名称：
           </td>
           <td  width="200">
             <el-input type="text" v-model="costomName" placeholder="请输入公司名称"></el-input>
             <span style="display:none;">{{costomName}}</span>
           </td>
           <td  width="150">
             提货日期：
           </td>
           <td  width="100">
             <el-date-picker
              v-model="foodTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            <span style="display:none;">{{foodTime}}</span>
           </td>
           <td width="100">客户联</td>
         </tr>
         <tr style="height:40px;">
           <td>序号</td>
           <td>物品名称</td>
           <td>包数/包</td>
           <td>重量/KG</td>
           <td>元/包</td>
         </tr>
         <tr v-for="(item, index) in tableData" :key="index+9999">
           <td>
             {{index+1}}
              <el-button type="danger" icon="el-icon-delete" circle @click="deleteCow(index)"></el-button>
              <el-button type="primary" icon="el-icon-plus" circle @click="add2()" v-if="index===tableData.length-1"></el-button>
           </td>
           <td>
             <el-input type="text" v-model="item.label" placeholder="请输入物品名称"></el-input>
             <span style="display:none;">{{item.label}}</span>
           </td>
            <td>
             <el-input type="text" v-model="item.count"></el-input>
             <span style="display:none;">{{item.count}}</span>
           </td>
           <td>
             <el-input type="text" v-model="item.kg"></el-input>
             <span style="display:none;">{{item.kg}}</span>
           </td>
           <td>
             <el-input type="text" v-model="item.pay"></el-input>
             <span style="display:none;">{{item.pay}}</span>
           </td>
         </tr>
         <tr  style="height:40px;">
            <td colspan="2">总计:</td>
            <td>{{totalCount}}</td>
            <td>{{totalKg}}</td>
            <td>{{totalPay}}</td>
         </tr>
         <tr>
           <td>车号：</td>
           <td>
              <el-input type="text" v-model="carNumber"></el-input>
              <span style="display:none;">{{carNumber}}</span>
           </td>
           <td>驾驶员签字：</td>
           <td colspan="2">
              <el-input type="text" v-model="driverName"></el-input>
              <span style="display:none;">{{driverName}}</span>
           </td>
         </tr>
          <tr>
           <td>指定签收客户：</td>
           <td>
              <el-input type="text" v-model="customName"></el-input>
              <span style="display:none;">{{customName}}</span>
           </td>
           <td>客户签收：</td>
           <td colspan="2">
              <el-input type="text" v-model="writeName"></el-input>
              <span style="display:none;">{{writeName}}</span>
           </td>
         </tr>
         <tr>
           <td colspan="5">
             注:请按实际收货数量签收，如有不符，请立即与本单位联系。
           </td>
         </tr>
         <tr>
           <td colspan="4">
           </td>
           <td>
              <el-input type="text" v-model="id" placeholder="请输入编号"></el-input>
              <span style="display:none;">{{id}}</span>
           </td>
         </tr>
       </tbody>
     </table>
     <div class="btn_box">    
      <el-button @click="exportCurrent()" class="output btn" type="primary">导出</el-button>   
     </div>

  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
import {
  Table,
  Button
} from 'element-ui'
export default {
  install (V) {
    V.use(Table)
    V.use(Button)
  },
  data () {
    return {
      costomName:'',
      foodTime:'',
      carNumber:'',
      driverName:'',
      customName:'',
      writeName:'',
      id:'',
      tableData: [{
        label:'3000羔羊精料补充料',
        count:'0',
        kg:'0',
        note:'',
        pay:'0'
      },{
        label:'3001肉羊育肥前期精料补充料',
        count:'0',
        kg:'0',
        note:'',
        pay:'0'
      },{
        label:'3006母羊精料补充料',
        count:'0',
        kg:'0',
        note:'',
        pay:'0'
      },{
        label:'1031预混料',
        count:'0',
        kg:'0',
        note:'',
        pay:'0'
      },{
        label:'3002肉羊育肥后期精料补充料',
        count:'0',
        kg:'0',
        note:'',
        pay:'0'
      }],
      defaultCellStyle: {
        font: { name: "宋体", sz: 11, color: { auto: 1 } },
          border: {
            color: { auto: 1 }
          },
          alignment: {
              /// 自动换行
            wrapText: 1,
              // 居中
            horizontal: "center",
            vertical: "center",
            indent: 0
        }
      }
    }
  },

  components: {},

  computed: {
    totalCount:function(){
      let count=0;
      this.tableData.forEach((item, index)=>{
        count+=Number(item.count)
      })
      return count
    },
    totalKg:function(){
      let count=0;
      this.tableData.forEach((item, index)=>{
        count+=Number(item.kg)
      })
      return count
    },
    totalPay:function(){
      let count=0;
      this.tableData.forEach((item, index)=>{
        console.log(count)
        count+=(Number(item.pay)*Number(item.count))
      })
      return count
    },
  },

  created () {
    console.log(XLSX,window.XLSX)
  },

  mounted () {},

  methods: {
    // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
    sheet2blob() {

      
      var wb = XLSX.utils.table_to_book(document.querySelector('#outTable')) //表格id
        console.log(wb)  
      // 生成excel的配置项
      const wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
      };
      const sheetCols = [
        { wch:9} ,
        { wch:30},
        { wch:13}, 
        { wch:13},
        { wch:13}
      ];
      const sheetRows = [
        { hpx: 18 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 18 },
       { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 18 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 },
        { hpx: 14 }
        ];
      
      wb.Sheets['Sheet1']['A1'].s = { font: { sz: 14, bold: true, color: { rgb: "FFFFAA00" } }, fill: { bgColor: { indexed: 64 }, fgColor: { rgb: "FFFF00" } } };//<====设置xlsx单元格样式
      //  {
      //   "alignment": {
      //     "horizontal": "center",
      //     "vertical": "center"
      //   },
      //   "border": {
      //     "bottom": {
      //       "style": "thick",
      //       "color": {
      //         "auto": 1
      //       }
      //     }
      //   }
      // };
      wb.Sheets['Sheet1']['!cols'] = sheetCols;
      wb.Sheets['Sheet1']['!rows'] = sheetRows;
      const wbout = XLSX.write(wb, wopts, { defaultCellStyle: this.defaultCellStyle });
      const blob = new Blob([s2ab(wbout)], {type: "application/octet-stream"});
      // 字符串转ArrayBuffer
      function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i=0; i!==s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
      }
      return blob;
    },
     exportCurrent(){
       const wbBlob = this.sheet2blob()
       FileSaver.saveAs(wbBlob, 'sheet.xlsx')  //文件名
    },
    add(){
      this.tableData.push({
        label:'',
        count:'0',
        kg:'0',
        note:''
      })
    },
     add2(){
      this.tableData.push({
        label:'',
        count:'0',
        kg:'0',
        pay:'0'
      })
    },
    deleteCow(index){
      this.tableData.splice(index, 1)
    }
  }
}

</script>
<style lang='stylus' scoped>
#outTable
  width 650px
  font-size 12px
  >>>.el-input__icon
    line-height 25px
  >>>.el-input__inner
    height 25px
    font-size 12px
.btn_box
  display block
  margin:20px auto;  
  width 100px
.el-date-editor.el-input, .el-date-editor.el-input__inner
  width 150px
.el-icon-delete
  padding 2px
.el-button.is-circle  
  padding 2px
</style>


