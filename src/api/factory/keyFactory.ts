import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory';

/** 키 팩토리 선언
 *  네임스페이스는 별도의 변수로 createQueryKeys 헬퍼함수로 생성
 *  그 외에 키추가는 객체로 등록
 */
const eventsKeys = createQueryKeys('user',{
  events : ()=>({queryKey : ['events']}),
  settings : ()=>({queryKey : ['settings']}),
})

export const queryKeys = mergeQueryKeys(eventsKeys);