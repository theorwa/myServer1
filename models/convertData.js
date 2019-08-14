// const readXlsxFile = require('read-excel-file/node');
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    sourceFile: './models/clothes.xlsx',
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    },
    columnToKey: {
        A: 'barcode',
        B: 'image',
        C: 'category',
        D: 'size',
        E: 'color',
        F: 'description',
        G: 'price'
    }
});

clothes = result['Sheet1']

exports.display_all_items = function() {
    display_all = {}
    for (var item in clothes){
        display_all[clothes[item]['barcode']] = clothes[item]['image']
    }
    return display_all
}

exports.clothes = clothes