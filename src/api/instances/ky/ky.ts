import ky from 'ky'
export const userApi = ky.create({
  prefixUrl:'/api',
  timeout : 3000,
  retry :{
    limit : 2,
    statusCodes : [408, 500, 502],
    delay :()=>1000
  },
  hooks:{
    beforeRequest:[
      async ()=>{
        console.log('데이터 요청 전입니다.')
      }
    ],
    afterResponse:[
      async ()=>{
        console.log('이후 요청 입니다.')
      }
    ],
    beforeError : [
      error =>{
        console.warn('예외발생!')
        return error;
      }
    ]
  }
})