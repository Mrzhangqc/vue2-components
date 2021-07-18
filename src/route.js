import Chart from './pages/chart'
import Table from './pages/table'
import Excel from './pages/excel'

const route = [
  { path: '/', redirect: '/chartLine'},
  { path: '/chartLine', component: Chart },
  { path: '/table', component: Table },
  { path: '/excel', component: Excel },
]
export default route;