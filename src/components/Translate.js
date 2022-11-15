import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
i18n
    .use(initReactI18next)
    .init({
        resources:{
            vn:{
                translation:{
                    'TODO APP with REDUX':"Ứng dụng việc cần làm với redux",
                    'Search':'Tìm kiếm',
                    'input search text':'Nhập việc cần tìm',
                    'Filter By Status':'Lọc theo trạng thái:',
                    'Filter By Priority':"Lọc theo mực độ ưu tiên",
                    "All":'Tất cả',
                    'Completed':'Hoàn thành',
                    'To do': 'Cần làm',
                    'Please select':'Mời chọn ',
                    'High':'cao',
                    'Medium':'Trung bình',
                    'Low':'Thấp',
                    'Add':'Thêm',
                    'Name todo': 'Tên công việc',
                    'Priority point 1-10':"Điểm ưu tiên 1-10",
                    'Point':'Điểm'
                }
            }
        },
        lng:'en',
        fallbackLng:'en',
        interpolation:{
            escapeValue:false
        }
    })
    export default i18n