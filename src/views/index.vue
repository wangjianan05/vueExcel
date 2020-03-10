<!--
 * @Author: your name
 * @Date: 2020-03-10 10:58:36
 * @LastEditTime: 2020-03-10 13:43:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueExcel\src\views\index.vue
 -->
<!-- 2 -->
<template>
  <div>
    <el-button @click="transformF()">下载</el-button>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data () {
    return {
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

  computed: {},

  created () {},

  mounted () {
    // this.transformF()
  },

  methods: {
    // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
    sheet2blob(sheet, sheetName) {
      sheetName = sheetName || 'sheet1';
      const workbook = {
        SheetNames: [sheetName],
        Sheets: {}
      };
      workbook.Sheets[sheetName] = sheet

      window.console.log(workbook)
      // 生成excel的配置项
      const wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
      };

      const wbout = XLSX.write(workbook, wopts, { defaultCellStyle: this.defaultCellStyle });
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
    // 从json转化为sheet，xslx中没有aoaToSheet的方法，该方法摘自官方test
    sheet_from_array_of_arrays(data) {
      const ws = {};
      const range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
        for(let R = 0; R !== data.length; ++R) {
        for(let C = 0; C !== data[R].length; ++C) {
          if(range.s.r > R) range.s.r = R;
          if(range.s.c > C) range.s.c = C;
          if(range.e.r < R) range.e.r = R;
          if(range.e.c < C) range.e.c = C;
          /// 这里生成cell的时候，使用上面定义的默认样式
          const cell = {v: data[R][C], s: this.defaultCellStyle};
          if(cell.v == null) continue;
          const cell_ref = XLSX.utils.encode_cell({c:C,r:R});

          /* TEST: proper cell types and value handling */
          if(typeof cell.v === 'number') cell.t = 'n';
          else if(typeof cell.v === 'boolean') cell.t = 'b';
          else if(cell.v instanceof Date) {
          cell.t = 'n'; cell.z = XLSX.SSF._table[14];
          cell.v = this.dateNum(cell.v);
          }
          else cell.t = 's';
          ws[cell_ref] = cell;
        }
      }

      /* TEST: proper range */
      if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
      return ws;
    },
    transformF() {
      // 表头信息 要合并的字段用null代替
      let aoa = [
        ['江苏省多式联运示范工程项目2019年第二季度动态监测信息表'],
        ['序号', '市别', '示范工程项目名称', '示范工程项目运行情况'],
        [null, null, null, '联运组织',null, null, null, null, null, null, '企业总货物运输量（万吨/万标箱）', null, '枢纽场站建设投资额（万元）', '装备配备建设投资额（万元）', '信息化建设投资额（万元）', '其他'],
        [null, null, null, '联运线路（条）','联运线路运营情况', null, null, null, null, null],
        [null, null, null, null, '线路', '联运路线', '联运模式', '联运量', null, '联运周转量（万吨公里）', null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '万吨', '万标箱', null, '万吨', '万标箱', null, null, null],
      ]
      
      // json => sheet
      const sheet = this.sheet_from_array_of_arrays(aoa);
      console.log(sheet)
      // 表头合并： r: row 行；c:column 列
      const mergeTitle = [
        // 江苏省多式联运示范工程项目2019年第二季度动态监测信息表
        {
          s: {r: 0, c: 0},
          e: {r: 0, c: 15}
        },
        // 序号
        {
          s: {r: 1, c: 0},
          e: {r: 5, c: 0}
        },
        // 市别
        {
          s: {r: 1, c: 1},
          e: {r: 5, c: 1}
        },
        // 示范工程名称
        {
          s: {r: 1, c: 2},
          e: {r: 5, c: 2}
        },
        // 示范工程项目运行情况
        {
          s: {r: 1, c: 3},
          e: {r: 1, c: 15}
        },
        // 联运组织
        {
          s: {r: 2, c: 3},
          e: {r: 2, c: 9}
        },
        // 联运线路(条)
        {
          s: {r: 3, c: 3},
          e: {r: 5, c: 3}
        },
        // 联运线路运营情况
        {
          s: {r: 3, c: 4},
          e: {r: 3, c: 9}
        },
        // 线路
        {
          s: {r: 4, c: 4},
          e: {r: 5, c: 4}
        },
        // 联运路线
        {
          s: {r: 4, c: 5},
          e: {r: 5, c: 5}
        },
        // 联运模式
        {
          s: {r: 4, c: 6},
          e: {r: 5, c: 6}
        },
        // 联运量
        {
          s: {r: 4, c: 7},
          e: {r: 4, c: 8}
        },
        // 联运周转量(万吨公里)
        {
          s: {r: 4, c: 9},
          e: {r: 5, c: 9}
        },

        // 企业总货物运输量（万吨/万标箱）
        {
          s: {r: 2, c: 10},
          e: {r: 4, c: 11}
        },
        // 枢纽场站建设投资额（万元）
        {
          s: {r: 2, c: 12},
          e: {r: 5, c: 12}
        },
        //装备配备建设投资额（万元）
        {
          s: {r: 2, c: 13},
          e: {r: 5, c: 13}
        },
        // 信息化建设投资额（万元）
        {
          s: {r: 2, c: 14},
          e: {r: 5, c: 14}
        },
        // 其他
        {
          s: {r: 2, c: 15},
          e: {r: 5, c: 15}
        },]

      // sheet['!merges'] = mergeTitle.concat(mergeContent);
      // 冻结前6行和第一列，右下可以滑动
      sheet["!freeze"] = {
        xSplit: "1",
        ySplit: "6",
        topLeftCell: "B7",
        activePane: "bottomRight",
        state: "frozen",
      }
      sheet["!margins"] = { left: 1.0, right: 1.0, top: 1.0, bottom: 1.0, header: 0.5, footer: 0.5 }
      // 列宽 使用的不是像素值
      const sheetCols = [
        { wch: 8} , // 序号
        { wch: 10 }, // 市别
        { wch: 20 }, // 示范工程项目名称
        { wch: 9 }, // 联运线路(条)
        { wch: 8 }, // 线路
        { wch: 100 }, // 联运路线
        { wch: 15 }, // 联运模式
        { wch: 9 }, // 联运量-万吨
        { wch: 9 }, // 联运量-万标箱
        { wch: 12 }, // 联运周转量
        { wch: 9 }, // 企业万吨
        { wch: 9 }, // 企业 万标箱
        { wch: 10 }, // 枢纽站
        { wch: 10 }, // 装备
        { wch: 10 }, // 信息化
        { wch: 27 }, // 备注
      ];
      sheet['!cols'] = sheetCols;
      sheet['!rows'] = [
        { hidden: true },
        { hpx: 100 },
        { hpt: 12 },
        { level: 1 },
        { level: 2 },
        { level: 3 },
        { level: 4 },
        null,null,null,null,null,
        null,null,null,null,null,
        null,null,null,null,null,
        null,null,null,null,null,
      ];
      // sheet => bolb
      const wbBlob = this.sheet2blob(sheet, '1')
      console.log(wbBlob)
      // 保存下载
      FileSaver.saveAs(wbBlob, 'd.xlsx')
    },
  }
}

</script>
<style lang='scss' scoped>
</style>